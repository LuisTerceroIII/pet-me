
'use client'
import { Button, Input, Loader, Text } from '@/components'
import { colors } from '@/lib'
import { useAuth } from '@/store/auth/useAuth'
import { PetitionState } from '@/types'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

export default function Register() {

    const { password, email, setEmail, setPassword, name, setName, username, setUsername, setPetitionState, petitionState, registerSubmitButtonIsEnabled, cleanRegisterForm, nameError, usernameError, emailError, passwordError } = useAuth()

    const disabled = !registerSubmitButtonIsEnabled()
    const supabase = createClientComponentClient()
    const router = useRouter()

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
                        username: username || null
                    }
                },
            })

            if (error) throw new Error("error signing up " + error)

            setPetitionState(PetitionState.SUCCESS)
            router.refresh()

        } catch (e) {
            console.log("error signing up", JSON.stringify(e))
            setPetitionState(PetitionState.ERROR)
        }
    }

    return (

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Text text={"Register"} preset='headerXL' style={{ marginBottom: 16 }} colorClass='COLOR_HARD_GREY'/>
            <Input label='Nombre' name='name' type='text' onChange={setName} value={name} error={nameError} />
            <Input label='Nombre de usuario' name='username' type='text' onChange={setUsername} value={username} error={usernameError} />
            <Input label='Email' name='email' type='text' onChange={setEmail} value={email} error={emailError} />
            <Input label='Password' name='password' type="password" onChange={setPassword} value={password} error={passwordError} />
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

        </div>
    )
}