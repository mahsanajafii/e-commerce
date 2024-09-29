import Button from "../../common/button/Button";
import FilterByGroup from "../../common/filterByGroup/FilterByGroup";
import Input from "../../common/input/Input";
import ShopProductCard from "../../common/productCard/shopProductCard/ShopProductCard";

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

const Shop: React.FC<IShopProps> = ({ shopProducts }) => {
  const brands = ["Apple", "Microsoft"];
  return (
    <main className="w-full h-full justify-center  flex ">
      <section className="w-[122rem] h-[60rem]  flex flex-row justify-start items-center mt-14 gap-24">
        <section className="flex flex-col justify-start items-center h-full bg-base-side w-[27rem]">
          <div className="w-[25rem]  text-[1.6rem] leading-10  font-normal gap-16 flex flex-col pt-5 justify-center items-center">
            <FilterByGroup topics={brands} />
            <div className="flex flex-col items-center justify-center gap-3">
              <div className="bg-white  text-text-primary  text-[1.6rem] leading-10  font-normal w-[24rem] h-[4rem] rounded-full flex justify-center items-center  py-1 mb-8">
                فیلتر قیمت
              </div>
              <Input
                inputStyle={
                  "w-80 h-16 text-[1.4rem] leading-8 font-normal text-text-secondary rounded-xl border-gray-200 px-5 py-4 border"
                }
                labelStyle={""}
                placeholder="قیمت را وارد نمایید"
                id={"قیمت"}
              />
            </div>
            <Button
              className="w-80 h-10 text-[1.6rem] leading-10  font-normal border border-gray-400 rounded-md  text-center"
              children={"حذف فیلتر ها"}
            />
          </div>
        </section>

        <section className=" grid grid-cols-3 gap-4 h-full w-full overflow-y-scroll overflow-x-hidden">
          {shopProducts.map((product, index) => (
            <ShopProductCard
              key={index}
              flexOptional="flex-col"
              heightOptional="h-[34.7rem]"
              productTitle={product.productTitle}
              productImg={product.productImg}
              badgeTitle={product.badgeTitle}
              brandTitele={product.brandTitele}
              description={product.description}
            />
          ))}
        </section>
      </section>
    </main>
  );
};

export default Shop;
