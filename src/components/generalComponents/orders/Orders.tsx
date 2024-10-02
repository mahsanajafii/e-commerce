import { useEffect, useState } from "react";
import Table from "../../common/table/Table";
import orderService from "../../../services/orderService";
import { IOrderResponse } from "../../../types/orderTypes";

interface IOrders {
  [index: string]: string | number | boolean | JSX.Element;
}

const THs = ["عکس" , "نام محصول", "تاریخ", "قیمت نهایی", "پرداخت", "ارسال", "عملیات"];


const Orders : React.FC = () => {
  const [orders, setOrders] = useState<IOrders[]>([])

  useEffect(() => {
    fetchOrders()
  },[])

  async function fetchOrders() {
    const response = await orderService.getAllOrdersMine()

    const newOrder : IOrders[] = await response.map((order : IOrderResponse) => ({
      "عکس": "string",
      "نام محصول": order.orderItems[0].name,
      "تاریخ" : order.createdAt,
      "قیمت نهایی": order.totalPrice,
      "پرداخت" : order.isPaid ? "پرداخت شده" : "پرداخت نشده",
      "ارسال" : order.isDelivered ? "ارسال شده" : "ارسال نشده",
      "عملیات" : "جزئیات",
    }))

    setOrders(newOrder)
  }

  return (
    <div className="min-h-screen pt-24 px-8">
      <Table optionalWidth="w-full" items={orders} headers={THs} />
    </div>
  )
}

export default Orders



//////////////////// response ///////////////////

// {
//   "shippingAddress": {
//       "address": "tehran",
//       "city": "tehran",
//       "postalCode": "10"
//   },
//   "_id": "66fd3bb61bfd1cea687e4ceb",
//   "user": "66eff925f00721236cdfab80",
//   "orderItems": [
//       {
//           "name": "Product1",
//           "qty": 1,
//           "price": 150000,
//           "product": "66f306465210bb49bb72b8c8",
//           "_id": "66fd3bb61bfd1cea687e4cec"
//       }
//   ],
//   "itemsPrice": 150000,
//   "taxPrice": 1500000,
//   "shippingPrice": 50000,
//   "totalPrice": 1700000,
//   "isPaid": false,
//   "isDelivered": false,
//   "createdAt": "2024-10-02T12:25:26.205Z",
//   "updatedAt": "2024-10-02T12:25:26.205Z",
//   "__v": 0
// },