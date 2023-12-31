import { colors, fontWeights } from "@/lib/index";
import { Kanit } from 'next/font/google'

const kanit = Kanit({
    weight: ['400', '500','700', '800'],
    subsets: ["latin"]
  })

const BASE: any = {
    ...fontWeights.semiBold,
    color: colors.hardGrey,
    fontSize: "16px",
    fontFamily:  kanit.style.fontFamily,
    lineHeight: "20px"
}

export const presets = {
    default: BASE,
    headerXL: { ...BASE, ...fontWeights.extraBold, fontSize: "26px", lineHeight: "30px" } as any,
    headerL: { ...BASE, ...fontWeights.extraBold, fontSize: "20px", lineHeight: "24px" } as any,
    headerM: { ...BASE, ...fontWeights.bold, fontSize: "16px", lineHeight: "20px" } as any,
    bodyXL: { ...BASE, fontSize: "16px", lineHeight: "20px" } as any,
    bodyL: { ...BASE, fontSize: "14px", lineHeight: "18px" } as any,
    errorM: { ...BASE, fontSize: "16px",lineHeight: "20px", color: colors.error } as any
} 

export type TextPresets = keyof typeof presets