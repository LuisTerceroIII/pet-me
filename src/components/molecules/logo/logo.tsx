import { Text } from "@/components"
import Image from "next/image"
import React, { CSSProperties } from "react"

type LogoProps = {
    vertical?: boolean
}

const MAIN_CONTAINER: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10
}
export const Logo: React.FC<LogoProps> = ({vertical=true}) => {

    return (
        <div style={{...MAIN_CONTAINER, flexDirection: vertical ? "column" : "row"}}>
            <Image src={"/pet-me-logo.png"} alt="pet-me-logo" width={55} height={55}/>
            <Text preset="headerM" text="Pet me" style={{fontSize: 30, marginTop: vertical ? 10 : undefined}}/>
        </div>
    )

}