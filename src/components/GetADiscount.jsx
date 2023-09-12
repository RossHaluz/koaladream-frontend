import { ErrorMessage, Field, Form, Formik } from "formik"
import Section from "./Section"
import * as Yup from 'yup';
import discount_1x from './img/discount/discount@1X.jpg';
import discount_2x from './img/discount/discount@2x.jpg';

const validationSchema = Yup.object({
    email: Yup.string('Type your email').email('Type a valid email').required('Email is required')
})

const GetADiscount = () => {
const initialValues = {
    email: ''
}

const onSubmit = (value, {resetForm}) => {
    console.log(value);
    resetForm()
}

  return (
    <>
    <Section styles={'bg-[#EAF2EB] lg:hidden'}>
      <div className="container">
        <div className="flex justify-center flex-col">
        <h3 className="text-[16px] font-semibold tracking-[0.16px] flex mx-auto text-center font-secondery w-[228px] mb-[31px]">Отримайте знижку 10%
за підписку на наші новини</h3>

<Formik
initialValues={initialValues}
onSubmit={onSubmit}
validationSchema={validationSchema}
>
    <Form className="flex flex-col gap-[15px]">
        <Field name="email" type="text" placeholder="Введіть свій email" className='rounded-[5px] py-[8px] px-[15px] w-full tb:w-[389px] flex mx-auto outline-none leading-[24px] text-[#484848]/[.50]'/>
        <ErrorMessage name="email" component='p'/>
        <button type="submit" className="bg-[#7FAA84] rounded-[5px] py-[11.5px] w-full tb:w-[220px] px-[102.5px] flex mx-auto items-center justify-center text-[#fff] font-semibold">Підписатись</button>
    </Form>
</Formik>
</div>
      </div>
    </Section>
    <div className="xs:hidden lg:block container bg-[#EAF2EB] w-full">
      <div className="flex items-center gap-[30px]">
     <img 
     srcSet={`${discount_1x} 445w, ${discount_2x} 890w`}
     sizes="(min-width: 1440px) 445px, (min-width: 1440px) 890px"
     src={discount_1x} alt="Discount" width='450' height='250' />

    <div className="flex flex-col gap-[30px]">
      <h3 className="text-[24px] font-bold tracking-[0.24px] font-secondery">Отримайте знижку 10% на першу покупку</h3>
      <p className="font-bold text-[16px] tracking-[0.64px]">за підписку на наші новини</p>
      <Formik
initialValues={initialValues}
onSubmit={onSubmit}
validationSchema={validationSchema}
>
    <Form className="flex items-center gap-[15px]">
      <div className="flex flex-col gap-[10px]">
        <Field name="email" type="text" placeholder="Введіть свій email" className='rounded-[5px] py-[13px] px-[20px] w-[389px] tracking-[0.32px] text-[16px] leading-[24px] outline-none text-[#484848]/[.50]'/>
        <ErrorMessage name="email" component='p' className="text-[#EF787A] tracking-[0.28px] font-semibold leading-[24px]"/>
        </div>
        <button type="submit" className="bg-[#7FAA84] rounded-[5px] py-[15px] px-[58.5px] self-baseline flex items-baseline justify-center text-[#fff] font-semibold">Відправити</button>
    </Form>
</Formik>
    </div>
     </div>
    </div>
    </>
  )
}

export default GetADiscount
