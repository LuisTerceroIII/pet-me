import { Text } from "@/components"
import Image from "next/image"
import React, { CSSProperties } from "react"


type LogoProps = {
}
const MAIN_CONTAINER: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
}
export const Logo: React.FC<LogoProps> = () => {

    return (
        <div style={MAIN_CONTAINER}>
            <Image src={"/pet-me-logo.png"} alt="pet-me-logo" width={55} height={55}/>
            <Text preset="headerM" text="Pet me" style={{fontSize: 30, marginTop: 10}}/>
        </div>
    )

}