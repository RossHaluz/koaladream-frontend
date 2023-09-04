import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import {BsEyeSlash, BsEye} from 'react-icons/bs';
import { useState } from 'react';

const validationSchema = Yup.object({ 
  oldPassword: Yup.string('Type your old password').required('Old password is required'),
  newPassword: Yup.string('Type your new password').required('New password is required'),
  passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
})

const ChangePasswordForm = () => {
const [isShowOldPass, setIsShowOldPass] = useState(false);
const [isShowNewPass, setIsShowNewPass] = useState(false);
const [isShowConfirmPass, setIsShowConfirmPass] = useState(false);

  const initialValues = { 
    oldPassword: '',
    newPassword: '',
    passwordConfirmation: ''
  }

  const onSubmit = (value, {resetForm}) => {
    console.log(value);
    resetForm()
  }

  return <Formik
  initialValues={initialValues}
  onSubmit={onSubmit}
  validationSchema={validationSchema}
  >
    <Form>
    <div className="flex flex-col gap-[20px]">
      <label className='flex flex-col gap-[10px] text-[#484848] text-[16px] font-medium'>
      Старий пароль*
      <div className='relative'>
        <Field name="oldPassword" type={isShowOldPass ? "text" : "password"} className="text-[#484848] text-[16px] tracking-[0.32px] leading-[24px] py-[8px] px-[15px] border border-solid border-[#7FAA84] rounded-[5px] bg-transparent outline-none w-full"/>
        <button onClick={() => setIsShowOldPass(prev => !prev)} type='button'>
          {isShowOldPass ? <BsEye className='absolute top-[10px] right-[8px] w-[24px] h-[24px] text-[#7FAA84]'/> : <BsEyeSlash className='absolute top-[10px] right-[8px] w-[24px] h-[24px] text-[#7FAA84]'/>}
        </button>
      </div>
      </label>

      <label className='flex flex-col gap-[10px] text-[#484848] text-[16px] font-medium'>
      Новий пароль*
      <div className='relative'>
        <Field name="newPassword" type={isShowNewPass ? "text" : "password"} className="text-[#484848] text-[16px] tracking-[0.32px] leading-[24px] py-[8px] px-[15px] border border-solid border-[#7FAA84] rounded-[5px] bg-transparent outline-none w-full"/>
        <button onClick={() => setIsShowNewPass(prev => !prev)} type='button'>
          {isShowNewPass ? <BsEye className='absolute top-[10px] right-[8px] w-[24px] h-[24px] text-[#7FAA84]'/> : <BsEyeSlash className='absolute top-[10px] right-[8px] w-[24px] h-[24px] text-[#7FAA84]'/>}
        </button>
      </div>
      </label>

      <label className='flex flex-col gap-[10px] text-[#484848] text-[16px] font-medium'>
      Підтвердіть новий пароль*
      <div className='relative'>
        <Field name="passwordConfirmation" type={isShowConfirmPass ? "text" : "password"} className="text-[#484848] text-[16px] tracking-[0.32px] leading-[24px] py-[8px] px-[15px] border border-solid border-[#7FAA84] rounded-[5px] bg-transparent outline-none w-full"/>
        <button onClick={() => setIsShowConfirmPass(prev => !prev)} type='button'>
          {isShowConfirmPass ? <BsEye className='absolute top-[10px] right-[8px] w-[24px] h-[24px] text-[#7FAA84]'/> : <BsEyeSlash className='absolute top-[10px] right-[8px] w-[24px] h-[24px] text-[#7FAA84]'/>}
        </button>
      </div>
      </label>
      </div>

      <button type='submit' className='py-[15px] px-[25px] bg-[#7FAA84] rounded-[5px] text-[#fff] font-semibold w-[180px] flex justify-center items-center mx-auto mt-[30px]'>Змінити</button>
    </Form>
  </Formik>
}

export default ChangePasswordForm
