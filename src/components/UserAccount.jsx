import { useState } from 'react';
import icons from './img/icons/icons.svg';
import PersonalData from './PersonalData';
import HistoryOlders from './HistoryOlders';
import Reviews from './Reviews';
import Discounts from './Discounts';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/auth/operetions';
import ChangePassword from './ChangePassword';

const UserAccount = () => {
const [isPersonalData, setIsPersonalData] = useState(true);
const [isHistoryOlders, setIsHistoryOlders] = useState(false);
const [isReviews, setIsReviews] = useState(false);
const [isDiscounts, setIsDiscounts] = useState(false);
const [isChangePassword, setIsChangePassword] = useState(false);
const dispatch = useDispatch();

const handleIsPersonalData = () => {
    setIsPersonalData(prev => !prev);
    setIsHistoryOlders(false);
    setIsReviews(false);
    setIsDiscounts(false);
    setIsChangePassword(false);
}

const handleIsHistoryOlders = () => {
    setIsHistoryOlders(prev => !prev);
    setIsPersonalData(false);
    setIsReviews(false);
    setIsDiscounts(false);
    setIsChangePassword(false);
}

const handleIsReviews = () => {
    setIsReviews(prev => !prev);
    setIsHistoryOlders(false);
    setIsPersonalData(false);
    setIsDiscounts(false);
    setIsChangePassword(false);
}

const handleIsDiscounts = () => {
    setIsDiscounts(prev => !prev);
    setIsHistoryOlders(false);
    setIsPersonalData(false);
    setIsReviews(false);
    setIsChangePassword(false);
}

const handleIsChangePassword = () => {
    setIsChangePassword(prev => !prev);
    setIsHistoryOlders(false);
    setIsDiscounts(false);
    setIsPersonalData(false);
    setIsReviews(false);
}

  return <div className='pt-[20px] pb-[34px]'>
    {/* <h2 className='mb-[15px]'>Тут мають бути хлеббні крошки</h2> */}
    <div className='flex items-center justify-between mb-[30px]'>
        <h2 className='text-[16px] tracking-[0.16px] font-bold text-[#484848]'>Особистий кабінет</h2>
        <button type='button' onClick={() => dispatch(logoutUser())}>
            <svg className='w-[24px] h-[24px]'>
                <use href={`${icons}#icon-signout`}></use>
            </svg>
        </button>
    </div>
<div className='flex flex-col gap-[37px]'>
{/* Personal Data  */}
    <div className='flex flex-col gap-[15px]'>
        <button type='button' className='flex items-center justify-between w-full font-semibold' onClick={handleIsPersonalData}>
        Особисті дані
        {!isPersonalData ? <svg className='w-[24px] h-[24px]'>
                <use href={`${icons}#icon-down-light`}></use>
            </svg> : <svg className='w-[24px] h-[24px]'>
                <use href={`${icons}#icon-up-light`}></use>
            </svg>}
        </button>
        {isPersonalData && <PersonalData/>}
    </div>

    {/* History Olders  */}
    <div className='flex flex-col gap-[15px]'>
        <button type='button' className='flex items-center justify-between w-full font-semibold' onClick={handleIsHistoryOlders}>
        Історія замовлень
        {!isHistoryOlders ? <svg className='w-[24px] h-[24px]'>
                <use href={`${icons}#icon-down-light`}></use>
            </svg> : <svg className='w-[24px] h-[24px]'>
                <use href={`${icons}#icon-up-light`}></use>
            </svg>}
        </button>
        {isHistoryOlders &&  <HistoryOlders/>}
    </div>

    {/* Reviews /\ */}
    <div className='flex flex-col gap-[15px]'>
    <button type='button' className='flex items-center justify-between w-full font-semibold' onClick={handleIsReviews}>
    Відгуки
    {!isReviews ? <svg className='w-[24px] h-[24px]'>
                <use href={`${icons}#icon-down-light`}></use>
            </svg> : <svg className='w-[24px] h-[24px]'>
                <use href={`${icons}#icon-up-light`}></use>
            </svg>}
        </button>
        {isReviews &&  <Reviews/>}
    </div>

    {/* Discounts */}
    <div className='flex flex-col gap-[30px]'>
    <button type='button' className='flex items-center justify-between w-full font-semibold' onClick={handleIsDiscounts}>
    Знижки
    {!isDiscounts ? <svg className='w-[24px] h-[24px]'>
                <use href={`${icons}#icon-down-light`}></use>
            </svg> : <svg className='w-[24px] h-[24px]'>
                <use href={`${icons}#icon-up-light`}></use>
            </svg>}
        </button>
        {isDiscounts && <Discounts/>}
    </div>

    {/* Change password  */}
    <div className='flex flex-col gap-[30px]'>
    <button type='button' className='flex items-center justify-between w-full font-semibold' onClick={handleIsChangePassword}>
    Зміна паролю
    {!isChangePassword ? <svg className='w-[24px] h-[24px]'>
                <use href={`${icons}#icon-down-light`}></use>
            </svg> : <svg className='w-[24px] h-[24px]'>
                <use href={`${icons}#icon-up-light`}></use>
            </svg>}
        </button>
        {isChangePassword && <ChangePassword/>}
    </div>

    </div>
  </div>
}

export default UserAccount
