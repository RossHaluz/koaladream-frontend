import { useState } from 'react';
import icons from './img/icons/icons.svg';

const OrderItem = ({item}) => {
const [isOrder, setIsOrder] = useState(false);
const {address, city, dateAdded, department, email, items, payment, phone, postalService, status, numberOrder} = item;

const dayOrder = new Date(dateAdded).getDate();
const monthOrder = new Date(dateAdded).getMonth();
const yearOrder = new Date(dateAdded).getFullYear();

  return (
    <li className="bg-[#EAF2EB] rounded-[5px] p-[15px] flex flex-col">
      <button type='button' className={`flex items-center justify-between ${isOrder ? "mb-[15px]" : "mb-[0px]"}`} onClick={() => setIsOrder(prev => !prev)}>
        <h2 className="font-bold">Замовлення № {numberOrder}</h2>
        <svg className="w-[24px] h-[24px]">
          <use href={`${icons}#icon-down-light`}></use>
        </svg>
      </button>

{isOrder && <>  <h3>ТТН: 20450545678902</h3>
      <h3>{dayOrder}.{monthOrder < 10 ? '0' + monthOrder : monthOrder}.{yearOrder}</h3>
      <h3 className="text-[#7FAA84] mb-[15px]">{status}</h3>

      <ul className="py-[15px] border-y border-solid border-[#7FAA84]">
        {items && items?.map(({count, article, image, price, title, id}) => {
          return <li key={id}>
            <img src={image} alt={title} className='w-[80px] h-[80px]' />

          <div className="flex flex-col">
            <h2 className="font-bold w-[175px] mb-[10px]">
              {title}
            </h2>

            <h3 className="text-[12px] mb-[15px]">Артикул: {article}</h3>

            <div className="flex items-center gap-[26px]">
              <h3>{count} товар на суму</h3>
              <h3 className="text-[#7FAA84] text-[18px] font-bold">{price} ₴</h3>
            </div>
          </div>
          </li>
        })}
      </ul>

      <div className='py-[15px] border-b border-solid border-[#7FAA84] flex items-center gap-[15px]'>
        <div>
        <svg className="w-[24px] h-[24px]">
            <use href={`${icons}#icon-address`}></use>
        </svg>
        </div>
        <p>
        {postalService}, {city}, {department ? department : address}
        </p>
      </div>

      <div className='py-[15px] border-b border-solid border-[#7FAA84] flex items-center gap-[15px]'>
        <div>
        <svg className="w-[24px] h-[24px]">
            <use href={`${icons}#icon-cash`}></use>
        </svg>
        </div>
        <div>
       <h3>{payment}</h3>
        <h3>Промокод на знижку: 4116 (100 грн)</h3>
        </div>
      </div>

      <div className='py-[15px] flex items-center gap-[15px]'>
        <div>
        <svg className="w-[24px] h-[24px]" fill='#78AB7E'>
            <use href={`${icons}#icon-user`}></use>
        </svg>
        </div>
        <div>
            <h3>Галузінська Анастасія</h3>
        <h3> {phone}</h3>
<h3>{email}</h3>
        </div>
      </div></>}
      
    </li>
  );
};

export default OrderItem;
