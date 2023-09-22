import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCategory } from 'redux/categories/operetions';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';

const validationSchema = Yup.object({
  title: Yup.string('Type name of the category').required(
    'Category name is require'
  ),
  image: Yup.string(),
  desc: Yup.string(),
});

const AdminCategoryUpdate = ({category}) => {
    const {title, desc, image} = category;
    const dispatch = useDispatch();
    const [currentImg] = useState(image)
    const [selectedFile, setSelectedFile] = useState('');
    const fileRef = useRef();
    const {categoryId} = useParams();
    const navigate = useNavigate();
  
    const initialValues = {
      title: title,
      desc: desc,
    };
  
    const onSubmit = (value, { resetForm }) => {
      const {title, desc} = value;
      const categoryData = new FormData();
      categoryData.append('title', title);
      categoryData.append('desc', desc);
      if(selectedFile){
        categoryData.append('updateImg', selectedFile)
      }
      dispatch(updateCategory({categoryData, categoryId}))
      setSelectedFile(null)
      navigate('/admin/category')
      resetForm();
    };

    const setCategoryImg = e => {
        const file = e.target.files[0];
        setSelectedFile(file);
      };

  return  <div className="p-[15px] flex flex-col gap-[15px]">
      <h1 className="text-[24px] font-bold">Update category</h1>
  {category && <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
  >
    <Form className='flex flex-col gap-[30px]'>
      <div>
        <input
          type="file"
          className="hidden"
          ref={fileRef}
          onChange={setCategoryImg}
        />
        <button
          type="button"
          className="text-gray-300 bg-gray-600 text-sm flex justify-center items-center border-2 border-dotted cursor-pointer py-4 w-[350px]"
          onClick={() => {
            fileRef.current.click();
          }}
        >
          Add file
        </button>
      </div>
  
      {!selectedFile ? <>
        <div className="w-[350px] h-[400px]">
         <img
            src={currentImg}
            alt="Category img"
            className="object-contain w-full h-full"
          /> 
        </div>
        <button type='button' className='py-[13px] px-[25px] bg-[#EF787A] rounded-[5px] text-[#fff] text-[16px] font-medium w-[150px]' onClick={() => setSelectedFile(null)}>Remove file</button>
        </> : <>
        <div className="w-[350px] h-[400px]">
         <img
            src={URL.createObjectURL(selectedFile)}
            alt="Category img"
            className="object-contain w-full h-full"
          /> 
        </div>
        <button type='button' className='py-[13px] px-[25px] bg-[#EF787A] rounded-[5px] text-[#fff] text-[16px] font-medium w-[150px]' onClick={() => setSelectedFile(null)}>Remove file</button>
        </>}
  
      <label className='text-[18px] font-medium'>
      <div className="flex flex-col gap-[10px]">
              <h3>
                Title category
                <span className="text-red-500">*</span>
              </h3>
      <Field
        name="title"
        type="text"
        placeholder="Title of the category"
        className="bg-transparent border border-solid border-[#7FAA84] w-[380px] rounded-[5px] px-[15px] py-[15px] text-[16px] text-[#484848]/[.50] tracking-[0.32px] leading-[24px] outline-none"
      />
      <ErrorMessage name='title' component='p' className='text-[#EF787A] text-[16px] font-semibold tracking-[0.32px] leading-[24px] mt-[15px]'/>
      </div>
      </label>
  
      <lable className='text-[18px] font-medium'>
          <div className="flex flex-col gap-[10px]">
         <h3>Description category</h3>
          <Field as="textarea" type='text' name='desc' placeholder="Description of the category" className='bg-transparent border border-solid border-[#7FAA84] w-[380px] rounded-[5px] px-[15px] py-[15px] text-[16px] text-[#484848]/[.50] tracking-[0.32px] leading-[24px] outline-none'/>
          </div>
      </lable>
      <button type='submit' className="py-[15px] px-[25px] bg-[#7FAA84] rounded-[5px] text-[#fff] text-[16px] font-medium w-[220px]">Update category</button>
    </Form>
  </Formik>}
  </div>
}

export default AdminCategoryUpdate
