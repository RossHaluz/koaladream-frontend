import { AiOutlineMinus } from "react-icons/ai";
import { LiaPlusSolid } from "react-icons/lia";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { removeUserContactDetails } from "redux/auth/slice";
import { selectOrderItems } from "redux/order/selectors";
import { removeItemFromCart } from "redux/order/slice";

const Cart = () => {
const items = useSelector(selectOrderItems);
const dispatch = useDispatch();

const removeItem = (itemId) => {
    dispatch(removeItemFromCart(itemId))
    dispatch(removeUserContactDetails())
}

  return <div className="pt-[30px] pb-[40px]">
    {items.length > 0 ? <><div className="flex flex-col gap-[30px]">

<div className=''>
  <ul className="flex flex-col gap-[10px]">
    {items?.map(({ image, title, price, oldPrice, article, id }) => {
      return (
        <li className="bg-[#EAF2EB] overflow-hidden rounded-[5px]">
             <div className="flex items-center justify-between">
             <div className="flex items-center gap-[15px]">
             <img
            src={image}
            className="w-[138px] h-[137px] rounded-r-[5px]"
            alt={title}
          />

          <div className='flex flex-col gap-[12px] py-[10px]'>
            <div className="flex flex-col gap-[10px]">
              <h2 className="text-[16px] font-bold tracking-[0.64px] underline line-clamp-1">
                {title}
              </h2>
              <h3 className="text-[12px]">Артикул: {article}</h3>
              <div className="flex items-center gap-[7px]">
                <h3 className="text-[#7FAA84] text-[16px] font-bold">
                  {price}₴
                </h3>
                <div className="w-[1px] h-[24px] bg-[#484848]/[.30]"></div>
                <span className="font-semibold text-[#484848]/[.30] line-through">
                  {oldPrice}
                </span>
              </div>
            </div>

            <div className='w-[118px] border border-solid border-[#7FAA84] rounded-[5px] flex items-center justify-between'>
<div className='p-[6px] flex items-center justify-cente'>
<AiOutlineMinus className='w-[18px] h-[18px]' onClick={removeItem}/>
</div>

<div className='w-[1px] h-10 bg-[#7FAA84]'></div>

<div className='p-[6px] w-[40px] flex items-center justify-center text-[16px] font-medium tracking-[0.32px]'>1</div>

<div className='w-[1px] h-10 bg-[#7FAA84]'></div>

<div className='p-[6px] flex items-center justify-cente'>
<LiaPlusSolid className='w-[18px] h-[18px]'/>
</div>
</div>
          </div>
             </div>

          <RxCross2 className="mr-[30px] w-[24px] h-[24px]" onClick={() => removeItem(id)}/>
             </div>
        </li>
      );
    })}
  </ul>
</div>
</div>

<div className='flex items-center gap-[30px] mt-[40px]'>
<NavLink to='/' className='text-[16px] font-bold underline tracking-[0.32p]'>Продовжити покупки</NavLink>
<NavLink to='/order' className='px-[25.5px] py-[10px] bg-[#7FAA84] rounded-[5px] text-[#fff] text-[16px] font-semibold tracking-[ 0.32px]'>Оформити замовлення</NavLink>
</div> </>: <div className="flex flex-col gap-[15px] justify-center">
<h3 className="text-[18px] font-bold tracking-[0.24px] text-center">Корзина пуста :(</h3>
<NavLink to='/' className='px-[25.5px] py-[10px] bg-[#7FAA84] rounded-[5px] text-[#fff] text-[16px] font-semibold tracking-[ 0.32px] w-[238px] mx-auto flex items-center justify-center'>Перейти в магазин</NavLink>
</div>}
  </div>
}

export default Cart
