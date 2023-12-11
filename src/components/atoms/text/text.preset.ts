import { colors, fontWeights } from "@/lib/index";

const BASE: any = {
    ...fontWeights.regular,
    color: colors.hardGrey,
    fontSize: "16px",
}

export const presets = {
    default: BASE,
    headerXL: { ...BASE, ...fontWeights.extraBold, fontSize: "26px", lineHeight: "30px" } as any,
    headerL: { ...BASE, ...fontWeights.extraBold, fontSize: "20px", lineHeight: "24px" } as any,
    headerM: { ...BASE, ...fontWeights.bold, fontSize: "16px", lineHeight: "20px" } as any,
    bodyXL: { ...BASE, fontSize: "16px", lineHeight: "20px" } as any,
    bodyL: { ...BASE, fontSize: "14px", lineHeight: "18px" } as any,
} 

export type TextPresets = keyof typeof presets