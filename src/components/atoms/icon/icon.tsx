import React from "react"
import { IconTypes, icons } from "./icon.types"
import { StyleDeclaration } from "aphrodite"
import { Touchable } from "@/components/atoms/index"
import Image from "next/image"

type IconProps = {
    icon: IconTypes,
    containerStyle?: {container: StyleDeclaration }
    disabled?: boolean
    onClick?: () => void
    width?: number
    height?: number
    classes?: string
}

export const Icon: React.FC<IconProps> = (props) => {

    const { disabled, onClick, icon, containerStyle={container: {}}, width=20, height=20, classes } = props

    const touchableStyle = {
        container : {
            ...containerStyle.container,
            display: "flex",
            cursor: "default"
        }
    }

    return (
        <Touchable disabled={disabled || onClick == null} onClick={onClick} classes={classes} style={{width: width, height: height}}>
            <Image src={icons[icon]} alt={icon} width={width} height={height} sizes="" loading="lazy" style={{objectFit: "contain"}} />
        </Touchable>
    )
}