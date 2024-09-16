import { ReactNode } from "react";

interface IBadgeProps {
  children?: ReactNode;
  padding: "px-[0.8rem]" | "px-[1rem]";
  fontSize: "text-[1.1rem]" | "text-[1.2rem]" | "text-[1.4rem]";
}

const Badge: React.FC<IBadgeProps> = ({ children, fontSize, padding }) => {
  return (
    <div
      className={`${fontSize} ${padding} font-normal text-primary-lighter rounded-full bg-primary-dark flex justify-center items-center py-1`}
    >
      {children}
    </div>
  );
};

export default Badge;
