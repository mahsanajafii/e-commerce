import { create } from 'zustand'


interface IIsAdmin {
    isAdmin: boolean,
    setIsAdmin: (isAdmin: boolean) => void
}

export const useUserStore = create<IIsAdmin>((set) => ({
    isAdmin: false,
    setIsAdmin: (value: boolean) => {
        set(() => ({ isAdmin: value }))
    }
}))