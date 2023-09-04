import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    email: Yup.string('Type your email').email('Type a valid email').required('Email is required')
})

const ForgotPasswordForm = () => {
const initialValues = {
    email: ''
}

const onSubmit = (value, {resetForm}) => {
    console.log(value);
    resetForm();
}
    
  return <div className='py-[45px]'>
    <div className='flex flex-col gap-[30px] mb-[40px]'>
    <h2 className='text-center text-[#484848] text-[16px] font-bold '>Відновлення паролю</h2>
    <p className='text-center text-[16px]'>Для того, щоб відновити свій пароль, 
введіть адросу вашої електронної пошти</p>
    <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
    >
        <Form>
            <label className="flex flex-col gap-[5px] text-[#484848] text-[16px] font-medium">
            Email*
            <Field name="email" type="mail" className="text-[#484848] text-[16px] tracking-[0.32px] leading-[24px] py-[8px] px-[15px] border border-solid border-[#7FAA84] rounded-[5px] bg-transparent outline-none"/>
            <ErrorMessage component='p' name='email' className='text-[14px] font-semibold tracking-[0.28px] leading-[24px] text-[#EF787A]'/>
            </label>
        </Form>
    </Formik>
    </div>
    <button type='submit' className='py-[8px] px-[46px] bg-[#7FAA84] rounded-[5px] text-[16px] font-semibold tracking-[0.32px] text-[#fff] flex mx-auto'>Відправити</button>
  </div>
}

export default ForgotPasswordForm
