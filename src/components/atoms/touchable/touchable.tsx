import React, { ReactNode, FC } from "react"
import { StyleDeclaration, StyleSheet, css } from "aphrodite"
import styles from "./touchable.module.css"

interface TouchableProps {
    children: ReactNode
    onClick?: () => void
    style?: React.CSSProperties
    disabled?: boolean
    id?: string
    classes?: any
}

export const Touchable: FC<TouchableProps> = (props) => {

    const { children, onClick, style, disabled=onClick==null, id, classes } = props


    const handleClick = () => {
        if (onClick) {
            onClick()
        }
    }
    return (
        <div id={id} className={`${styles.pressable} ${(onClick != null || disabled) ? styles.active : null} ${classes}`} style={style} onClick={disabled ? undefined : handleClick}>
            {children}
        </div>
    )
}
