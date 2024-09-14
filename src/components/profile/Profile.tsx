import React ,{ useState } from "react";
import Input from "../common/input/Input";
import Button from "../common/button/Button";

const Profile :React.FC= () => {
  const [fullname, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repassword, setRepassword] = useState<string>("");
  const inputStyle =
    "flex flex-col w-full h-11 bg-base-text-field text-[1.6rem]  text-text-secondary border  border-base-text-field-stroke rounded-lg pt-[.63rem] pb-[.7rem] px-[.56rem]";
  const labelStyle = `w-[40rem] h-6 text-text-primary text-[1.6rem]`;

  return (
    <div className="w-full h-full  justify-center items-center">
      <form className="w-[44rem] h-[27.8rem] mt-44 gap-4 ml-[40rem] flex flex-col items-start   justify-center">
        <h1 className=" font-Iran-Yekan  font-medium text-[2.4rem]">
          بروزرسانی پروفایل
        </h1>
        <div className="w-full  h-[4.6rem] gap-2">
          <Input
            inputStyle={inputStyle}
            labelStyle={labelStyle}
            type="text"
            placeholder="نام خود را وارد نمایید"
            value={fullname}
            label="نام"
            id="1"
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="w-full  h-[4.6rem] gap-2">
          <Input
            inputStyle={inputStyle}
            labelStyle={labelStyle}
            type="email"
            placeholder="ایمیل خود را وارد نمایید"
            value={email}
            label="ایمیل"
            id="2"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="w-full  h-[4.6rem] gap-2">
          <Input
            inputStyle={inputStyle}
            labelStyle={labelStyle}
            type="password"
            placeholder="رمز عبور خود را وارد نمایید"
            value={password}
            label="رمز عبور"
            id="3"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="w-full  h-[4.6rem] gap-2">
          <Input
            inputStyle={inputStyle}
            labelStyle={labelStyle}
            type="password"
            placeholder="تکرار رمز عبور خود را وارد نمایید"
            value={repassword}
            id="4"
            label="تکرار رمز عبور"
            onChange={(e) => setRepassword(e.target.value)}
          />
        </div>

        <div className="w-full h-9 justify-between items-center flex flex-row">
          <Button
            children="سفارشات من"
            className="w-[6.4rem] h-9 rounded-lg  p-2 text-center bg-primary-main text-text-button text-sm"
          />
          <Button
            children=" بروزرسانی"
            className="w-[6.4rem] h-9 rounded-lg p-2 text-center bg-primary-main text-text-button text-sm"
          />
        </div>
      </form>
    </div>
  );
};

export default Profile;
