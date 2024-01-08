"use client"
import React from 'react'
import { Text } from '@/components'
import styles from "./pet-main-info.module.css"
import { age, longDateFormat } from '@/lib'
import { usePet } from '@/store/actors/usePet'

export const PetMainInfo = () => {

    const { actionPet } = usePet()

    return (
        <div className={styles.main}>
            <div className={`${styles.rowOne} ${styles.infoRow}`}>
                <Text text='Nombre:' classes={styles.label} colorClass='COLOR_BLUE'/>
                <Text text={actionPet?.name} classes={styles.value} colorClass='COLOR_HARD_GREY'/>
            </div>
            <div className={`${styles.rowTwo} ${styles.infoRow}`}>
                <Text text='Edad:' classes={styles.label} colorClass='COLOR_BLUE'/>
                <Text text={age(new Date(actionPet?.date_birth))} classes={styles.value} colorClass='COLOR_HARD_GREY'/>
            </div>
        </div>
        
    )
}
