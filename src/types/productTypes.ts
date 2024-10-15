export interface IProductType {
  name: string;
  description: string;
  price: number;
  category: string;
  quantity: number;
  image: string;
}
export interface IBrand {
  name: string;
  _id: string;
  __v: number;
}
export interface IFilterByGroup {
  categories: IBrand[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<IProductCard[]>>;
  products: IProductCard[];
  isClear?: boolean;
  setClear?: React.Dispatch<React.SetStateAction<boolean>>;
}


export interface IFilterType {
  categories: string[];
  price: number[];
}
export interface IProductCard {
  _id: string;
  image: string;
  name: string;
  price: number;
  category?: IBrand[];
  description: string;
  quantity: number;
  rating: number;
  numReviews: number;
  countInStock: number;
  reviews: [];
  createdAt: string;
  updatedAt: string;
  __v: number;
}
