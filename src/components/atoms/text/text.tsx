import React, { CSSProperties, MouseEvent } from "react"
import { TextPresets } from "./text.preset"
import Styles from "./text.module.css"
import GlobalStyles from "@/app/global.module.css"
import { colorClasses, ColorClasses } from "@/lib"

export type TextProps = {
    text: string,
    preset?: TextPresets
    colorClass?: ColorClasses
    style?: CSSProperties
    classes?: any
    children?: any
    onClick?:(e: any) => void
}

export const Text: React.FC<TextProps> = (props) => {

    const {text, preset="default", colorClass="COLOR_HARD_GREY", style, classes, children, onClick} = props

    return (
        <p className={`${GlobalStyles[colorClasses[colorClass]]} ${classes ? classes : Styles[preset]}`} style={style} onClick={onClick ? onClick : undefined}>{text}{children}</p>
    )
}
