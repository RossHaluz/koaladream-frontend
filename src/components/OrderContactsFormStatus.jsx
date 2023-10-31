
const OrderContactsFormStatus = ({isNewUser, setIsNewUser, isRegularCustomer, setIsRegularCustomer}) => {

const handleNewUser = () => {
    setIsNewUser(true);
    setIsRegularCustomer(false)
}

const handleRegularCustomer = () => {
    setIsRegularCustomer(true);
    setIsNewUser(false)
}

  return  <div className="flex items-center gap-[11px] tb:gap-[30px]">
  <button type="button" onClick={handleNewUser} className={`tb:text-[16px] tb:leading-[24px] tb:tracking-[0.32px] ${isNewUser && 'underline'} ${isNewUser ? 'font-bold' : 'font-medium'}`}>Я новий користувач</button>
  <button type="button" onClick={handleRegularCustomer} className={`tb:text-[16px] tb:leading-[24px] tb:tracking-[0.32px] ${isRegularCustomer && 'underline'} ${isRegularCustomer ? 'font-bold' : 'font-medium'}`}>Я постійний покупець</button>
</div>
}

export default OrderContactsFormStatus
