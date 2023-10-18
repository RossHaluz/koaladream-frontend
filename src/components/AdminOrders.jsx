import { BsPencil } from 'react-icons/bs';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { GrView } from 'react-icons/gr';
import { deleteOrder } from 'redux/order/operetions';

const AdminOrders = ({ orders }) => {
  const dispatch = useDispatch();

  return (
    <div className="p-[15px]">
      <h1 className="text-[24px] font-bold">Orders</h1>
      <table className="border-collapse w-full mt-[30px]">
        <thead>
          <tr>
            <th className="border border-solid border-[#343a40] p-[10px]">
              Customer
            </th>
            <th className="border border-solid border-[#343a40] p-[10px]">
              Status
            </th>
            <th className="border border-solid border-[#343a40] p-[10px]">
              Date added
            </th>
            <th className="border border-solid border-[#343a40] p-[10px]">
              Amount
            </th>
            <th className="border border-solid border-[#343a40] p-[10px]">
              View/Eddit/Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {orders?.map(({ _id: id, firstName, lastName, dateAdded }) => {
            const day = new Date(dateAdded).getDate();
            const month = new Date(dateAdded).getMonth();
            const year = new Date(dateAdded).getFullYear();


            return (
              <tr key={id}>
                <td className="border border-solid border-[#343a40] p-[10px]">
                  {firstName} {lastName}
                </td>
                <td className="border border-solid border-[#343a40] p-[10px]">
                  Order processed
                </td>
                <td className="border border-solid border-[#343a40] p-[10px]">{`${day}/${
                  month < 10 ? '0' + month : month
                }/${year}`}</td>
                <td className="border border-solid border-[#343a40] p-[10px]">
                  1 600 ₴
                </td>
                <td className="border border-solid border-[#343a40] p-[10px]">
                  <div className="flex items-center justify-center gap-[15px]">
                    <NavLink to={`/admin/orderDetails/${id}`}>
                      <GrView className="w-[24px] h-[24px]" />
                    </NavLink>
                    <NavLink to={`/admin/order/${id}`}>
                      <BsPencil className="w-[24px] h-[24px]" />
                    </NavLink>
                    <button type="button" onClick={() => dispatch(deleteOrder(id))}>
                      <RiDeleteBinLine className="w-[24px] h-[24px]" />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminOrders;
