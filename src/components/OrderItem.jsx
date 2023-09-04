import { useState } from 'react';
import icons from './img/icons/icons.svg';
import order_1x from './img/orders/order-item@1x.png';
import order_2x from './img/orders/order-item@2x.png';

const OrderItem = () => {
const [isOrder, setIsOrder] = useState(false);

  return (
    <li className="bg-[#EAF2EB] rounded-[5px] p-[15px] flex flex-col">
      <button type='button' className={`flex items-center justify-between ${isOrder ? "mb-[15px]" : "mb-[0px]"}`} onClick={() => setIsOrder(prev => !prev)}>
        <h2 className="font-bold">Замовлення № 1003</h2>
        <svg className="w-[24px] h-[24px]">
          <use href={`${icons}#icon-down-light`}></use>
        </svg>
      </button>

{isOrder && <>  <h3>ТТН: 20450545678902</h3>
      <h3>10.05.2022</h3>
      <h3 className="text-[#7FAA84] mb-[15px]">Замовлення виконано</h3>

      <ul className="py-[15px] border-y border-solid border-[#7FAA84]">
        <li className="flex gap-[15px] items-start">
          <img
            srcSet={`${order_1x} 80w, ${order_2x} 160w`}
            src={order_1x}
            alt="Order img"
            width="80"
            height="80"
          />

          <div className="flex flex-col">
            <h2 className="font-bold w-[175px] mb-[10px]">
              Двоспальна постільна білизна із сатину “Білосніжна”
            </h2>

            <h3 className="text-[12px] mb-[15px]">Артикул: 267093</h3>

            <div className="flex items-center gap-[26px]">
              <h3>1 товар на суму</h3>
              <h3 className="text-[#7FAA84] text-[18px] font-bold">2 100 ₴</h3>
            </div>
          </div>
        </li>
      </ul>

      <div className='py-[15px] border-b border-solid border-[#7FAA84] flex items-center gap-[15px]'>
        <div>
        <svg className="w-[24px] h-[24px]">
            <use href={`${icons}#icon-address`}></use>
        </svg>
        </div>
        <p>
        Адресна доставка “Нова Пошта”
м.Хмельницький, вул. Кармелюка, 
24, кв. 24
        </p>
      </div>

      <div className='py-[15px] border-b border-solid border-[#7FAA84] flex items-center gap-[15px]'>
        <div>
        <svg className="w-[24px] h-[24px]">
            <use href={`${icons}#icon-cash`}></use>
        </svg>
        </div>
        <p>
       <h3> Кредитна/дебетова карта (Monobank Acquiring). </h3>
        <h3>Промокод на знижку: 4116 (100 грн)</h3>
        </p>
      </div>

      <div className='py-[15px] flex items-center gap-[15px]'>
        <div>
        <svg className="w-[24px] h-[24px]">
            <use href={`${icons}#icon-user`}></use>
        </svg>
        </div>
        <p>
            <h3>Галузінська Анастасія</h3>
        <h3> 0976520604</h3>
<h3>nastyatextil@gmail.com</h3>
        </p>
      </div></>}
      
    </li>
  );
};

export default OrderItem;
