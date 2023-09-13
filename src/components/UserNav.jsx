import { useSelector } from 'react-redux';
import LoginForm from './LoginForm';
import Modal from './Modal';
import icons from './img/icons/icons.svg';
import { selectIsLoging } from 'redux/auth/selectors';
import { Link } from 'react-router-dom';

const UserNav = () => {
  const isLogin = useSelector(selectIsLoging)

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

      <Modal data={ <svg className="w-[24px] h-[24px]">
          <use href={`${icons}#icon-cart`}></use>
        </svg>}>
      </Modal>

    </div>
  );
};

export default UserNav;
