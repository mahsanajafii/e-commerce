import Table from "../common/table/Table";
import Status from "./status/Status";

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
    <div className="flex justify-center items-start gap-5 w-full h-full pt-12">
      <Table optionalWidth="w-[60%]" optionalHeight="h-[50%]" items={items} />
      <Status />
    </div>
  );
};

export default Checkout;
