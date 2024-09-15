import Checkbox from '../common/checkbox/Checkbox';
import { useState } from 'react';

 function FilterByGroup() {
  const [checkbox1Checked, setCheckbox1Checked] = useState(false);
  const [checkbox2Checked, setCheckbox2Checked] = useState(false);
  const [checkbox3Checked, setCheckbox3Checked] = useState(false);
  const [checkbox4Checked, setCheckbox4Checked] = useState(false);
  const [checkbox5Checked, setCheckbox5Checked] = useState(false);

  return (
    <div className="m-5 w-[240px] h-[224px] flex flex-col">
      <div className='w-[240px] h-[40px] rounded-full bg-black flex justify-center items-center px-[5.2rem] py-1' >
        فیلتر دسته بندی
      </div>
      <div className="w-[240px] h-[180px] flex flex-col p-6">
        <div className="w-[200px] h-[20px] gap-1 my-1 flex      justify-end items-center">
          <Checkbox checked={checkbox1Checked} onChange={setCheckbox1Checked} labelStyle='p-2 text-[14px] relative top-[-4px]' label='Smartphones' id='1' className="w-[16px] h-[16px]"/>
        </div>
        <div className="w-[200px] h-[20px] gap-1 my-1 flex      justify-end items-center">
          <Checkbox checked={checkbox2Checked} onChange={setCheckbox2Checked} labelStyle='p-2 text-[14px] relative top-[-4px]' label='Laptops' id='2' className="w-[16px] h-[16px] "/>
        </div>
        <div className="w-[200px] h-[20px] gap-1 my-1 flex      justify-end items-center">
          <Checkbox checked={checkbox3Checked} onChange={setCheckbox3Checked} labelStyle='p-2 text-[14px] relative top-[-4px]' label='Tablets' id='3' className="w-[16px] h-[16px]"/>
        </div>
        <div className="w-[200px] h-[20px] gap-1 my-1 flex      justify-end items-center">
          <Checkbox checked={checkbox4Checked} onChange={setCheckbox4Checked} labelStyle='p-2 text-[14px] relative top-[-4px]' label='Wearables' id='4' className="w-[16px] h-[16px]"/>
        </div>
        <div className="w-[200px] h-[20px] gap-1 my-1 flex      justify-end items-center">
          <Checkbox checked={checkbox5Checked} onChange={setCheckbox5Checked} labelStyle='p-2 text-[14px] relative top-[-4px]' label='Audio' id='5' className="w-[16px] h-[16px]"/>
        </div>
      </div>
    </div>
  )
}

export default FilterByGroup;