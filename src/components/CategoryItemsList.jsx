import { useSelector } from "react-redux";
import CategoryItemsItem from "./CategoryItemsItem";
// import LeadMoreBtn from "./LeadMoreBtn";
import Pagination from "./Pagination";
import icons from './img/icons/icons.svg'; 
import { selectTotalPages } from "redux/items/selectors";

const CategoryItemsList = ({category, items, setCurrentPage, getPage}) => {
const totalPages = useSelector(selectTotalPages);

  return <>
  <h1 className="text-[24px] font-bold tracking-[0.24px] font-secondery mt-[20px] mb-[20px]">{category}</h1>
  <div className="mb-[20px] grid grid-cols-2 tb:grid-cols-4 gap-[15px]">
    <button type="button" className="flex gap-[15px] items-center justify-center bg-[#EAF2EB] rounded-[5px] px-[36px] py-[8px]">
      <svg className="max-w-[24px] min-w-[24px] h-[24px]"> 
        <use href={`${icons}#icon-filter`}></use>
      </svg>
    Фільтр
    </button>
    <button type="button" className="flex gap-[15px] items-center justify-center bg-[#EAF2EB] rounded-[5px] px-[36px] py-[8px]">
      <svg className="max-w-[24px] min-w-[24px] h-[24px]"> 
        <use href={`${icons}#icon-sort`}></use>
      </svg>
    Сортування
      </button>
  </div>
  {items ? 
  <ul className="grid grid-cols-1 tb:grid-cols-3 gap-[20px] mb-[20px]">
    {items?.map(({images, title, status, article, price, oldPrice, _id: id}) => {
     return <CategoryItemsItem key={id} images={images[0]} title={title} status={status} article={article} price={price} oldPrice={oldPrice}/>
    })}
  </ul>
  : <h2>На жаль товарів не знайдено</h2>}
  {/* <LeadMoreBtn setCurrentPage={setCurrentPage} getPage={getPage}/> */}
  {totalPages && <Pagination setCurrentPage={setCurrentPage} getPage={getPage}/>}
  </>
}

export default CategoryItemsList
