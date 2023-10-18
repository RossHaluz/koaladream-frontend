import { Field, Form, Formik } from 'formik';
import OrderFormTitle from './OrderFormTitle';
import { useState } from 'react';
import { BsCheckLg } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserContactDetails } from 'redux/auth/selectors';
import { createNewOrder } from 'redux/order/operetions';
import { useNavigate } from 'react-router-dom';
import { removeItemsFromCart, setDataFromOrder } from 'redux/order/slice';

const OrderForm = ({items}) => {
  const [isDepartment, setIsDepartment] = useState(true);
  const [isAddress, setIsAddress] = useState(false);
  const [checked, setChecked] = useState(false);
  const {firstName, lastName, phone, email} = useSelector(selectUserContactDetails);
const dispatch = useDispatch();
const navigate = useNavigate();

  const handleDepartment = () => {
    setIsDepartment(true);
    setIsAddress(false);
  };

  const handleAddress = () => {
    setIsAddress(true);
    setIsDepartment(false);
  };

  const initialValues = {
    lastName,
    firstName,
    phone,
    email,
    postalService: '',
    address: '',
    city: '',
    department: '',
    payment: '',
  };

  const onSubmit =  (value, { resetForm }) => {
  const dateAdded = new Date();
   dispatch(createNewOrder({...value, dateAdded, items}));
   dispatch(setDataFromOrder({...value, dateAdded, items}))
   dispatch(removeItemsFromCart())
   navigate('/success-order')
    resetForm();
  };

  return (
    <div className="flex flex-col gap-[30px] p-[30px]">
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className='flex flex-col gap-[30px]'>
          <div className="flex flex-col gap-[60px]">
            {/* Доставка */}
            <div className="flex flex-col gap-[30px]">
              <OrderFormTitle number={2} title={'Доставка'} />
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
            </div>

            {/* Оплата  */}
            <div className="flex flex-col gap-[30px]">
              <OrderFormTitle number={3} title={'Оплата'} />

              <div className="py-[30px] px-[15px] bg-[#EAF2EB] rounded-[5px] w-[415px] flex flex-col gap-[30px]">
                <div className='flex flex-col gap-[30px]'>
                  <h3 className="text-[16px] font-bold leading-[24px] tracking-[0.32px]">
                    Безпечна оплата картою на сайті
                  </h3>

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
              </div>

              <div className='flex flex-col gap-[15px]'>
                    <h3 className="text-[16px] font-bold leading-[24px] tracking-[0.32px]">
                      У мене є промокод:
                    </h3>

                    <div className='flex items-center gap-[30px]'>
                        <input type="text" className='py-[15px] px-[15px] bg-[#EAF2EB] rounded-[5px] w-[155px]'/>
                        <button type='button' className='py-[15px] px-[25px] bg-[#7FAA84] rounded-[5px] text-[#fff] text-[16px] font-semibold tracking-[0.32px]'>Застосувати</button>
                    </div>
                  </div>
            </div>

            {/* Коментар до замовлення */}
            <div className='flex flex-col gap-[30px]'>
            <div className='flex flex-col gap-[20px]'>
            <OrderFormTitle number={4} title={'Коментар до замовлення'} />
            <Field name='comment' placeholder='Введіть коментар' className='py-[8px] px-[15px] border border-s border-[#7FAA84] rounded-[5px] text-[16px] font-medium leading-[24px] tracking-[0.32px] text-[#484848]/[.50] bg-transparent w-[406px]'/>
            </div>

            <label className="text-[16px] leading-[24px]">
                      <Field type="checkbox" className="sr-only pl-[34px]" onClick={() => setChecked(prev => !prev)}/>
                      <span
                        className={`w-[24px] h-[24px] border border-solid border-[#7FAA84] rounded-[5px] absolute checked:border-[#000] checked::before:border-[#000] flex justify-center items-center`}
                      >
                        {checked && <BsCheckLg className="w-[15px] h-[15px] text-[#7FAA84]" />}
                      </span>
                      <h3 className="ml-[34px] text-[16px] font-medium leading-[24px] tracking-[0.32px] w-[376px]">
                      Не телефонувати мені для підтвердження 
замовлення та консультації
                      </h3>
                    </label>

                    <p className='text-[16px] leading-[24px] tracking-[0.32px] w-[380px]'>Підтверджуючи замовлення, ви приймаєте 
умови <span className='underline'>договору оферти.</span></p>

            </div>
            
          </div>

          <button type="submit" className='px-[25px] py-[15px] bg-[#7FAA84] rounded-[5px] text-[#fff] text-[16px] font-semibold tracking-[0.32px] w-[259px]'>Оформити замовлення</button>
        </Form>
      </Formik>
    </div>
  );
};

export default OrderForm;
