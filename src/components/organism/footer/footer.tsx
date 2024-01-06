import { Text } from '@/components'
import React from 'react'
import styles from "./footer.module.css"

export const Footer = () => {

    const currentYear = new Date()?.getFullYear()

    return (
        <footer className={styles.main}>
            <Text 
                text={`Le dev Copyright © ${currentYear} Pet me - All rights reserved || Designed By: `} 
                colorClass='COLOR_WHITE'
                children={<a href="https://www.luisespinozadev.com.ar/" target='_blank' rel='noopener noreferrer' className={styles.leDevLink}>Le dev</a>}
                classes={styles.text}
                />
        </footer>
    )
}
