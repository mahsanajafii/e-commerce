import pic from "./pic.jpg";
import { FaStar } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdInventory } from "react-icons/md";
import { TbBrandAppgallery } from "react-icons/tb";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
// import { FaRegHeart } from "react-icons/fa6";
// import { FaHeart } from "react-icons/fa6";
import LikeIcon from "./likeIcon/LikeIcon";
import Button from "../common/button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
const Product: React.FC = () => {
  const [isLiked, setIsLiked] = useState(true);
  const handleLikeIcon = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    setIsLiked(!isLiked);
  };
  return (
    <div className="bg-yellow-300 flex flex-col pt-[9.5rem] relative h-full px-[5.2rem]">
      <LikeIcon handleLikeIcon={handleLikeIcon} isLiked={isLiked} />
      {/* {isLiked ? (
        <FaRegHeart
          onClick={handleHeart}
          className="absolute left-[7.6rem] top-[10.3rem] text-5xl cursor-pointer"
        />
      ) : (
        <FaHeart
          fill={`#DB2777`}
          onClick={handleHeart}
          className="absolute left-[7.6rem] top-[10.3rem] text-5xl cursor-pointer"
        />
      )} */}
    </div>
  );
};

export default Product;
