import { NavLink } from "react-router-dom";

interface SlideProps {
  icon: JSX.Element;
  name: string;
  expanded: boolean;
  i: number;
  countOfProduct: number;
  linkTo:string
}
const Sidebar: React.FC<SlideProps> = ({
  name,
  icon,
  expanded,
  countOfProduct,
  i,
  linkTo,
}) => {
  return (
    <NavLink to={linkTo}
      className={` flex transition-width duration-700   ease-in-out active:text-dark-menu-active-item   hover:bg-[#DB277714] items-center flex-row overflow-hidden rounded-md gap-4 cursor-pointer h-16  ${expanded ? "w-[16rem] pr-6" : "w-[2.4rem]"} `}
       >
      {countOfProduct !== 0 && i === 2 ? (
        <div className=" relative inline-block">
          <span className="top-[-.3rem] right-[-.1rem]  text-white border rounded-[50%] w-5 h-5  px-1 text-xs flex justify-center items-center absolute bg-primary-main">
            {countOfProduct}
          </span>
          <span>{icon}</span>
        </div>
      ) : (
        <span>{icon}</span>
      )}
      <span
        className={`overflow-hidden transition-width h-9 font-normal leading-9 text-[1.6rem]  duration-700 ease-in-out ${
          expanded ? "w-fit" : "w-0"
        }`}
      >
        {name}
      </span>
    </NavLink>
  );
};

export default Sidebar;
