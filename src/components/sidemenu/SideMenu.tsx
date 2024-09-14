import { MdOutlinePersonAddAlt } from "react-icons/md";
import { IoEnterOutline } from "react-icons/io5";
import { useState } from "react";
import {
  AiOutlineShopping,
  AiOutlineHome,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdFavorite } from "react-icons/md";
import Sidebar from "./slidebar/Sidebar";
interface SlideListProps {
  icon: JSX.Element;
  name: string;
}
const sideMenuitems: SlideListProps[] = [
  { icon: <AiOutlineHome size={20} />, name: "داشبورد" },
  { icon: <AiOutlineShopping size={20} />, name: "فروشگاه" },
  { icon: <AiOutlineShoppingCart size={20} />, name: "سبد خرید" },
  { icon: <MdFavorite size={20} />, name: "علاقه مندی ها" },
];

const SideMenu = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [isLogin] = useState<boolean>(true);
  const [user] = useState<string>("ادمین");
  const [countOfProduct] = useState<number>(2);

  return (
    <aside
      className={`h-screen font-Iran-Yekan flex justify-between  bg-base-menu  text-text-primary  flex-col overflow-hidden  transition-width duration-700 ease-in-out ${
        expanded ? "w-[22.5rem]" : "w-[5rem]"
      }`}
      onClick={() => setExpanded(!expanded)}
    >
      <nav
        className={`  overflow-hidden justify-between items-center   top-5   text-right  transition-width duration-700 ease-in-out flex  flex-col ${
          expanded ? "w-[20.5rem]" : "w-[5rem]"
        }`}
      >
        <ul
          className={`flex flex-col  gap-12 pt-4  items-center justify-center overflow-hidden transition-width duration-700 ease-in-out  rounded-sm  ${
            expanded ? "w-[20.5rem]" : "w-[5rem]"
          }`}
        >
          {sideMenuitems.map(
            (item: { icon: JSX.Element; name: string }, index: number) => (
              <Sidebar
                key={index}
                i={index}
                name={item.name}
                icon={item.icon}
                expanded={expanded}
                countOfProduct={countOfProduct}
              />
            )
          )}
        </ul>
      </nav>
      <div>
        {isLogin ? (
          <div className="flex flex-row  justify-start items-center px-6  pb-4">
            <p className="text-[1rem] ">{user}</p>
            <button>
              <RiArrowDropDownLine />
            </button>
          </div>
        ) : (
          <div>
            <div
              className={`flex px-6  pb-4 active:text-[#DB2777] hover:bg-red flex-row overflow-hidden gap-[.6rem] cursor-pointer h-11 items-center ${
                expanded ? "w-[20.5rem]" : "w-[5rem]"
              } `}
              onClick={() => setExpanded(!expanded)}
            >
              <span>
                <IoEnterOutline size={20} />
              </span>
              <span
                className={`overflow-hidden text-[1rem]  transition-width duration-700 ease-in-out ${
                  expanded ? "w-[20.5rem]" : "w-0"
                }`}
              >
                ورود
              </span>
            </div>
            <div
              className={`flex px-6  pb-4 active:text-[#DB2777] flex-row transition-width duration-700 ease-in-out overflow-hidden gap-[.6rem] cursor-pointer h-11 items-center ${
                expanded ? "w-[20.5rem]" : "w-[5rem]"
              } `}
              onClick={() => setExpanded(!expanded)}
            >
              <span>
                <MdOutlinePersonAddAlt size={20} />
              </span>
              <span
                className={`overflow-hidden text-[1rem]  transition-width duration-700 ease-in-out ${
                  expanded ? "w-[20.5rem]" : "w-0"
                }`}
              >
                ثبت نام
              </span>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
export default SideMenu;
