import { Link } from 'react-router-dom';
import icons from './img/icons/icons.svg';

const HitsItemsListItem = ({images, oldPrice, price, status, article, title}) => {

  return <li className='w-full rounded-[5px] border border-solid border-[#48484833]'>
    <Link>
   <img src={images} alt="Img item" className='w-full h-[253px]'/>
   </Link>
   <div className='px-[15px] pt-[20px] pb-[15px]'>
   <Link> <h2 className='mb-[15px] text-[16px] font-semibold tracking-[0.64px]'>{title}</h2></Link>
   <h3 className={`text-[12px] ${status === 'В наявності' ? 'text-[#7FAA84]' : 'text-[#EF787A]'} font-medium mb-[13px] flex gap-[6px] items-center`}>
    <svg className='w-[20px] h-[20px]'>
        <use href={`${icons}#icon-status-in-stock`}></use>
    </svg>
    {status}
    </h3>
   <p className='text-[12px] mb-[27px]'>Артикул: {article}</p>

   <div className='flex justify-between items-center'>
   <div className='flex items-center gap-[7px]'>
    <h3 className='text-[#7FAA84] text-[16px] font-bold'>{price}₴</h3>
    <div className='w-[1px] h-[24px] bg-[#484848]/[.30]'></div>
    <span className='font-semibold text-[#484848]/[.30] line-through'>{oldPrice}</span>
   </div>
   <button type='button'>
    <svg className='w-[24px] h-[24px]'>
        <use href={`${icons}#icon-bag`}></use>
    </svg>
   </button>
   </div>

   </div>
  </li>
}

export default HitsItemsListItem
