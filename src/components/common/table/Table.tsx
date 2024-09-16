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
  headers: string[];
}

const Table = ({
  items,
  optionalWidth,
  optionalHeight,
  headers,
}: ITableProps) => {
  return (
    <table
      className={`${optionalWidth} ${optionalHeight} flex flex-col justify-center p-10`}
    >
      <thead className="w-full flex justify-between items-center border-b-2 font-normal text-[1.6rem] text-text-primary font-Iran-Yekan">
        <tr className=" flex w-full justify-between items-center">
          <th className="w-[40%] flex justify-start gap-5 items-center">
            <span className=" w-[10%]">عکس</span>
            <span className=" w-[90%] flex justify-start">نام محصول</span>
          </th>
          {headers.map((head, index) => (
            <th key={index} className=" w-[20%] flex justify-center">
              {head}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="flex flex-col gap-4 justify-center ">
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
  );
};

export default Table;
