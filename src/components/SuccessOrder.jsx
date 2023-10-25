import { useSelector } from "react-redux";
import { selectDataFromOrder } from "redux/order/selectors";
import icons from './img/icons/icons.svg';
import { NavLink } from "react-router-dom";

const SuccessOrder = () => {
const dataFromOrder = useSelector(selectDataFromOrder);

    const {postalService, city = '', department = '', payment = '', lastName = '', firstName = '', phone = '', email = ''} = dataFromOrder;

  return (
    <div className='py-[30px]'>
      <div className='flex flex-col gap-[30px]'>
        <h2 className='text-[16px] tracking-[0.64px] tb:text-[24px] font-bold'>{firstName && firstName}, дякуємо за замовлення!</h2>
        <p className='font-medium tb:tracking-[0.32px] w-full lg:w-[978px]'>Ваше замовлення № 1003 прийняте. Ми звʼяжеться із вами найближчим часом для підтвердження замовлення
або надішлено інформаційне повідомлення у Viber чи SMS.</p>

<div className='p-[30px] border border-s border-[#7FAA84] rounded-[5px] flex flex-col gap-[15px] tb:gap-[30px]'>
<div className='flex flex-col tb:flex-row items-start gap-[10px] tb:items-center justify-between'>
<h3 className='text-[24px] font-bold'>Замовлення №1003</h3>
<div className='flex items-center gap-[41px] tb:gap-[15px]'>
            <h3 className='text-[16px] font-medium tracking-[0.32px]'>05.05.2022</h3>
            <h3 className='text-[16px] font-medium tracking-[0.32px]'>15:38</h3>
        </div>
</div>
<div className='flex flex-col gap-[10px]'>
<div className='flex items-center justify-between'>
    <h3 className='text-[16px] tracking-[0.64px]'>Назва і ціна товару</h3>
    <h3 className='hidden tb:inline-block text-[16px] tracking-[0.64px]'>Кількість</h3>
    <h3 className='hidden tb:inline-block text-[16px] tracking-[0.64px]'>Ціна</h3>
</div>
<div className='w-full h-[0.5px] bg-[#7FAA84]'></div>
</div>

<div className="flex flex-col gap-[15px]">
    {dataFromOrder && dataFromOrder?.items.map(({image, title, article, id}) => {
        return <div key={id} className="flex flex-col gap-[15px] tb:flex-row items-end justify-between">
            <div className="flex items-start gap-[30px]">
            <img src={image} alt={title} className="w-[94px] h-[93px] rounded-[5px]"/>
            <div className="flex flex-col gap-[13px]">
            <div className="flex flex-col gap-[10px]">
                <h3 className="line-clamp-3 tb:text-[16px] font-bold tracking-[0.64px] underline">{title}</h3>
                <h3 className="text-[12px]">Артикул: {article}</h3>
                <div className="tb:hidden grid grid-cols-2 items-center gap-[11px]">
            <span>1 товар на суму</span>
            <h3 className="text-[#7FAA84] font-medium">1 600 ₴</h3>
            </div>
            </div>
            <span className="hidden tb:inline-block ml-auto mr-[87px] text-[16px] tracking-[0.64px]">1 шт.</span>
            </div>
            </div>

            <div className="hidden tb:flex items-center gap-[11px]">
            <span className="text-[16px] font-medium tracking-[0.32px] w-[133px]">1 товар на суму</span>
            <h3 className="text-[16px] text-[#7FAA84] font-medium w-[59px]">1 600 ₴</h3>
            </div>
        </div>
    })}
</div>

<div className="w-full h-[0.5px] bg-[#7FAA84]"></div>

<div className="flex items-start gap-[41px]">
    <h3 className="text-[16px] hidden tb:inline-block font-medium tracking-[0.64px]">Доставка</h3>
    <div className="flex items-start gap-[15px]">
        <svg className="min-w-[24px] max-w-[24px] min-h-[24px] max-h-[24px]">
            <use href={`${icons}#delivery`}></use>
        </svg>
        <div className="flex flex-col">
        <p className="tb:text-[16px] tracking-[0.32px]">"{postalService && postalService}"</p>
        <p className="tb:text-[16px] tracking-[0.32px]">м.{city && city}, {department && department}</p>
        </div>
    </div>
</div>

<div className="w-full h-[0.5px] bg-[#7FAA84]"></div>

<div className="flex items-start gap-[59px]">
    <h3 className="text-[16px] font-medium hidden tb:inline-block tracking-[0.64px]">Оплата</h3>
    <div className="flex items-start gap-[15px]">
        <svg className="min-w-[24px] max-w-[24px] min-h-[24px] max-h-[24px]">
            <use href={`${icons}#credit`}></use>
        </svg>
        <div className="flex flex-col">
        <p className="tb:text-[16px] tracking-[0.32px]">{payment && payment}</p>
        </div>
    </div>
</div>

<div className="w-full h-[0.5px] bg-[#7FAA84]"></div>

<div className="flex items-start gap-[36px]">
    <h3 className="text-[16px] font-medium hidden tb:inline-block tracking-[0.64px]">Покупець</h3>
    <div className="flex items-start gap-[15px]">
        <svg className="min-w-[24px] max-w-[24px] min-h-[24px] max-h-[24px]">
            <use href={`${icons}#user`}></use>
        </svg>
        <div className="flex flex-col">
        <p className="tb:text-[16px] tracking-[0.32px]">{lastName && lastName} {firstName && firstName}</p>
        <p className="tb:text-[16px] tracking-[0.32px]">{phone && phone}</p>
        {email && <p className="text-[16px] tracking-[0.32px]">{email && email}</p>}
        </div>
    </div>
</div>

</div>

<NavLink to='/' className='text-[16px] font-semibold tracking-[0.32px] text-[#fff] px-[25px] py-[15px] bg-[#7FAA84] rounded-[5px] mx-auto'>На головну</NavLink>
      </div>
    </div>
  )
}

export default SuccessOrder
