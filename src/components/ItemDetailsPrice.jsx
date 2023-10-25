
const ItemDetailsPrice = ({price, oldPrice, currentPrice}) => {

  return <div className='flex items-center gap-[7px]'>
  <h3 className='text-[#7FAA84] text-[24px] font-bold'>{currentPrice ? currentPrice : price}₴</h3>
  <div className='w-[1px] h-[24px] bg-[#484848]/[.30]'></div>
  <span className='font-semibold text-[#484848]/[.30] line-through'>{oldPrice}</span>
 </div>
}

export default ItemDetailsPrice
