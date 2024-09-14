interface IBadgeProps {
  children: string;
  padding: "px-2" | "px-2.5";
  fontSize: "text-[1.1rem]" | "text-xs";
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
