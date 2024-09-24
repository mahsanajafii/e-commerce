import React from "react";
import Badge from "../../badge/Badge";
import Button from "../../button/Button";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoArrowLeft } from "react-icons/go";

interface IProductCardProps {
  productImg: string;
  productTitle: string;
  badgeTitle: string;
  brandTitele?: string;
  description: string;
  flexOptional: string;
  heightOptional: string;
}

const ShopProductCard: React.FC<IProductCardProps> = ({
  productTitle,
  productImg,
  badgeTitle,
  brandTitele,
  description,
  flexOptional,
  heightOptional,
}) => {
  return (
    <div
      className={` rounded-3xl flex ${flexOptional} w-full ${heightOptional}  justify-between items-center `}
    >
      <div className=" bg-white flex flex-col justify-center items-center w-full h-1/2 p-8">
        {productImg}
        {brandTitele ? (
          <div className="r-3">
            <Badge padding="px-2.5" fontSize="text-[1.2rem]">
              {brandTitele}
            </Badge>
          </div>
        ) : null}
      </div>
      <div className="bg-base-side flex flex-col justify-center items-center w-full h-1/2 ">
        <div className=" w-[90%] h-14 flex-row flex justify-between">
          <p className="w-[70%] h-11 font-normal text-[1.5rem] font-Segoe leading-10 text-text-primary">
            {productTitle}
          </p>
          <p className="font-bold text-xl w-fit text-primary-main">
            {badgeTitle}
          </p>
        </div>
        <p className=" line-clamp-2 font-normal text-2xl text-text-secondary">
          {description}
        </p>
        <div className=" h-20 w-[90%] pt-5  flex-row flex justify-between">
          <Button className="w-[40%] h-14 rounded-xl text-text-button px-5 py-3 bg-primary-main  font-normal text-lg text-center flex flex-row  justify-center items-center">
            مشاهده بیشتر{" "}
            <span>
              <GoArrowLeft />
            </span>{" "}
          </Button>
          <AiOutlineShoppingCart size={30} />
        </div>
      </div>
    </div>
  );
};

export default ShopProductCard;
