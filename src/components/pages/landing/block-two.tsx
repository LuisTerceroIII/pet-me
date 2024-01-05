import React from 'react'
import "@/app/global.module.css"
import styles from './block-two.module.css'
import { Image, Text } from '@/components/index'


const titleTx = "Organiza los expedientes médicos de tus mascotas"
const subTitleTx = "Con PetMed, puedes organizar de manera fácil y segura los expedientes médicos de tus mascotas. Ya no tendrás que preocuparte por perder o confundir los registros"

export const BlockTwo = () => {
  return (
    <section className={styles.main}>
        <Image classes={styles.mainImage} src={"/landing-2.png"} alt='landing-2'/>
        <div className={styles.leftBox}>
          <Text text={titleTx} classes={styles.title} colorClass='COLOR_SOFT_BLUE'/>
          <Text text={subTitleTx} classes={styles.subtitle}/>
        </div>
    </section>
  )
}
