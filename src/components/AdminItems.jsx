import { NavLink } from "react-router-dom";
import {BsPlusLg} from 'react-icons/bs';

const AdminItems = () => {
  return (
    <div className="p-[15px] w-full">
      <div className="flex items-center justify-between">
        <h1 className="text-[24px] font-bold">Items</h1>

        <div className="flex items-center gap-[15px]">
          <h2 className="font-medium text-[18px]">Add item</h2>
          <NavLink
            to="/admin/add-item"
            className="p-[15px] bg-[#343a40] rounded-[5px] w-[34px] h-[34px] relative"
          >
            <BsPlusLg className="text-[#fff] text-[24px] absolute top-[5px] left-[5px]" />
          </NavLink>
        </div>
      </div>
      </div>
  );
};

export default AdminItems;
