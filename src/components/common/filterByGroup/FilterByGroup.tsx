import { useEffect, useState } from "react";
import Checkbox from "../checkbox/Checkbox";
interface IBrand {
  name: string;
  _id: string;
  __v: number;
}
interface IProductCard {
  _id: string;
  image: string;
  name: string;
  price: number;
  category?: IBrand[];
  description: string;
  quantity: number;
  rating: number;
  numReviews: number;
  countInStock: number;
  reviews: [];
  createdAt: string;
  updatedAt: string;
  __v: number;
}
interface IFilterByGroup {
  categories: IBrand[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<IProductCard[]>>;
  products: IProductCard[];
  isClear?: boolean;
  setClear?: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterByGroup: React.FC<IFilterByGroup> = ({
  categories,
  setFilteredProducts,
  products,
  isClear,
  setClear,
}) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  function toggleCategorySelection(categoryId: string): void {
    setClear?.(false);
    setSelectedCategories((prev) => {
      return prev.includes(categoryId)
        ? prev.filter((cat) => cat !== categoryId)
        : [...prev, categoryId];
    });
  }

  useEffect(() => {
    if (selectedCategories.length !== 0) {
      const filteredProducts: IProductCard[] = products.filter((product) =>
        selectedCategories.includes(product.category?._id)
      );
      setFilteredProducts(filteredProducts);
    } else {
      setFilteredProducts(products);
    }
  }, [selectedCategories, products]);

  return (
    <div className="flex flex-col h-96  items-start">
      <div className="bg-white text-black w-[24rem] h-[4rem] rounded-full flex justify-center items-center px-[5.2rem] py-1 mb-8">
        فیلتر دسته بندی
      </div>
      <div className=" h-3/4 overflow-y-auto w-full">
      {categories.map((category, index) => (
        <Checkbox
        key={index}
        label={category.name}
        checked={
          isClear ? !isClear : selectedCategories.includes(category._id)
        }
        onChange={() => toggleCategorySelection(category._id)}
        containerStyle="flex flex-row-reverse justify-end gap-2 my-3 mx-8"
        />
      ))}
      </div>
    </div>
  );
};
export default FilterByGroup;
