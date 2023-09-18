import { useEffect, useRef } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { paginationItemsCategory } from "redux/items/operetions";
import { selectCurrentPage, selectTotalPages } from "redux/items/selectors";
import { changePage } from "redux/items/slice";

const LeadMoreBtn = ({setCurrentPage, getPage}) => {
const dispatch = useDispatch();
const page = useSelector(selectCurrentPage);
const totalPage = useSelector(selectTotalPages);
const {category} = useParams();
const currentBtn = useRef();

useEffect(() => {
  dispatch(paginationItemsCategory({category,  page}))
}, [dispatch, page, category])

const changeCurrentPage = () => {
  dispatch(changePage(page + 1))
} 

  return  <>{totalPage !== parseInt(getPage) &&  <button type="button" ref={currentBtn.current} onClick={changeCurrentPage} className="mb-[40px] px-[25px] py-[15px] bg-[#7FAA84] rounded-[5px] flex justify-center items-center mx-auto text-[#fff] font-medium w-[180px]">
  Показати ще
</button>}</>
}

export default LeadMoreBtn
