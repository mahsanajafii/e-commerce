import pic from "./pic.jpg";

const ShoppingProgress3 = () => {
  const datas = [
    {
      img: { pic },
      title: "گوشی موبایل",
      count: 1,
      price: "12000",
      totalPrice: "12000",
    },
    {
      img: { pic },
      title: "عینک",
      count: 1,
      price: "10000",
      totalPrice: "10000",
    },
    {
      img: { pic },
      title: "ضبط",
      count: 1,
      price: "130809",
      totalPrice: "130809",
    },
  ];
  return (
    <div className="w-full h-full flex items-center">
      <div className="h-fit w-full flex flex-col justify-center items-center gap-28 bg-yellow-300">
        <div className="bg-red-400 w-full h-24 gap-6 "> steper</div>
        <div className="w-5/6 h-96 gap-16 bg-gray-600">
          <table className="border-2 w-full gap-12 bg-green-400">
            <thead className="flex justify-between items-center  p-3 w-full border-yellow-500">
              <tr className=" border-2 w-full flex flex-row gap-6 justify-between items-center">
                {/* <th className="flex flex-row gap-6">
                  <span>pic</span>
                  <span>pro</span>
                </th> */}
                <th  className=" bg-orange-500 ">عکس</th>
                <th colSpan={2} className="w-fit bg-orange-400">نام محصول</th>
                <th className=" bg-orange-300" >تعداد</th>
                <th className=" bg-orange-200 ">قیمت</th>
                <th className=" bg-orange-100 ">قیمت نهایی</th>
              </tr>
            </thead>
            <tbody className="w-full bg-pink-500">
              {datas.map((data, index) => (
                <tr
                  className=" border-2 border-dark-base-text-field  bg-blue-100"
                  key={index}
                >
                  <td className=" w-[30%] flex items-center gap-10">
                    <img src={pic} alt="Product" className="w-20 h-20" />
                    <span>{data.title}</span>
                  </td>
                  <td>{data.count}</td>
                  <td>{data.price}</td>
                  <td>{data.totalPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShoppingProgress3;
