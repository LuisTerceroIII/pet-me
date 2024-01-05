import React from 'react'
import "@/app/global.module.css"
import styles from './block-three.module.css'
import { Image, Text } from '@/components/index'

const titleTx = "Acceso rápido a la información médica"
const subTitleTx = "Nuestra aplicación te permite acceder rápidamente a la información médica de tus mascotas. Podrás consultar los registros de vacunas, tratamientos y consultas con solo unos clics."

export const BlockThree = () => {
  return (
    <section className={styles.main}>
        <div className={styles.leftBox}>
          <Text text={titleTx} classes={styles.title} colorClass='COLOR_SOFT_BLUE'/>
          <Text text={subTitleTx} classes={styles.subtitle}/>
        </div>
        <Image classes={styles.mainImage} src={"/landing-3.png"} alt='landing-3'/>
    </section>
  )
}
