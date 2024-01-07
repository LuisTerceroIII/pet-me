import React, { FC } from "react"

interface ImageProps {
    classes?: any
    src: string
    alt: string
    key?: string
}

export const Image: FC<ImageProps> = (props) => {

    const { src, alt, classes, key } = props

    return (
        <img className={classes} src={src}  alt={alt} key={key}/>
    )
}
