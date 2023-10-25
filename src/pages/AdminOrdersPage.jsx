import AdminOrders from 'components/AdminOrders';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from 'redux/order/operetions';
import { selectOrders } from 'redux/order/selectors';

const AdminOrdersPage = () => {
  const dispatch = useDispatch();
const orders = useSelector(selectOrders);

  useEffect(() => {
    dispatch(getOrders())
  }, [orders, dispatch])

  return <>{orders.length > 0 && <AdminOrders orders={orders}/>}</>;
};

export default AdminOrdersPage;
