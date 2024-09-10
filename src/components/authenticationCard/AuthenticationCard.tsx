import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AuthenticationCard = ({ children }: Props) => {
  return (
    <div className="bg-[#EEF0F1] flex gap-7 w-full h-screen p-14">
      {children}
    </div>
  );
};

export default AuthenticationCard;
