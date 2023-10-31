import { AiOutlineMinus } from "react-icons/ai";
import { LiaPlusSolid } from "react-icons/lia";
import { RxCross2 } from "react-icons/rx";

const OrderProductsItem = ({item}) => {
    const {image, title, price, oldPrice, count} = item;
    
  return <li className="flex items-center gap-[30px]">
    <button type="button">
    <RxCross2 className="min-w-[24px] max-w-[24px] min-h-[24px] max-h-[24px]"/>
    </button>
    <img src={image} alt={title} className="min-w-[118px] max-w-[118px] min-h-[118px] max-h-[118px] rounded-[5px]"/>
    <div className="flex flex-col gap-[15px]">
        <h3 className="text-[16px] font-bold tracking-[0.64px] underline line-clamp-2">{title}</h3>

        <div className="flex items-center gap-[10px]">
            <span>{count}</span>
            <RxCross2 className="w-[10px] h-[10px]"/>

            <div className="flex items-center gap-[7px]">
                <h3 className="text-[16px] font-bold text-[#7FAA84]">{price}₴</h3>
                <div className="w-[1px] h-[17px] bg-[#484848]/[.30]"></div>
                <span className="font-semibold text-[#484848]/[.30] line-through">{oldPrice}</span>
            </div>
        </div>

        <div className='w-[118px] border border-solid border-[#7FAA84] rounded-[5px] flex items-center justify-between'>
  <div className='p-[6px] flex items-center justify-cente'>
   <AiOutlineMinus className='w-[18px] h-[18px]'/>
  </div>

  <div className='w-[1px] h-10 bg-[#7FAA84]'></div>
  
  <div className='py-[5px] w-[30px] flex items-center justify-center'>{count}</div>

  <div className='w-[1px] h-10 bg-[#7FAA84]'></div>

  <div className='p-[6px] flex items-center justify-cente'>
    <LiaPlusSolid className='w-[18px] h-[18px]' />
  </div>
 </div>

    </div>
  </li>
}

export default OrderProductsItem
