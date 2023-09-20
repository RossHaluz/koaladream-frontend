import { useEffect } from 'react';
import { BsPlusLg, BsPencil } from 'react-icons/bs';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { deleteOption, getOptions } from 'redux/options/operetions';
import { selectOptions } from 'redux/options/selectors';

const AdminOptions = () => {
  const dispatch = useDispatch();
  const options = useSelector(selectOptions);

  useEffect(() => {
    dispatch(getOptions());
  }, [dispatch]);

  return (
    <div className="p-[15px] w-full">
      <div className="flex items-center justify-between">
        <h1 className="text-[24px] font-bold">Options</h1>

        <div className="flex items-center gap-[15px]">
          <h2 className="font-medium text-[18px]">Add option</h2>
          <NavLink
            to="/admin/add-option"
            className="p-[15px] bg-[#343a40] rounded-[5px] w-[34px] h-[34px] relative"
          >
            <BsPlusLg className="text-[#fff] text-[24px] absolute top-[5px] left-[5px]" />
          </NavLink>
        </div>
      </div>

      <ul className="flex flex-col gap-[15px] mt-[30px]">
        {options.length > 0 &&
          options?.map(({ name, _id: id }, idx) => {
            return (
              <li
                key={id}
                className="border-b border-solid border-[#343a40] flex items-center justify-between"
              >
                <h3 className="text-[16px] text-[#343a40] tracking-[0.26px] leading-[44px]">
                  {idx + 1}. {name}
                </h3>
                <div className="flex items-center gap-[15px]">
                  <NavLink to={`/admin/options/${id}`}>
                    <BsPencil className="w-[24px] h-[24px]" />
                  </NavLink>
                  <button
                    type="button"
                    onClick={() => dispatch(deleteOption(id))}
                  >
                    <RiDeleteBinLine className="w-[24px] h-[24px]" />
                  </button>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default AdminOptions;
