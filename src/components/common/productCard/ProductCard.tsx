import React, { useState } from "react";
import Badge from "../badge/Badge";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { useFavoritesStore } from "../../../stores/favoritesStore";
import { Link } from "react-router-dom";
interface IProductCardProps {
  id: string;
  src?: string;
  alt?: string;
  loading?: "lazy" | "eager";
  productTitleStyle?: string;
  productTitle: string;
  badgeTitle: string;
  padding: "px-2" | "px-2.5";
  fontSize: "text-[1.1rem]" | "text-[1.2rem]";
  id?: string;
}

const ProductCard: React.FC<IProductCardProps> = ({
  id,
  src,
  alt,
  loading,
  productTitle,
  productTitleStyle,
  badgeTitle,
  padding,
  fontSize,
  id,
}) => {

  const { favoriteProductsId, addToFavorites, removeFromFavorites } = useFavoritesStore()
  const [favorite, setFavorite] = useState(favoriteProductsId.includes(id));
  const handleFavoriteClick = () =>{
    setFavorite(!favorite);
    
    if (favorite) {
      addToFavorites(id)
    } else {
      removeFromFavorites(id)
    }
  };


  return (
    <Link to={`/product/${id}`} className="relative flex flex-col max-w-[40.4rem] max-h-[38.6rem] gap-4 justify-between items-center">
      <img className="relative w-full object-contain max-h-[34.6rem] rounded-md" src={src} alt={alt}
      loading={loading}/>
      <div className="absolute top-6 right-6" onClick={handleFavoriteClick}>{favorite ? <IoMdHeart className="text-[#DB2777]"/> : <IoMdHeartEmpty /> }</div>
      <div className="flex flex-row justify-between items-center w-full h-[2.4rem]">
        <p className={productTitleStyle}>{productTitle}</p>
        <Badge padding={padding} fontSize={fontSize}>
          {badgeTitle}
        </Badge>
      </div>
    </Link>
  );
};

export default ProductCard;
