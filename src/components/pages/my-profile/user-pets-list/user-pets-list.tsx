"use client"
import { Icon, Image, Loader, Text, Touchable } from '@/components'
import { CSSProperties, FC, useEffect, useMemo, useState } from 'react'
import styles from "./user-pets-list.module.css"
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useAuth } from '@/store/auth/useAuth'
import { age, colors } from '@/lib'
import { useRouter } from 'next/navigation'
import { usePet } from '@/store/actors/usePet'

type UserPetsListProps = {
    classes?: string
}
const separator: CSSProperties = {
    borderBottomStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: colors.blue
}
export const UserPetsList: FC<UserPetsListProps> = (props) => {

    const { classes } = props
    const [pets, setPets] = useState<any>([])
    const { user } = useAuth()
    const { setActionPet } = usePet()
    const supabase = createClientComponentClient()
    const router = useRouter()

    useEffect(() => {
        const fetchPets = async () => {
            let { data: pet, error } = await supabase.from('pet').select('*').eq("owner_id", user?.id)
            setPets(pet)       
        }
        fetchPets()
    }, [])

    const addNewPet = () => router.push("/my-profile/new-pet")

    const petsList = useMemo(() => {
        return pets?.map((pet: any, index:number) => {

            const hasPhoto = pet?.profile_image_url != null
            const isLast = index === pets?.length - 1

            const goToPetProfile = () => {
                setActionPet(pet)
                router.push(`my-profile/pet/${pet?.id}`)
            }

            return (
                <Touchable classes={styles.petRow} style={!isLast ? separator : undefined} onClick={goToPetProfile}>
                    <Text text={String(index + 1)} classes={styles.petNumber} colorClass='COLOR_BLUE'/>
                    {hasPhoto ? <Image src={pet.profile_image_url} classes={styles.petPhoto} alt={pet?.name}/> :
                        <Icon classes={styles.iconContainer} icon="petHolder"/>
                    }
                    <Text text={pet?.name} classes={styles.petNumber} colorClass='COLOR_BLUE'/>
                    <Text text={"Edad: "} classes={styles.petNumber} colorClass='COLOR_HARD_GREY' children={<Text text={age(new Date(pet?.date_birth))} classes={styles.petNumber} colorClass='COLOR_HARD_GREY'/>}/>
                </Touchable>
            )
        } )
    }, [pets?.length])



    return (
        <section className={`${styles.main} ${classes}`}>
            <Text text="Mascotas" classes={styles.title} colorClass='COLOR_BLUE'/>
            <div style={{marginTop: 20, width: "100%"}}>
                {petsList}
            </div>
            <Touchable classes={styles.addPetButton} onClick={addNewPet}>
              <Text classes={styles.addPetButtonText} text='Agregar mascota' colorClass='COLOR_WHITE'/>
            </Touchable>
        </section>
        
    )
}
