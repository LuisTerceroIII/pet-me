"use client"

import React from "react"
import styles from "./login.module.css"
import { Button, Input, Logo } from "@/components"
import { useStore } from "@/store/useStore"


export const Login = () => {
    
    const { password, email, setEmail, setPassword } = useStore()

    return (
        <section className={styles.mainContainer}>
            <Logo />
            <Input label="Email" labelPreset="bodyXL" value={email} onChange={setEmail} />
            <Input label="Contraseña" labelPreset="bodyXL" value={password} onChange={setPassword} type="password" />
            <Button text="Iniciar Sesion" onClick={() => window.alert(`Login, email: ${email}, pass: ${password}`)} style={{marginTop: "3%"}}/>
        </section>
    )
}