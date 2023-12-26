
'use client'
import { Button, Input, Loader, Text } from '@/components'
import { colors } from '@/lib'
import { useAuth } from '@/store/auth/useAuth'
import { PetitionState } from '@/types'

export default function Register() {

    const { password, email, setEmail, setPassword, name, setName, username, setUsername, signUpWithEmail, petitionState, registerSubmitButtonIsEnabled, cleanRegisterForm } = useAuth()

    const disabled = !registerSubmitButtonIsEnabled()
    return (

        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>

            <Text text={"Register"} preset='headerXL' style={{marginBottom: 16}}/>
            <Input label='Nombre' name='name' type='text' onChange={setName} value={name} />
            <Input label='Nombre de usuario' name='username' type='text' onChange={setUsername} value={username} />
            <Input label='Email' name='email' type='text' onChange={setEmail} value={email}/>
            <Input label='Password' name='password' type="password" onChange={setPassword} value={password} />

            <div style={{marginTop: "48px"}}>
                {petitionState === PetitionState.LOADING ? 
                <Loader /> :
                petitionState === PetitionState.ERROR ?
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <Text text='Hubo un error al registrarte' style={{color: colors.error}}/> 
                    <Button onClick={cleanRegisterForm} text='Reintentar' color='blue' disabled={disabled}/>
                </div> :
                petitionState === PetitionState.SUCCESS ? 
                <Text text='Te has registrado correctamente' preset='headerM'/>
                 :
                <Button onClick={signUpWithEmail} text='Registrarme' color={disabled ? 'hardGrey' : 'blue'} disabled={disabled}/>}
            </div>
            
        </div>
    )
}