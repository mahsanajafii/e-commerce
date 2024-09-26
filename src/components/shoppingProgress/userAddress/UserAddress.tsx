import { useForm, FieldValues } from "react-hook-form";
import Input from "../../common/input/Input";
import Button from "../../common/button/Button";
import RadioButton from "../../common/radioButton/RadioButton";
import { useStepperStore } from "../store";

const UserAddress = () => {
 const { setStep } = useStepperStore()

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  const labelStyler = "text-black text-2xl block mb-5";
  const inputStyler =
    "w-full rounded-xl p-4 text-right bg-white text-black block";
  const containerStyle = "m-2 h-[6.4rem] w-[64rem]";

  return (
    <div className=" m-auto flex flex-col bg-[#CED2D7] text-right max-w-[70rem] p-5">
      <div></div>
      <div className="flex flex-col justify-center gap-2">
        <p className="text-black text-2xl font-medium mb-12">خرید</p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[640px] flex flex-col gap-6"
        >
          <div className={containerStyle}>
            <Input
              {...register("address")}
              id="address"
              placeholder="آدرس را وارد نمایید"
              label="آدرس"
              inputStyle={inputStyler}
              labelStyle={labelStyler}
            />
          </div>
          <div className={containerStyle}>
            <Input
              {...register("city")}
              id="city"
              placeholder="شهر را وارد نمایید"
              label="شهر"
              inputStyle={inputStyler}
              labelStyle={labelStyler}
            />
          </div>
          <div className={containerStyle}>
            <Input
              {...register("country")}
              id="country"
              placeholder="کشور را وارد نمایید"
              label="کشور"
              inputStyle={inputStyler}
              labelStyle={labelStyler}
            />
          </div>
          <div className={containerStyle}>
            <Input
              {...register("postalCode")}
              id="postalCode"
              placeholder="کد پستی را وارد نمایید"
              label="کد پستی"
              inputStyle={inputStyler}
              labelStyle={labelStyler}
            />
          </div>
          <div className=" m-2 flex flex-col gap-2">
            <p className="text-gray-800 text-2xl">روش پرداخت</p>
            <RadioButton
              name="bank"
              options={[
                {
                  value: "درگاه پرداخت بانک پاسارگاد",
                  label: "درگاه پرداخت بانک پاسارگاد",
                },
              ]}
            />
          </div>
          <Button
            onClick={() => {setStep(3)}}
            className="w-full h-[4.8rem] rounded-full bg-[#DB2777] hover:bg-[#831747] text-center content-center py-[0.8rem] px-[3.2rem]"
            children="ادامه"
          />
        </form>
      </div>
    </div>
  );
};

export default UserAddress;
