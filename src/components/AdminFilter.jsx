import { BsPlusLg } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

const AdminFilter = () => {
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
    </div>
  );
};

export default AdminFilter;
