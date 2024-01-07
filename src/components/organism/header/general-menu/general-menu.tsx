"use client"

import React, { useEffect, useMemo, useState } from 'react'
import styles from "./general-menu.module.css"
import { Text } from '@/components'
import Link from 'next/link'
import { useGeneralHeader } from '@/store/useGeneralHeader'
import { User, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useAuth } from '@/store/auth/useAuth'
import { PetitionState } from '@/types'
import { useRouter } from 'next/navigation'

type Route = {
    url: string,
    tx: string
}

const routes: Route[] = [
    {
        url: "/",
        tx: "Inicio"
    } as Route,
    {
        url: "/filosofia",
        tx: "Filosofía"
    } as Route,
    {
        url: "/preguntas",
        tx: "Preguntas"
    } as Route
]
const unauthenticatedRoutes = [
    {
        url: "/login",
        tx: "Iniciar sesión"
    } as Route,
    {
        url: "/register",
        tx: "Registrarme"
    } as Route
]

export const GeneralMenu = () => {

    const { isOpen, close } = useGeneralHeader()
    const { user, setPetitionState, setUser } = useAuth()
    const supabase = createClientComponentClient()
    const router = useRouter()

    const logOut = async () => {
        setPetitionState(PetitionState.LOADING)
        await supabase.auth.signOut()
        //@ts-ignore
        setUser(null as User)
        setPetitionState(PetitionState.SUCCESS)
        router.refresh()
        router.push("/")
    }

    const options: Route[] = user != null ? routes : [...routes, ...unauthenticatedRoutes] as Route[]

    const menu = useMemo(() => {
        return options?.map((route: Route) => {
            return (
                <li style={{listStyle: "none"}} onClick={close} key={route.url}>
                    <Link href={route.url} style={{textDecoration: "none"}}>
                        <Text text={route.tx} classes={styles.option}/>
                    </Link>
                </li>
            )
        })
    }, [options?.length, isOpen, user])

    return (
        <nav className={`${styles.main} ${isOpen ? styles.mainOpen : styles?.mainClose}`}>
            <ul style={{listStyle: "none"}} className={styles.routesContainer}>
                {menu}
                {user != null && <Text text='Cerrar Sessión' onClick={logOut} classes={styles.option}/>}
            </ul>
        </nav>
    )
}
