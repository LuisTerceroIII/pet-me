import React from 'react'
import "@/app/global.module.css"
import Link from 'next/link'
import styles from './block-one.module.css'
import { Image, Text, Touchable } from '@/components/index'


const titleTx = "Gestiona los expedientes médicos de tus mascotas con PetMed"
const subTitleTx = "Simplifica la gestión de los expedientes médicos de tus mascotas con nuestra aplicación fácil de usar y segura"

export const BlockOne = () => {
  return (
    <section className={styles.main}>
        <div className={styles.leftBox}>
          <Text text={titleTx} classes={styles.title} colorClass='COLOR_SOFT_BLUE'/>
          <Text text={subTitleTx} classes={styles.subtitle}/>
        </div>
        <div className={styles.rightBox}>
          <Image classes={styles.mainImage} src={"/landing-1.png"} alt='landing-1'/>
          <Link href={"/register"} className={styles.horizontalFlowButton} style={{textDecoration: "none"}}>
            <Touchable classes={styles.registerButton}>
              <Text classes={styles.registerButtonText} text='Registrarme' colorClass='COLOR_WHITE'/>
            </Touchable>
          </Link>
        </div>
        <Link href={"/register"} className={styles.verticalFlowButton} style={{textDecoration: "none"}}>
            <Touchable classes={styles.registerButton}>
              <Text classes={styles.registerButtonText} text='Registrarme' colorClass='COLOR_WHITE'/>
            </Touchable>
          </Link>
    </section>
  )
}
