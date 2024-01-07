"use client"

import { Button, Loader, Text } from '@/components'
import { useAuth } from '@/store/auth/useAuth'
import { PetitionState } from '@/types'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { AuthResponse } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'
import React, { FC } from 'react'

type LoginButtonProps = {
    classes?: string
}

export const LoginButton: FC<LoginButtonProps> = (props) => {

    const { petitionState, setPetitionState, email, password, setUser, cleanRegisterForm, loginSubmitButtonIsEnable } = useAuth()
    const supabase = createClientComponentClient()
    const router = useRouter()
    const disabled = !loginSubmitButtonIsEnable()

    const handleSubmit = async () => {

        try {
          setPetitionState(PetitionState.LOADING)

          const { data, error }: AuthResponse = await supabase.auth.signInWithPassword({
            email,
            password
          })

          if (error) {
            setPetitionState(PetitionState.ERROR)
          } else {
            if (data?.user) setUser(data?.user)
            setPetitionState(PetitionState.SUCCESS)
            cleanRegisterForm()
            router.refresh()
            router.push("/my-profile")
          }

        } catch (e) {
          console.log("error signing in", JSON.stringify(e))
        }

      }

    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: "33px", gap: "10px" }}>
        {
            petitionState === PetitionState.IDLE ?

                <Button onClick={handleSubmit} text='Iniciar sesion' color={disabled ? 'hardGrey' : 'blue'} disabled={disabled} /> :

            petitionState === PetitionState.LOADING ?

                    <Loader /> :

            petitionState === PetitionState.ERROR ?

                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <Text text='Hubo un error' colorClass='COLOR_ERROR' />
                    <Button onClick={cleanRegisterForm} text='Reintentar' color='blue' disabled={disabled} />
                </div> :
                
            <Text text="Login exitoso" preset='headerM' />
        }
        </div>
    )
}
