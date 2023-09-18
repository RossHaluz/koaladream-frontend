import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux';
import { selectTotalPages } from 'redux/items/selectors';
import { changePage } from 'redux/items/slice';
import icons from './img/icons/icons.svg';

const Pagination = ({setCurrentPage, getPage}) => {
    const totalPages = useSelector(selectTotalPages);
    const dispatch = useDispatch();

  const handlePageClick = ({selected }) => {
    setCurrentPage({page: parseInt(selected) + 1});
    dispatch(changePage(getPage))
  }

  return <div>
 <ReactPaginate
  breakLabel="..."
  initialPage={getPage}
  nextLabel={
   <svg className='w-[24px] h-[24px]'> 
    <use href={`${icons}#icon-right`}></use>
   </svg>
  }
  onPageChange={handlePageClick}
  onPageActive={window.scrollTo({
    top: 0,
    behavior: 'smooth',
   })}
  pageRangeDisplayed={3}
  pageCount={totalPages}
  previousLabel={
    <svg className='w-[24px] h-[24px]'> 
    <use href={`${icons}#icon-left`}></use>
   </svg>
  }
  containerClassName='flex items-center justify-center mt-8 mb-4 gap-4'
  pageClassName='text-[16px] leading-[24px]'
  activeClassName='bg-[#78AB7E] px-[10px] py-[3px] rounded-[50%] text-white' 
  /></div> 
}

export default Pagination