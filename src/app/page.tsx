
"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { Text } from '@/components'
import { useAuth } from '@/store/auth/useAuth'


export default function Home() {

    const user = useAuth((state) => state.user)

    return (
      <main className={styles.main}>
        <Text text={"PEEET ME"} preset='headerXL'/>
        {JSON.stringify(user)}
      </main>
    )
}
