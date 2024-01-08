'use client'
import { PetProfileImage, PetMainInfo } from '@/components/index'
import styles from "./page.module.css"

export default function PetProfile() {

    return (
        <section className={styles.main}>
            <div className={styles.basicInfoContainer}>
                <PetProfileImage/>
                <PetMainInfo/>
            </div>
        </section>
    )
}