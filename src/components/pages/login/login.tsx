"use client"

import React from "react"
import { useStore } from "@/store/useStore"
import styles from "./login.module.css"
import { Text } from "@/components"

export const Login = () => {

    const isLogin = useStore((state) => state.isLogin)

    return (
        <section className={styles.mainContainer}>
            <Text preset="headerXL" text={"Login page"} />
            {isLogin}
        </section>
    )
}