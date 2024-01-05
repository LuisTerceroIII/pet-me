import React from 'react'
import styles from "./header.module.css"
import { Logo } from '@/components'

export const Header = () => {
  return (
    <header className={styles.main}>
        <Logo vertical={false}/>
    </header>
  )
}
