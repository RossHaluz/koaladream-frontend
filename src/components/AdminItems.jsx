import { NavLink } from 'react-router-dom';
import { BsPlusLg } from 'react-icons/bs';
import { deleteItem, getAllItems } from 'redux/items/operetions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectItems } from 'redux/items/selectors';
import { RiDeleteBinLine } from 'react-icons/ri';
import { BsPencil } from 'react-icons/bs';

const AdminItems = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);

  useEffect(() => {
    dispatch(getAllItems());
  }, [dispatch]);

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

      {items.length > 0 && <table className='border-collapse w-full mt-[30px]'>
        <thead>
    <tr>
      <th className='border border-solid border-[#343a40] p-[10px]'>Name</th>
      <th className='border border-solid border-[#343a40] p-[10px]'>Article</th>
      <th className='border border-solid border-[#343a40] p-[10px]'>Status</th>
      <th className='border border-solid border-[#343a40] p-[10px]'>Price</th>
      <th className='border border-solid border-[#343a40] p-[10px]'>Eddit/Delete</th>
    </tr>
  </thead>

  <tbody>
  {items.length > 0 &&
          items?.map(({ title, images, article, price, status, _id: id }) => {
            return  <tr key={id}>
            <td className='flex items-center gap-[10px] border border-solid border-[#343a40] p-[10px]'>
            <div className="w-[74px] h-[74px]">
                      <img
                        src={images[0]}
                        alt="Item img"
                        className="object-contain w-full h-full"
                      />
                    </div>
              {title}
              </td>
            <td className='border border-solid border-[#343a40] p-[10px]'>{article}</td>
            <td className='border border-solid border-[#343a40] p-[10px]'>{status}</td>
            <td className='border border-solid border-[#343a40] p-[10px]'>{price} UAH</td>
            <td className='border border-solid border-[#343a40] p-[10px]'>
            <div className="flex items-center justify-center gap-[15px]">
                    <NavLink to={`/admin/item/${id}`}>
                      <BsPencil className="w-[24px] h-[24px]" />
                    </NavLink>
                    <button type="button" onClick={() => dispatch(deleteItem(id))}>
                      <RiDeleteBinLine className="w-[24px] h-[24px]" />
                    </button>
                  </div>
            </td>
          </tr>
          })}
  </tbody>
        </table>}
    </div>
  );
};

export default AdminItems;
