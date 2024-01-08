"use client"
import { Icon, Image, Loader } from '@/components'
import React from 'react'
import styles from "./pet-profile-image.module.css"
import { usePet } from '@/store/actors/usePet'

export const PetProfileImage = () => {

    const { actionPet } = usePet()
    
    const hasPhotoURL = actionPet?.profile_image_url != null
    const photoUrl = actionPet?.profile_image_url

    return (
        <div className={styles.main}>
            {hasPhotoURL ? 
                <Image src={photoUrl} alt={actionPet?.name} classes={styles?.photo} /> :
                <Icon icon="petHolder" classes={styles.icon} width={100} height={100} containerStyle={{width: 100, height: 100}}/>
            }
        </div>
    )
}
