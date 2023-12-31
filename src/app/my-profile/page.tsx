'use client'
import { UserMainInfo, UserPetsList } from '@/components'
import { UserProfileImage } from '@/components/index'
import styles from "./my-profile.module.css"

export default function UserProfile() {

    return (
        <section className={styles.main}>
            <div className={styles.userInfoContainer}>
                <UserProfileImage/>
                <UserMainInfo/>
            </div>
            <UserPetsList/>
        </section>
    )
}