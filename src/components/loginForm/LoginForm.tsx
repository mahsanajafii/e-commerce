import { Link } from "react-router-dom";
import Input from "../common/input/Input";
import Button from "../common/button/Button";
interface Props {
  handleSubmitForm: (e: React.FormEvent<HTMLFormElement>) => void;
}

const LoginForm = ({ handleSubmitForm }: Props) => {
  return (
    <div className="flex flex-col gap-8 w-[53.1rem] h-[35.6rem] font-Iran-Yekan">
      <h1 className="text-text-primary text-[2rem] font-bold">ورود</h1>
      <form onSubmit={handleSubmitForm}>
        <Input
          inputStyle="bg-white w-full h-[4.2rem] px-[0.9rem] py-[1rem] rounded-xl outline-none text-[1.6rem]"
          id="login-emailInp"
          labelStyle="block text-[1.6rem] pb-3 pt-3"
          placeholder="ایمیل خود را وارد کنید"
          label="ایمیل"
        />
        <Input
          inputStyle="bg-white w-full h-[4.2rem] px-[0.9rem] py-[1rem] rounded-xl outline-none text-[1.6rem]"
          id="login-passwordInp"
          labelStyle="block text-[1.6rem] pb-3 pt-3"
          placeholder="رمز عبور خود را وارد کنید"
          label="رمز عبور"
        />
        <Button className="flex justify-center items-center bg-primary-main w-[7.4rem] h-[4.8rem] text-white rounded-lg mt-8 text-xl px-[0.8rem] py-[2.4rem]">
          ورود
        </Button>
        <p className="block text-[1.6rem] pb-3 pt-3 ">
          عضو نیستید؟{" "}
          <Link to="/register" className="text-pink-600">
            ثبت نام
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
