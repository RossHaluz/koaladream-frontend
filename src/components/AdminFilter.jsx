import { useEffect } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { deleteFilter, getFilters } from 'redux/filtersAdmin/operetions';
import { selectFilters } from 'redux/filtersAdmin/selectors';
import {RiDeleteBinLine} from 'react-icons/ri';
import {BsPencil} from 'react-icons/bs';

const AdminFilter = () => {
const dispatch = useDispatch();
const filters = useSelector(selectFilters);


useEffect(() => {
  dispatch(getFilters());
}, [dispatch])

  return (
    <div className="p-[15px] w-full">
      <div className="flex items-center justify-between">
        <h1 className="text-[24px] font-bold">Filters</h1>

        <div className="flex items-center gap-[15px]">
          <h2 className="font-medium text-[18px]">Add filter</h2>
          <NavLink
            to="/admin/add-filter"
            className="p-[15px] bg-[#343a40] rounded-[5px] w-[34px] h-[34px] relative"
          >
            <BsPlusLg className="text-[#fff] text-[24px] absolute top-[5px] left-[5px]" />
          </NavLink>
        </div>
      </div>

      <ul className="flex flex-col gap-[15px] mt-[30px]">
        {filters.length > 0 && filters?.map(({name, _id: id}, idx) => {
          return <li key={idx} className='border-b border-solid border-[#343a40] flex items-center justify-between'>
             <h3 className="text-[18px] text-[#343a40] tracking-[0.26px] leading-[44px]">
                  {idx + 1}. {name}
                </h3>
                <div className="flex items-center gap-[15px]">
                  <NavLink to={`/admin/filter/${id}`}>
                    <BsPencil className="w-[24px] h-[24px]" />
                  </NavLink>
                  <button
                    type="button"
                    onClick={() => dispatch(deleteFilter(id))}
                  >
                    <RiDeleteBinLine className="w-[24px] h-[24px]" />
                  </button>
                </div>
          </li>
        })}
      </ul>
    </div>
  );
};

export default AdminFilter;
