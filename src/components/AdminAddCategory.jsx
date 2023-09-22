import AdminAddCategoryForm from "./AdminAddCategoryForm"

const AdminAddCategory = () => {
  return (
    <div className="p-[15px] w-full flex flex-col gap-[15px]">
    <h1 className="text-[24px] font-bold">Add category</h1>
    <AdminAddCategoryForm/>
  </div>
  )
}

export default AdminAddCategory
