import Table from "../../common/table/Table";
import Status from "../../common/status/Status";
import { useEffect } from "react";
import authService from "../../../services/authService";
const headers = ["عکس", "نام محصول", "تعداد", "قیمت", "قیمت نهایی"];

const Checkout = () => {
  useEffect(() => {
    authService.getAllUsers();
  }, []);
  return (
    <div className="flex justify-center items-start gap-[5.6rem] w-full h-full p-[9.7rem]">
      <Table optionalWidth="w-[45%]" headers={headers} />
      <Status isNeedButton={true} />
    </div>
  );
};

export default Checkout;
