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
      className={` flex  active:text-[#DB2777] px-2  hover:bg-[#DB277714] flex-row overflow-hidden rounded-[4px] gap-[5px] cursor-pointer h-full items-center ${
        expanded ? "w-[328px]" : "w-[24px]"
      } `}
    >
      {countOfProduct !== 0 && i === 2 ? (
        <div className=" relative inline-block">
          <span className="top-[-8px] right-[-6px]  text-white border rounded-[50%]  px-0.5 text-xs absolute bg-red-600">
            {countOfProduct}
          </span>
          <span>{icon}</span>
        </div>
      ) : (
        <span>{icon}</span>
      )}

      <span className={`overflow-hidden ${expanded ? "w-[200px]" : "w-0"}`}>
        {name}
      </span>
    </li>
  );
};

export default Sidebar;
