import icons from './img/icons/icons.svg';

const HeaderPhone = () => {
  return <div className="items-center gap-[10px] xs:hidden lg:flex">
  <svg className="w-[24px] h-[24px]" fill="#7FAA84">
      <use href={`${icons}#icon-phone`}></use>
  </svg>
  <a href="tel:+380964009130" className="text-[16px] tracking-[0.32px] font-bold">+38 (096) 400 91 30</a>
</div>
}

export default HeaderPhone
