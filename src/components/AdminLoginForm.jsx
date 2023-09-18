import { Formik, Form, Field } from "formik";

const AdminLoginForm = () => {

const initialValues = {
    email: '',
    password: ''
}

const onSubmit = (value, {resetForm}) => {
    console.log(value);
    resetForm();
}

  return <div className="w-full min-h-screen h-full flex flex-col gap-[20px] justify-center items-center bg-[#e9ecef]">
    <h2 className="text-center text-[24px]"><span className="font-bold">KoalaDream</span>Admin</h2>
    <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    >
        <div className="px-[20px]">
        <Form className="flex flex-col p-[20px] w-[300px] tb:w-[350px] gap-[15px] bg-[#fff]" >
            <h3 className="text-center">Sign in to start your session</h3>
            <Field type="email" name='email' placeholder='Type your email' className="bg-[#e7f0fe] px-[15px] py-[13px] rounded-[5px] outline-none"/>
            <Field type="password" name='password' placeholder='Type your password' className="bg-[#e7f0fe] px-[15px] py-[13px] rounded-[5px] outline-non"/>

            <button type="submit" className="py-[8px] px-[46px] bg-[#7FAA84] rounded-[5px] text-[16px] font-semibold tracking-[0.32px] text-[#fff] flex mx-auto">Login</button>
        </Form>
        </div>
    </Formik>
  </div>
}

export default AdminLoginForm
