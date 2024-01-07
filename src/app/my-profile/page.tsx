'use client'
import { Text, UserMainInfo } from '@/components'
import { UserProfileImage } from '@/components/index'
import { useAuth } from '@/store/auth/useAuth'
import styles from "./my-profile.module.css"



export default function UserProfile() {
    
    const { user } = useAuth()

    return (
        <section className={styles.main}>
            <Text text='Perfil' colorClass='COLOR_BLUE' classes={styles.title}/>
            <div className={styles.userInfoContainer}>
                <UserProfileImage/>
                <UserMainInfo/>
            </div>
        </section>
    )
}