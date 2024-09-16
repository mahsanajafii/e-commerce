import Table from "../common/table/Table";
import Status from "./status/Status";

const THs = ["تعداد", "قیمت", "قیمت نهایی"];

const items = [
  {
    imageSource: "zsadfsdf",
    productTitle: "iphone promax 15",
    productCount: 2,
    productPrice: "100000$",
    totalProce: "100000$",
  },
];

const Checkout = () => {
  return (
    <div className="flex justify-center items-start gap-[5.6rem] w-full h-full p-[9.7rem]">
      <Table optionalWidth="w-[50%]" items={items} headers={THs} />
      <Status />
    </div>
  );
};

export default Checkout;
