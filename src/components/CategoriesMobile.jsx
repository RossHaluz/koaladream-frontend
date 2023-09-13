import { useDispatch, useSelector } from "react-redux"
import { selectCategiries } from "redux/categories/selectors";
import {AiOutlineClose} from 'react-icons/ai';
import Logo from "./Logo";
import icons from './img/icons/icons.svg';
import { Link } from "react-router-dom";
import { isOpenCatalog } from "redux/categories/slice";
import { openMenu } from "redux/mobileMenu/slice";

const CategoriesMobile = () => {
const categories = useSelector(selectCategiries);
const dispatch = useDispatch();

  return <div className="fixed top-0 left-0 z-20 w-full h-full overflow-y-auto bg-[#F5FAF6] container">
     <div className="flex justify-center mb-[12px]" onClick={() => {dispatch(openMenu(false)); dispatch(isOpenCatalog(false))}}>
    <Logo/>
    </div>

    <div className="flex items-center justify-between mb-[20px]">
        <button type="button" onClick={() => {dispatch(isOpenCatalog(false)); dispatch(openMenu(true))}} className="flex items-center gap-[20px] text-[16px] font-medium">
            <svg className="w-[24px] h-[24px]" stroke="#7FAA84">
                <use href={`${icons}#icon-arrow-left`}></use>
            </svg>
            Каталог товарів
            </button>
        <AiOutlineClose onClick={() => {dispatch(openMenu(false)); dispatch(isOpenCatalog(false))}} className="w-[24px] h-[24px]"/>
    </div>

    <ul className="flex flex-col gap-[15px]">
        {categories?.map(({title, _id: id}) => {
            return <li key={id} className="px-[15px] py-[13px] bg-[#EAF2EB] rounded-[5px] w-full">
                <Link to='/' className="flex items-center justify-between" onClick={() => dispatch(openMenu(false))}>
                {title}
                <svg className="w-[24px] h-[24px]" stroke="#7FAA84">
                    <use href={`${icons}#icon-arrow-right`}></use>
                </svg>
                </Link>
                </li>
        })}
    </ul>
  </div>
}

export default CategoriesMobile
