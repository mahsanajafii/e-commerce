import { create } from 'zustand';

interface IFavoritestore {
    favoriteProductsId: string[],
    addToFavorites: (product: string) => void,
    removeFromFavorites: (product: string) => void,
}

export const useFavoritesStore = create<IFavoritestore>((set) => ({
    favoriteProductsId: [],
    addToFavorites: (product: string) => set((state) => ({
        favoriteProductsId: [...state.favoriteProductsId, product] 
    })),
    removeFromFavorites: (product: string) => set((state) => ({
        favoriteProductsId: state.favoriteProductsId.filter(
            (favorite) => (favorite !== product)
        )
    }))
}))