import { Link } from "react-router-dom";
import Input from "../common/input/Input";
import Button from "../common/button/Button";
interface Props {
  handleSubmitForm: (e: React.FormEvent<HTMLFormElement>) => void;
}

const RegisterForm = ({ handleSubmitForm }: Props) => {
  return (
    <div className="flex flex-col gap-6  w-[53.1rem] h-[35.6rem]">
      <h1 className="text-black text-[2rem] font-bold">ثبت نام</h1>
      <form onSubmit={handleSubmitForm}>
        <Input
          inputStyle="bg-white w-full h-[4.2rem] px-[0.9rem] py-[1rem] rounded-xl outline-none text-[1.6rem]"
          id="login-nameInp"
          labelStyle="block text-[1.6rem] pb-3 pt-3"
          placeholder="نام خود را وارد نمایید"
          label="نام"
        />

        <Input
          inputStyle="bg-white w-full h-[4.2rem] px-[0.9rem] py-[1rem] rounded-xl outline-none text-[1.6rem]"
          id="login-emailInp"
          labelStyle="block text-[1.6rem] pb-3 pt-3"
          placeholder="ایمیل خود را وارد نمایید"
          label="ایمیل"
        />

        <Input
          inputStyle="bg-white w-full h-[4.2rem] px-[0.9rem] py-[1rem] rounded-xl outline-none text-[1.6rem]"
          id="login-passwordInp"
          labelStyle="block text-[1.6rem] pb-3 pt-3"
          placeholder="رمز عبور خود را وارد نمایید"
          label="رمز عبور"
        />

        <Input
          inputStyle="bg-white w-full h-[4.2rem] px-[0.9rem] py-[1rem] rounded-xl outline-none text-[1.6rem]"
          id="login-reapeatPasswordInp"
          labelStyle="block text-[1.6rem] pb-3 pt-3"
          placeholder="رمز عبور خود را دوباره وارد نمایید"
          label="تکرار رمز عبور"
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
