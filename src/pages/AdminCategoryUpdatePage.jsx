import AdminCategoryUpdate from "components/AdminCategoryUpdate";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCategory } from "redux/categories/operetions";
import { selectCategory } from "redux/categories/selectors";

const AdminCategoryUpdatePage = () => {
const dispatch = useDispatch()
const category = useSelector(selectCategory);
const {categoryId} = useParams();

useEffect(() => {
   dispatch(getCategory(categoryId));
}, [dispatch, categoryId])

  return <>{category && <AdminCategoryUpdate category={category}/>}</>
}

export default AdminCategoryUpdatePage
