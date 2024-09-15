import Favorites from "../../components/favorites/Favorites"

const items = [
  {
    productTitle : "لباسشویی",
    badgeTitle : "1000000000",
  },
  {
    productTitle : "لباسشویی",
    badgeTitle : "1000000000",
  },
  {
    productTitle : "لباسشویی",
    badgeTitle : "1000000000",
  },
  {
    productTitle : "لباسشویی",
    badgeTitle : "1000000000",
  },
  {
    productTitle : "لباسشویی",
    badgeTitle : "1000000000",
  },
  {
    productTitle : "لباسشویی",
    badgeTitle : "1000000000",
  },
]

const FavoritesPage = () => {
  return (
    <Favorites favoriteProducts = {items} />
  )
}

export default FavoritesPage