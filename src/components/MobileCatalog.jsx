import { useDispatch, useSelector } from 'react-redux';
import icons from './img/icons/icons.svg';
import { isOpenCatalog } from 'redux/categories/slice';
import { selectIsOpenCatalog } from 'redux/categories/selectors';
import CategoriesMobile from './CategoriesMobile';

const MobileCatalog = () => {
const dispatch = useDispatch();
const isOpen = useSelector(selectIsOpenCatalog);

  return <>
  <button type="button" className="flex items-center gap-[10px] py-[8px] text-[#484848] text-[14px] font-medium lg:hidden" onClick={() => dispatch(isOpenCatalog(true))} >
  <svg className="w-[24px] h-[24px]" fill="none" stroke="#484848">
      <use href={`${icons}#icon-catalog`}></use>
  </svg>
  Каталог товарів
</button>
{isOpen && <CategoriesMobile/>}
</>
}

export default MobileCatalog
