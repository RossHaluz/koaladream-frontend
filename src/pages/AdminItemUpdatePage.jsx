import AdminItemUpdate from "components/AdminItemUpdate";
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getItemDetails } from "redux/items/operetions"
import { selectItemDetails } from "redux/items/selectors";

const AdminItemUpdatePage = () => {
const dispatch = useDispatch();
const item = useSelector(selectItemDetails);
const {itemId} = useParams();

useEffect(() => {
    dispatch(getItemDetails(itemId))
}, [dispatch, itemId])

  return <>{item && <AdminItemUpdate item={item}/>}</>
}

export default AdminItemUpdatePage
