export const colors = {
    grey: "#bdc3d9",
    softGrey: "#f0f0f7",
    hardGrey: "#9599A8",
    softBlue: "#403F6A",
    blue: "#213464",
    white: "#e6e2e2",
    error: "#EC4949",
    softBlueTranslucid: "#403f6ae4",
    orange: "#f69f00"
}
export const colorClasses  = {
    COLOR_GREY: "color-grey",
    BG_COLOR_GREY: "bg-color-grey",
    COLOR_SOFT_GREY: "color-soft-grey",
    BG_COLOR_SOFT_GREY: "bg-color-soft-grey",
    COLOR_HARD_GREY: "color-hard-grey",
    BG_COLOR_HARD_GREY: "bg-color-hard-grey",
    COLOR_BLUE: "color-blue",
    BG_COLOR_BLUE: "bg-color-blue",
    COLOR_WHITE: "color-white",
    BG_COLOR_WHITE: "bg-color-white",
    COLOR_ERROR: "color-error",
    BG_COLOR_ERROR: "bg-color-error",
    COLOR_SOFT_BLUE: "color-soft-blue",
    BG_COLOR_SOFT_BLUEL: "bg-color-soft-blue"
}
  
export type ColorsNames = keyof typeof colors
export type ColorClasses = keyof typeof colorClasses
