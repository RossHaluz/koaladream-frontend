import { useState } from 'react';
import MenuMobile from './MenuMobile';
import icons from './img/icons/icons.svg';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return <>
  <button type='button' onClick={() => setIsOpen(true)}>
  <svg className="w-[24px] h-[24px] lg:hidden" stroke='#484848'>
  <use href={`${icons}#icon-mobile-menu`}></use>
</svg>
  </button>
{isOpen && <MenuMobile setIsOpen={setIsOpen}/>}
</>
}

export default MobileMenu
