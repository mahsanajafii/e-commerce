export interface IOrderItems {
    _id: string,
    name: string,
    qty: number
}

export interface IPaymentMethod {
    paymentMethod: string
}

export interface IShippingAddress {
    address: string,
    city: string,
    postalCode: string
}