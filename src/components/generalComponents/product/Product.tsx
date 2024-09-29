import pic from "./pic.jpg";
import { FaStar } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdInventory } from "react-icons/md";
import { TbBrandAppgallery } from "react-icons/tb";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import LikeIcon from "./likeIcon/LikeIcon";
import Button from "../../common/button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

const Product: React.FC = () => {
  const [isLiked, setIsLiked] = useState(true);
  const handleLikeIcon = () => {
    setIsLiked(!isLiked);
  };
  return (
    <div className=" flex flex-col w-[90%] h-full gap-5 justify-start items-center ">
      <LikeIcon handleLikeIcon={handleLikeIcon} isLiked={isLiked} />
      <div className="bg-red-700 w-[90%] h-[80%] flex justify-between items-center mt-[9.5rem] mx-auto">
        <img src={pic} alt="picture" className="w-[45%] h-full" />
        <div className=" w-[55%] h-full flex flex-col px-28 justify-between ">
          <p className="font-Iran-Yekan font-medium text-[2.4rem] text-text-primary text-right">
            Apple MacBook Air M2
          </p>
          <p className="text-text-primary font-normal text-[1.6rem] text-right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            saepe hic illo iste asperiores consequatur harum, autem obcaecati
            voluptas, ullam perspiciatis. Deleniti repudiandae, maiores labore
            illo, nemo quam tenetur, deserunt recusandae ipsa consequatur cumque
            culpa. Sequi quibusdam nam eligendi fugit perferendis iure harum
            error quasi quod ut nihil consequuntur asperiores eaque sunt
            voluptatem quam, magnam culpa at atque labore porro fugiat veniam
            sit deleniti. Nemo fugit temporibus impedit earum rerum doloremque
            culpa eos sapiente repudiandae ipsa. Aliquid harum et quidem,
            excepturi provident quam distinctio expedita, vel optio
            reprehenderit dicta? Odio provident iusto accusamus eligendi
            incidunt iste eum ipsam quasi iure.
          </p>
          <p className="text-text-primary text-right text-[4.8rem] font-medium font-Iran-Yekan">
            10000تومان
          </p>
          <div className="flex justify-between items-center font-normal text-[1.6rem]">
            <div className="flex flex-col justify-center items-start gap-6">
              <p className="flex justify-center items-center gap-1">
                <FaStar className="inline" />
                <p>
                  <span className="text-text-secondary">امتیاز</span> :
                </p>
                <span>5</span>
              </p>
              <p className="flex justify-center items-center gap-1">
                <FaCartShopping className="inline" />
                <p>
                  <span className="text-text-secondary">تعداد</span> :
                </p>
                <span>52</span>
              </p>
              <p className="flex justify-center items-center gap-1">
                <MdInventory className="inline" />
                <p>
                  <span className="text-text-secondary">موجودی</span> :
                </p>
                <span>10</span>
              </p>
            </div>
            <div className="flex flex-col justify-center items-start gap-6">
              <p className="flex justify-center items-center gap-1">
                <TbBrandAppgallery className="inline" />
                <p>
                  <span className="text-text-secondary">برند</span> :
                </p>
                <span>اپل</span>
              </p>
              <p className="flex justify-center items-center gap-1">
                <MdOutlineAccessTimeFilled className="inline" />
                <p>
                  <span className="text-text-secondary">زمان بروزرسانی</span> :{" "}
                </p>
                <span>چند لحظه قبل</span>
              </p>
              <p className="flex justify-center items-center gap-1">
                <FaStar className="inline" />
                <p>
                  <span className="text-text-secondary">نظرات</span> :
                </p>
                <span>4202</span>
              </p>
            </div>
          </div>
          <div className="flex justify-between w-full">
            <div className="flex justify-center items-center gap-2">
              <p className="font-normal text-[1.6rem] text-text-primary">
                5000 نظر
              </p>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
            </div>
            <select className="w-[9.6rem] h-[4rem] rounded-[0.8rem] p-[0.8rem] text-[1.6rem]">
              <option value="1">1</option>
            </select>
          </div>

          <Button className=" bg-primary-main text-text-button w-[14.3rem] h-[4rem] rounded-[0.8rem] text-center py-[0.8rem] px-[1.2rem]">
            افزودن به سبد خرید
          </Button>
        </div>
      </div>
      <div className="bg-black w-[90%] h-[80%] flex justify-between items-center mx-auto p-5 gap-4">
        <div className="bg-white text-[1.6rem] text-text-primary flex flex-col gap-4 w-[10%]">
          <Link to="/r1">نظرات</Link>
          <Link to="/r2">ثبت نظر</Link>
          <Link to="/r3">ممم</Link>
        </div>
        <div className="bg-white w-[90%] h-full ">a</div>
      </div>
    </div>
  );
};

export default Product;
