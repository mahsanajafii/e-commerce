import Table from "../../common/table/Table";
import Button from "../../common/button/Button";

const ShoppingSummary = () => {
  const items = [
    {
      "عکس": "zsadfsdf",
      "نام محصول": "iphone promax 15",
      "تعداد": 2,
      "قیمت": "100000$",
      "قیمت نهایی": "100000$",
    },
    {
      "عکس": "zsadfsdf",
      "نام محصول": "iphone promax 15",
      "تعداد": 2,
      "قیمت": "100000$",
      "قیمت نهایی": "100000$",
    },
    {
      "عکس": "zsadfsdf",
      "نام محصول": "iphone promax 15",
      "تعداد": 2,
      "قیمت": "100000$",
      "قیمت نهایی": "100000$",
    },
  ];
  const headers = ["عکس", "نام محصول", "تعداد", "قیمت", "قیمت نهایی"];

  const summaryItems = [
    { label: "قمیت محصولات", value: "100000 تومان" },
    { label: "هزینه ارسال", value: "100000 تومان" },
    { label: "مالیات", value: "100000 تومان" },
    { label: "مبلغ نهایی", value: "100000 تومان" },
  ];
  const infoItems = [
    { label: "روش پرداخت", value: "درگاه پرداخت پاسارگاد" },
    { label: "آدرس دریافت", value: "تهران خ آزادی نبش کوچه قنبری پلاک ۱۹۲" },
  ];

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="  w-full flex flex-col justify-center items-center gap-20">
        <div className="bg-red-400 w-full h-24 gap-6 "> steper</div> 
        <div className="w-5/6  gap-16 flex flex-col ">
          <Table
            optionalWidth="w-full"
            optionalHeight="h-fit"
            items={items}
            headers={headers}
          />
          <div className=" h-[30rem] gap-8 w-full flex flex-col justify-between items-center">
            <p className="w-full h-12  text-[2.4rem] leading-10  font-medium">
              خلاصه خرید
            </p>
            <div className="bg-base-side w-full  flex flex-row justify-between items-center p-12 rounded-xl">
              {infoItems.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex flex-col h-28 gap-6 justify-center items-start w-1/4"
                >
                  <p className="h-12  text-[2.4rem] leading-10  font-medium">
                    {label}
                  </p>
                  <span className="text-text-secondary text-[1.6rem] font-bold">
                    {label.split(" ")[0]} :{" "}
                    <span className="text-text-primary text-[1.6rem] font-normal">
                      {value}
                    </span>
                  </span>
                </div>
              ))}

              <div className="flex flex-col justify-between items-center gap-2">
                {summaryItems.map(({ label, value }) => (
                  <div
                    className="w-full flex flex-row justify-between items-start  text-[1.6rem] leading-10 h-10"
                    key={label}
                  >
                    <p className="text-text-secondary font-bold">{label} :</p>
                    <p className="text-text-primary font-normal">{value}</p>
                  </div>
                ))}
              </div>
            </div>
            <Button className="bg-primary-main rounded-2xl font-bold py-3 px-12 h-20 w-full leading-10 text-text-button text-[2rem]">
              ثبت سفارش
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingSummary;
