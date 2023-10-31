import { NavLink } from "react-router-dom"
import OdersList from "./OdersList";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrdersUser } from 'redux/order/operetions';
import { selectUserOrders } from 'redux/order/selectors';

const HistoryOlders = () => {
  const dispatch = useDispatch();
  const orders = useSelector(selectUserOrders);

useEffect(() => {
  dispatch(getOrdersUser())
}, [dispatch])

  return <>
  {orders?.length > 0 ? <OdersList orders={orders}/> : <div className="bg-[#EAF2EB] px-[64px] py-[30px] w-full rounded-[5px] flex flex-col justify-center items-center gap-[30px]">
    <h3>Ви ще не робили замовлень</h3>
    <NavLink to='/' className='px-[25px] py-[15px] bg-[#7FAA84] rounded-[5px] text-[#fff] tracking-[ 0.28px] font-semibold flex justify-center items-center'>Перейти в каталог</NavLink>
  </div>}
  </>
}

export default HistoryOlders
