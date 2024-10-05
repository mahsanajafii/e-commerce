import Table from "../../common/table/Table";
import Status from "../../common/status/Status";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import orderService from "../../../services/orderService";
//import photo from "./iphone-14-pro-model-unselect-gallery-1-202209.png";
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

  const { id } = useParams();

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
    };

    if (id) {
      fetchDetails();
      console.log(information);
      console.log(items);
    }
  }, [id]);

  return (
    <div className="flex justify-center items-start gap-[5.6rem] w-full h-full p-[9.7rem]">
      <Table optionalWidth="w-[45%]" headers={headers} items={items} />
      <Status
        isNeedButton={false}
        status="در حال ارسال"
        information={information}
      />
    </div>
  );
};

export default Checkout;
