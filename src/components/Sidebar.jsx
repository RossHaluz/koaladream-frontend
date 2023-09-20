import { NavLink } from 'react-router-dom';
import { CiShoppingTag, CiFilter, CiShoppingCart } from 'react-icons/ci';
import { IoIosOptions } from 'react-icons/io';
import { BiCategory } from 'react-icons/bi';

const activePage = {
  fontWeight: 600,
};

const Sidebar = () => {
  return (
    <div className="min-w-[320px] h-screen bg-[#343a40] p-[15px]">
      <NavLink
        to="/admin/dashboard"
        className="text-center text-[24px] text-[#fff]"
      >
        <span className="font-bold">KoalaDream</span>Admin
      </NavLink>

      <div className="w-full h-[1px] bg-gray-500 mb-[30px] mt-[15px]"></div>

      <nav className="flex flex-col gap-[15px]">
        <NavLink
          style={({ isActive }) => (isActive ? activePage : undefined)}
          to="/admin/orders"
          className="text-[#fff] text-[24px] flex items-center gap-[15px]"
        >
          <CiShoppingCart />
          Orders
        </NavLink>

        <NavLink
          style={({ isActive }) => (isActive ? activePage : undefined)}
          to="/admin/category"
          className="text-[#fff] text-[24px] flex items-center gap-[15px]"
        >
          <BiCategory />
          Category
        </NavLink>

        <NavLink
          style={({ isActive }) => (isActive ? activePage : undefined)}
          to="/admin/items"
          className="text-[#fff] text-[24px] flex items-center gap-[15px]"
        >
          <CiShoppingTag />
          Items
        </NavLink>

        <NavLink
          style={({ isActive }) => (isActive ? activePage : undefined)}
          to="/admin/filter"
          className="text-[#fff] text-[24px] flex items-center gap-[15px]"
        >
          <CiFilter />
          Filters
        </NavLink>

        <NavLink
          style={({ isActive }) => (isActive ? activePage : undefined)}
          to="/admin/options"
          className="text-[#fff] text-[24px] flex items-center gap-[15px]"
        >
          <IoIosOptions />
          Options
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
