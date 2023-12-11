import React, { CSSProperties, HTMLInputTypeAttribute } from "react"
import { TextPresets } from "../text/text.preset"
import { Text } from "./../index"
import Styles from "./input.module.css"

export type InputProps = {
    value: string,
    onChange: () => void,
    label: string,
    placeHolderText?: string,
    inputStyle?: CSSProperties,
    labelStyle?: CSSProperties
    labelPreset?: TextPresets
    type?: HTMLInputTypeAttribute
}

const MAIN_CONTAINER: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
}
export const Input: React.FC<InputProps> = (props) => {

    const {value, onChange, label, placeHolderText, inputStyle, labelStyle, labelPreset="default", type="text"} = props

    return (
        <div style={MAIN_CONTAINER} >
            <Text text={label || ""} preset={labelPreset}  style={labelStyle} />
            <input type={type} className={Styles.input} style={inputStyle} placeholder={placeHolderText} value={value} onChange={onChange}/>
        </div>
    )
}
