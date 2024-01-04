import React, { FC } from "react"

interface ImageProps {
    classes?: any
    src: string
    alt: string
}

export const Image: FC<ImageProps> = (props) => {

    const { src, alt, classes } = props

    return (
        <img className={classes} src={src} />
    )
}
