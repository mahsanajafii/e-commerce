import React from "react";
import Badge from "../../badge/Badge";
import Button from "../../button/Button";
import { Link } from "react-router-dom";

interface ITableItem {
    imageSource: string,
    [index: string]: string | number,
}

interface ITableBodyProps{
    items: ITableItem[];
}

const TableBody : React.FC<ITableBodyProps> = ({items}) => {
  return (
    <tbody className="flex flex-col gap-4 justify-center ">
        {items.map((item, index) => (
          <tr
            key={index}
            className=" flex justify-between items-center  font-Iran-Yekan font-normal text-[1.6rem] text-text-primary"
          >
            <td className="w-[40%] flex justify-start gap-5 items-center">
              <img
                src={item.imageSource}
                alt="Product"
                className="w-[10%] h-[10%]"
              />
              <span className="w-[90%] flex justify-start">
                {item.productTitle}
              </span>
            </td>
            <td className="w-[20%] flex justify-center items-center ">
              {item.orderDate}
            </td>
            <td className="w-[20%] flex justify-center items-center ">
              {item.productCount}
            </td>
            <td className="w-[20%] flex justify-center items-center">
              {item.productPrice}
            </td>
            <td className="w-[20%] flex justify-center items-center">
              {item.totalPrice}
            </td>
            <td className="w-[20%] flex justify-center items-center">
              <Badge fontSize="text-[1.4rem]" padding="px-[0.8rem]">
                {item.paymentStatus}
              </Badge>
            </td>
            <td className="w-[20%] flex justify-center items-center">
              <Badge fontSize="text-[1.4rem]" padding="px-[0.8rem]">
                {item.shippingStatus}
              </Badge>
            </td>
            <td className="w-[20%] flex justify-center items-center">
              <Link to="../../../pages/detailes/DetailesPage">
                <Button className="px-[0.8rem] rounded-[0.8rem] bg-primary-main text-text-button text-[1.4rem] font-normal">
                  جزئیات
                </Button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
  )
}

export default TableBody