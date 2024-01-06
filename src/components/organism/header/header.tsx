"use client"
import React, { useEffect, useState } from 'react'
import styles from "./header.module.css"
import { Logo, UserBadge } from '@/components'
import { Sling as Hamburger } from 'hamburger-react'
import { useGeneralHeader } from '@/store/useGeneralHeader'
import { GeneralMenu } from './general-menu/general-menu'
import { usePathname } from 'next/navigation'

export const Header = () => {

    const { setOpen, isOpen, close } = useGeneralHeader()

    const pathname = usePathname();
  
    useEffect(() => {
      return () => close()
    }, [pathname])
    
    return (
      <header className={styles.main}>
          <UserBadge/>
          <GeneralMenu/>
          <Logo vertical={true} classes={styles.logo}/>
          <div style={{position: "absolute", right: 16, zIndex: 11, top: 12}} onBlur={close}>
            <Hamburger onToggle={setOpen} toggled={isOpen}/>
          </div>
      </header>
    )
}
