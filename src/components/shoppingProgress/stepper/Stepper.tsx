import Button from "../../common/button/Button"
import { IoCheckbox } from "react-icons/io5";

const Stepper = () => {
  return (
    <div className="mb-20 pt-20 px-5 w-full flex flex-row-reverse justify-center items-center gap-[1.6rem]">
        <Button className="flex flex-col gap-4 items-center p-4">
           <p className="text-text-primary text-[1.6rem]">ورود</p>
           <IoCheckbox className="text-[1.8rem]" />
        </Button>
        <div className="border border-success-main w-full"></div>
        <Button className="flex flex-col gap-4 items-center p-4">
           <p className="text-text-primary text-[1.6rem]">ورود</p>
           <IoCheckbox className="text-[1.8rem]" />
        </Button>
        <div className="border border-success-main w-full"></div>
        <Button className="flex flex-col gap-4 items-center p-4">
           <p className="text-text-primary text-[1.6rem]">ورود</p>
           <IoCheckbox className="text-[1.8rem]" />
        </Button>
    </div>
  )
}

export default Stepper