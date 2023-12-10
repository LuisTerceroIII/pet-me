import React, { CSSProperties } from "react"
import { TextPresets, presets } from "./text.preset"

export type TextProps = {
    text: string,
    style?: CSSProperties,
    preset?: TextPresets
}
export const Text: React.FC<TextProps> = (props) => {

    const {style, text, preset="default"} = props

    return (
        <p style={{...presets[preset], ...style}}>{text}</p>
    )
}
