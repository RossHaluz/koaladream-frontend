import Logo from "./Logo";
import {AiOutlineClose} from 'react-icons/ai';
import { openMenu } from "redux/mobileMenu/slice";
import { useDispatch } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    email: Yup.string('Type your email').email('Type a valid email').required('Email is required')
})

const ForgotPasswordFormMobile = ({setIsOpenLoginPage}) => {
    const dispatch = useDispatch();

    const closeMobileMenu = () => {
        setIsOpenLoginPage(false);
        dispatch(openMenu(false))
    }

    const initialValues = {
        email: ''
    }
    
    const onSubmit = (value, {resetForm}) => {
        console.log(value);
        resetForm();
    }

  return  <div className="fixed left-0 top-0 z-20 w-full h-full bg-[#F5FAF6] container">
  <div className="flex justify-center mb-[10px]" onClick={() => closeMobileMenu()}>
    <Logo />
  </div>
  <button type='button' className='flex ml-auto mb-[15px]' onClick={() => closeMobileMenu()}>
  <AiOutlineClose className='w-[24px] h-[24px]'/>
  </button>
  <h2 className='text-center text-[16px] font-semibold mb-[30px]'>Відновлення паролю</h2>
  <p className="text-center mb-[30px]">Для того, щоб відновити свій пароль, 
введіть адросу вашої електронної пошти</p>

<Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
    >
        <Form>
            <label className="flex flex-col gap-[5px] text-[#484848] font-medium">
            Електронна пошта*
            <Field name="email" type="mail" className="text-[#484848] text-[16px] tracking-[0.32px] leading-[24px] py-[8px] px-[15px] bg-[#EAF2EB] rounded-[5px] outline-none w-full"/>
            <ErrorMessage component='p' name='email' className='text-[14px] font-semibold tracking-[0.28px] leading-[24px] text-[#EF787A]'/>
            </label>
            <button type='submit' className='py-[11.5px] px-[46px] bg-[#7FAA84] rounded-[5px] font-semibold tracking-[0.32px] mt-[30px] text-[#fff] flex mx-auto'>Відправити</button>
        </Form>
    </Formik>

  </div>
}

export default ForgotPasswordFormMobile
