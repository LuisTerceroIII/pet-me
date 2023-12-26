import React, { CSSProperties } from "react"
import { ColorsNames } from "@/lib"
import classStyles from "./loader.module.css"

export type LoaderProps = {
    style?: CSSProperties
    color?: ColorsNames
}

export const Loader: React.FC<LoaderProps> = (props) => {

    return (
        <span className={classStyles.loader} />
    )
}
