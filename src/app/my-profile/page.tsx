'use client'
import { Input, Text } from '@/components'
import { UserProdileImage } from '@/components/index'
import { useAuth } from '@/store/auth/useAuth'
import { useEffect } from 'react'
import styles from "./my-profile.module.css"



export default function UserProfile() {
    
    const { user, isLogged } = useAuth()

    return (
        <section className={styles.main}>
            <Text text='Perfil' colorClass='COLOR_BLUE' classes={styles.title}/>
            <UserProdileImage/>
            <Text text={user?.user_metadata?.username} colorClass='COLOR_BLUE'/>
        </section>
    )
}