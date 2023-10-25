import { Formik, Form, Field, ErrorMessage } from "formik";
import OrderContactsFormStatus from "./OrderContactsFormStatus";
import * as Yup from 'yup';
import { useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { createUserContactDetails } from "redux/auth/slice";
import { selectUser, selectUserContactDetails } from "redux/auth/selectors";
import { registerUser } from "redux/auth/operetions";
import OrderFormTitle from "./OrderFormTitle";

const validationSchema = Yup.object({
  firstName: Yup.string('Type your firstname').required('Firstname is required'),
  lastName: Yup.string('Type your lastname').required('Lastname is required'),
  phone: Yup.number('Type your number').required('Phone is required'),
})

const validationSchemaRegister = Yup.object({
  email: Yup.string('Type your email').email('Type a valid email').required('Email is required'),
  password: Yup.string('Type a password').min(3, 'Password shoud be minimal 3 length').required('Password is required'),
  confirmPassword: Yup.string()
  .required('Please retype your password.')
  .oneOf([Yup.ref('password')], 'Your passwords do not match.')
})

const OrderContactsForm = () => {
const [checked, setChecked] = useState(false);
const dispatch = useDispatch();
const user = useSelector(selectUserContactDetails);
const loginUser = useSelector(selectUser);
const [isOpen, setIsOpen] = useState(false);

  const initialValues = {
    firstName: user?.firstName  ? user?.firstName : '',
    lastName: user?.lastName ? user?.lastName : '',
    phone: user?.phone || loginUser?.phone ? user?.phone || loginUser?.phone : '', 
    email: loginUser?.email ? loginUser?.email : '',
    password: loginUser?.password ? loginUser?.password : '',
    confirmPassword: ''
  }

  const onSubmit = (value, {resetForm}) => {
    const {firstName, lastName, phone, email, password} = value;

    if(checked){
      const userName = firstName + " " + lastName;
      dispatch(registerUser({userName, phone, email, password}));
    }else{
      dispatch(createUserContactDetails({firstName, lastName, phone, email}));
    }
    resetForm()
  }

  return <div className="flex flex-col gap-[30px] tb:pl-[30px] tb:pt-[30px]">
    <OrderFormTitle setIsOpen={setIsOpen} isOpen={isOpen} number={1} title={'Контактні дані'}/>

    {!user ? 
   <> <OrderContactsFormStatus/>
   <Formik
   initialValues={initialValues}
   validationSchema={!checked ? validationSchema : validationSchemaRegister}
   onSubmit={onSubmit}
   >
     <Form className="flex flex-col gap-[15px] w-full tb:w-[406px]">
       <Field name='firstName' placeholder='Ім’я' type="text" className='py-[8px] px-[15px] bg-[#EAF2EB] tb:bg-transparent tb:border tb:border-solid tb:border-[#7FAA84] text-[#484848] tb:text-[#484848]/[.50] tb:text-[16px] tb:font-medium leading-[24px] tracking-[0.32px] rounded-[5px]'/>
       <ErrorMessage name="firstName" component='p' />

        <Field name='lastName' placeholder='Прізвище' type="text" className='py-[8px] px-[15px] bg-[#EAF2EB] tb:bg-transparent tb:border tb:border-solid tb:border-[#7FAA84] text-[#484848] tb:text-[#484848]/[.50] tb:text-[16px] tb:font-medium leading-[24px] tracking-[0.32px] rounded-[5px]'/>
       <ErrorMessage name="lastName" component='p'/>

       <Field name='phone' placeholder='Номер телефону' type="tel" className='py-[8px] px-[15px] bg-[#EAF2EB] tb:bg-transparent tb:border tb:border-solid tb:border-[#7FAA84] text-[#484848] tb:text-[#484848]/[.50] tb:text-[16px] tb:font-medium leading-[24px] tracking-[0.32px] rounded-[5px]'/>
       <ErrorMessage name="phone" component='p'/>

{checked && <><Field name='email' placeholder='Email' type="email" className='py-[8px] px-[15px] bg-[#EAF2EB] tb:bg-transparent tb:border tb:border-solid tb:border-[#7FAA84] text-[#484848] tb:text-[#484848]/[.50] tb:text-[16px] tb:font-medium leading-[24px] tracking-[0.32px] rounded-[5px]'/>
       <ErrorMessage name="email" component='p'/>

       <Field name='password' placeholder='Пароль' type="password" className='py-[8px] px-[15px] bg-[#EAF2EB] tb:bg-transparent tb:border tb:border-solid tb:border-[#7FAA84] text-[#484848] tb:text-[#484848]/[.50] tb:text-[16px] tb:font-medium leading-[24px] tracking-[0.32px] rounded-[5px]'/>
       <ErrorMessage name="password" component='p'/>

       <Field name='confirmPassword' placeholder='Підтвердіть пароль' type="password" className='py-[8px] px-[15px] bg-[#EAF2EB] tb:bg-transparent tb:border tb:border-solid tb:border-[#7FAA84] text-[#484848] tb:text-[#484848]/[.50] tb:text-[16px] tb:font-medium leading-[24px] tracking-[0.32px] rounded-[5px]'/>
       <ErrorMessage name="confirmPassword" component='p'/></>}

       <label className="mt-[15px]">
           <input type="checkbox" className='sr-only pl-[34px]' value={checked} onChange={() => setChecked(prev => !prev)}/>
           <span className={`w-[24px] h-[24px] border border-solid border-[#7FAA84] rounded-[5px] absolute ml-[0px] flex justify-center items-center`}>{checked && <BsCheckLg className="text-[#7FAA84]"/>}</span>
           <h3 className="ml-[36px] tb:text-[16px] leading-[24px]">Я хочу зареєструватись та користуватись
бонусною системою</h3>
       </label>

       <button type="submit" className="px-[25px] py-[15px] bg-[#7FAA84] rounded-[5px] text-[16px] font-semibold tracking-[0.32px] text-[#fff] flex items-center justify-center w-[220px] tb:w-[155px] mt-[15px] mx-auto">Далі</button>
     </Form>
   </Formik></> : isOpen && <Formik
    initialValues={initialValues}
    validationSchema={!checked ? validationSchema : validationSchemaRegister}
    onSubmit={onSubmit}
    >
      <Form className="flex flex-col gap-[15px] w-full tb:w-[406px]">
        <Field name='firstName' placeholder='Ім’я' type="text" className='py-[8px] px-[15px] bg-transparent border border-solid border-[#7FAA84] text-[#484848] tb:text-[#484848]/[.50] tb:text-[16px] tb:font-medium leading-[24px] tracking-[0.32px] rounded-[5px]'/>
        <ErrorMessage name="firstName" component='p' />

         <Field name='lastName' placeholder='Прізвище' type="text" className='py-[8px] px-[15px] bg-transparent border border-solid border-[#7FAA84] text-[#484848] tb:text-[#484848]/[.50] tb:text-[16px] tb:font-medium leading-[24px] tracking-[0.32px] rounded-[5px]'/>
        <ErrorMessage name="lastName" component='p'/>

        <Field name='phone' placeholder='Номер телефону' type="tel" className='py-[8px] px-[15px] bg-transparent border border-solid border-[#7FAA84] text-[#484848] tb:text-[#484848]/[.50] tb:text-[16px] tb:font-medium leading-[24px] tracking-[0.32px] rounded-[5px]'/>
        <ErrorMessage name="phone" component='p'/>

<Field name='email' placeholder='Email' type="email" className='py-[8px] px-[15px] bg-transparent border border-solid border-[#7FAA84] text-[#484848] tb:text-[#484848]/[.50] tb:text-[16px] tb:font-medium leading-[24px] tracking-[0.32px] rounded-[5px]'/>
        <ErrorMessage name="email" component='p'/>

      </Form>
    </Formik>}

  </div>
}

export default OrderContactsForm
