import { useState } from 'react';
import ItemDetailsDescItem from './ItemDetailsDescItem';
import ItemDetailsDescription from './ItemDetailsDescription';
import ItemDetailsCharacteristics from './ItemDetailsCharacteristics';
import ItemDetailsCare from './ItemDetailsCare';
import ItemDetailsReviews from './ItemDetailsReviews';

const descOptions = ['Опис', 'Характеристики', 'Догляд', 'Відгуки'];

const ItemDetailsDesc = ({desc, parseCharacteristics, article, care}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeDesc =  descOptions[activeIndex];

  return (
    <div className='flex flex-col gap-[15px] tb:gap-[30px]'>
      <div className="flex flex-col gap-[10px]">
        <ul className="flex items-center gap-[30px] overflow-x-auto  justify-between">
          {descOptions.map((item, index) => {
            return (
                <ItemDetailsDescItem
                  key={item}
                  item={item}
                  index={index}
                  isSelected={activeIndex === index}
                  handleClick={() => setActiveIndex(index)}
                />
            );
          })}
        </ul>
        <div className="w-full h-[0.5px] bg-[#7FAA84]"></div>
      </div>

      { (activeDesc === 'Опис' && <ItemDetailsDescription desc={desc} />) ||
  (activeDesc === 'Характеристики' && <ItemDetailsCharacteristics parseCharacteristics={parseCharacteristics} article={article} />) ||
  (activeDesc === 'Догляд' && <ItemDetailsCare care={care} />) ||
  (activeDesc === 'Відгуки' && <ItemDetailsReviews />) }
    </div>
  );
};

export default ItemDetailsDesc;
