import {  useSelector } from 'react-redux';
import LoginForm from './LoginForm';
import Modal from './Modal';
import icons from './img/icons/icons.svg';
import { selectIsLoging } from 'redux/auth/selectors';
import { Link, NavLink } from 'react-router-dom';
import { selectOrderItems } from 'redux/order/selectors';

const UserNav = () => {
  const isLogin = useSelector(selectIsLoging);
  const items = useSelector(selectOrderItems);


  return (
    <div className="flex items-center gap-[20px]">
      
      <Modal stylesBtn={"xs:hidden lg:block text-[18px] text-[#7FAA84] tracking-[0.36px]"} data={<>UA</>}>
      </Modal>

{isLogin ? <Link to='/acount'><svg className="w-[24px] h-[24px]" stroke='#7FAA84' fill='none'>
          <use href={`${icons}#icon-account`}></use>
        </svg></Link> : <Modal stylesBtn={"xs:hidden lg:block"} data={<svg className="w-[24px] h-[24px]" stroke='#484848' fill='none' >
          <use href={`${icons}#icon-account`}></use>
        </svg>}>
     <LoginForm />
      </Modal>}

      <NavLink to='/cart' className='relative'>
      <svg className={`w-[24px] h-[24px] ${items.length > 0 ?  'stroke-[#7FAA84]' : 'stroke-[#484848]'}`} fill='none'>
          <use href={`${icons}#icon-cart`}></use>
        </svg>

       {items.length > 0 &&  <div className='bg-[#7FAA84] rounded-[50%] w-[15px] h-[15px] px-[5px] text-[#fff] text-[12px] tracking-[0.24px] flex items-center justify-center absolute left-[10px] bottom-[-4px]'>
          {items.length}
        </div>}
</NavLink>
    </div>
  );
};

export default UserNav;
