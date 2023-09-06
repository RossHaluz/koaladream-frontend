import {  Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {  updateUser } from 'redux/auth/operetions';
import { selectUser } from 'redux/auth/selectors';

const PersonalData = () => {
const {userName, email, phone} = useSelector(selectUser);
const dispatch = useDispatch();
 
const initialValues = {
    userName: userName,
    phone: phone,
    email: email
}

const onSubmit = (value, {resetForm}) => {
    dispatch(updateUser(value));
    resetForm()
}
    
  return <Formik
  initialValues={initialValues}
  onSubmit={onSubmit}
  >
    <Form className='flex flex-col gap-[15px]'>
      <label className='flex flex-col font-medium gap-[5px]'>
      ПІБ*
      <Field name="userName" type="text" className="bg-[#EAF2EB] border-none rounded-[5px] w-full py-[16px] px-[15px] text-[14px] text-[#484848] outline-none"/>
      </label>

      <label className='flex flex-col font-medium gap-[5px]'>
      Номер телефону*
      <Field name="phone" type="tel" className="bg-[#EAF2EB] border-none rounded-[5px] w-full py-[16px] px-[15px] text-[14px] text-[#484848] outline-none"/>
      </label>

      <label className='flex flex-col font-medium gap-[5px]'>
      Електронна пошта*
      <Field name="email" type="email" className="bg-[#EAF2EB] border-none rounded-[5px] w-full py-[16px] px-[15px] text-[14px] text-[#484848] outline-none"/>
      </label>

      <button type='submit' className='py-[15px] px-[25px] bg-[#7FAA84] rounded-[5px] text-[#fff] font-semibold w-[180px] flex mx-auto mt-[30px]'>Редагувати дані</button>
    </Form>
  </Formik>
}

export default PersonalData
