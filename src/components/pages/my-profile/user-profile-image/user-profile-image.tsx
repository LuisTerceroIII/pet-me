"use client"
import { Icon, Image, Loader } from '@/components'
import { useAuth } from '@/store/auth/useAuth'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import React, { ChangeEvent, useState } from 'react'
import styles from "./user-profile-image.module.css"
import { PetitionState } from '@/types'

export const UserProfileImage = () => {

    const { setUser, petitionState, setPetitionState } = useAuth()
    const { user } = useAuth(state => ({user: state.user})) 
    const [photo, setPhoto] = useState("")
    
    const hasPhotoURL = user?.user_metadata?.profile_image_url != null || photo?.length > 0
    const photoUrl = photo || user?.user_metadata?.profile_image_url

    const supabase = createClientComponentClient()

    const updateUserPhoto = async (event: ChangeEvent<HTMLInputElement>) => {
        try {
            const file = event?.target?.files?.[0]
            if(file) {
                const uploadedTime = new Date().getTime()
                const photoPath = `${user?.id}/profile/${uploadedTime}_${user?.user_metadata?.username}_profile`
                setPetitionState(PetitionState.LOADING)
                //upload new photo
                const { data: uploadPhotoData , error:uploadPhotoError } = await supabase.storage.from('user').upload(photoPath, file)
                if (uploadPhotoError) {console.log(uploadPhotoError); throw new Error(JSON.stringify(uploadPhotoError))}
                else {
                    //delete old photo
                    if(hasPhotoURL) {
                        const oldPhotoPath = user?.user_metadata?.profile_image_url?.substring(user?.user_metadata?.profile_image_url?.indexOf(user?.id))
                        const { data: deleteOldPhotoData , error:deleteOldPhotoError } = await supabase.storage.from('user').remove([oldPhotoPath])
                        if(deleteOldPhotoError) {console.log(deleteOldPhotoError);throw new Error(JSON.stringify(deleteOldPhotoError))}
                    }
                    //get new photo url
                    const { data: publicUrl } = await supabase.storage.from('user').getPublicUrl(photoPath)

                    //update user photo url
                    const { data: dataUpdateProfileData , error:updateUserPhotoError } = await supabase.auth.updateUser({
                        data: { profile_image_url: publicUrl?.publicUrl }
                    })
                    
                    if(updateUserPhotoError) throw new Error(JSON.stringify(updateUserPhotoError))
                    else {
                        setUser(dataUpdateProfileData.user)
                        setPhoto(publicUrl?.publicUrl)
                        setPetitionState(PetitionState.IDLE)
                    }
                }
            }
        } catch (e) {
            console.log("error", e)
        }
    }

    return (
        <>
            <input id="profile-photo" name="profile-photo" type="file" onChange={updateUserPhoto} hidden/>
            <label className={styles.main} htmlFor="profile-photo">
                {(hasPhotoURL && petitionState !== PetitionState.LOADING) ? 
                    <Image src={photoUrl} alt={user?.user_metadata?.name} classes={styles?.photo} key={photo} /> :
                    petitionState === PetitionState.LOADING ? <Loader /> : <Icon icon="userHolder" classes={styles.icon} width={100} height={100}/>
                }
            </label>
        </>
        
    )
}
