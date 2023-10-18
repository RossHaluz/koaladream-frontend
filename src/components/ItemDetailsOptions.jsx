import { useState, useEffect } from 'react';
import { BiChevronDown } from 'react-icons/bi';

const ItemDetailsOptions = ({ parseOptions, setCurrentPrice, setSelectOption, selectOption }) => {

  const handleChangeOption = (e) => {
    const {value} = e.target;
    setSelectOption(value);
    // setCurrentPrice(price);
  }

  return (
    <div className="w-full flex flex-col gap-[15px] mt-[30px] mb-[42px]">
      {parseOptions?.map(({ name, options }) => {
        return  <div className="flex items-center relative justify-between" key={name}>
        <h3 className="text-[16px] text-[#484848] font-bold tracking-[0.32px]">{name}</h3>
        <div>
        <select onChange={handleChangeOption} className={`bg-transparent py-[10px] px-[15px] border border-solid border-[#7FAA84] rounded-[5px] w-[225px] outline-none`}>
         {options?.map(item => {
         return <option value={item.name}>{item.name}</option>
         })}
          </select>
        </div>
      </div>
      })}
    </div>
  );
}

export default ItemDetailsOptions;
