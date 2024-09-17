import Table from "../common/table/Table";
import Status from "./status/Status";

const headers = ["عکس", "نام محصول", "تعداد", "قیمت", "قیمت نهایی"];

const items = [
  {
    عکس: "asdfasdf",
    "نام محصول": "iphone15 ultra pro max",
    تعداد: 2,
    قیمت: "100000$",
    "قیمت نهایی": "1000000$",
  },
  {
    عکس: "asdfasdf",
    "نام محصول": "iphone15 ultra pro max",
    تعداد: 2,
    قیمت: "100000$",
    "قیمت نهایی": "1000000$",
  },
  {
    عکس: "asdfasdf",
    "نام محصول": "iphone15 ultra pro max",
    تعداد: 2,
    قیمت: "100000$",
    "قیمت نهایی": "1000000$",
  },
];

const Checkout = () => {
  return (
    <div className="flex justify-center items-start gap-[5.6rem] w-full h-full p-[9.7rem]">
      <Table optionalWidth="w-[60%]" items={items} headers={headers} />
      <Status />
    </div>
  );
};

export default Checkout;
