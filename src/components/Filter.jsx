import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFilters } from "redux/filter/operetions";
import { selectFilter } from "redux/filter/selectors";

const Filter = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilter);

  const onChangeFilter = (e) => {
    console.log(e.currentTarget.value);
  }


useEffect(() => {
  dispatch(getAllFilters())
}, [dispatch])

  return <div className="flex flex-col gap-[20px] xs:hidden lg:flex">
  {filters?.map(({filterValue, name}) => {
    return <div key={name} className="bg-[#EAF2EB] p-[15px] rounded-[5px] w-[235px]">
      <h3 className="mb-[15px] text-[16px] font-bold tracking-[ 0.32px] leading-[24px]">{name}</h3>
      <ul className="flex flex-col gap-[15px]">
      {filterValue?.map(item => {
        return <li key={item} className="">
          <label className="flex items-center gap-[15px]">
            <input type="checkbox" className={`appearance-none w-[24px] h-[24px] border border-solid border-[#78AB7E] rounded-[5px] bg-transparent checked:border-2 relative checked:after:content-[''] checked:after:bg-[#78AB7E] checked:after:w-[15px] checked:after:h-[15px] checked:after:absolute checked:after:left-[2.5px] checked:after:top-[2.5px] `} onChange={onChangeFilter} value={item}/>
            {item}
          </label>
        </li>
      })}
    </ul>
    </div>
  })}
  </div>
}

export default Filter
