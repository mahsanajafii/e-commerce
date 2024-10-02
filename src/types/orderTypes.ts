export interface IOrderItems {
    _id: string,
    name: string,
    qty: number
}

export type IPaymentMethod = string

export interface IShippingAddress {
    address: string,
    city: string,
    postalCode: string
}

interface IOrderItemsResponse {
    name: string,
    qty: number,
    price : number,
    product : string,
    _id: string,
}

export interface IOrderResponse {
    shippingAddress : IShippingAddress,
    _id : string,
    user : string,
    orderItems : IOrderItemsResponse[],
    itemsPrice : number,
    taxPrice : number,
    shippingPrice : number,
    totalPrice : number,
    isPaid : boolean,
    isDelivered : boolean,
    createdAt : string,
    updatedAt : string,
    __v : number,
}