import { MdOutlinePersonAddAlt } from "react-icons/md";
import { IoEnterOutline } from "react-icons/io5";
import { useEffect } from "react";
import {
  AiOutlineShopping,
  AiOutlineHome,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { MdFavorite } from "react-icons/md";
import Sidebar from "./slidebar/Sidebar";
interface SlideListProps {
  icon: JSX.Element;
  name: string;
  linkTo: string;
}
import { useSidebarStore } from "../../stores/sidebarStore";
import { NavLink } from "react-router-dom";
import { useAuthStatus } from "../../stores/authStore";
import { adminStore } from "../../stores/adminStore";
import { useDropDownStore } from "../../stores/dropDownStore";
import UserDropDown from "./dropDowns/UserDropDown";
import CartStore from "../../stores/cartStore";
// import DarkModeLogo from "../darkMode/darkModeLogo/DarkModeLogo";

const SideMenu = () => {
  const { expanded, setExpanded } = useSidebarStore();
  const { dropDown, setDropDown } = useDropDownStore();
  const { isAuth } = useAuthStatus();
  const { isAdmin } = adminStore();
  const { cartItems } = CartStore();
  const countOfProduct = cartItems.length;
  const sideMenuitems: SlideListProps[] = [
    { icon: <AiOutlineHome size={20} />, name: "خانه", linkTo: "/dashboard" },
    { icon: <AiOutlineShopping size={20} />, name: "فروشگاه", linkTo: "/shop" },
    {
      icon: <AiOutlineShoppingCart size={20} />,
      name: "سبد خرید",
      linkTo: "/cart",
    },
    {
      icon: <MdFavorite size={20} />,
      name: "علاقه مندی ها",
      linkTo: "/favorites",
    },
  ];

  useEffect(() => {
    if (!expanded && dropDown) setDropDown();
  }, [expanded, dropDown, setDropDown]);

  return (
    <aside
      className={`h-screen z-50  font-Iran-Yekan fixed flex justify-between bg-base-menu text-text-primary flex-col overflow-hidden transition-width duration-500  ${
        expanded ? "w-[22rem]  shadow-primary-dark shadow-2xl" : "w-[8rem]"
      }`}
      onClick={() => setExpanded()}
    >
      <div className=" gap-16 flex flex-col">
        <nav
          className={`overflow-hidden justify-center items-center gap-16 pt-6    text-right   duration-500  flex  flex-col ${
            expanded ? "w-[22rem]" : "w-[8rem]"
          }`}
        >
          {sideMenuitems.map((item: SlideListProps, index) => (
            <Sidebar
              key={index}
              i={index}
              name={item.name}
              icon={item.icon}
              expanded={expanded}
              countOfProduct={countOfProduct}
              linkTo={item.linkTo}
            />
          ))}
        </nav>
        <span className={` pr-6  ${expanded ? "w-[22rem]" : "w-[8rem]"}`}>
          {/* <DarkModeLogo  /> */}
        </span>
      </div>
      <div>
        {isAuth ? (
          <div className="flex relative flex-col justify-center items-center pb-4">
            {dropDown && <UserDropDown isAdmin={isAdmin} />}
            <div className="flex flex-row justify-start items-center px-3 w-full h-10  pb-4">
              <p className="text-[1.6rem] ">{isAdmin ? "ادمین" : "کاربر"}</p>
              <button onClick={() => setDropDown()}>
                {dropDown ? (
                  <RiArrowDropUpLine size={20} />
                ) : (
                  <RiArrowDropDownLine size={20} />
                )}
              </button>
            </div>
          </div>
        ) : (
          <div>
            <NavLink
              to="/login"
              className={`  flex  duration-500 pr-12 w-[16rem]  active:text-dark-menu-active-item   hover:bg-[#DB277714] items-center flex-row o rounded-md gap-4 cursor-pointer h-16  ${
                expanded ? "w-[16rem]" : "w-[8rem]"
              } `}
            >
              <span>
                <IoEnterOutline size={20} />
              </span>
              <h2
                style={{ transitionDelay: `${sideMenuitems.length + 4}00ms` }}
                className={` text-[1.6rem]   duration-500  ${
                  !expanded && "w-0 translate-x-48 overflow-hidden"
                }`}
              >
                ورود
              </h2>
            </NavLink>
            <NavLink
              to="/register"
              className={`  flex  duration-500 pr-12 w-[16rem]  active:text-dark-menu-active-item   hover:bg-[#DB277714] items-center flex-row o rounded-md gap-4 cursor-pointer h-16  ${
                expanded ? "w-[16rem]" : "w-[8rem]"
              } `}
            >
              <span>
                <MdOutlinePersonAddAlt size={20} />
              </span>
              <h2
                style={{ transitionDelay: `${sideMenuitems.length + 5}00ms` }}
                className={` text-[1.6rem]   duration-500  ${
                  !expanded && "w-0 translate-x-48 overflow-hidden"
                }`}
              >
                ثبت نام
              </h2>
            </NavLink>
          </div>
        )}
      </div>
    </aside>
  );
};
export default SideMenu;
