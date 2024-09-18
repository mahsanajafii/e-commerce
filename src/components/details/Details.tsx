import Table from "../common/table/Table";
import Status from "../common/status/Status";

const headers = ["عکس", "نام محصول", "تعداد", "قیمت", "قیمت نهایی"];

const Checkout = () => {
  return (
    <div className="flex justify-center items-start gap-[5.6rem] w-full h-full p-[9.7rem]">
      <Table optionalWidth="w-[45%]" headers={headers} />
      <Status isNeedButton={false} />
    </div>
  );
};

export default Checkout;
