import auth_login_pic from "../../assets/images/auth-light-mode.jpg";
import RegisterForm from "../registerForm/RegisterForm";

const AuthenticationCard = () => {
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="bg-[#EEF0F1] flex gap-7 w-full h-screen p-14">
      <RegisterForm handleSubmitForm={handleOnSubmit}></RegisterForm>
      <div className="w-[80%]">
        <img
          className="w-full h-full rounded-2xl"
          src={auth_login_pic}
          alt=""
        />
      </div>
    </div>
  );
};

export default AuthenticationCard;
