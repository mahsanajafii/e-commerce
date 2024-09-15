const Status = () => {
  return (
    <div className=" w-[30%] h-[90%] font-Iran-Yekan">
      <p className="font-medium text-[2rem]">آدرس دریافت</p>
      <div className="text-primary-main font-bold text-[1.6rem] flex flex-col gap-4 my-4">
        <p>
          شماره سفارش :{" "}
          <span className="text-text-primary font-normal text-[1.6rem]">
            asdfasdfasdfasdf
          </span>{" "}
        </p>
        <p>
          نام :{" "}
          <span className="text-text-primary font-normal text-[1.6rem]">
            asdfasdfasdfasdf
          </span>
        </p>
        <p>
          ایمیل :{" "}
          <span className="text-text-primary font-normal text-[1.6rem]">
            asdfasdfasdfasdf
          </span>
        </p>
        <p>
          آدرس :{" "}
          <span className="text-text-primary font-normal text-[1.6rem]">
            asdfasdfasdfasdf
          </span>{" "}
        </p>
        <p>
          روش پرداخت :{" "}
          <span className="text-text-primary font-normal text-[1.6rem]">
            asdfasdfasdfasdf
          </span>
        </p>
      </div>
      <div className="text-[1.6rem] font-bold text-text-primary w-full bg-base-card rounded-md pr-4 py-3">
        Status
      </div>
      <p className="font-medium text-[2rem]">خلاصه خرید</p>
      <div className="flex justify-between items-center w-full">
        <p className="font-bold text-[1.6rem] text-text-secondary">
          قمیت محصولات :{" "}
        </p>
        <p className="font-normal text-[1.6rem] text-text-primary">
          100000 تومان
        </p>
      </div>
      <div className="flex justify-between items-center w-full">
        <p className="font-bold text-[1.6rem] text-text-secondary">
          هزینه ارسال :{" "}
        </p>
        <p className="font-normal text-[1.6rem] text-text-primary">
          100000 تومان
        </p>
      </div>
      <div className="flex justify-between items-center w-full">
        <p className="font-bold text-[1.6rem] text-text-secondary">مالیات : </p>
        <p className="font-normal text-[1.6rem] text-text-primary">
          100000 تومان
        </p>
      </div>
      <div className="flex justify-between items-center w-full">
        <p className="font-bold text-[1.6rem] text-text-secondary">
          مبلغ نهایی :{" "}
        </p>
        <p className="font-normal text-[1.6rem] text-text-primary">
          100000 تومان
        </p>
      </div>
    </div>
  );
};

export default Status;
