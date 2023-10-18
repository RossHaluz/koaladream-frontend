import OrderProductsItem from "./OrderProductsItem"

const OrderProducts = ({items}) => {
  return <>{items.length > 0 && <div className="p-[30px] bg-[#EAF2EB] sticky top-[10px] flex flex-col gap-[30px] rounded-[5px]">
    <h3 className="text-[24px] font-bold">Ваш кошик</h3>
    <ul className="flex flex-col gap-[15px]">
    {items?.map(item => <OrderProductsItem item={item}/>)}
    </ul>
    <div className="w-full h-[1px] bg-[#7faa84]/[.50]"></div>

    <div className="flex items-center justify-between">
    <h3 className="text-[16px] font-bold tracking-[0.64px]">Загальна вартість:</h3>
    <h3 className="text-[16px] font-bold text-[#7FAA84]">1 700 ₴</h3>
    </div>
    </div>}</>
}

export default OrderProducts
