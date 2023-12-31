import Order from "components/Order";
import { useSelector } from "react-redux";
import { selectOrderItems } from "redux/order/selectors";

const OrderPage = () => {
const items = useSelector(selectOrderItems);

  return <>{items && <Order items={items}/>}</>
}

export default OrderPage
