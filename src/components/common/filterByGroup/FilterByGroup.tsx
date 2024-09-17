import Checkbox from '../checkbox/Checkbox';
import { useState } from 'react';

 function FilterByGroup() {
  const [checkbox1Checked, setCheckbox1Checked] = useState(false);
  const [checkbox2Checked, setCheckbox2Checked] = useState(false);
  const [checkbox3Checked, setCheckbox3Checked] = useState(false);
  const [checkbox4Checked, setCheckbox4Checked] = useState(false);
  const [checkbox5Checked, setCheckbox5Checked] = useState(false);

  return (
    <div className="w-[24rem] h-[22.4rem] flex flex-col">
      <div className='w-[24rem] h-[4rem] rounded-full bg-black flex justify-center items-center px-[5.2rem] py-1' >
        فیلتر دسته بندی
      </div>
      <div className="w-[24rem] h-[18rem] flex flex-col p-6">
        <div className="w-[20rem] h-[2rem] gap-1 my-1 flex justify-end items-center">
          <Checkbox checked={checkbox1Checked} onChange={setCheckbox1Checked} labelStyle='p-2 text-sm relative top-[-0.4rem]' label='Smartphones' id='1' className="w-4 h-4"/>
        </div>
        <div className="w-[20rem] h-[2rem] gap-1 my-1 flex justify-end items-center">
          <Checkbox checked={checkbox2Checked} onChange={setCheckbox2Checked} labelStyle='p-2 text-sm relative top-[-0.4rem]' label='Laptops' id='2' className="w-4 h-4 "/>
        </div>
        <div className="w-[20rem] h-[2rem] gap-1 my-1 flex justify-end items-center">
          <Checkbox checked={checkbox3Checked} onChange={setCheckbox3Checked} labelStyle='p-2 text-sm relative top-[-0.4rem]' label='Tablets' id='3' className="w-4 h-4"/>
        </div>
        <div className="w-[20rem] h-[2rem] gap-1 my-1 flex justify-end items-center">
          <Checkbox checked={checkbox4Checked} onChange={setCheckbox4Checked} labelStyle='p-2 text-sm relative top-[-0.4rem]' label='Wearables' id='4' className="w-4 h-4"/>
        </div>
        <div className="w-[20rem] h-[2rem] gap-1 my-1 flex justify-end items-center">
          <Checkbox checked={checkbox5Checked} onChange={setCheckbox5Checked} labelStyle='p-2 text-sm relative top-[-0.4rem]' label='Audio' id='5' className="w-4 h-4"/>
        </div>
      </div>
    </div>
  )
}

export default FilterByGroup;