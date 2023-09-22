import AdminFilterUpdate from "components/AdminFilterUpdate";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFilter } from "redux/filtersAdmin/operetions";
import { selectFilter } from "redux/filtersAdmin/selectors";


const AdminFilterUpdatePage = () => {
const {filterId} = useParams();
const dispatch = useDispatch();
const filter = useSelector(selectFilter);

useEffect(() => {
dispatch(getFilter(filterId));
}, [dispatch, filterId])


  return <>{filter && <AdminFilterUpdate filter={filter}/>}</>
}

export default AdminFilterUpdatePage
