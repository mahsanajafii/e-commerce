import Button from "../../common/button/Button";
const Status = () => {
  const infoItems = [
    { label: "شماره سفارش", value: "۲۹۲۳۹۱۰" },
    { label: "نام", value: "علی موسوی" },
    { label: "ایمیل", value: "Robert@gmail.com" },
    { label: "آدرس", value: "تهران خ آزادی نبش کوچه قنبری پلاک ۱۹۲" },
    { label: "روش پرداخت", value: "درگاه پرداخت پاسارگاد" },
  ];

  const summaryItems = [
    { label: "قمیت محصولات", value: "100000 تومان" },
    { label: "هزینه ارسال", value: "100000 تومان" },
    { label: "مالیات", value: "100000 تومان" },
    { label: "مبلغ نهایی", value: "100000 تومان" },
  ];

  const textStyle = "text-[1.6rem] font-normal text-text-primary py-2";
  const boldTextStyle = "text-[1.6rem] font-bold text-text-secondary py-2";

  return (
    <div className="w-[35%] h-[90%] font-Iran-Yekan">
      <p className="font-medium text-[2rem]">آدرس دریافت</p>
      <div className="text-primary-main font-bold text-[1.6rem] flex flex-col gap-4 my-4">
        {infoItems.map(({ label, value }) => (
          <p key={label}>
            {label} : <span className={textStyle}>{value}</span>
          </p>
        ))}
      </div>
      <div className="text-[1.6rem] font-bold text-text-primary w-full bg-base-card rounded-md pr-4 py-3">
        Status
      </div>
      <p className="font-medium text-[2rem] my-4">خلاصه خرید</p>
      {summaryItems.map(({ label, value }) => (
        <div key={label} className="flex justify-between items-center w-full">
          <p className={boldTextStyle}>{label} :</p>
          <p className={textStyle}>{value}</p>
        </div>
      ))}
      <Button className="bg-primary-main text-text-button text-center w-full rounded-full py-[0.8rem] px-[3.2rem] font-medium text-[2rem]">
        پرداخت
      </Button>
    </div>
  );
};

export default Status;
