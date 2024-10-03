export interface IProductType {
    name: string,
    description: string,
    price: string,
    category: string,
    quantity: string,
    image: string
}


export interface IFilterType {
    categories: string[],
    price: number[]
}