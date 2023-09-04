import { NavLink } from "react-router-dom";

const Discounts = () => {
  return <div className="bg-[#EAF2EB] rounded-[5px] px-[15px] pt-[15px] pb-[30px] flex flex-col gap-[30px]">
    <div>
    <p className="font-bold">Лише для постійних клієнтів! 1+1=3</p>
    <p className="font-bold">Купуй дві подушки та отримай третю
у подарунок!</p>
</div>
<NavLink to='/' className='flex mx-auto px-[25px] py-[15px] bg-[#7FAA84] rounded-[5px] text-[#fff] tracking-[0.28px] font-semibold'>Перейти в каталог</NavLink>
  </div>
}

export default Discounts
