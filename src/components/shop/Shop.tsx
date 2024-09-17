import Button from "../common/button/Button";
import Checkbox from "../common/checkbox/Checkbox";
import FilterByGroup from "../common/filterByGroup/FilterByGroup";
import ShopProductCard from "../common/productCard/shopProductCard/ShopProductCard"
interface IProductCardProps {
    productImg: string;
    productTitle: string;
    badgeTitle: string;
    brandTitele: string;
    description: string;
    
  }
  interface IShopProps {
    shopProducts: IProductCardProps[];
} 
const Shop:React.FC<IShopProps> = () => {
    const shopCarts=[
         {
             productImg: "جینگیلی مستون",
             productTitle: "Apple iPhone 14 Pro",
             badgeTitle: "10,000 تومان",
             brandTitele: "َApple",
             description: " گیران است گیران تر از هر گیران گوشی اپل ماست این گیران است این گیران است ما پول نداریم",
           },
           {
             productImg: "جینگیلی مستون",
             productTitle: "Apple iPhone 14 Pro",
             badgeTitle: "10,000 تومان",
             brandTitele: "َApple",
             description: " گیران است گیران تر از هر گیران گوشی اپل ماست این گیران است این گیران است ما پول نداریم",
           },
           {
             productImg: "جینگیلی مستون",
             productTitle: "Apple iPhone 14 Pro",
             badgeTitle: "10,000 تومان",
             brandTitele: "َApple",
             description: " گیران است گیران تر از هر گیران گوشی اپل ماست این گیران است این گیران است ما پول نداریم",
           },
           {
             productImg: "جینگیلی مستون",
             productTitle: "Apple iPhone 14 Pro",
             badgeTitle: "10,000 تومان",
             brandTitele: "َApple",
             description: " گیران است گیران تر از هر گیران گوشی اپل ماست این گیران است این گیران است ما پول نداریم",
           },{
             productImg: "جینگیلی مستون",
             productTitle: "Apple iPhone 14 Pro",
             badgeTitle: "10,000 تومان",
             brandTitele: "َApple",
             description: " گیران است گیران تر از هر گیران گوشی اپل ماست این گیران است این گیران است ما پول نداریم",
           },
           {
             productImg: "جینگیلی مستون",
             productTitle: "Apple iPhone 14 Pro",
             badgeTitle: "10,000 تومان",
             brandTitele: "َApple",
             description: " گیران است گیران تر از هر گیران گوشی اپل ماست این گیران است این گیران است ما پول نداریم",
           },
           {
             productImg: "جینگیلی مستون",
             productTitle: "Apple iPhone 14 Pro",
             badgeTitle: "10,000 تومان",
             brandTitele: "َApple",
             description: " گیران است گیران تر از هر گیران گوشی اپل ماست این گیران است این گیران است ما پول نداریم",
           },{
             productImg: "جینگیلی مستون",
             productTitle: "Apple iPhone 14 Pro",
             badgeTitle: "10,000 تومان",
             brandTitele: "َApple",
             description: " گیران است گیران تر از هر گیران گوشی اپل ماست این گیران است این گیران است ما پول نداریم",
           }
     ]
     const brands=["Apple","Microsoft"]
  return (
    <main className="w-full h-full justify-center  flex ">
    <section className="w-[122rem] h-[60rem]  flex flex-row justify-start items-center mt-14 gap-24">
        {/* right....................................................... */}
        {/* {
  className?: string;
  labelStyle?: string;
  label?: string;
  id?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
} */}
    <section className="flex flex-col justify-start items-center h-full bg-base-side w-1/4">
    <div className=" bg-yellow-200 w-[95%] h-[32.8rem] gap-16 pt-5 flex flex-col justify-center items-center">
        <div className="w-full bg-pink-200 gap-2 flex flex-col justify-center items-center">
            <Button className="bg-base-menu w-full rounded-2xl py-3 px-[6.5rem] ">فیلتر برند</Button>
            {
                brands.map((brand,index)=>(

                    <Checkbox key={index} className="rounded-full flex flex-row justify-start bg-blue-400" label={brand}/>
                ))
            }
            <FilterByGroup/>
        </div>
        
        
        <div className="w-full bg-pink-200  flex flex-col justify-center items-center">palo</div>
    </div>
    
    
    
    </section>

    {/* left....................................................... */}
   
   
    <section className=" grid grid-cols-3 gap-4 h-full w-full overflow-y-scroll overflow-x-hidden">
        {shopCarts.map((cart,index)=>(

    <ShopProductCard  key={index} flexOptional="flex-col" heightOptional="h-[34.7rem]" productTitle={cart.productTitle}  productImg={cart.productImg}  badgeTitle={cart.badgeTitle}  brandTitele={cart.brandTitele}  description={cart.description}/>
        ))}
    </section>
    </section>
    </main>
  )
}

export default Shop
