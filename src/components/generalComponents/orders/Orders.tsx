import { useEffect, useState } from "react";
import Table from "../../common/table/Table";
import orderService from "../../../services/orderService";
import { IUserOrderResponse } from "../../../types/orderTypes";
import { IAdminOrderResponse } from "../../../types/orderTypes";
import { isAdmin } from "../../../stores/adminStore";
import mockPhoto from "../../../assets/images/mockImage.png";
import { NavLink } from "react-router-dom";

interface IOrders {
  [index: string]: string | number | boolean | JSX.Element;
}

const headers = [
  "عکس",
  "نام محصول",
  "تاریخ",
  ...(isAdmin() ? ["کاربر"] : []),
  "قیمت نهایی",
  "پرداخت",
  "ارسال",
  // "عملیات",
];

const Orderscopy: React.FC = () => {
  const [orders, setOrders] = useState<IOrders[]>([]);
  const [ordersTitle, setOrdersTitle] = useState<IOrders[]>([]);
  const [isActive, setIsActive] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  async function fetchOrders() {
    let newOrder: IOrders[];

    if (isAdmin()) {
      const response = await orderService.getAllOrdersAdmin();
      newOrder = response
        .map((order: IAdminOrderResponse) =>
          order.orderItems.map((item) => ({
            عکس: mockPhoto, // item.image
            "نام محصول": item.name,
            تاریخ: new Date(order.createdAt).toLocaleDateString("fa-IR"),
            کاربر: order.user ? order.user.username : "admin",
            "قیمت نهایی": (item.qty * item.price).toLocaleString("fa-IR"),
            پرداخت: order.isPaid ? "پرداخت شده" : "پرداخت نشده",
            ارسال: order.isDelivered ? "ارسال شده" : "ارسال نشده",
            // عملیات: "جزئیات",
            orderId: order._id,
            navigate:
              order.isPaid && order.isDelivered
                ? `/detail/deliverd/${order._id}`
                : `/checkout/${order._id}`,
          }))
        )
        .flat();
      setOrders(newOrder);

      setOrdersTitle(response);
    } else {
      const res = await orderService.getAllOrdersMine();

      newOrder = res
        ?.map((order: IUserOrderResponse) =>
          order?.orderItems?.map((item) => ({
            عکس: mockPhoto, //item.image
            "نام محصول": item.name,
            تاریخ: new Date(order.createdAt).toLocaleDateString("fa-IR"),
            "قیمت نهایی": (item.qty * item.price).toLocaleString("fa-IR"),
            پرداخت: order.isPaid ? "پرداخت شده" : "پرداخت نشده",
            ارسال: order.isDelivered ? "ارسال شده" : "ارسال نشده",
            // عملیات: "جزئیات",
            orderId: order._id,
            navigate: `/detail/${order._id}`,
          }))
        )
        .flat();
      setOrders(newOrder);
      setOrdersTitle(res);
    }
  }
  const handelClick = (id) => {
    setIsActive((prev) => (prev === id ? null : id));
  };
  return (
    <div className="min-h-screen pt-24 px-8  flex  transition-height duration-700 ease-in-out flex-col gap-4">
      <h1 className="text-[3rem] text-primary-main">{` لیست سفارشها : ${ordersTitle.length} مورد`}</h1>
      <br />
      {ordersTitle.map((order, i) => (
        <div key={i} className="flex flex-col justify-between">
          <button
            onClick={() => handelClick(order._id)}
            className="w-full  flex flex-row justify-between h-32 bg-white items-center rounded-3xl p-8 text-[1.6rem]"
          >
            <span className=" w-1/4">شماره سفارش : {order._id}</span>
            <span className="   w-1/4  ">
              مبلغ کل : {`${order.totalPrice.toLocaleString("fa-IR")} تومان`}
            </span>
            <span className="  w-1/4 text-green-700">
              وضعیت :{" "}
              {order.isDelivered
                ? "ارسال شده"
                : `${order.isPaid ? "پرداخت شده" : "در انتظار پرداخت"}`}
            </span>
            <span className=" w-1/4">
              تاریخ ثبت سفارش :{" "}
              {typeof order.createdAt === "string" ||
              typeof order.createdAt === "number"
                ? new Date(order.createdAt).toLocaleDateString("fa-IR")
                : "تاریخ مشخص نیست"}
            </span>
            <NavLink
              to={`/detail/${order._id}`}
              className="bg-primary-main px-[1.2rem] py-[0.8rem] rounded-[0.8rem] text-[1.4rem] text-text-button font-normal"
            >
              جزئیات
            </NavLink>
          </button>

          <div
            className={`transition-height duration-700 ease-in-out mt-10 ${
              isActive === order._id ? "block" : "hidden"
            } bg-primary-lighter`}
          >
            <Table
              optionalWidth="w-full"
              items={orders.filter((item) => item.orderId === order._id)}
              headers={headers}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orderscopy;
