import ProductCard from "../../common/productCard/ProductCard"

interface IFavoriteProduct {
    productTitle : string;
    badgeTitle : string;
}


const favoriteProducts: IFavoriteProduct[]  = [
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

const Favorites : React.FC = () => {
  return (
    <section className="w-full h-screen grid grid-cols-4 gap-[3.2rem] py-[3.2rem] px-[2.1rem] overflow-y-auto">
        {favoriteProducts.map((favouriteProduct, index) => {
            return (
                <ProductCard 
                key={index}
                productTitle={favouriteProduct.productTitle} 
                productTitleStyle="text-text-primary text-[1.8rem] text-normal"
                badgeTitle={favouriteProduct.badgeTitle}
                padding="px-2.5"
                fontSize="text-[1.2rem]"
                />
            )
        })}
    </section>
  )
}

export default Favorites