import { Link } from "react-router-dom";

interface Props {
  handleSubmitForm: (e: React.FormEvent<HTMLFormElement>) => void;
}

const LoginForm = ({ handleSubmitForm }: Props) => {
  return (
    <div className="flex flex-col gap-6  w-[53.1rem] h-[35.6rem]">
      <h1 className="text-black text-[2rem] font-bold">ورود</h1>
      <form onSubmit={handleSubmitForm}>
        <label
          className="block text-[1.6rem] pb-3 pt-3"
          htmlFor="login-emailInp"
        >
          ایمیل
        </label>
        <input
          className="bg-white w-full p-6   rounded-xl outline-none text-[1.6rem]"
          id="login-emailInp"
          type="text"
          placeholder="ایمیل خود را وارد نمایید"
        />
        <label
          className="block text-[1.6rem] pb-3 pt-3"
          htmlFor="login-passwordInp"
        >
          رمز عبور
        </label>
        <input
          className="bg-white w-full p-6 rounded-xl outline-none text-[1.6rem]"
          id="login-passwordInp"
          type="text"
          placeholder="رمز عبور خود را وارد کنید"
        />
        <button className="flex justify-center items-center bg-pink-600 w-[7.4rem] h-[4.8rem] text-white  rounded-xl mt-8 text-xl">
          ورود
        </button>
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
