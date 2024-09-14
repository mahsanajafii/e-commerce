interface IBadgeProps {
  badgeTitle: string;
}

const Badge: React.FC<IBadgeProps> = ({
  badgeTitle
}) => { return (
  <div className='w-[8.2rem] h-[2.4rem] rounded-full bg-[#831747] flex justify-center items-center px-4 py-1'>{badgeTitle}</div>
);
}

export default Badge;