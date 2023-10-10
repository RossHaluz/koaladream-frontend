import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getAllFilters } from 'redux/filter/operetions';
import { selectFilter } from 'redux/filter/selectors';
import { filterItems } from 'redux/items/operetions';

const Filter = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilter);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentFilters, setCurrentFilters] = useState([]);
  const getSearchParams = searchParams.get('filters');

  // const arrayOfStrings = getSearchParams.split(','); 
  // const trimmedArray = arrayOfStrings.map(str => str.trim()); 
  
  const onChangeFilter = e => {
    const { checked, value } = e.currentTarget;

    setCurrentFilters(prev => {
      if (checked) {
        return [value, ...prev];
      } else {
        return prev.filter(item => item !== value);
      }
    });

  };

  useEffect(() => {
    if(currentFilters.length === 0){
      return;
    }
    setSearchParams({
      filters: currentFilters.join(','),
    });
  }, [currentFilters, setSearchParams])

  useEffect(() => {
    dispatch(getAllFilters());
    dispatch(filterItems(getSearchParams))
  }, [dispatch, getSearchParams]);

  return (
    <div className="flex flex-col gap-[20px] xs:hidden lg:flex">
      {filters.length > 0 &&
        filters?.map(({ filterValue, name: nameFilter, _id: id }) => {
          return (
            <div
              key={id}
              className="bg-[#EAF2EB] p-[15px] rounded-[5px] w-[235px]"
            >
              <h3 className="mb-[15px] text-[16px] font-bold tracking-[ 0.32px] leading-[24px]">
                {nameFilter}
              </h3>
              <ul className="flex flex-col gap-[15px]">
                {filterValue?.map(({ name }) => {
                  return (
                    <li key={name} className="">
                      <label className="flex items-center gap-[15px]">
                        <input
                          type="checkbox"
                          className={`appearance-none w-[24px] h-[24px] border border-solid border-[#78AB7E] rounded-[5px] bg-transparent checked:border-2 relative checked:after:content-[''] checked:after:bg-[#78AB7E] checked:after:w-[15px] checked:after:h-[15px] checked:after:absolute checked:after:left-[2.5px] checked:after:top-[2.5px] `}
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
          );
        })}
    </div>
  );
};

export default Filter;
