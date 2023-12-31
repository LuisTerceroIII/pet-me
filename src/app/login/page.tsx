'use client'

import { Button, Input, Loader, Logo, Text } from '@/components'
import { colors } from '@/lib'
import { useAuth } from '@/store/auth/useAuth'
import { PetitionState } from '@/types'

export default function Login() {

  const { email, password, setEmail, setPassword, petitionState, signInWithEmail, cleanRegisterForm, loginSubmitButtonIsEnable,  } = useAuth()
  const disabled = !loginSubmitButtonIsEnable()
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingTop: "10%"}}>

      <Logo />
      <Input label='Email' name='email' type='text' onChange={setEmail} value={email} />
      <Input label='Contraseña' name='password' type="password" onChange={setPassword} value={password} />
      <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: "33px", gap: "10px"}}>
        {petitionState === PetitionState.IDLE ? 
        <Button onClick={signInWithEmail} text='Iniciar sesion' color='blue'/> : 
        petitionState === PetitionState.LOADING ? 
        <Loader /> :
        petitionState === PetitionState.ERROR ? 
         <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <Text text='Hubo un error' style={{color: colors.error}}/> 
            <Button onClick={cleanRegisterForm} text='Reintentar' color='blue' disabled={disabled}/>
        </div> :
        <Text text="Login exitoso" preset='headerM'/>
      }
      </div>
      
    </div>
  )
}