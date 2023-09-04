import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import {BsEyeSlash, BsEye, BsCheckLg} from 'react-icons/bs';
import { registerUser } from 'redux/auth/operetions';
import { useDispatch } from 'react-redux';

const validationSchema = Yup.object({
    userName: Yup.string('Type your name').required('Name is required'),
    email: Yup.string('Type your email')
      .email('Type a corrent email')
      .required('Email is required'),
    password: Yup.string('Type your password')
      .min(3, 'Min length should be 3')
      .required('Password is required'),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
  });

const RegisterForm = ({setLogin, setRegister}) => {
  const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenComfirmPass, setIsOpenComfirmPass] = useState(false);
    const [checked, setChecked] = useState(false);

    const initialValues = {
        userName: '',
        email: '',
        password: '',
        passwordConfirmation: '',
      };
    
      const onSubmit = (value, { resetForm }) => {
        console.log(value);
       dispatch(registerUser(value))
        resetForm();
      };

      const loginHandleClick = () => {
        setLogin(true)
        setRegister(false)
      }
    

  return <>
  <h2 className='text-center text-[#484848] text-[16px] font-bold mb-[30px]'>Реєстрація особистого кабінету</h2>
  <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="flex flex-col gap-[20px]">
        <label className="flex flex-col gap-[5px] text-[#484848] text-[16px] font-medium">
        ПІБ*
            <Field
              name="userName"
              type="text"
              className="text-[#484848] text-[16px] tracking-[0.32px] leading-[24px] py-[8px] px-[15px] border border-solid border-[#7FAA84] rounded-[5px] bg-transparent outline-none"
            />
             <ErrorMessage component='p' name='userName' className='text-[14px] font-semibold tracking-[0.28px] leading-[24px] text-[#EF787A]'/>
          </label>
            
          <label className="flex flex-col gap-[5px] text-[#484848] text-[16px] font-medium">
            Електронна пошта*
            <Field
              name="email"
              type="mail"
              className="text-[#484848] text-[16px] tracking-[0.32px] leading-[24px] py-[8px] px-[15px] border border-solid border-[#7FAA84] rounded-[5px] bg-transparent outline-none"
            />
             <ErrorMessage component='p' name='email' className='text-[14px] font-semibold tracking-[0.28px] leading-[24px] text-[#EF787A]'/>
          </label>

          <label className="flex flex-col gap-[5px] text-[#484848] text-[16px] font-medium">
            Пароль*
            <div className='relative'>
            <Field
              name="password"
              type={!isOpen ? "password" : "text"}
              className="text-[#484848] text-[16px] tracking-[0.32px] leading-[24px] py-[8px] px-[15px] border border-solid border-[#7FAA84] rounded-[5px] bg-transparent outline-none w-full"
            />
            {!isOpen ? <BsEyeSlash className='absolute top-[8px] right-[8px] w-[24px] h-[24px] text-[#7FAA84]' onClick={() => setIsOpen(true)}/> : <BsEye className='absolute top-[10px] right-[8px] w-[24px] h-[24px] text-[#7FAA84]' onClick={() => setIsOpen(false)}/>}
            </div>
            <ErrorMessage component='p' name='password' className='text-[14px] font-semibold tracking-[0.28px] leading-[24px] text-[#EF787A]'/>
          </label>

          <label className="flex flex-col gap-[5px] text-[#484848] text-[16px] font-medium">
          Підтвердження паролю*
            <div className='relative'>
            <Field
              name="passwordConfirmation"
              type={!isOpenComfirmPass ? "password" : "text"}
              className="text-[#484848] text-[16px] tracking-[0.32px] leading-[24px] py-[8px] px-[15px] border border-solid border-[#7FAA84] rounded-[5px] bg-transparent outline-none w-full"
            />
            {!isOpenComfirmPass ? <BsEyeSlash className='absolute top-[8px] right-[8px] w-[24px] h-[24px] text-[#7FAA84]' onClick={() => setIsOpenComfirmPass(true)}/> : <BsEye className='absolute top-[10px] right-[8px] w-[24px] h-[24px] text-[#7FAA84]' onClick={() => setIsOpenComfirmPass(false)}/>}
            </div>
            <ErrorMessage component='p' name='passwordConfirmation' className='text-[14px] font-semibold tracking-[0.28px] leading-[24px] text-[#EF787A]'/>
          </label>
        </div>
  
  <div className='flex items-center justify-between mb-[20px] mt-[30px] relative'>
           <label className='text-[16px] leading-[24px] ml-[30px]'>
            <Field type="checkbox" className='sr-only pl-[34px]' onClick={() => setChecked(prev => !prev)}/>
            <span className={`w-[24px] h-[24px] border border-solid border-[#7FAA84] rounded-[5px] absolute ml-[-30px] checked:border-[#000] checked::before:border-[#000] flex justify-center items-center`}>{checked && <BsCheckLg className="w-[15px] h-[15px] text-[#7FAA84]"/>}</span>
            Запамʼятати мене
           </label>
           </div>

        <div className='flex items-center justify-between'>
          <button type="submit" className='py-[8px] px-[46px] bg-[#7FAA84] rounded-[5px] text-[16px] font-semibold tracking-[0.32px] text-[#fff]'>Зареєструватись</button>
    <button type='button' className='text-[16px] font-medium leading-[24px] border-b border-solid border-[#484848]' onClick={loginHandleClick}>Увійти</button> 
        </div>
      </Form>
    </Formik>
  </>
}

export default RegisterForm
