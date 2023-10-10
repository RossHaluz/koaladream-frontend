import ItemDetailsReviewsForm from './ItemDetailsReviewsForm';
import icons from './img/icons/icons.svg';

const ItemDetailsReviews = () => {
  return (
   <div>
     <div className='flex items-end justify-between mb-[42px]'>
      <svg className='w-[60px] h-[60px]'>
        <use href={`${icons}#quotes-1`}></use>
      </svg>
      <p className='text-[16px] leading-[24px] tracking-[0.32px] w-[368px] text-center'>На жаль, у цього товару ще немає відгуків.
Станьте першим, хто залишив відгук!</p>
<svg className='w-[60px] h-[60px]'>
        <use href={`${icons}#quotes-2`}></use>
      </svg>
    </div>

<ItemDetailsReviewsForm/>

   </div>
  )
}

export default ItemDetailsReviews
