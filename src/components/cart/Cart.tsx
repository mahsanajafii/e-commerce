import { MdDeleteForever } from "react-icons/md";
import Button from "../common/button/Button";
const Cart = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <div className="bg-red-500 w-[90%] h-[48.4rem] gap-[3.2rem] flex flex-col">
        <div className="bg-yellow-400 w-full h-[70%]">
          <div className="bg-slate-500 flex justify-between items-center h-[25%]">
            <div></div>
            <div></div>
            <div className="bg-red-500 flex gap-[1.6rem] pl-3 justify-center items-center">
              <select className="w-[5.2rem] h-[2.3rem]"></select>
              <MdDeleteForever className="w-[1.4rem] h-[1.6rem] text-red-700 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="w-[50%] h-[30%] flex flex-col justify-between">
          <p className="text-[2rem] font-medium font-Iran-Yekan text-text-primary">
            تعداد (3)
          </p>
          <p className="font-Iran-Yekan text-text-primary text-[2.4rem]">
            10،000تومان
          </p>
          <Button className="bg-primary-main rounded-full text-text-button font-bold text-[2rem] py-3">
            تکمیل خرید
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
