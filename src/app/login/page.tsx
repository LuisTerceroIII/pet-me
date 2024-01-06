'use client'

import { Button, Input, Loader, Logo, Text } from '@/components'
import { colors } from '@/lib'
import { useAuth } from '@/store/auth/useAuth'
import { PetitionState } from '@/types'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { AuthResponse } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'

export default function Login() {

  const { email, password, setEmail, setPassword, petitionState, cleanRegisterForm, setUser, setPetitionState, emailError, passwordError, loginSubmitButtonIsEnable } = useAuth()

  const router = useRouter()
  const supabase = createClientComponentClient()

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
      }
      router.refresh()
    } catch (e) {
      console.log("error signing in", JSON.stringify(e))
    }
  }

return (
  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingTop: "10%" }}>
    <Input label='Email' name='email' type='text' onChange={setEmail} value={email} error={emailError} />
    <Input label='Contraseña' name='password' type="password" onChange={setPassword} value={password} error={passwordError} onSubmit={handleSubmit} />
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: "33px", gap: "10px" }}>
      {petitionState === PetitionState.IDLE ?
        <Button onClick={handleSubmit} text='Iniciar sesion' color='blue' /> :
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
  </div>
  )
}