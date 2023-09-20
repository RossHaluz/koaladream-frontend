import AdminAddOptionForm from './AdminAddOptionForm';

const AdminAddOption = () => {
  return (
    <div className="p-[15px] flex flex-col gap-[15px]">
      <h1 className="text-[24px] font-bold">Add option</h1>
      <AdminAddOptionForm />
    </div>
  );
};

export default AdminAddOption;
