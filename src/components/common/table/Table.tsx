import TableHeader from "./tableHeader/TableHeader";
import TableBody from "./tableBody/TableBody"

interface ITableItem {
  imageSource: string,
  [index: string]: string | number,
}

interface ITableProps {
  items: ITableItem[];
  optionalWidth?: string;
  optionalHeight?: string;
  headers: string[];
}

const Table = ({
  items,
  optionalWidth,
  optionalHeight,
  headers,
}: ITableProps) => {
  return (
    <table
      className={`${optionalWidth} ${optionalHeight} flex flex-col justify-center p-10`}
    >
      <TableHeader headers={headers} />
      <TableBody items={items} />
    </table>
  );
};

export default Table;




// import TableHeader from "./tableHeader/TableHeader";
// import TableBody from "./tableBody/TableBody"

// interface ITableItem {
//   imageSource : string;
//   productTitle : string;
//   orderDate ?: string;
//   productCount ?: number;
//   productPrice ?: string;
//   totalPrice : string;
//   paymentStatus ?: string;
//   shippingStatus ?: string;
//   operationDetails ?: string;
// }

// interface ITableProps {
//   items: ITableItem[];
//   optionalWidth?: string;
//   optionalHeight?: string;
//   headers: string[];
// }

// const Table = ({
//   items,
//   optionalWidth,
//   optionalHeight,
//   headers,
// }: ITableProps) => {
//   return (
//     <table
//       className={`${optionalWidth} ${optionalHeight} flex flex-col justify-center p-10`}
//     >
//       <TableHeader headers={headers} />
//       <TableBody items={items} />
//     </table>
//   );
// };

// export default Table;