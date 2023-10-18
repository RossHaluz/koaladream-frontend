import { useSelector } from "react-redux";
import OrderContactsForm from "./OrderContactsForm";
import OrderForm from "./OrderForm";
import OrderProducts from "./OrderProducts";
import OrderTitle from "./OrderTitle";
import { selectUserContactDetails } from "redux/auth/selectors";

const Order = ({items}) => {
  const user = useSelector(selectUserContactDetails);
  console.log(user);

  return (
    <div className='pt-[30px] pb-[36px]'>
      <OrderTitle/>
     <div className="grid grid-cols-2 gap-[90px] items-start justify-between">
    <div className="flex flex-col gap-[30px]">
    <OrderContactsForm/>
    {user &&  <OrderForm items={items}/>}
    </div>
     <OrderProducts items={items}/>
     </div>
    </div>
  )
}

export default Order
