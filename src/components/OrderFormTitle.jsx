import { useSelector } from 'react-redux';
import icons from './img/icons/icons.svg';
import { selectUserContactDetails } from 'redux/auth/selectors';

const OrderFormTitle = ({setIsOpen, isOpen, number, title}) => {
const userContactDetails = useSelector(selectUserContactDetails);

  return <div className='flex items-center justify-between' onClick={() => setIsOpen(prev => !prev)}>
    <div className="flex items-center gap-[15px]">
  <div className="border border-solid border-[#7faa84]/[.50] w-[30px] h-[30px] rounded-[50%] flex justify-center items-center">
      {number}
  </div>
  <h3 className="font-bold text-[24px]">{title}</h3>
</div>

{userContactDetails && setIsOpen &&  <svg className={`w-[24px] h-[24px] ${isOpen && 'rotate-180'}`} fill='none' stroke='#7FAA84'>
  <use href={`${icons}#icon-arrow-down`}></use>
</svg>}
  </div>
}

export default OrderFormTitle
