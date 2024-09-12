import { MdOutlinePersonAddAlt } from "react-icons/md";
import DarkMode from "./../darkMode/DarkMode";
import { IoEnterOutline } from "react-icons/io5";
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdFavorite } from "react-icons/md";
import Sidebar from "./Sidebar";
interface SlideListProps {
  icon: JSX.Element;
  name: string;
}
const sideMenuitems: SlideListProps[] = [
  { icon: <FaHome />, name: "home" },
  { icon: <AiOutlineShopping />, name: "store" },
  { icon: <HiOutlineShoppingCart />, name: "Shopping cart" },
  { icon: <MdFavorite />, name: "favorite" },
];

const SideMenu = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [isLogin] = useState<boolean>(true);
  const [user] = useState<string>("admin");
  const [countOfProduct] = useState<number>(2);

  return (
    
      <aside
        className={`h-screen flex justify-between  bg-black text-white flex-col overflow-hidden  transition-all ${
          expanded ? "w-[360px]" : "w-[80px]"
        }`}
        onClick={() => setExpanded(!expanded)}
      >
        <nav
          className={`  overflow-x-hidden transition-all   pt-4 top-[20px] left-[654px]   text-right text-[16px]  flex  flex-col ${
            expanded ? "w-[328px]" : "w-[80px]"
          }`}
        >
          <ul
            className={`flex flex-col px-4 gap-[48px]  overflow-hidden transition-all  rounded-sm  ${
              expanded ? "w-[328px]" : "w-[80px]"
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
          {expanded ? (
            <div className=" mr-4 h-2 cursor-pointer mb-14 items-center w-2">
              <DarkMode />
            </div>
          ) : null}
          {isLogin ? (
            <div className="flex flex-row  justify-start items-center p-4">
              <p>{user}</p>
              <button>
                <RiArrowDropDownLine />
              </button>
            </div>
          ) : (
            <div>
              <div
                className={`flex pr-6 active:text-[#DB2777] hover:bg-red flex-row overflow-hidden gap-[5px] cursor-pointer h-[42px] items-center ${
                  expanded ? "w-[328px]" : "w-[80px]"
                } `}
                onClick={() => setExpanded(!expanded)}
              >
                <span>
                  <IoEnterOutline />
                </span>
                <span
                  className={`overflow-hidden ${
                    expanded ? "w-[200px]" : "w-0"
                  }`}
                >
                  Enter
                </span>
              </div>
              <div
                className={`flex px-6  pb-4 active:text-[#DB2777] flex-row overflow-hidden gap-[10px] cursor-pointer h-[42px] items-center ${
                  expanded ? "w-[328px]" : "w-[80px]"
                } `}
                onClick={() => setExpanded(!expanded)}
              >
                <span>
                  <MdOutlinePersonAddAlt />
                </span>
                <span
                  className={`overflow-hidden ${
                    expanded ? "w-[200px]" : "w-0"
                  }`}
                >
                  register
                </span>
              </div>
            </div>
          )}
        </div>
      </aside>
    
  );
};
export default SideMenu;
