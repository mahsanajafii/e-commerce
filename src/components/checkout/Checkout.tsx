import Table from "./table/Table";
import Status from "./status/Status";
const Checkout = () => {
  return (
    <div className="flex justify-center items-start gap-5 w-full h-full pt-12">
      <Table />
      <Status />
    </div>
  );
};

export default Checkout;
