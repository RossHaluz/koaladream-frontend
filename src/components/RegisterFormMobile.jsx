import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Logo from './Logo';
import { AiOutlineClose } from 'react-icons/ai';
import {BsEyeSlash, BsEye, BsCheckLg} from 'react-icons/bs';
import { registerUser } from 'redux/auth/operetions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { openMenu } from 'redux/mobileMenu/slice';
import { useNavigate } from 'react-router-dom';

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

const RegisterFormMobile = ({setIsOpenLoginPage, setIsOpenRegisterPage}) => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenComfirmPass, setIsOpenComfirmPass] = useState(false);
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();

    const initialValues = {
        userName: '',
        email: '',
        password: '',
        passwordConfirmation: '',
      };
    
      const onSubmit = async (value, { resetForm }) => {
        const {userName, email, password} = value;
      await dispatch(registerUser({userName, email, password}));
      await navigate('acount')
      setIsOpenRegisterPage(false);
      setIsOpenLoginPage(false);
      dispatch(openMenu(false));
     resetForm();
      };

      const closeMenu = () => {
        setIsOpenRegisterPage(false);
        setIsOpenLoginPage(false);
        dispatch(openMenu(false));
      }

      const openLoginPage = () => {
        setIsOpenRegisterPage(false);
        setIsOpenLoginPage(true);
      }

  return  <div className="fixed left-0 top-0 z-20 w-full overflow-y-auto pb-[168px] h-full bg-[#F5FAF6] container">
  <div className="flex justify-center mb-[10px]" onClick={() => closeMenu()}>
    <Logo />
  </div>
  <button type='button' className='flex ml-auto mb-[15px]' onClick={() => closeMenu()}>
      <AiOutlineClose className='w-[24px] h-[24px]'/>
      </button>
      <h2 className='text-center text-[#484848] text-[16px] font-bold mb-[30px]'>Реєстрація особистого кабінету</h2>
  <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="flex flex-col gap-[20px]">
        <label className="flex flex-col gap-[5px] text-[#484848] font-medium">
        ПІБ*
            <Field
              name="userName"
              type="text"
              className="text-[#484848] text-[16px] tracking-[0.32px] leading-[24px] py-[8px] px-[15px] bg-[#EAF2EB] rounded-[5px] outline-none"
            />
             <ErrorMessage component='p' name='userName' className='text-[14px] font-semibold tracking-[0.28px] leading-[24px] text-[#EF787A]'/>
          </label>
            
          <label className="flex flex-col gap-[5px] text-[#484848] font-medium">
            Електронна пошта*
            <Field
              name="email"
              type="mail"
              className="text-[#484848] text-[16px] tracking-[0.32px] leading-[24px] py-[8px] px-[15px] bg-[#EAF2EB] rounded-[5px] outline-none"
            />
             <ErrorMessage component='p' name='email' className='text-[14px] font-semibold tracking-[0.28px] leading-[24px] text-[#EF787A]'/>
          </label>

          <label className="flex flex-col gap-[5px] text-[#484848] font-medium">
            Пароль*
            <div className='relative'>
            <Field
              name="password"
              type={!isOpen ? "password" : "text"}
              className="text-[#484848] text-[16px] tracking-[0.32px] leading-[24px] py-[8px] px-[15px] bg-[#EAF2EB] rounded-[5px] outline-none w-full"
            />
            {!isOpen ? <BsEyeSlash className='absolute top-[8px] right-[8px] w-[24px] h-[24px] text-[#7FAA84]' onClick={() => setIsOpen(true)}/> : <BsEye className='absolute top-[10px] right-[8px] w-[24px] h-[24px] text-[#7FAA84]' onClick={() => setIsOpen(false)}/>}
            </div>
            <ErrorMessage component='p' name='password' className='text-[14px] font-semibold tracking-[0.28px] leading-[24px] text-[#EF787A]'/>
          </label>

          <label className="flex flex-col gap-[5px] text-[#484848 font-medium">
          Підтвердження паролю*
            <div className='relative'>
            <Field
              name="passwordConfirmation"
              type={!isOpenComfirmPass ? "password" : "text"}
              className="text-[#484848] text-[16px] tracking-[0.32px] leading-[24px] py-[8px] px-[15px] bg-[#EAF2EB] rounded-[5px] outline-none w-full"
            />
            {!isOpenComfirmPass ? <BsEyeSlash className='absolute top-[8px] right-[8px] w-[24px] h-[24px] text-[#7FAA84]' onClick={() => setIsOpenComfirmPass(true)}/> : <BsEye className='absolute top-[10px] right-[8px] w-[24px] h-[24px] text-[#7FAA84]' onClick={() => setIsOpenComfirmPass(false)}/>}
            </div>
            <ErrorMessage component='p' name='passwordConfirmation' className='text-[14px] font-semibold tracking-[0.28px] leading-[24px] text-[#EF787A]'/>
          </label>
        </div>
  
  <div className='flex items-center justify-between mb-[30px] mt-[30px] relative'>
           <label className='leading-[24px] ml-[30px]'>
            <Field type="checkbox" className='sr-only pl-[34px]' onClick={() => setChecked(prev => !prev)}/>
            <span className={`w-[24px] h-[24px] border border-solid border-[#7FAA84] rounded-[5px] absolute ml-[-30px] checked:border-[#000] checked::before:border-[#000] flex justify-center items-center`}>{checked && <BsCheckLg className="w-[15px] h-[15px] text-[#7FAA84]"/>}</span>
            Запамʼятати мене
           </label>
           </div>

        <div className='flex items-center justify-between'>
          <button type="submit" className='py-[11.5px] px-[13px] bg-[#7FAA84] rounded-[5px] font-semibold tracking-[0.32px] text-[#fff]'>Зареєструватись</button>
    <button type='button' className='font-medium leading-[24px] border-b border-solid border-[#484848]' onClick={() => openLoginPage()}>Увійти</button> 
        </div>
      </Form>
    </Formik>
  </div>
}

export default RegisterFormMobile
