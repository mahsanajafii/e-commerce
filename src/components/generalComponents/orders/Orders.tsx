import { useEffect, useState } from "react";
import Table from "../../common/table/Table";
// import axios from "axios";
import axiosClient from "../../../api/axiosClient";

interface IOrders {
  "عکس": string,
  "نام محصول": string,
  "تاریخ" : string,
  "قیمت نهایی": string,
  "پرداخت" : string,
  "ارسال" : string,
  "عملیات" : string,
}

const THs = ["عکس" , "نام محصول", "تاریخ", "قیمت نهایی", "پرداخت", "ارسال", "عملیات"];

// const items = [
//   {
//     "عکس": "zsadfsdf",
//     "نام محصول": "iphone promax 15",
//     "تاریخ" : "1403/06/25",
//     "قیمت نهایی": "100000$",
//     "پرداخت" : "پرداخت شده",
//     "ارسال" : "در حال ارسال",
//     "عملیات" : "جزئیات",
//   },
//   {
//     "عکس": "zsadfsdf",
//     "نام محصول": "iphone promax 15",
//     "تاریخ" : "1403/06/25",
//     "قیمت نهایی": "100000$",
//     "پرداخت" : "پرداخت نشده",
//     "ارسال" : "ارسال شده",
//     "عملیات" : "جزئیات",
//   },
//   {
//     "عکس": "zsadfsdf",
//     "نام محصول": "iphone promax 15",
//     "تاریخ" : "1403/06/25",
//     "قیمت نهایی": "100000$",
//     "پرداخت" : "پرداخت نشده",
//     "ارسال" : "ارسال نشده",
//     "عملیات" : "جزئیات",
//   },
// ];

const Orders : React.FC = () => {
  const [orders, setOrders] = useState<IOrders[]>([])
  
  useEffect(() => {
    fetchOrders()
  },[])

  async function fetchOrders() {
    const allOrders = await axiosClient.get("/orders/mine").then((res) => {
      setOrders(res.data)
    })
    console.log(allOrders)
  }

  return (
    <div className="min-h-screen pt-24 px-8">
      <Table optionalWidth="w-full" items={orders} headers={THs} />
    </div>
  )
}

export default Orders