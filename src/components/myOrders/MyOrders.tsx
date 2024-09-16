import Table from "../common/table/Table";

interface IMyOrder {
  imageSource: string,
  [index: string]: string | number,
}

interface IMyOrdersProps {
    items : IMyOrder[];
}

const THs = ["تاریخ", "قیمت نهایی", "پرداخت", "ارسال", "عملیات"];


const MyOrders : React.FC<IMyOrdersProps> = ({items}) => {
  return (
    <Table optionalWidth="w-full" items={items} headers={THs} />
  )
}

export default MyOrders