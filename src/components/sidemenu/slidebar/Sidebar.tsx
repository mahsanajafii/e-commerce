interface SlideProps {
  icon: JSX.Element;
  name: string;
  expanded: boolean;
  i: number;
  countOfProduct: number;
}
const Sidebar: React.FC<SlideProps> = ({
  name,
  icon,
  expanded,
  countOfProduct,
  i,
}) => {
  return (
    <li
      className={` flex transition-width duration-700   ease-in-out active:text-dark-menu-active-item   hover:bg-[#DB277714] items-center flex-row overflow-hidden rounded-[.25rem] gap-[.6rem] cursor-pointer h-11  ${
        expanded ? "w-[20.5rem] pr-6" : "w-[1.5rem]"
      } `}
    >
      {countOfProduct !== 0 && i === 2 ? (
        <div className=" relative inline-block">
          <span className="top-[-.6rem] right-[-.1rem]  text-white border rounded-[50%]  px-1 text-xs absolute bg-red-600">
            {countOfProduct}
          </span>
          <span>{icon}</span>
        </div>
      ) : (
        <span>{icon}</span>
      )}
      <span
        className={`overflow-hidden transition-width h-5 font-normal leading-5 text-[1rem]  duration-700 ease-in-out ${
          expanded ? "w-fit" : "w-0"
        }`}
      >
        {name}
      </span>
    </li>
  );
};

export default Sidebar;
