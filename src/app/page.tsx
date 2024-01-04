import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import styles from './page.module.css'
import { Text, Image, Button, Touchable } from '@/components'
import { cookies } from 'next/headers'
import "@/app/global.module.css"
import Link from 'next/link'

const titleTx = "Gestiona los expedientes médicos de tus mascotas con PetMed"
const subTitleTx = "Simplifica la gestión de los expedientes médicos de tus mascotas con nuestra aplicación fácil de usar y segura"

export default async function Home() {

    const cookieStore = cookies()
    const supabase = createServerComponentClient({ cookies: () => cookieStore })
    const { data: {user} } = await supabase.auth?.getUser()
    
    return (
      <main className={styles.main}>
        <div className={styles.leftBox}>
          <Text text={titleTx} classes={styles.title} colorClass='COLOR_SOFT_BLUE'/>
          <Text text={subTitleTx} classes={styles.subtitle}/>
        </div>
        <div className={styles.rightBox}>
          <Image classes={styles.mainImage} src={"/landing-1.png"} alt='landing-1'/>
          <Link href={"/register"} style={{}}>
            <Touchable classes={styles.registerButton}>
              <Text classes={styles.registerButtonText} text='Registrarme' colorClass='COLOR_WHITE'/>
            </Touchable>
          </Link>
        </div>

      </main>
    )
}
