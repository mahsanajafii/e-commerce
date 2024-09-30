import Chart from "./chart/Chart";

const items = [
    {
        title: "فروش کل",
        value: "0 تومان",
    },
    {
        title: "مشتری ها",
        value: "10",
    },
    {
        title: "سفارشات",
        value: "100",
    },
]

const Dashboard = () => {
  return (
    <div className="relative w-full pt-[11rem] px-[12.4rem]">
        <div className="flex flex-col items-center gap-[4.3rem] w-full">
            <div className="flex gap-20 w-[80%]">
                {items.map((item, index) => {
                    return(
                        <div key={index} className="flex flex-col grow gap-8 rounded-[0.8rem] px-8 py-[1.6rem] bg-base-menu">
                            <span className="bg-primary-main text-[1.6rem] text-text-button w-[4.8rem] h-[4.8rem] rounded-full flex justify-center items-center">$</span>
                            <div className="">
                                <h4 className="text-text-secondary text-[1.6rem] font-normal">{item.title}</h4>
                                <p className="text-text-primary text-[2rem] font-bold">{item.value}</p>
                            </div>
                        </div>
                    )
                })}

            </div>
            <Chart />
        </div>
    </div>
  )
}

export default Dashboard