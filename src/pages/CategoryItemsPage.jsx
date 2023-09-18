import CategoryItemsList from "components/CategoryItemsList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { getItemsCategory } from "redux/items/operetions";
import { selectItems } from "redux/items/selectors";

const CategoryItemsPage = () => {
const {category} = useParams();
const dispatch = useDispatch();
const items = useSelector(selectItems);
const [currentPage, setCurrentPage] = useSearchParams();
const getPage = currentPage.get('page') || "";

useEffect(() => {
    dispatch(getItemsCategory({category, getPage}))
}, [dispatch, category, getPage])

  return <>
  {items.length > 0 &&  <CategoryItemsList category={category} items={items} setCurrentPage={setCurrentPage} getPage={getPage}/>}
  </>
}

export default CategoryItemsPage
