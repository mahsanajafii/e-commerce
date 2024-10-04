import { create } from 'zustand';

interface IFavoritestore {
    favoriteProducts: string[],
    addToFavorites: (product: string) => void,
    removeFromFavorites: (product: string) => void,
}

export const useFavoritesStore = create<IFavoritestore>((set) => ({
    favoriteProducts: [],
    addToFavorites: (product: string) => set((state) => ({
        favoriteProducts: [...state.favoriteProducts, product] 
    })),
    removeFromFavorites: (product: string) => set((state) => ({
        favoriteProducts: state.favoriteProducts.filter(
            (favorite) => (favorite !== product)
        )
    }))
}))