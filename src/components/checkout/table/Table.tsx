import pic from "./pic.jpg";

const Table = () => {
  return (
    <div className="w-[60%] h-[50%] flex justify-center items-center p-5">
      <table className="w-full h-full gap-3">
        <thead className="flex justify-between items-center p-3 border-b-2 font-normal text-[1.6rem] text-text-primary font-Iran-Yekan">
          <tr className=" flex w-full justify-between items-center">
            <th>عکس</th>
            <th colSpan={2}>نام محصول</th>
            <th className="w-[20%] flex justify-end">قیمت</th>
            <th className="w-[10%] flex justify-end">تعداد</th>
            <th className="w-[10%] flex justify-end">قیمت نهایی</th>
          </tr>
        </thead>
        <tbody className="flex flex-col gap-4 justify-center p-3">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <tr
                key={index}
                className=" flex justify-between items-center  font-Iran-Yekan font-normal text-[1.6rem] text-text-primary"
              >
                <td className="w-[30%] flex items-center gap-10">
                  <img src={pic} alt="Product" className="w-20 h-20" />
                  <span>Apple iPhone 14 Pro</span>
                </td>
                <td className="pl-8  w-[20%] flex justify-end">$ 999.00</td>
                <td className="pl-10 w-[10%] flex justify-end">1</td>
                <td className=" w-[10%] flex justify-end">$ 999.00</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
