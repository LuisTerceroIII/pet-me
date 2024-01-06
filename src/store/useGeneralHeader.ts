import { create } from 'zustand';

export interface GeneralHeaderState {
    isOpen: boolean
    open:() => void
    close:() => void
    setOpen: (state: boolean) => void
}


export const useGeneralHeader = create<GeneralHeaderState>((set, get, api) => ({
    isOpen: false,
    open: () => {
        set({
            isOpen: true
        })
    },
    close: () => {
        set({
            isOpen: false
        })
    },
    setOpen: (toggle: boolean) => {
        console.log({toggle})
        set({
            isOpen: toggle
        })
    }
})
)