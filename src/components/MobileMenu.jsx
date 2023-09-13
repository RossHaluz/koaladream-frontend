import MenuMobile from './MenuMobile';
import icons from './img/icons/icons.svg';
import { openMenu } from 'redux/mobileMenu/slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectOpenMenu } from 'redux/mobileMenu/selectors';

const MobileMenu = () => {
const dispatch = useDispatch();
const isOpen = useSelector(selectOpenMenu);

  return <>
  <button type='button' onClick={() => dispatch(openMenu(true))}>
  <svg className="w-[24px] h-[24px] lg:hidden" stroke='#484848'>
  <use href={`${icons}#icon-mobile-menu`}></use>
</svg>
  </button>
{isOpen && <MenuMobile />}
</>
}

export default MobileMenu
