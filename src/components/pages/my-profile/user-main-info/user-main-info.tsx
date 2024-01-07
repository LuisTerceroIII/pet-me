"use client"
import { Icon, Image, Loader, Text } from '@/components'
import { useAuth } from '@/store/auth/useAuth'
import React, { ChangeEvent, useState } from 'react'
import styles from "./user-main-info.module.css"
import { PetitionState } from '@/types'
import { longDateFormat } from '@/lib'

export const UserMainInfo = () => {

    const { user } = useAuth()

    return (
        <div className={styles.main}>
            <div className={`${styles.rowOne} ${styles.infoRow}`}>
                <Text text='Nombre: ' classes={styles.label}/>
                <Text text={user?.user_metadata?.name || user?.user_metadata?.username} classes={styles.label}/>
            </div>
            <div className={`${styles.rowTwo} ${styles.infoRow}`}>
                <Text text='Nombre: ' classes={styles.label}/>
                <Text text={longDateFormat(new Date(user?.created_at))} classes={styles.label}/>
            </div>
        </div>
        
    )
}
