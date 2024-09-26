import ShoppingSummary from "./shoppingSummary/ShoppingSummary";
import UserAddress from "./userAddress/UserAddress";
import Stepper from "./stepper/Stepper";

const ShoppingProgress = () => {
  return (
    <div className="w-fit mx-auto">
      <Stepper></Stepper>
      <UserAddress></UserAddress>
      <ShoppingSummary></ShoppingSummary>
    </div>
  )
}

export default ShoppingProgress