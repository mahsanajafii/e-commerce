interface IBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Badge: React.FC<IBadgeProps> = ({
  children
}) => { return (
  <div className='w-[8.2rem] h-[2.4rem] rounded-full bg-[#831747] flex justify-center items-center px-4 py-1'>{children}</div>
);
}

export default Badge;