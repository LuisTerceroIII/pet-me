'use client'
import { Image, Input, LoginButton, Text } from '@/components'
import { useAuth } from '@/store/auth/useAuth'
import styles from "./page.module.css"
import Link from 'next/link'
import { useEffect } from 'react'

const text = "¡Bienvenido a Pet Me, donde cada patita cuenta! 🐾 Ingresa para empezar a crear recuerdos inolvidables con tus mascotas. Estamos emocionados de ser parte de su felicidad. 🐶❤️"

export default function Login() {

    const { email, password, setEmail, setPassword, petitionState, cleanRegisterForm, setUser, setPetitionState, emailError, passwordError, loginSubmitButtonIsEnable } = useAuth()

    useEffect(() => {
      return () => cleanRegisterForm()
    }, [])

    return (
      <section className={styles.main}>
        <div className={styles.messageAndFormContainer}>
          <Text text={text} classes={styles.message} colorClass='COLOR_BLUE'/>
          <div className={styles.formContainer}>
            <Text text='Iniciar sesión' colorClass='COLOR_BLUE' classes={styles.title}/>
            <Input label='Email' name='email' type='text' onChange={setEmail} value={email} error={emailError} />
            <Input label='Contraseña' name='password' type="password" onChange={setPassword} value={password} error={passwordError} />
            <LoginButton />
            <Text text='¿Aún no tienes cuenta?' classes={styles.registerMessage} children={<Link href={"/register"} className={styles.link}>Regístrate</Link>}/>
          </div>
        </div>
      </section>
    )
}