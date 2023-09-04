import icons from './img/icons/icons.svg';

const MobileCatalog = () => {
  return <button type="button" className="flex items-center gap-[10px] py-[8px] text-[#484848] text-[14px] font-medium lg:hidden">
  <svg className="w-[24px] h-[24px]" fill="none" stroke="#484848">
      <use href={`${icons}#icon-catalog`}></use>
  </svg>
  Каталог товарів
</button>
}

export default MobileCatalog
