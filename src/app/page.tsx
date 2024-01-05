import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import styles from './page.module.css'
import { BlockOne } from '@/components/index'
import { cookies } from 'next/headers'
import "@/app/global.module.css"

export default async function Home() {

    const cookieStore = cookies()
    const supabase = createServerComponentClient({ cookies: () => cookieStore })
    const { data: {user} } = await supabase.auth?.getUser()
    
    return (
      <main className={styles.main}>
        <BlockOne/>
      </main>
    )
}
