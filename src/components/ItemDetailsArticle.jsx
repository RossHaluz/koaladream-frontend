import icons from './img/icons/icons.svg';

const ItemDetailsArticle = ({status, article}) => {
  return <div className='flex items-center justify-between w-full mt-[15px] tb:mt-[17px]'>
  <h3 className={`text-[12px] ${status === 'В наявності' ? 'text-[#7FAA84]' : 'text-[#EF787A]'} font-medium flex gap-[6px] items-center`}>
      <svg className='w-[20px] h-[20px]'>
          <use href={`${icons}#icon-status-in-stock`}></use>
      </svg>
      {status}
      </h3>
  
      <h3>Артикул: {article}</h3>
  </div>
}

export default ItemDetailsArticle
