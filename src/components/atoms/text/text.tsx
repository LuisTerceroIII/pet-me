import React, { CSSProperties } from "react"
import { TextPresets, presets } from "./text.preset"
import { StyleSheet, css } from "aphrodite"

export type TextProps = {
    text: string,
    style?: CSSProperties,
    preset?: TextPresets
}
export const Text: React.FC<TextProps> = (props) => {

    const {style, text, preset="default"} = props
    
    const styles = StyleSheet.create({
        text: {
            ...presets[preset],
           ...style
        }
    })

    return (
        <p className={css(styles.text)}>{text}</p>
    )
}
