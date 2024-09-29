import MyOrders from "../../components/generalComponents/orders/Orders"

const items = [
    {
      "عکس": "zsadfsdf",
      "نام محصول": "iphone promax 15",
      "تاریخ" : "1403/06/25",
      "قیمت نهایی": "100000$",
      "پرداخت" : "پرداخت شده",
      "ارسال" : "در حال ارسال",
      "عملیات" : "جزئیات",
    },
    {
      "عکس": "zsadfsdf",
      "نام محصول": "iphone promax 15",
      "تاریخ" : "1403/06/25",
      "قیمت نهایی": "100000$",
      "پرداخت" : "پرداخت نشده",
      "ارسال" : "ارسال شده",
      "عملیات" : "جزئیات",
    },
    {
      "عکس": "zsadfsdf",
      "نام محصول": "iphone promax 15",
      "تاریخ" : "1403/06/25",
      "قیمت نهایی": "100000$",
      "پرداخت" : "پرداخت نشده",
      "ارسال" : "ارسال نشده",
      "عملیات" : "جزئیات",
    },
  ];

const MyOrdersPage = () => {
  return (
    <MyOrders items={items} />
  )
}

export default MyOrdersPage