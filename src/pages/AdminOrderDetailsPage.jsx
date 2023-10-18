import AdminOrderDetails from "components/AdminOrderDetails"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { getOrder } from "redux/order/operetions";
import { selectOrder } from "redux/order/selectors";

const AdminOrderDetailsPage = () => {
const dispatch = useDispatch();
const order = useSelector(selectOrder);
const {orderId} = useParams();

useEffect(() => {
    dispatch(getOrder(orderId))
}, [dispatch, orderId])

  return <>{order && <AdminOrderDetails order={order}/>}</>

}

export default AdminOrderDetailsPage
