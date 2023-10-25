import { useEffect } from 'react';
import { AiOutlineMinus } from 'react-icons/ai';
import { LiaPlusSolid } from 'react-icons/lia';
import { useDispatch, useSelector } from 'react-redux';
import { selectCount } from 'redux/items/selectors';
import { setCount } from 'redux/items/slice';

const ItemDetailsCount = ({
  setCurrentPrice,
  parseOptions,
  selectOption,
  countItem, 
  setCountItem, 
  currentPrice
}) => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);

  useEffect(() => {
    const setPrice = parseOptions
      ?.map(item => item?.options?.find(item => Array.isArray(selectOption) ? selectOption.includes(item.name) : selectOption === item.name))
      .map(item => item?.price);
  
    const countPrice = countItem * setPrice[0];
    setCurrentPrice(countPrice);
  
    // Отже, додайте всі залежності до масиву залежностей useEffect
  }, [countItem, parseOptions, selectOption, setCurrentPrice]);

  const onPlusCount = () => {
    setCountItem(prev => prev + 1);
    dispatch(setCount(countItem + 1));
  };

  const onMinusCount = () => {
    if (countItem === 1) {
      return;
    }
    setCountItem(prev => prev - 1);
    dispatch(setCount(countItem - 1));
  };

  return (
    <div className="w-[118px] border border-solid border-[#7FAA84] rounded-[5px] flex items-center justify-between">
      <div className="p-[10px] flex items-center justify-cente">
        <AiOutlineMinus className="w-[20px] h-[20px]" onClick={onMinusCount} />
      </div>

      <div className="w-[1px] h-10 bg-[#7FAA84]"></div>

      <div className="p-[10px] w-[40px] flex items-center justify-center">
        {count}
      </div>

      <div className="w-[1px] h-10 bg-[#7FAA84]"></div>

      <div className="p-[10px] flex items-center justify-cente">
        <LiaPlusSolid className="w-[20px] h-[20px]" onClick={onPlusCount} />
      </div>
    </div>
  );
};

export default ItemDetailsCount;
