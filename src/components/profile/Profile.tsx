import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../common/input/Input";
import Button from "../common/button/Button";

const Profile: React.FC = () => {
  interface IFormInput {
    fullname: string;
    email: string;
    password: string;
    repassword: string;
  }
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  const inputStyle =
    "flex flex-col w-full   bg-base-text-field text-[1.6rem]  text-text-secondary border  border-base-text-field-stroke rounded-lg pt-[1rem] pb-[1.1rem] px-[.9rem]";
  const labelStyle = `w-full h-[2.4rem]  text-text-primary text-[1.6rem]`;

  return (
    <div className=" pt-[1.8rem] flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[64rem] gap-[1.6rem] h-[44rem] flex flex-col"
      >
        <h1 className=" font-Iran-Yekan font-medium text-[2.4rem]">
          بروزرسانی پروفایل
        </h1>
        <div className="w-full h-[7.4rem] gap-2">
          <Input
            inputStyle={inputStyle}
            labelStyle={labelStyle}
            {...register("fullname")}
            placeholder="نام خود را وارد نمایید"
            label="نام"
            id="fullname"
          />
        </div>
        <div className="w-full h-[7.4rem] gap-2">
          <Input
            inputStyle={inputStyle}
            labelStyle={labelStyle}
            type="email"
            {...register("email")}
            placeholder="ایمیل خود را وارد نمایید"
            label="ایمیل"
            id="email"
          />
        </div>

        <div className="w-full  h-[7.4rem] gap-2">
          <Input
            inputStyle={inputStyle}
            labelStyle={labelStyle}
            type="password"
            {...register("password")}
            placeholder="رمز عبور خود را وارد نمایید"
            label="رمز عبور"
            id="password"
          />
        </div>

        <div className="w-full  h-[7.4rem] gap-2">
          <Input
            inputStyle={inputStyle}
            labelStyle={labelStyle}
            type="password"
            placeholder="تکرار رمز عبور خود را وارد نمایید"
            {...register("repassword")}
            id="password"
            label="تکرار رمز عبور"
          />
        </div>

        <div className="w-full h-[3.6rem] justify-between items-center flex flex-row">
          <Button
            children="سفارشات من"
            className="w-[10rem] h-full rounded-lg  p-2 text-center bg-primary-main text-text-button text-[1.4rem]"
          />
          <Button
            onClick={handleSubmit(onSubmit)}
            children=" بروزرسانی"
            className="w-[8.1rem] h-full rounded-lg p-2 text-center bg-primary-main text-text-button text-[1.4rem]"
          />
        </div>
      </form>
    </div>
  );
};

export default Profile;
