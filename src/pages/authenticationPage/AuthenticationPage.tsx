import AuthenticationCard from "../../components/authenticationCard/AuthenticationCard";
import RegisterForm from "../../components/registerForm/RegisterForm";
import LoginForm from "../../components/loginForm/LoginForm";
import auth_login_pic from "../../assets/images/auth-light-mode.jpg";
import { useLocation } from "react-router-dom";
const AuthenticationPage = () => {
  const location = useLocation();

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="flex">
      <div className="bg-red-600 p-14">sidbar</div>
      <AuthenticationCard>
        {location.pathname === "/login" ? (
          <LoginForm handleSubmitForm={handleOnSubmit} />
        ) : location.pathname === "/register" ? (
          <RegisterForm handleSubmitForm={handleOnSubmit} />
        ) : (
          <h1>not found</h1>
        )}
        <div className="w-[80%]">
          <img
            className="w-full h-full rounded-2xl"
            src={auth_login_pic}
            alt=""
          />
        </div>
      </AuthenticationCard>
    </div>
  );
};

export default AuthenticationPage;
