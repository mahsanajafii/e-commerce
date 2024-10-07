import Table from "../../common/table/Table";
import Status from "../../common/status/Status";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import orderService from "../../../services/orderService";
import { adminStore } from "../../../stores/adminStore";
import CartStore from "../../../stores/cartStore";

interface IInformation {
  _id: string;
  name: string;
  email: string;
  address: string;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
}

const headers = ["عکس", "نام محصول", "تعداد", "قیمت", "قیمت نهایی"];

interface ITableItem {
  [index: string]: string | number | boolean | JSX.Element;
}

const Checkout = () => {
  const { clearCart } = CartStore();
  const navigate = useNavigate();
  const [information, setInformation] = useState<IInformation>({
    _id: "",
    name: "",
    email: "",
    address: "",
    shippingPrice: 0,
    taxPrice: 0,
    totalPrice: 0,
  });
  const [items, setItems] = useState<ITableItem[]>([]);
  const [status, setStatus] = useState<string>("");
  const [isPaid, setIsPaid] = useState<boolean>(false);
  const [isDelivered, setIsDelivered] = useState<boolean>(false);
  const { id } = useParams();
  const isAdmin = adminStore((state) => state.isAdmin);

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await orderService.getOrder(String(id));
      setInformation({
        _id: res._id,
        name: res.user.username,
        email: res.user.email,
        address: res.shippingAddress.address,
        shippingPrice: res.shippingPrice,
        taxPrice: res.taxPrice,
        totalPrice: res.totalPrice,
      });

      const filter = res.orderItems.map((item: ITableItem) => {
        return {
          عکس: "sdfsdf",
          "نام محصول": item.name,
          تعداد: item.qty,
          قیمت: item.price,
          "قیمت نهایی": res.totalPrice,
        };
      });
      setItems(filter);
      setStatus(isAdmin ? res.isPaid : res.isDelivered);
      setIsPaid(res.isPaid);
      setIsDelivered(res.isDelivered);
    };

    if (id) {
      fetchDetails();
    }
    console.log(location.pathname);
  }, [id]);

  const makePay = () => {
    orderService.makeOrderPaid(String(id));
  };
  const makeDelivere = () => {
    orderService.makeOrderDeliverd(String(id));
  };

  const handleNavigate = () => {
    navigate("/orders");
    clearCart();
  };

  const condition = () => {
    if (isAdmin) {
      return (
        <Status
          isNeedButton={true}
          status={status ? "پرداخت شده" : "پرداخت نشده"}
          information={information}
          isDelivered={isDelivered}
          isPaid={isPaid}
          makeDeliver={makeDelivere}
          makePay={makePay}
        />
      );
    } else {
      return (
        <Status
          isNeedButton={true}
          status={status ? "ارسال شده" : "ارسال نشده"}
          information={information}
          handleNavigate={handleNavigate}
        />
      );
    }
  };

  return (
    <div className="flex justify-center items-start gap-[5.6rem] w-full h-full p-[9.7rem]">
      <Table optionalWidth="w-[45%]" headers={headers} items={items} />
      {condition()}
    </div>
  );
};

export default Checkout;
