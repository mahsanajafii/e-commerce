import { NavLink } from "react-router-dom";

interface SlideProps {
  icon: JSX.Element;
  name: string;
  expanded: boolean;
  i: number;
  countOfProduct: number;
  linkTo: string;
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
    <>
      <NavLink
        to={linkTo}
        className={`flex transition-width duration-500 w-[16rem] active:text-dark-menu-active-item hover:bg-[#DB277714] items-center flex-row overflow-hidden rounded-md gap-4 cursor-pointer h-16 ${
          !expanded && "w-[2.4rem]"
        } `}
      >
        {countOfProduct !== 0 && i === 2 ? (
          <div className="relative inline-block">
            <span className="top-[-.3rem] right-[-.1rem] text-white border rounded-[50%] w-5 h-5  px-1 text-xs flex justify-center items-center absolute bg-primary-main">
              {countOfProduct}
            </span>
            <span className="dark:text-dark-text-primary">{icon}</span>
          </div>
        ) : (
          <span className="dark:text-dark-text-primary">{icon}</span>
        )}
        <h2
          style={{ transitionDelay: `${i + 3}00ms` }}
          className={`whitespace-pre h-9 font-normal leading-9 text-[1.6rem] duration-500 dark:text-dark-text-primary ${
            !expanded && "opacity-0 translate-x-48 overflow-hidden"
          }`}
        >
          {name}
        </h2>
      
      </NavLink>
    </>
  );
};

export default Sidebar;
