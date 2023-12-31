import React, { CSSProperties, HTMLInputTypeAttribute } from "react"
import { TextPresets } from "../text/text.preset"
import { Text } from "./../index"
import { Icon } from "@/components/index"
import { StyleDeclaration, StyleSheet, css } from "aphrodite"
import { colors } from "@/lib"

export type InputProps = {
    value: string,
    onChange: (e: any) => void,
    label: string,
    placeHolderText?: string,
    inputStyle?: CSSProperties,
    labelStyle?: CSSProperties
    labelPreset?: TextPresets
    type?: HTMLInputTypeAttribute
    name?: string //use to formData type
    error?: boolean
    errorMessage?: string
    onSubmit?: (e: any) => void
}

const MAIN_CONTAINER: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
}
const iconStyle: {icon: StyleDeclaration} = {
    icon: {
        width: 20,
        height: 20
    }
}
const styles = StyleSheet.create({
    input: {
        minWidth: '325px',
        maxWidth: '422px',
        height: '33px',
        padding: '0px',
        fontSize: '16px',
        borderWidth: '1px',
        borderColor: colors.white,
        backgroundColor: '#FFFFFF',
        color: '#000000',
        borderStyle: 'solid',
        borderRadius: '8px',
        boxShadow: '0px 0px 5px rgba(66, 66, 66, .75)',
        paddingLeft: '10px',
        transition: "transform 0.3s",
        ":focus" : {
            outline: 'none'
        },
        ":active": {
            transform: "scale(0.98)",
        },
        
    },
    error: {
        borderColor: colors.error,
    }
  })

export const Input: React.FC<InputProps> = (props) => {

    const {value, onChange, label, placeHolderText, labelStyle, labelPreset="default", type="text", name, error=false, errorMessage="La entrada proporcionada no es válida.", onSubmit } = props

    return (
        <div style={MAIN_CONTAINER} >
            <Text text={label || ""} preset={labelPreset}  style={labelStyle} />
            <input type={type} name={name} className={css(styles.input, error && styles.error)} placeholder={placeHolderText} value={value} onChange={onChange} onSubmit={onSubmit}/>
            {error && 
                <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8}}>
                    <Icon icon="error"/>
                    <Text text={errorMessage} preset="errorM" />
                </div>
            }
        </div>
    )
}
