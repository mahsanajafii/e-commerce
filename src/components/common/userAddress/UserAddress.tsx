import { useState } from "react";
import Button from "../button/Button";
import Input from "../input/Input";

interface IUserAddressProps {
onSubmit: (values: {Address: string; City: string; Country: string; PostalCode: string}) => void;
}

const UserAddress: React.FC<IUserAddressProps> = ({ onSubmit }) => {

    const [addressValue, setAddressValue] = useState("");
    const [cityValue, setCityValue] = useState("");
    const [countryValue, setCountryValue] = useState("");
    const [postalCodeValue, setPostalCodeValue] = useState("");

    const [error, setError] = useState("");
    
    const handleSubmit = () => {
      if (addressValue === '' || cityValue === '' || countryValue === '' || postalCodeValue === '') {
        setError('Please Fill in All Fields.');
      } else {
      console.log(
       onSubmit({Address: addressValue, City:cityValue, Country:countryValue, PostalCode:postalCodeValue}));
       setAddressValue('');
       setCityValue('');
       setCountryValue('');
       setPostalCodeValue('');
       setError('');
      }
    };
    
    const labelStyler = "absolute top-[-1.5rem] right-0 text-black" ;
    const inputStyler = "w-full rounded-xl p-4 text-right bg-white text-black";

  return (
<div className="m-auto flex flex-col bg-cyan-700 text-right max-w-[70rem] p-5">
  {error && <p className="bg-red-600 font-bold">{error}</p> }
  <div></div>
  <div className="flex flex-col justify-center gap-4" >
    <div>
      <p className="text-black">
        خرید
      </p>
    </div>
    <div className="m-2 relative h-[6.4rem] w-[64rem]">
      <Input id="address" label="آدرس" placeholder="آدرس را وارد نمایید" value={addressValue} onChange={(e) => setAddressValue(e.target.value)} labelStyle= {labelStyler} className={inputStyler}/>
      </div>
    <div className="m-2 relative h-[6.4rem]">
      <Input id="city" label="شهر" placeholder="شهر را وارد نمایید" onChange={(e) => setCityValue(e.target.value)} value={cityValue} labelStyle= {labelStyler} className={inputStyler}/>
      </div>
    <div className="m-2 relative h-[6.4rem]">
      <Input id="country" label="کشور" placeholder="کشور را وارد نمایید" onChange={(e) => setCountryValue(e.target.value)} value={countryValue} labelStyle= {labelStyler} className={inputStyler}/>
      </div>
    <div className="m-2 relative h-[6.4rem]">
      <Input id="postal" label="کد پستی" placeholder="کد پستی را وارد نمایید" onChange={(e) => setPostalCodeValue(e.target.value)} value={postalCodeValue} labelStyle= {labelStyler} className={inputStyler}/>
      </div>
    <div className="m-2">
      <label htmlFor="paymentMethod" className="text-gray-800">روش پرداخت</label>
      <div id="paymentMethod" className="text-black">درگاه پرداخت بانک پاسارگاد</div>
      </div>
    <div><Button children="ادامه" className="w-full" onClick={handleSubmit}></Button></div>
  </div>
</div>
  );
};

export default UserAddress;