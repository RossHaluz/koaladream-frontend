import ItemDetailsInfo from './ItemDetailsInfo';
import ItemDetailsSwiper from './ItemDetailsSwiper';
import ItemDetailsOptions from './ItemDetailsOptions';
import ItemDetailsCount from './ItemDetailsCount';
import ItemDetailsArticle from './ItemDetailsArticle';
import ItemDetailsPrice from './ItemDetailsPrice';
import ItemDetailsBtn from './ItemDetailsBtn';
import ItemDetailsDesc from './ItemDetailsDesc';
import { useState } from 'react';

const ItemDetails = ({ item }) => {
  const { title, images, status, article, price, oldPrice, options, desc, characteristics, care, _id: id } = item;
  const parseOptions = JSON.parse(options);
  let parseCharacteristics = null;
  const [currentPrice, setCurrentPrice] = useState(parseOptions?.map(item => item.options[0].price));
  const [selectOption,  setSelectOption] = useState();

 if(characteristics.length > 0){
  parseCharacteristics = JSON.parse(characteristics);
 }

  return (
    <div className='py-[18px] lg:py-[30px]'>
      <h1 className='sm:hidden tb:block text-[24px] font-bold mb-[30px] w-[688px]'>{selectOption ? `${title} ${selectOption}` : title}</h1>

{/* Product  */}
<div className='grid grid-cols-2 items-start gap-[30px] mb-[30px]'>

<ItemDetailsSwiper images={images}/>

<div>
<ItemDetailsArticle status={status} article={article}/>

<ItemDetailsOptions parseOptions={parseOptions} setCurrentPrice={setCurrentPrice} setSelectOption={setSelectOption} selectOption={selectOption}/>

<div className='w-full h-[1px] bg-[#7FAA84] mb-[30px]'></div>

<p className='tracking-[ 0.28px] mb-[60px]'>Просимо звернути увагу, що розташування малюнка (чи кольору) на 
наволочці та підковдрі може відрізнятися від того, яким Ви бачите 
на фото.</p>

<div className='flex flex-col gap-[30px]'>
<ItemDetailsPrice price={price} oldPrice={oldPrice} currentPrice={currentPrice}/>

<div className='flex items-center gap-[30px]'>
  <ItemDetailsCount setCurrentPrice={setCurrentPrice} currentPrice={currentPrice}/>

   <ItemDetailsBtn title={selectOption ? `${title} ${selectOption}` : title} image={images[0]} price={currentPrice ? currentPrice : price} oldPrice={oldPrice} article={article} id={id} />
   </div>

   </div>

</div>

</div>

{/* Info */}
<ItemDetailsInfo/>

{/* Desc */}
<ItemDetailsDesc desc={desc} parseCharacteristics={parseCharacteristics && parseCharacteristics} article={article} care={care}/>

</div>
  );
};


export default ItemDetails;
