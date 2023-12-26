/* import { Login } from "@/components/pages/login/login"

export default function Page() {
    return <Login />
} */


'use client'

import { Button, Input } from '@/components'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { createClient } from '@supabase/supabase-js'
import { create } from 'domain'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `/`,
      },
    })
    router.refresh()
  }

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email,
      password,
    })
    router.refresh()
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>

      <Input label='Email' name='email' type='text' onChange={(e) => setEmail(e.target.value)} value={email} />

      <Input label='Password' name='password' type="password" onChange={(e) => setPassword(e.target.value)} value={password} />

      <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: "48px", gap: "10px"}}>
        <Button onClick={handleSignUp} text='Sign up' color='blue'/>
        <Button onClick={handleSignIn} text='Sign in' color='blue'/>
        <Button onClick={handleSignOut} text='Sign out' color='error'/>
      </div>
    </div>
  )
}