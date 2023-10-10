import { useState } from "react";
import { BiChevronDown } from 'react-icons/bi';

const ItemDetailsOptions = ({parseOptions, setCurrentPrice, setSelectOption, selectOption}) => {
    const [isOpen, setIsOpen] = useState(false);

  const handleChangeOption = (option, price) => {
    setSelectOption(option);
    setCurrentPrice(price);
    setIsOpen(false);
  }

  return <div className='w-full mt-[30px] mb-[42px]'>
  {parseOptions?.map(({options, name}) => {
    return <div className='flex items-center relative justify-between' key={name}>
       <h3 className='text-[16px] text-[#484848] font-bold tracking-[0.32px]'>{name}</h3>
       <div>
      <div className={`py-[10px] px-[15px] rounded-t-[5px] ${!isOpen && 'rounded-[5px]'} border-l border-r border-t ${!isOpen && 'border-b'} border-solid border-[#7FAA84] flex items-center justify-between w-[225px]`} onClick={() => setIsOpen(!isOpen)}>  
      <h3 className='tracking-[0.32px] text-[16px] font-medium'>{selectOption}</h3>
      <BiChevronDown className='w-[20px] h-[20px]'/>
      </div>

     {isOpen &&  <div className='w-[225px] p-[15px] absolute top-[45px] bg-[#F5FAF6] right-0 border border-solid border-[#7FAA84] rounded-b-[5px]'>
        <ul className='flex flex-col gap-[15px]'>
      {options?.map(({name, price}) => {
        return <li key={name} onClick={() => handleChangeOption(name, price)} className='flex flex-col gap-[15px] tracking-[0.96px] text-[16px] after:w-full after:h-[1px] after:bg-[#7FAA84] last-of-type:after:hidden'>
          {name}
          </li>
})}
 </ul>
      </div>}
      </div>

    </div>
  })}
</div>
}

export default ItemDetailsOptions
