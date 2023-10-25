

const ItemDetailsCharacteristics = ({parseCharacteristics, article}) => {
  return <ul>
    <li className="grid grid-cols-2 tb:grid-cols-4 justify-between tb:px-[65px] odd:bg-[#7faa84]/[.10] py-[5px] rounded-[5px]">
        <span className="tb:text-[16px] tracking-[0.32px] leading-[24px]">Артикул:</span>
        <span className="tb:text-[16px] tracking-[0.32px] leading-[24px]">{article}</span>
        </li>
   {parseCharacteristics?.map(({name, option}) => {
    return  <li key={name} className="grid grid-cols-2 tb:grid-cols-4  justify-between odd:bg-[#7faa84]/[.10] tb:px-[65px] py-[5px] rounded-[5px]">
    <span className="tb:text-[16px] tracking-[0.32px] leading-[24px]">{name}:</span>
    <span className="tb:text-[16px] tracking-[0.32px] leading-[24px]">{option}</span>
</li>
   })}
  </ul>
}

export default ItemDetailsCharacteristics
