import { useDispatch } from "react-redux";
import { setCount } from "redux/items/slice";

const ItemDetailsOptions = ({ parseOptions, currentPrice, setCurrentPrice, setSelectOption, setCountItem}) => {
const dispatch = useDispatch();

  const handleChangeOption =  (e) => {
    const {value} = e.target;
    setSelectOption(value)
    setCountItem(1);
    dispatch(setCount(1));
  }

  return (
    <div className="w-full flex flex-col gap-[15px] mt-[15px] tb:mt-[30px]  mb-[17px] tb:mb-[42px]">
      {parseOptions?.map(({ name, options }) => {
        return  <div className="flex flex-col tb:flex-row gap-[5px] tb:items-center relative justify-between" key={name}>
        <h3 className="text-[14px] font-semibold tb:text-[16px] text-[#484848] tb:font-bold tracking-[0.32px]">{name}</h3>
        <div>
        <select onChange={handleChangeOption} className={`bg-[#EAF2EB] tb:bg-transparent py-[10px] px-[15px] tb:border tb:border-solid tb:border-[#7FAA84] rounded-[5px] w-full tb:w-[225px] outline-none`}>
         {options?.map(item => {
         return <option key={item.name} value={item.name}>{item.name}</option>
         })}
          </select>
        </div>
      </div>
      })}
    </div>
  );
}

export default ItemDetailsOptions;
