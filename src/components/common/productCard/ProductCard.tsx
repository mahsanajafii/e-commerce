import React from "react";
import Badge from "../badge/Badge";

interface IProductCardProps {
  productTitleStyle?: string;
  productTitle: string;
  badgeTitle: string;
  padding: "px-2" | "px-2.5";
  fontSize: "text-[1.1rem]" | "text-[1.2rem]";
}

const ProductCard: React.FC<IProductCardProps> = ({
  productTitle,
  productTitleStyle,
  badgeTitle,
  padding,
  fontSize,
}) => {
  return (
    <div className="flex flex-col max-w-[40.4rem] max-h-[38.6rem] bg-white gap-4 justify-between items-center">
      <div className="max-w-[404px] h-[346px] bg-[#DFE3E8] rounded-md"></div>
      <div className="flex justify-between items-center gap-[12.2rem] max-w-[40.4rem] h-[2.4rem]">
        <p className={productTitleStyle}>{productTitle}</p>
        <Badge padding={padding} fontSize={fontSize}>
          {badgeTitle}
        </Badge>
      </div>
    </div>
  );
};

export default ProductCard;
