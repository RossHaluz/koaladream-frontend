import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import {BsEyeSlash, BsEye, BsCheckLg} from 'react-icons/bs';
import RegisterForm from './RegisterForm';
import ForgotPasswordForm from './ForgotPasswordForm';
import { loginUser } from 'redux/auth/operetions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

const validationSchema = Yup.object({
  email: Yup.string('Type your email')
    .email('Type a corrent email')
    .required('Email is required'),
  password: Yup.string('Type your password')
    .min(3, 'Min length should be 3')
    .required('Password is required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);
const [forgotPass, setForgotPass] = useState(false);

const handleForgotPass = () => {
  setForgotPass(true);
  setLogin(false);
}

  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = async(value, { resetForm }) => {
   await dispatch(loginUser(value))
   await navigate('acount')
   resetForm();
  };

  const registerHandleClick = () => {
    setLogin(false);
    setRegister(true)
  }

  return (
   <>
   {login && <> <h2 className='text-center text-[#484848] text-[16px] font-bold mb-[30px]'>Вхід до особистого кабінету</h2>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="flex flex-col gap-[20px]">
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
        </div>

        <div className='flex items-center justify-between mb-[30px] mt-[40px]'>
            <button type='button' className='text-[16px] font-medium leading-[24px] border-b border-solid border-[#484848]' onClick={handleForgotPass}>Забули пароль?</button>
            
           <label className='text-[16px] leading-[24px]'>
            <Field type="checkbox" className='sr-only pl-[34px]' onClick={() => setChecked(prev => !prev)}/>
            <span className={`w-[24px] h-[24px] border border-solid border-[#7FAA84] rounded-[5px] absolute ml-[-34px] checked:border-[#000] checked::before:border-[#000] flex justify-center items-center`}>{checked && <BsCheckLg className="w-[15px] h-[15px] text-[#7FAA84]"/>}</span>
            Запамʼятати мене
           </label>
        </div>

        <div className='flex items-center justify-between'>
          <button type="submit" className='py-[8px] px-[46px] bg-[#7FAA84] rounded-[5px] text-[16px] font-semibold tracking-[0.32px] text-[#fff]'>Увійти</button>
    <button type='button' className='text-[16px] font-medium leading-[24px] border-b border-solid border-[#484848]' onClick={registerHandleClick}>Зареєструватись</button> 
        </div>
      </Form>
    </Formik></>}
    {register && <RegisterForm setLogin={setLogin} setRegister={setRegister}/>}
    {forgotPass && <ForgotPasswordForm />}
    </>
  );
};

export default LoginForm;
