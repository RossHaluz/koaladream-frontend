import ItemDetailsInfo from './ItemDetailsInfo';
import ItemDetailsSwiper from './ItemDetailsSwiper';
import ItemDetailsOptions from './ItemDetailsOptions';
import ItemDetailsCount from './ItemDetailsCount';
import ItemDetailsArticle from './ItemDetailsArticle';
import ItemDetailsPrice from './ItemDetailsPrice';
import ItemDetailsBtn from './ItemDetailsBtn';
import ItemDetailsDesc from './ItemDetailsDesc';
import { useEffect, useState } from 'react';
import { selectIsLoading } from 'redux/items/selectors';
import { useSelector } from 'react-redux';

const ItemDetails = ({ item }) => {
  const { title, images, status, article, price, oldPrice, options, desc, characteristics, care, _id: id } = item;
  const parseOptions = JSON.parse(options);
  let parseCharacteristics = null;
  const [currentPrice, setCurrentPrice] = useState(null);
  const [selectOption,  setSelectOption] = useState(null);
  const isLoading = useSelector(selectIsLoading);
  const [count, setCount] = useState(1);
  const [countItem, setCountItem] = useState(1);

useEffect(() => {
  setSelectOption(parseOptions.map(item => item.options.map(item => item.name)[0]));
  setCurrentPrice(parseOptions[0]?.options[0]?.price)
}, [parseOptions])



 if(characteristics.length > 0){
  parseCharacteristics = JSON.parse(characteristics);
 }

  return <>{!isLoading && <div className='py-[18px] lg:py-[30px]'>
  <h1 className='sm:hidden tb:block text-[24px] font-bold mb-[30px] w-[688px]'>{selectOption ? `${title} ${selectOption}` : title}</h1>

{/* Product  */}
<div className='grid grid-cols-1 lg:grid-cols-2 items-start gap-[15px] tb:gap-[30px] mb-[30px]'>

<ItemDetailsSwiper images={images}/>

<h1 className='tb:hidden text-[16px] font-bold tracking-[0.64px]'>{selectOption ? `${title} ${selectOption}` : title}</h1>

<div>
<ItemDetailsArticle status={status} article={article}/>

<div className='tb:hidden block w-full h-[1px] bg-[#7FAA84] mt-[15px]'></div>

<ItemDetailsOptions parseOptions={parseOptions} currentPrice={currentPrice} setCount={setCount} setCurrentPrice={setCurrentPrice} setSelectOption={setSelectOption} selectOption={selectOption} price={price} setCountItem={setCountItem}/>

<div className='hidden tb:block w-full h-[1px] bg-[#7FAA84] mb-[30px]'></div>

<p className='tracking-[ 0.28px] hidden tb:block mb-[60px]'>Просимо звернути увагу, що розташування малюнка (чи кольору) на 
наволочці та підковдрі може відрізнятися від того, яким Ви бачите 
на фото.</p>

<div className='flex flex-col gap-[15px] tb:gap-[30px]'>
<ItemDetailsPrice price={price} oldPrice={oldPrice} currentPrice={currentPrice}/>

<div className='flex items-center gap-[30px]'>
<ItemDetailsCount setCurrentPrice={setCurrentPrice} currentPrice={currentPrice} parseOptions={parseOptions} selectOption={selectOption}  countItem={countItem} setCountItem={setCountItem}/>

<ItemDetailsBtn title={selectOption ? `${title} ${selectOption}` : title} image={images[0]} price={currentPrice ? currentPrice : price} oldPrice={oldPrice} article={article} id={id} count={count}/>
</div>

</div>

</div>

</div>

{/* Info */}
<ItemDetailsInfo/>

{/* Desc */}
<ItemDetailsDesc desc={desc} parseCharacteristics={parseCharacteristics && parseCharacteristics} article={article} care={care}/>

</div>}</>
};


export default ItemDetails;
