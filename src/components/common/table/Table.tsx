interface ITableItem {
  imageSource: string;
  productTitle: string;
  productCount: number;
  productPrice: string;
  totalProce: string;
}

interface ITableProps {
  items: ITableItem[];
  optionalWidth?: string;
  optionalHeight?: string;
}

const Table = ({ items, optionalWidth, optionalHeight }: ITableProps) => {
  return (
    <div
      className={`${optionalWidth} ${optionalHeight} flex justify-center items-center p-5`}
    >
      <table className="w-full h-full ">
        <thead className="flex justify-between items-center p-3 border-b-2 font-normal text-[1.6rem] text-text-primary font-Iran-Yekan">
          <tr className=" flex w-full justify-between items-center">
            <th className="w-[40%] flex justify-start gap-5 items-center">
              <span className=" w-[10%]">عکس</span>
              <span className=" w-[90%] flex justify-start">نام محصول</span>
            </th>
            <th className=" w-[20%] flex justify-center">تعداد</th>
            <th className=" w-[20%] flex justify-center">قیمت</th>
            <th className=" w-[20%] flex justify-center">قیمت نهایی</th>
          </tr>
        </thead>
        <tbody className="flex flex-col gap-4 justify-center p-3">
          {items.map((item, index) => (
            <tr
              key={index}
              className=" flex justify-between items-center  font-Iran-Yekan font-normal text-[1.6rem] text-text-primary"
            >
              <td className="w-[40%] flex justify-start gap-5 items-center">
                <img
                  src={item.imageSource}
                  alt="Product"
                  className="w-[10%] h-[10%]"
                />
                <span className="w-[90%] flex justify-start">
                  {item.productTitle}
                </span>
              </td>
              <td className="w-[20%] flex justify-center items-center ">
                {item.productCount}
              </td>
              <td className="w-[20%] flex justify-center items-center">
                {item.productPrice}
              </td>
              <td className="w-[20%] flex justify-center items-center">
                {item.totalProce}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
