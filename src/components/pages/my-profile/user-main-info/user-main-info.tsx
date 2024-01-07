"use client"
import React from 'react'
import { Text } from '@/components'
import { useAuth } from '@/store/auth/useAuth'
import styles from "./user-main-info.module.css"
import { longDateFormat } from '@/lib'

export const UserMainInfo = () => {

    const { user } = useAuth()

    return (
        <div className={styles.main}>
            <div className={`${styles.rowOne} ${styles.infoRow}`}>
                <Text text='Nombre:' classes={styles.label} colorClass='COLOR_BLUE'/>
                <Text text={user?.user_metadata?.name || user?.user_metadata?.username} classes={styles.value} colorClass='COLOR_HARD_GREY'/>
            </div>
            <div className={`${styles.rowTwo} ${styles.infoRow}`}>
                <Text text='Miembro desde:' classes={styles.label} colorClass='COLOR_BLUE'/>
                <Text text={longDateFormat(new Date(user?.created_at))} classes={styles.value} colorClass='COLOR_HARD_GREY'/>
            </div>
        </div>
        
    )
}
