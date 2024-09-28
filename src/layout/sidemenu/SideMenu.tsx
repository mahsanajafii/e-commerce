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
import { useSidebarStore } from "../../stores/sidebarStore";

const sideMenuitems: SlideListProps[] = [
  { icon: <AiOutlineHome size={20} />, name: "داشبورد" },
  { icon: <AiOutlineShopping size={20} />, name: "فروشگاه" },
  { icon: <AiOutlineShoppingCart size={20} />, name: "سبد خرید" },
  { icon: <MdFavorite size={20} />, name: "علاقه مندی ها" },
];

const SideMenu = () => {
  const { expanded, setExpanded } = useSidebarStore()
  const [isLogin] = useState<boolean>(false);
  const [user] = useState<string>("ادمین");
  const [countOfProduct] = useState<number>(2);

  return (
    <aside
      className={`h-screen font-Iran-Yekan fixed flex justify-between bg-base-menu text-text-primary flex-col overflow-hidden transition-width duration-700 ease-in-out ${
        expanded ? "w-[22rem]" : "w-[8rem]"
      }`}
      onClick={() => setExpanded()}
    >
      <nav
        className={`  overflow-hidden justify-between items-center   top-8   text-right  transition-width duration-700 ease-in-out flex  flex-col ${
          expanded ? "w-[22rem]" : "w-[8rem]"
        }`}
      >
        <ul
          className={`flex flex-col  gap-16 pt-6 items-center justify-center overflow-hidden transition-width duration-700 ease-in-out   ${
            expanded ? "w-[16rem]" : "w-[8rem]"
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
          <div className="flex flex-row justify-center items-center w-32 h-10  pb-4">
            <p className="text-[1.6rem] ">{user}</p>
            <button>
              <RiArrowDropDownLine />
            </button>
          </div>
        ) : (
          <div>
            <div
              className={`flex  justify-center  pb-4 active:text-[#DB2777] flex-row transition-width duration-700 ease-in-out overflow-hidden gap-4 cursor-pointer h-11 items-center ${
                expanded ? "w-[16rem] pr-14" : "w-[8rem]"
              } `}
              onClick={() => setExpanded()}
            >
              <span>
                <IoEnterOutline size={20} />
              </span>
              <span
                className={`overflow-hidden text-[1.6rem]  transition-width duration-700 ease-in-out ${
                  expanded ? "w-[16rem]" : "w-0"
                }`}
              >
                ورود
              </span>
            </div>
            <div
              className={`flex  justify-center  pb-4 active:text-[#DB2777] flex-row transition-width duration-700 ease-in-out overflow-hidden gap-4 cursor-pointer h-11 items-center ${
                expanded ? "w-[16rem] pr-14" : "w-[8rem]"
              } `}
              onClick={() => setExpanded()}
            >
              <span>
                <MdOutlinePersonAddAlt size={20} />
              </span>
              <span
                className={`overflow-hidden text-[1.6rem]  transition-width duration-700 ease-in-out ${
                  expanded ? "w-[16rem]" : "w-0"
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
