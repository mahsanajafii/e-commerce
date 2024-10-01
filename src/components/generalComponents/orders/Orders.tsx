import Table from "../../common/table/Table";

interface IOrder {
  [index: string]: string | number,
}

interface IOrdersProps {
    items : IOrder[];
}

const THs = ["عکس" , "نام محصول", "تاریخ", "قیمت نهایی", "پرداخت", "ارسال", "عملیات"];


const Orders : React.FC<IOrdersProps> = ({items}) => {
  return (
    <div className="min-h-screen pt-24 px-8">
      <Table optionalWidth="w-full" items={items} headers={THs} />
    </div>
  )
}

export default Orders