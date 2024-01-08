"use client"
import { Icon } from '@/components'
import React from 'react'
import styles from "./user-badge.module.css"
import Link from 'next/link'
import { useAuth } from '@/store/auth/useAuth'
import { useRouter } from 'next/navigation'

export const UserBadge = () => {

    const { isLogged } = useAuth()
    const router = useRouter()
    const goToProfile = () => router.push("/my-profile")
    const goToLogin = () => router.push("/login")

    return (
            <Icon icon='userHolder'width={43} height={43} classes={styles.main} onClick={isLogged() ? goToProfile :  goToLogin} containerStyle={{width: 43, height: 43}}/>
    )
}
