import React, { CSSProperties } from "react"
import { TextPresets } from "../text/text.preset"
import { Text } from "./../index"
import { ColorsNames, colors } from "@/lib"
import Styles from "./button.module.css"

export type ButtonProps = {
    text: string,
    style?: CSSProperties,
    preset?: TextPresets,
    textStyle?: CSSProperties,
    color?: ColorsNames,
    textColor?: ColorsNames,
    onClick: () => void
}
export const Button: React.FC<ButtonProps> = (props) => {

    const { style, textStyle, text, preset="bodyXL", color="blue", onClick, textColor="white"} = props

    return (
        <button style={{backgroundColor: colors[color], ...style}} className={Styles.button} onClick={onClick}>
            <Text style={{color: colors[textColor], ...textStyle}} text={text} preset={preset} />
        </button>
    )
}
