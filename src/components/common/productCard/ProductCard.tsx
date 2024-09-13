import React from 'react'
import Badge from '../badge/Badge';

interface IProductCardProps {
  productTitleStyle?: string;
  productTitle: string;
  badgeTitle: string;
}

const ProductCard: React.FC<IProductCardProps> = ({
  productTitle,  productTitleStyle, badgeTitle
}) => {
  return (
    <div className='flex flex-col max-w-[40.4rem] max-h-[38.6rem] gap-4 justify-between items-center'>
      <div className='w-[404px] h-[346px] bg-[#DFE3E8] rounded-md'></div>
      <div className='flex justify-between items-center w-[40.4rem] h-[2.4rem]'>
      <Badge className='w-[8.2rem] h-[4.2rem] rounded-3xl bg-[#831747] text-center content-center py-0.5 px-2.5'>{badgeTitle}</Badge>
      <p className={productTitleStyle}>{productTitle}</p>
      </div>
    </div>
  )
}

export default ProductCard;

