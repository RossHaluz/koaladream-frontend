import { useState } from 'react';
import Categories from './Categories';
import icons from './img/icons/icons.svg';
import { getCategories } from 'redux/categories/operetions';
import { useDispatch } from 'react-redux';

const Catalog = () => {
  const dispatch = useDispatch();
const [showCategories, setShowCategories] = useState(false);
let categories = false;

const onMouseCategories = () => {
  setShowCategories(true)
  if(Categories){ 
    categories = true
  }
  dispatch(getCategories())
}

const onMouseLeaveCategories = () => {
  setShowCategories(false)
}

  return <div className="bg-[#7FAA84] min-w-[325px] pr-[10px] mr-[110px] rounded-r-[5px]" >
  <div className={`container pr-0 flex items-center justify-between relative cursor-pointer`} onMouseEnter={onMouseCategories} onMouseLeave={categories ? onMouseCategories : onMouseLeaveCategories} onTouchStart={onMouseCategories}>
      <button type="button" className="text-[#fff] text-[18px] tracking-[1.08px] font-medium py-[12px]">
          Каталог
      </button>
      <svg className="w-[24px] h-[24px]" stroke="#fff">
  <use href={`${icons}#icon-mobile-menu`}></use>
</svg>
{showCategories && <Categories />}
  </div>
  </div>
}

export default Catalog
