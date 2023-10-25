import { useDispatch, useSelector } from 'react-redux';
import icons from './img/icons/icons.svg';
import {AiOutlineClose} from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { filterItems } from 'redux/items/operetions';
import { getAllFilters } from 'redux/filter/operetions';
import { selectFilter } from 'redux/filter/selectors';

const FiltersMobile = ({setIsOpenFilter}) => {
    const filters = useSelector(selectFilter);
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentFilters, setCurrentFilters] = useState([]);
    const getSearchParams = searchParams.get('filters') ?? '';
    const {category} = useParams();
    
    const onChangeFilter = (e) => {
      const { checked, value } = e.target;
      if(checked){
       return setCurrentFilters(prev => [value, ...prev])
      }else{
        setCurrentFilters(currentFilters?.filter(item => item !== value))
      }
    };
  
    useEffect(() => {
      setSearchParams(currentFilters.length > 0 ? {
        filters: currentFilters?.join(',')
      } : {});
    }, [currentFilters, setSearchParams])
  
    useEffect(() => {
      dispatch(getAllFilters());
      dispatch(filterItems({getSearchParams, category}))
    }, [dispatch, getSearchParams]);

    const closeFilterBackdrop = (e) => {
        if(e.target !== e.currentTarget){
            return
        }

        setIsOpenFilter(false)
    }

  return (
    <div className='fixed top-0 left-0 w-full h-screen backdrop-blur-[1px]' onClick={closeFilterBackdrop}>
      <div className='h-screen w-[295px] flex flex-col gap-[30px] bg-[#F5FAF6] rounded-r-[5px] shadow-[0px_2px_5px_0px_rgba(127,170,132,0.50)] p-[20px]'>
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-[13px]'>
            <svg className='w-[24px] h-[24px]'>
                <use href={`${icons}#icon-filter`}></use>
            </svg>
            <h3 className='text-[16px] font-semibold'>Фільтр товарів</h3>
            </div>
            <button type='button' onClick={() => setIsOpenFilter(false)}>
            <AiOutlineClose className='w-[24px] h-[24px]'/>
            </button>
        </div>

        <div className='flex flex-col gap-[17px]'>
            <div className='flex flex-col gap-[15px]'>
                <div className='flex flex-col gap-[17px]'>
                {filters.length > 0 && filters.map(({name, filterValue}) => {
                    return <div className='flex flex-col gap-[15px]'>
                        <button type='button' className='flex items-center justify-between'>
                        <h3 className='text-[16px] font-semibold'>{name}</h3>
                        <svg className='w-[24px] h-[24px] fill-none stroke-[#7FAA84]'>
                            <use href={`${icons}#icon-arrow-down`}></use>
                        </svg>
                    </button>

                    <div className='p-[15px] rounded-[5px] bg-[#EAF2EB]'>
                    <ul className="flex flex-col gap-[15px]">
                {filterValue?.map(({ name }) => {
                  return (
                    <li key={name} className="">
                      <label className="flex items-center gap-[15px]">
                        <input
                          type="checkbox"
                          className={`appearance-none w-[24px] h-[24px] border border-solid border-[#78AB7E] rounded-[5px] bg-transparent checked:border-2 relative checked:after:content-[''] checked:after:bg-[#78AB7E] checked:after:w-[15px] checked:after:h-[15px] checked:after:absolute checked:after:left-[2.5px] checked:after:top-[2.5px]`}
                          onChange={onChangeFilter}
                          value={name}
                        />
                        {name}
                      </label>
                    </li>
                  );
                })}
              </ul>
                    </div>
                    </div>
                })}
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FiltersMobile
