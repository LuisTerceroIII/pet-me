'use client'
import { Input, Text } from '@/components'
import { useAuth } from '@/store/auth/useAuth'
import styles from "./page.module.css"
import { RegisterButton } from '@/components/pages/login/register-button/register-button'
import Link from 'next/link'
import { useEffect } from 'react'

const text = "¡Bienvenido a Pet Me, donde los latidos de tu corazón y las patitas de tus mascotas se encuentran! 🐶❤️ Regístrate ahora y comienza esta hermosa conexión de amor. 🐾💕"

export default function Register() {

    const { password, email, setEmail, setPassword, name, setName, username, setUsername, cleanRegisterForm, nameError, usernameError, emailError, passwordError } = useAuth()

    useEffect(() => {
        return () => cleanRegisterForm()
    }, [])

    return (
        <section className={styles.main}>
            <div className={styles.messageAndFormContainer}>
                <Text text={text} classes={styles.message} colorClass='COLOR_BLUE'/>
                <div className={styles.formContainer}>
                    <Text text='Registrate' colorClass='COLOR_BLUE' classes={styles.title}/>
                    <Input label='Nombre' name='name' type='text' onChange={setName} value={name} error={nameError} />
                    <Input label='Nombre de usuario' name='username' type='text' onChange={setUsername} value={username} error={usernameError} />
                    <Input label='Email' name='email' type='text' onChange={setEmail} value={email} error={emailError} />
                    <Input label='Password' name='password' type="password" onChange={setPassword} value={password} error={passwordError} />
                    <RegisterButton />
                    <Text text='¿Ya tienes cuenta?' classes={styles.registerMessage} children={<Link href={"/login"} className={styles.link}>Iniciar sesión</Link>}/>
                </div>
            </div>
        </section>
    )
}