"use client"

import React, { useMemo } from 'react'
import styles from "./general-menu.module.css"
import { Text } from '@/components'
import Link from 'next/link'
import { useGeneralHeader } from '@/store/useGeneralHeader'

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
    } as Route,
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

    const menu = useMemo(() => {
        return routes?.map((route: Route) => {
            return (
                <li style={{listStyle: "none"}} onClick={close}>
                    <Link href={route.url} style={{textDecoration: "none"}}>
                        <Text text={route.tx} classes={styles.option}/>
                    </Link>
                </li>
            )
        })
    }, [routes?.length, isOpen])

    return (
        <nav className={`${styles.main} ${isOpen ? styles.mainOpen : styles?.mainClose}`}>
            <ul style={{listStyle: "none"}} className={styles.routesContainer}>
                {menu}
            </ul>
        </nav>
    )
}
