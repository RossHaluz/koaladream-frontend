import icons from './img/icons/icons.svg'

const MobileMenu = () => {
  return <svg className="w-[24px] h-[24px] lg:hidden" stroke='#484848'>
  <use href={`${icons}#icon-mobile-menu`}></use>
</svg>
}

export default MobileMenu
