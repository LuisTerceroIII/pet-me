import React, { ReactNode, FC } from "react"
import { StyleDeclaration, StyleSheet, css } from "aphrodite"

interface TouchableProps {
    children: ReactNode
    onClick?: () => void
    aphroditeStyles?: {container: StyleDeclaration}
    style?: React.CSSProperties
    disabled?: boolean
    id?: string
}

const styles = StyleSheet.create({
    pressable: {
      cursor: "pointer",
      transition: "transform 0.3s",
    },
    active: {
        ":active": {
            transform: "scale(0.98)",
          },
    }
})

export const Touchable: FC<TouchableProps> = (props) => {

    const { children, onClick, aphroditeStyles, style, disabled=onClick==null, id } = props

    let aphrodite = StyleSheet.create({...aphroditeStyles})

    const handleClick = () => {
        if (onClick) {
            onClick()
        }
    }
    return (
        <div id={id} className={css(styles.pressable, aphrodite.container, (onClick != null || disabled) ? styles.active : null)} style={style} onClick={disabled ? null : handleClick}>
            {children}
        </div>
    )
}
