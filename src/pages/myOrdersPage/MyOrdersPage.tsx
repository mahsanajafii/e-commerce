import MyOrders from "../../components/myOrders/MyOrders"

const items = [
    {
      imageSource: "zsadfsdf",
      productTitle: "iphone promax 15",
      totalPrice: "100000$",
      orderDate : "1403/06/25",
      paymentStatus : "پرداخت شده",
      shippingStatus : "در حال ارسال",
      operationDetails : "جزئیات",
    },
    {
      imageSource: "zsadfsdf",
      productTitle: "iphone promax 15",
      totalPrice: "100000$",
      orderDate : "1403/06/25",
      paymentStatus : "پرداخت شده",
      shippingStatus : "در حال ارسال",
      operationDetails : "جزئیات",
    },
    {
      imageSource: "zsadfsdf",
      productTitle: "iphone promax 15",
      totalPrice: "100000$",
      orderDate : "1403/06/25",
      paymentStatus : "پرداخت شده",
      shippingStatus : "در حال ارسال",
      operationDetails : "جزئیات",
    },
    {
      imageSource: "zsadfsdf",
      productTitle: "iphone promax 15",
      totalPrice: "100000$",
      orderDate : "1403/06/25",
      paymentStatus : "پرداخت شده",
      shippingStatus : "در حال ارسال",
      operationDetails : "جزئیات",
    },
  ];

const MyOrdersPage = () => {
  return (
    <MyOrders items={items} />
  )
}

export default MyOrdersPage