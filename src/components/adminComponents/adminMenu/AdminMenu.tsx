import { useState } from "react";
import LogoAdminMenu from "./logoAdminMenu/LogoAdminMenu";

const AdminMenu = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handelClick = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="absolute left-12 top-12 rounded-xl flex ">
      <LogoAdminMenu handelClick={handelClick} />
      <div
        className={` absolute top-[2rem] w-[17rem] transition-opacity duration-500 ease-in-out bg-base-side border  h-[22.8rem] border-base-text-field-stroke py-6 px-3 gap-6 left-[2rem] rounded-xl ${
          isChecked ? "opacity-100 " : "opacity-0"
        } `}
      >
        <ul className="flex  flex-col gap-6 transition-width duration-700 ease-in-out justify-around items-center h-full text-text-primary text-2xl leading-8 font-normal">
          <li
            className={`transition-width duration-700 ease-in-out h-[3.7rem] gap-4 rounded-lg p-3 cursor-pointer hover:bg-[#DB277714] ${
              isChecked ? " w-full" : " w-0"
            }`}
          >
            داشبورد
          </li>
          <li
            className={`transition-width duration-700 ease-in-out h-[3.7rem] gap-4 rounded-lg p-3 cursor-pointer hover:bg-[#DB277714] ${
              isChecked ? " w-full" : " w-0"
            }`}
          >
            محصول جدید
          </li>
          <li
            className={`transition-width duration-700 ease-in-out h-[3.7rem] gap-4 rounded-lg p-3 cursor-pointer hover:bg-[#DB277714] ${
              isChecked ? " w-full" : " w-0"
            }`}
          >
            مدیریت کاربران
          </li>
          <li
            className={`transition-width duration-700 ease-in-out h-[3.7rem] gap-4 rounded-lg p-3 cursor-pointer hover:bg-[#DB277714] ${
              isChecked ? " w-full" : " w-0"
            }`}
          >
            سفارشات
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminMenu;
