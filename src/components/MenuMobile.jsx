import Logo from "./Logo";
import {AiOutlineClose} from 'react-icons/ai';
import icons from './img/icons/icons.svg';
import { Link } from "react-router-dom";
import CategoriesMobile from "./CategoriesMobile";
import { useDispatch, useSelector } from "react-redux";
import { openMenu } from "redux/mobileMenu/slice";
import { selectIsOpenCatalog } from "redux/categories/selectors";
import LoginFormMobile from "./LoginFormMobile";
import { useState } from "react";

const MenuMobile = () => {
const dispatch = useDispatch();
const openCatalog = useSelector(selectIsOpenCatalog);
const [isOpenLoginPage, setIsOpenLoginPage] = useState(false);
 
  return <>
  <div className='fixed left-0 top-0 z-10 overflow-y-auto w-full h-full bg-[#F5FAF6] container pb-[98px]'>
    <div className="flex justify-center" onClick={() => dispatch(openMenu(false))}>
    <Logo/>
    </div>
    <div className="flex justify-between items-center mt-[12px] mb-[17px]">
        <h3 className="text-[16px] font-semibold">Меню</h3>
        <AiOutlineClose className="w-[24px] h-[24px]" onClick={() => dispatch(openMenu(false))}/>
    </div>
    <div className="flex flex-col gap-[15px]">
    <form>
        <div className="relative">
        <input type="text" placeholder="Пошук..."  className="w-full py-[13px] px-[15px] text-[16px] rounded-[5px] outline-none bg-[#EAF2EB]"/>
        <button type="submit" className="absolute right-[13px] top-[13px]">
            <svg className="w-[24px] h-[24px]">
                <use href={`${icons}#icon-search`}></use>
            </svg>
        </button>
        </div>
    </form>

    <button type="button" className="px-[15px] py-[13px] w-full bg-[#EAF2EB] rounded-[5px]">
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-[8px]" >
                <svg className="w-[24px] h-[24px]" fill="none" stroke="#484848">
                    <use href={`${icons}#icon-catalog`}></use>
                </svg>
                <h3 className="text-[16px] font-medium">Каталог товарів</h3>
            </div>
            <svg className="w-[24px] h-[24px]" stroke="#7FAA84">
                <use href={`${icons}#icon-arrow-right`}></use>
            </svg>
        </div>
    </button>

    <div className="flex items-center gap-[13px]">
        <button type="button" className="py-[13px] px-[15px] bg-[#EAF2EB] rounded-[5px] min-w-[204px] flex items-center gap-[10px] text-[16px]" onClick={() => setIsOpenLoginPage(true)}> 
        <svg className="w-[24px] h-[24px]" stroke="#484848" fill="none">
            <use href={`${icons}#icon-account`}></use>
        </svg>
        Вхід для клієнтів
        </button>
        <button type="button" className="w-full py-[13px] px-[20px] rounded-[5px] bg-[#EAF2EB] text-[18px] tracking-[0.36px] font-mediume flex items-center justify-between">
            UA
            <svg className="w-[24px] h-[24px]" fill="none" stroke="#7FAA84">
                <use href={`${icons}#icon-arrow-down`}></use>
            </svg>
        </button>
    </div>

    <div className="px-[15px] py-[15px] w-full bg-[#EAF2EB] rounded-[5px]">
        <nav className="flex flex-col gap-[30px]">
            <Link to='/'>Про магазин</Link>
            <Link to='/'>Відгуки</Link>
            <Link to='/'>Доставка та оплата</Link>
            <Link to='/'>Контакти</Link>
        </nav>
    </div>

    <div className="px-[15px] py-[13px] w-full bg-[#EAF2EB] rounded-[5px] flex items-center gap-[10px]">
        <svg className="w-[24px] h-[24px]" fill="#7FAA84">
            <use href={`${icons}#icon-phone`}></use>
        </svg>
        <a href="tel:+380964009130">+38 (096) 400 91 30</a>
    </div>

    <div className="px-[15px] py-[15px] w-full bg-[#EAF2EB] rounded-[5px] flex items-start gap-[10px]">
        <svg className="w-[24px] h-[24px]">
            <use href={`${icons}#icon-clock`}></use>
            </svg>
            <div className="flex flex-col gap-[15px]">
                <p className="text-[16px]">Пн-Пт: 10:00 - 19:00</p>
                <p className="text-[16px]">Сб-Нд: вихідний</p>
            </div>
    </div>

    </div>
  </div>
  {isOpenLoginPage &&  <LoginFormMobile setIsOpenLoginPage={setIsOpenLoginPage}/> }
  {openCatalog &&  <CategoriesMobile />}
  </>
}

export default MenuMobile
