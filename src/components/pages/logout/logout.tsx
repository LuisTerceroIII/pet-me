"use client"

import React from "react"
import { Text } from "@/components/index"
import { useStore } from "@/store/useStore"


export const Login = () => {

    const isLogin = useStore((state) => state.isLogin)

    return (
        <section >
            <Text textPreset="header" text={"Login page"} />
        </section>
    )
}