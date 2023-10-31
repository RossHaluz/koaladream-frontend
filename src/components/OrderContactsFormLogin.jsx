import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from 'react';
import * as Yup from 'yup';
import { BsCheckLg } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { loginUser } from "redux/auth/operetions";

const validationSchema = Yup.object({
    email: Yup.string('Type your email').email('Email shoud be a valid').required('Email is required'),
    password: Yup.string('Type your password').required('Password is required')
})

const OrderContactsFormLogin = () => {
    // const [forgotPass, setForgotPass] = useState(false);
    const [checked, setChecked] = useState(false);
    const dispatch = useDispatch();

    const initialValues = {
        email: '',
        password: ''
    }

    const onSubmit = (value, {resetForm}) => {
        dispatch(loginUser(value))
        resetForm()
    }
   
    // const handleForgotPass = () => {
    //     setForgotPass(true);
    //   }

  return <Formik
  initialValues={initialValues}
  onSubmit={onSubmit}
  validationSchema={validationSchema}
  >
     <Form className="flex flex-col gap-[15px] w-full tb:w-[406px]">
      <Field name='email' type='email' placeholder='Email' className='py-[8px] px-[15px] bg-[#EAF2EB] tb:bg-transparent tb:border tb:border-solid tb:border-[#7FAA84] text-[#484848] tb:text-[#484848]/[.50] tb:text-[16px] tb:font-medium leading-[24px] tracking-[0.32px] rounded-[5px]'/>
      <ErrorMessage name='email' component='p'/>

      <Field name='password' placeholder='Пароль' type="password" className='py-[8px] px-[15px] bg-[#EAF2EB] tb:bg-transparent tb:border tb:border-solid tb:border-[#7FAA84] text-[#484848] tb:text-[#484848]/[.50] tb:text-[16px] tb:font-medium leading-[24px] tracking-[0.32px] rounded-[5px]'/>
      <ErrorMessage name='password' component='p'/>

      <div className='flex items-center justify-between mb-[30px] mt-[40px]'>
            <button type='button' className='text-[16px] font-medium leading-[24px] border-b border-solid border-[#484848]' >Забули пароль?</button>
            
           <label className='text-[16px] leading-[24px]'>
            <Field type="checkbox" className='sr-only pl-[34px]' onClick={() => setChecked(prev => !prev)}/>
            <span className={`w-[24px] h-[24px] border border-solid border-[#7FAA84] rounded-[5px] absolute ml-[-34px] checked:border-[#000] checked::before:border-[#000] flex justify-center items-center`}>{checked && <BsCheckLg className="w-[15px] h-[15px] text-[#7FAA84]"/>}</span>
            Запамʼятати мене
           </label>
        </div>

        
          <button type="submit" className='py-[8px] px-[46px] bg-[#7FAA84] rounded-[5px] text-[16px] font-semibold tracking-[0.32px] text-[#fff] w-[155px]'>Увійти</button>
      
      </Form>
  </Formik>
}

export default OrderContactsFormLogin
