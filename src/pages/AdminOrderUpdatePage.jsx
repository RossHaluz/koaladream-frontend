import AdminOrderUpdate from "components/AdminOrderUpdate";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrder } from "redux/order/operetions";
import { selectOrder } from "redux/order/selectors";

const AdminOrderUpdatePage = () => {
const {orderId} = useParams();
const dispatch = useDispatch();
const order = useSelector(selectOrder)

useEffect(() => {
dispatch(getOrder(orderId))
}, [orderId, dispatch])

  return <>{order && <AdminOrderUpdate order={order}/>}</>
}

export default AdminOrderUpdatePage
