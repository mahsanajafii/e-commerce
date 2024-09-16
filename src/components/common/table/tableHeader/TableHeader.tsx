interface ItableHeaderProps{
    headers : string[]
}

const TableHeader : React.FC<ItableHeaderProps> = ({headers}) => {
  return (
    <thead className="w-full flex justify-between items-center border-b-2 font-normal text-[1.6rem] text-text-primary font-Iran-Yekan">
        <tr className=" flex w-full justify-between items-center">
          <th className="w-[40%] flex justify-start gap-5 items-center">
            <span className=" w-[10%]">عکس</span>
            <span className=" w-[90%] flex justify-start">نام محصول</span>
          </th>
          {headers.map((header, index) => (
            <th key={index} className=" w-[20%] flex justify-center">
              {header}
            </th>
          ))}
        </tr>
      </thead>
  )
}

export default TableHeader