import AdminAddFilterForm from './AdminAddFilterForm';

const AdminAddFilter = () => {
  return (
    <div className="p-[15px] flex flex-col gap-[15px]">
      <h1 className="text-[24px] font-bold">Add filter</h1>
      <AdminAddFilterForm />
    </div>
  );
};

export default AdminAddFilter;
