interface ITableItem {
  [index: string]: string | number;
}

interface ITableProps {
  items: ITableItem[];
  headers: string[];
  optionalWidth?: string;
  optionalHeight?: string;
}

const Table = ({
  items,
  optionalWidth,
  optionalHeight,
  headers,
}: ITableProps) => {
  return (
    <table className={`${optionalWidth} ${optionalHeight} w-full`}>
      <thead className="border-b-2 font-normal text-[1.6rem] text-text-primary font-Iran-Yekan">
        <tr>
          {headers.map((head, index) => (
            <th
              className={`p-4 ${index === 1 ? " text-right" : " text-center"}`}
              key={index}
            >
              {head}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr
            key={index}
            className="font-Iran-Yekan font-normal text-[1.6rem] text-text-primary"
          >
            {headers.map((head, headIndex) => (
              <td
                className={`p-4 ${
                  headIndex === 1 ? " text-right" : "text-center"
                }`}
                key={headIndex}
              >
                {item[head]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
