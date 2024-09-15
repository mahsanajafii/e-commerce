import { Link } from "react-router-dom";
import Input from "../common/input/Input";
import Button from "../common/button/Button";
import { useForm, FieldValues } from "react-hook-form";

const RegisterForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-6  w-[53.1rem] h-[35.6rem]">
      <h1 className="text-black text-[2rem] font-bold">ثبت نام</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("name")}
          inputStyle="bg-white w-full h-[4.2rem] px-[0.9rem] py-[1rem] rounded-xl outline-none text-[1.6rem]"
          id="name"
          labelStyle="block text-[1.6rem] pb-3 pt-3"
          placeholder="نام خود را وارد نمایید"
          label="نام"
          type="text"
        />

        <Input
          {...register("email")}
          inputStyle="bg-white w-full h-[4.2rem] px-[0.9rem] py-[1rem] rounded-xl outline-none text-[1.6rem]"
          id="email"
          labelStyle="block text-[1.6rem] pb-3 pt-3"
          placeholder="ایمیل خود را وارد نمایید"
          label="ایمیل"
          type="email"
        />

        <Input
          {...register("password")}
          inputStyle="bg-white w-full h-[4.2rem] px-[0.9rem] py-[1rem] rounded-xl outline-none text-[1.6rem]"
          id="password"
          labelStyle="block text-[1.6rem] pb-3 pt-3"
          placeholder="رمز عبور خود را وارد نمایید"
          label="رمز عبور"
          type="password"
        />

        <Input
          {...register("passwordCheck")}
          inputStyle="bg-white w-full h-[4.2rem] px-[0.9rem] py-[1rem] rounded-xl outline-none text-[1.6rem]"
          id="passwordCheck"
          labelStyle="block text-[1.6rem] pb-3 pt-3"
          placeholder="رمز عبور خود را دوباره وارد نمایید"
          label="تکرار رمز عبور"
          type="password"
        />

        <Button className="flex justify-center items-center bg-primary-main w-[7.4rem] h-[4.8rem] text-white rounded-lg mt-8 text-xl px-[0.8rem] py-[2.4rem]">
          عضویت
        </Button>

        <p className="block text-[1.6rem] pb-3 pt-3 ">
          عضو هستید؟{" "}
          <Link to="/login" className="text-pink-600">
            ورود
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
