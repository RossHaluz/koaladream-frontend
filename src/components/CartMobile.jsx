import { AiOutlineMinus } from "react-icons/ai";
import { LiaPlusSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { removeUserContactDetails } from "redux/auth/slice";
import { selectOrderItems } from "redux/order/selectors";
import { removeItemFromCart } from "redux/order/slice";
import icons from './img/icons/icons.svg';

const CartMobile = () => {
    const items = useSelector(selectOrderItems);
    const dispatch = useDispatch();
    console.log(items);
    
    const removeItem = (itemId) => {
        dispatch(removeItemFromCart(itemId))
        dispatch(removeUserContactDetails())
    }

  return (
 
 <div className="pt-[18px] pb-[30px] flex flex-col gap-[30px] tb:hidden">
    {items?.length > 0 ?  <div className="flex flex-col gap-[15px]">
      <h2 className="text-[16px] tracking-[0.64px] font-bold">Кошик</h2>

      <div className="p-[15px] rounded-[5px] shadow-[2px_2px_5px_0px_rgba(127,170,132,0.50),_-2px_-2px_5px_0px_rgba(120,171,126,0.50)]">
        <div className="flex flex-col gap-[15px]">
           <ul className="flex flex-col gap-[10px]">
             {items?.map(({image, title, price, id, count}) => {
                return <li key={id} className="flex flex-col gap-[15px]">
                    <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[15px]">
                        <img src={image} alt={title} className="rounded-[5px] w-[65p] h-[65px]" />
                        <h3 className="underline w-[167px] line-clamp-3">Двоспальна постільна білизна із сатину  “Білосніжна”</h3>
                    </div>
                    <button type='button' onClick={() => removeItem(id)}>
                    <svg className="w-[24px] h-[24px]">
                        <use href={`${icons}#trash`}></use>
                    </svg>
                    </button>
                    </div>

                    <div className="flex items-center justify-end gap-[39px]">
                        <span className="text-[18px] font-bold text-[#7FAA84]">{price} ₴</span>
                        
                        <div className='w-[118px] border border-solid border-[#7FAA84] rounded-[5px] flex items-center justify-between'>
<div className='p-[6px] flex items-center justify-cente'>
<AiOutlineMinus className='w-[18px] h-[18px]'/>
</div>

<div className='w-[1px] h-10 bg-[#7FAA84]'></div>

<div className='p-[6px] w-[40px] flex items-center justify-center text-[16px] font-medium tracking-[0.32px]'>{count}</div>

<div className='w-[1px] h-10 bg-[#7FAA84]'></div>

<div className='p-[6px] flex items-center justify-cente'>
<LiaPlusSolid className='w-[18px] h-[18px]'/>
</div>
</div>
                    </div>
                </li>
             })}
           </ul>
        </div>
      </div>
      </div> : <div className="py-[80px] flex flex-col gap-[15px]">
        <h3 className="text-center font-semibold">Ваш кошик порожній</h3>
      <div className="h-[1px] bg-[#484848]/[.30] w-[305px]"></div>
        </div>}

      <div className="flex flex-col gap-[15px] justify-center">
        <NavLink to={items?.length > 0 ? '/order' : '/'} className='py-[15px] px-[25px] bg-[#7FAA84] rounded-[5px] text-[#fff] font-semibold flex justify-center items-center w-[228px] mx-auto'>{items?.length > 0 ? 'Оформити замовлення' : 'На головну'}</NavLink>
        <NavLink to='/' className='py-[15px] px-[25px] border border-s border-[#7FAA84] rounded-[5px] text-[#484848] font-semibold flex justify-center items-center w-[228px] mx-auto'>Продовжити покупки</NavLink>
      </div>
    </div> 
  )
}

export default CartMobile
