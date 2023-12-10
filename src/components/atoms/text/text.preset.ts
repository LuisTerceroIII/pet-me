import { colors, fontWeights } from "@/lib/index";

const BASE: any = {
    ...fontWeights.regular,
    color: colors.hardGrey,
    fontSize: 16,
}

export const presets = {
    default: BASE,
    headerXL: { ...BASE, ...fontWeights.extraBold, fontSize: 26, lineHeight: 30 } as any,
    headerL: { ...BASE, ...fontWeights.extraBold, fontSize: 20, lineHeight: 24 } as any,
    headerM: { ...BASE, ...fontWeights.bold, fontSize: 16, lineHeight: 20 } as any,
    bodyXL: { ...BASE, fontSize: 16, lineHeight: 20 } as any,
    bodyL: { ...BASE, fontSize: 14, lineHeight: 18 } as any,
} 

export type TextPresets = keyof typeof presets