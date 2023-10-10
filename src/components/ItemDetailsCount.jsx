import { useState } from "react"
import { AiOutlineMinus } from "react-icons/ai"
import { LiaPlusSolid } from "react-icons/lia"

const ItemDetailsCount = ({setCurrentPrice, currentPrice}) => {
    const [count, setCount] = useState(1);
    const countPrice = count * currentPrice;
    console.log(countPrice);

    const onPlusCount = () => {
      setCount(prev => prev + 1);
    }
  
    const onMinusCount = () => {
      if(count === 1) {
        return;
      }
      setCount(prev => prev - 1);
    }

  return  <div className='w-[118px] border border-solid border-[#7FAA84] rounded-[5px] flex items-center justify-between'>
  <div className='p-[10px] flex items-center justify-cente'>
   <AiOutlineMinus className='w-[20px] h-[20px]' onClick={onMinusCount}/>
  </div>

  <div className='w-[1px] h-10 bg-[#7FAA84]'></div>
  
  <div className='p-[10px] w-[40px] flex items-center justify-center'>{count}</div>

  <div className='w-[1px] h-10 bg-[#7FAA84]'></div>

  <div className='p-[10px] flex items-center justify-cente'>
    <LiaPlusSolid className='w-[20px] h-[20px]' onClick={onPlusCount}/>
  </div>
 </div>
}

export default ItemDetailsCount
