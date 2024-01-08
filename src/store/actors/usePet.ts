import { create } from 'zustand';

export interface usePetState {
	actionPet: any
	setActionPet: (pet: any) => void
}


export const usePet = create<usePetState>((set, get, api) => ({
	actionPet: null,
	setActionPet: (pet: any) => {
		set({
			actionPet: pet
		})
	}
})
)