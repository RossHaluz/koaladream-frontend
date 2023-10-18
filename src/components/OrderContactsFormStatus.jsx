import { useState } from "react"

const OrderContactsFormStatus = () => {
const [isNewUser, setIsNewUser] = useState(true);
const [isRegularCustomer, setIsRegularCustomer] = useState(false);

const handleNewUser = () => {
    setIsNewUser(true);
    setIsRegularCustomer(false)
}

const handleRegularCustomer = () => {
    setIsRegularCustomer(true);
    setIsNewUser(false)
}

  return  <div className="flex items-center gap-[30px]">
  <button type="button" onClick={handleNewUser} className={`text-[16px] leading-[24px] tracking-[0.32px] ${isNewUser && 'underline'} ${isNewUser ? 'font-bold' : 'font-medium'}`}>Я новий користувач</button>
  <button type="button" onClick={handleRegularCustomer} className={`text-[16px] leading-[24px] tracking-[0.32px] ${isRegularCustomer && 'underline'} ${isRegularCustomer ? 'font-bold' : 'font-medium'}`}>Я постійний покупець</button>
</div>
}

export default OrderContactsFormStatus
