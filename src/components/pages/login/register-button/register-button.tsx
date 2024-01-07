"use client"

import { Button, Loader, Text } from '@/components'
import { colors } from '@/lib'
import { useAuth } from '@/store/auth/useAuth'
import { PetitionState } from '@/types'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { AuthResponse } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'
import React, { FC } from 'react'

type RegisterButtonProps = {
    classes?: string
}

export const RegisterButton: FC<RegisterButtonProps> = (props) => {

    const { petitionState, setPetitionState, email, password, username, name, cleanRegisterForm, registerSubmitButtonIsEnabled } = useAuth()
    const supabase = createClientComponentClient()
    const router = useRouter()
    const disabled = !registerSubmitButtonIsEnabled()

    const handleSubmit = async () => {
      try {
          setPetitionState(PetitionState.LOADING)
          const { error } = await supabase.auth.signUp({
              email,
              password,
              options: {
                  emailRedirectTo: `${location.origin}/auth/callback`,
                  data: {
                      name: name || null,
                      last_name: null,
                      username: username || null,
                      profile_image_url: null,
                  }
              },
          })

          if (error) throw new Error("error signing up " + error)

          setPetitionState(PetitionState.SUCCESS)
          router.push("/my-profile")
          router.refresh()

      } catch (e) {
          console.log("error signing up", JSON.stringify(e))
          setPetitionState(PetitionState.ERROR)
      }
  }

    return (
      <div style={{ marginTop: petitionState === PetitionState.ERROR ? "18px" : "48px" }}>
      {petitionState === PetitionState.LOADING ?
          <Loader /> :
          petitionState === PetitionState.ERROR ?
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                  <Text text='Hubo un error al registrarte' style={{ color: colors.error }} />
                  <Button onClick={cleanRegisterForm} text='Reintentar' color='blue' disabled={disabled} />
              </div> :
              petitionState === PetitionState.SUCCESS ?
                  <Text text='Te has registrado correctamente' preset='headerM' />
                  :
                  <Button onClick={handleSubmit} text='Registrarme' color={disabled ? 'hardGrey' : 'blue'} disabled={disabled} />}
      </div>
    )
}
