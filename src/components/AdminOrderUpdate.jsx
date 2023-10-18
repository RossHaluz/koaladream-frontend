import { Field, Form, Formik } from "formik";
import AdminOrderTitle from "./AdminOrderTitle";
import { useState } from "react";

const AdminOrderUpdate = ({order}) => {
    const [isDepartment, setIsDepartment] = useState(true);
    const [isAddress, setIsAddress] = useState(false);
    const {address, city, department, email, firstName, lastName, items, payment, phone, postalService} = order;

    const handleDepartment = () => {
        setIsDepartment(true);
        setIsAddress(false);
      };
    
      const handleAddress = () => {
        setIsAddress(true);
        setIsDepartment(false);
      };

    const initialValues = {
        address: address,
        city: city,
        department: department,
        email: email,
        firstName: firstName,
        lastName: lastName,
        items: items,
        payment: payment,
        phone: phone,
        postalService: postalService
    }

    const onSubmit = (values, {resetForm}) => {
        console.log(values);
    }

  return <div className="px-[15px] pt-[15px] pb-[30px] flex flex-col gap-[15px]">
  <h1 className="text-[24px] font-bold">Eddit order</h1>
  <Formik
  initialValues={initialValues}
  onSubmit={onSubmit}
  >
    <Form className="flex flex-col gap-[30px]">
       <div className="flex flex-col gap-[15px]">
        <AdminOrderTitle number={1} title={'Контактні дані'}/>
       <label className="flex flex-col gap-[15px]">
            <h3 className="text-[16px] tracking-[0.32px] leading-[24px] font-medium">First name </h3>
        <Field name='firstName' type='text' className='bg-transparent border border-solid border-[#7FAA84] rounded-[5px] px-[15px] py-[15px] text-[16px] text-[#484848]/[.50] tracking-[0.32px] leading-[24px] outline-none'/>
        </label>

        <label className="flex flex-col gap-[15px]">
            <h3 className="text-[16px] tracking-[0.32px] leading-[24px] font-medium">  Last name </h3>
        <Field name='lastName' type='text' className='bg-transparent border border-solid border-[#7FAA84] rounded-[5px] px-[15px] py-[15px] text-[16px] text-[#484848]/[.50] tracking-[0.32px] leading-[24px] outline-none'/>
        </label>

        <label className="flex flex-col gap-[15px]">
        <h3 className="text-[16px] tracking-[0.32px] leading-[24px] font-medium"> Phone</h3>
        <Field name='phone' type='tel' className='bg-transparent border border-solid border-[#7FAA84] rounded-[5px] px-[15px] py-[15px] text-[16px] text-[#484848]/[.50] tracking-[0.32px] leading-[24px] outline-none'/>
        </label>

        <label className="flex flex-col gap-[15px]">
        <h3 className="text-[16px] tracking-[0.32px] leading-[24px] font-medium">Email</h3>
        <Field name='email' type='email' className='bg-transparent border border-solid border-[#7FAA84] rounded-[5px] px-[15px] py-[15px] text-[16px] text-[#484848]/[.50] tracking-[0.32px] leading-[24px] outline-none'/>
        </label>
       </div>

       <div className="flex flex-col gap-[15px]">
       <AdminOrderTitle number={2} title={'Доставка'}/>
       <h3 className="text-[16px] font-medium">
                Оберіть поштовий сервіс
              </h3>
              <div className="flex flex-col gap-[13px]">
                <label className="flex items-center gap-[10px]">
                  <Field
                    name="postalService"
                    type="radio"
                    value='Нова пошта'
                    class="before:content[''] relative h-[24px] w-[24px] cursor-pointer p-[5px] appearance-none rounded-full border-[2px] border-[#7FAA84]  transition-all checked:before:absolute checked:before:top-[50%] checked:before:left-[50%] checked:before:bg-[#7FAA84] checked:before:w-[15px] checked:before:h-[15px] checked:before:rounded-full checked:before:translate-x-[-50%] checked:before:translate-y-[-50%]"
                  />
                  <h3>“Нова пошта”</h3>
                </label>

                <label className="flex items-center gap-[10px]">
                  <Field
                    name="postalService"
                    type="radio"
                    value='Justin'
                    class="before:content[''] relative h-[24px] w-[24px] cursor-pointer p-[5px] appearance-none rounded-full border-[2px] border-[#7FAA84]  transition-all checked:before:absolute checked:before:top-[50%] checked:before:left-[50%] checked:before:bg-[#7FAA84] checked:before:w-[15px] checked:before:h-[15px] checked:before:rounded-full checked:before:translate-x-[-50%] checked:before:translate-y-[-50%]"
                  />
                  <h3>“Justin”</h3>
                </label>

                <label className="flex items-center gap-[10px]">
                  <Field
                    name="postalService"
                    type="radio"
                    value='УкрПошта'
                    class="before:content[''] relative h-[24px] w-[24px] cursor-pointer p-[5px] appearance-none rounded-full border-[2px] border-[#7FAA84]  transition-all checked:before:absolute checked:before:top-[50%] checked:before:left-[50%] checked:before:bg-[#7FAA84] checked:before:w-[15px] checked:before:h-[15px] checked:before:rounded-full checked:before:translate-x-[-50%] checked:before:translate-y-[-50%]"
                  />
                  <h3>“УкрПошта”</h3>
                </label>
                </div>

                <div className="flex items-center gap-[30px]">
                  <button
                    type="button"
                    className={`${
                      isDepartment
                        ? 'text-[16px] text-[#7FAA84] font-bold leading-[24px] tracking-[0.32px] underline'
                        : 'text-[16px] font-medium leading-[24px] tracking-[0.32px]'
                    }`}
                    onClick={handleDepartment}
                  >
                    Доставка на відділення
                  </button>
                  <button
                    type="button"
                    className={`${
                      isAddress
                        ? 'text-[16px] text-[#7FAA84] font-bold leading-[24px] tracking-[0.32px] underline'
                        : 'text-[16px] font-medium leading-[24px] tracking-[0.32px]'
                    }`}
                    onClick={handleAddress}
                  >
                    Доставка за даресою
                  </button>
                </div>

                <div className="w-[406px] flex flex-col gap-[16px]">
                  <Field
                    as="select"
                    name="city"
                    label="Місто"
                    className="bg-transparent border border-s border-[#7FAA84] rounded-[5px] py-[8px] px-[15px] text-[16px] font-medium leading-[24px] tracking-[0.32px] outline-none text-[#484848]/[.50]"
                  >
                    <option>Місто</option>
                    <option value="Київ">Київ</option>
                    <option value="Львів">Львів</option>
                    <option value="Хмельницький">Хмельницький</option>
                    <option value="Вінниця">Вінниця</option>
                    <option value="Одеса">Одеса</option>
                  </Field>

                  {!isAddress ? (
                    <Field
                      as="select"
                      name="department"
                      label="Відділення “Нова Пошта”"
                      className="bg-transparent border border-s border-[#7FAA84] rounded-[5px] py-[8px] px-[15px] text-[16px] font-medium leading-[24px] tracking-[0.32px] outline-none text-[#484848]/[.50]"
                    >
                      <option value="Відділення №28">Відділення №28</option>
                      <option value="Відділення №1">Відділення №1</option>
                      <option value="Відділення №15">Відділення №15</option>
                      <option value="Відділення №9">Відділення №9</option>
                      <option value="Відділення №283">Відділення №283</option>
                    </Field>
                  ) : (
                    <Field
                      type="text"
                      name="address"
                      className="py-[8px] px-[15px] bg-transparent rounded-[5px] border border-s border-[#7FAA84] text-[16px] font-medium leading-[24px] tracking-[0.32px] text-[#484848]/[.50]"
                      placeholder="Введіть адресу"
                    />
                  )}
                </div>
       </div>

       <div className="flex flex-col gap-[15px]">
       <AdminOrderTitle number={3} title={'Оплата'}/>
       <div className="flex flex-col gap-[20px]">
                    <label className="text-[16px] leading-[24px] flex items-center gap-[11px]">
                    <Field type="radio" name='payment' value='Кредитна/розрахункова карта (Liqpay)' className="before:content[''] relative h-[24px] w-[24px] cursor-pointer p-[5px] appearance-none rounded-[5px] border-[2px] border-[#7FAA84]  transition-all checked:before:absolute checked:before:top-[50%] checked:before:left-[50%] checked:before:bg-[#7FAA84] checked:before:w-[15px] checked:before:h-[15px] checked:before:rounded-[5px] checked:before:translate-x-[-50%] checked:before:translate-y-[-50%]" />
                      <h3>
                        Кредитна/розрахункова карта (Liqpay)
                      </h3>
                    </label>

                    <label className="text-[16px] leading-[24px] flex items-center gap-[11px]">
                    <Field type="radio" name='payment' value='Кредитна/дебетова карта (Monobank Acquiring)' className="before:content[''] relative h-[24px] w-[24px] cursor-pointer p-[5px] appearance-none rounded-[5px] border-[2px] border-[#7FAA84]  transition-all checked:before:absolute checked:before:top-[50%] checked:before:left-[50%] checked:before:bg-[#7FAA84] checked:before:w-[15px] checked:before:h-[15px] checked:before:rounded-[5px] checked:before:translate-x-[-50%] checked:before:translate-y-[-50%]" />
                      <h3>
                      Кредитна/дебетова карта (Monobank Acquiring)
                      </h3>
                    </label>
                  </div>
       </div>

       <div className="flex flex-col gap-[15px]">
       <AdminOrderTitle number={4} title={'Коментар до замовлення'}/>
       <Field name='comment' placeholder='Введіть коментар' className='py-[15px] px-[15px] border border-s border-[#7FAA84] rounded-[5px] text-[16px] font-medium leading-[24px] tracking-[0.32px] text-[#484848]/[.50] bg-transparent w-[406px]'/>
       </div>

       <button type="submit" className='px-[25px] py-[15px] bg-[#7FAA84] rounded-[5px] text-[#fff] text-[16px] font-semibold tracking-[0.32px] w-[259px]'>Зберегти зміни</button>
    </Form>
  </Formik>
  </div>
}

export default AdminOrderUpdate
