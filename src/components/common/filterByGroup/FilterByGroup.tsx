import Checkbox from "../checkbox/Checkbox";


function FilterByGroup({topics}: {topics: string[]}) {
  

return (
  <div className="flex flex-col items-end">
    <div className='bg-white text-black w-[24rem] h-[4rem] rounded-full flex justify-center items-center px-[5.2rem] py-1 mb-8' >
        فیلتر دسته بندی
      </div>
    {
      topics.map((topic) => (
        <Checkbox key={topic} label={topic} containerStyle="flex justify-end gap-2 my-3 mx-8"/>
      ))
    }
  </div>
);
}
export default FilterByGroup;
    