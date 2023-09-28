import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
import { BsPlusLg } from 'react-icons/bs';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { createOption } from 'redux/options/operetions';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
  name: Yup.string('Type a name option').required('Name option is required'),
});

const AdminAddOptionForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    name: '',
    optionValues: [],
  };

  const onSubmit = (value, { resetForm }) => {
    console.log(value);
    dispatch(createOption(value));
    navigate('/admin/options');
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ values }) => {
        return (
          <Form className="flex flex-col gap-[30px]">
            <label className="text-[18px] font-medium">
              <div className="flex items-center gap-[15px]">
                <h3>
                  Name option<span className="text-red-500">*</span>
                </h3>
                <Field
                  name="name"
                  type="text"
                  placeholder="Nema option"
                  className="bg-transparent border border-solid border-[#7FAA84] w-[380px] rounded-[5px] px-[15px] py-[15px] text-[16px] text-[#484848]/[.50] tracking-[0.32px] leading-[24px] outline-none"
                />
              </div>
              <ErrorMessage
                name="name"
                component="p"
                className="text-[#EF787A] text-[16px] font-semibold tracking-[0.32px] leading-[24px] mt-[15px]"
              />
            </label>
            <div className="flex flex-col gap-[20px]">
              <FieldArray
                name="optionValues"
                render={arrayHelpers => (
                  <>
                    <div className="flex items-center gap-[15px]">
                      <h2 className="text-[24px] font-bold">
                        Add option values
                      </h2>
                      <button
                        type="button"
                        onClick={() => arrayHelpers.push({ name: '' })}
                        className="p-[15px] bg-[#343a40] rounded-[5px] w-[34px] h-[34px] relative"
                      >
                        <BsPlusLg className="text-[#fff] text-[24px] absolute top-[5px] left-[5px]" />
                      </button>
                    </div>
                    <div className="flex flex-col gap-[15px]">
                      {values.optionValues.map((friend, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-[15px]"
                        >
                          <label className="flex items-center gap-[15px] text-[18px] font-medium">
                            Option value
                            <Field
                              placeholder="Option value"
                              name={`optionValues[${index}].name`}
                              className="bg-transparent border border-solid border-[#7FAA84] w-[380px] rounded-[5px] px-[15px] py-[15px] text-[16px] text-[#484848]/[.50] tracking-[0.32px] leading-[24px] outline-none"
                            />
                          </label>

                          <button
                            type="button"
                            onClick={() => arrayHelpers.remove(index)}
                          >
                            <RiDeleteBinLine className="w-[24px] h-[24px] text-red-500" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              />
              <button
                type="submit"
                className="py-[15px] px-[25px] bg-[#7FAA84] rounded-[5px] text-[#fff] text-[16px] font-medium w-[220px]"
              >
                Create option
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AdminAddOptionForm;
