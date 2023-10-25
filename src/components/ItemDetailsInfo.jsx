import icons from './img/icons/icons.svg';

const ItemDetailsInfo = () => {
  return <>
  <div className='hidden tb:grid grid-cols-3 gap-[30px] items-center mb-[60px]'>

<div className='p-[15px] bg-[#7faa84]/[.30] rounded-[5px] flex items-center gap-[15px]'>
  <svg className='min-w-[30px] max-w-[30px] h-[30px]'>
    <use href={`${icons}#box`}></use>
  </svg>
  <p className='font-medium'>Безкоштовна доставка при 
замовленні на суму від 2000 грн</p>
</div>

<div className='p-[15px] bg-[#7faa84]/[.30] rounded-[5px] flex items-center gap-[15px]'>
  <svg className='min-w-[30px] max-w-[30px] h-[30px]'>
    <use href={`${icons}#refresh`}></use>
  </svg>
  <p className='font-medium'>Гарантія обміну чи повернення
протягом 14 днів</p>
</div>

<div className='p-[15px] bg-[#7faa84]/[.30] rounded-[5px] flex items-center gap-[15px]'>
  <svg className='min-w-[30px] max-w-[30px] h-[30px]'>
    <use href={`${icons}#credit-card`}></use>
  </svg>
  <p className='font-medium'>Безпечна online-оплата на сайті
через сервіс LiqPay</p>
</div>

</div>

<div className='tb:hidden p-[15px] bg-[#EAF2EB] rounded-[5px] mb-[30px] flex flex-col gap-[25px]'>
  <div className='flex items-center gap-[15px]'>
  <svg className='min-w-[30px] max-w-[30px] h-[30px]'>
    <use href={`${icons}#refresh`}></use>
  </svg>
  <p className='text-[14px] w-[238px]'>
  Гарантія обміну чи повернення
протягом 14 днів
  </p>
  </div>

  <div className='flex items-center gap-[15px]'>
  <svg className='min-w-[30px] max-w-[30px] h-[30px]'>
    <use href={`${icons}#refresh`}></use>
  </svg>
  <p className='text-[14px] w-[238px]'>
  Безпечна online-оплата на сайті
через сервіс LiqPay
  </p>
  </div>

  <div className='flex items-center gap-[15px]'>
  <svg className='min-w-[30px] max-w-[30px] h-[30px]'>
    <use href={`${icons}#credit-card`}></use>
  </svg>
  <p className='text-[14px] w-[238px]'>
  Безпечна online-оплата на сайті
через сервіс LiqPay
  </p>
  </div>
</div>
</>
}

export default ItemDetailsInfo
