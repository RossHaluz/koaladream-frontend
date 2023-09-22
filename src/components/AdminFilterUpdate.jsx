import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
import { BsPlusLg } from 'react-icons/bs';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateFilter } from 'redux/filtersAdmin/operetions';

const validationSchema = Yup.object({
  name: Yup.string('Type a name option').required('Name option is required'),
});

const AdminFilterUpdate = ({filter}) => {
    const { name, filterValue, _id: filterId } = filter;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const initialValues = {
        name: name,
        filterValue: filterValue,
      };
    
      const onSubmit = (value, { resetForm }) => {
        dispatch(updateFilter({ value, filterId }));
        navigate('/admin/filter');
        resetForm();
      };
  
  return  <div className="p-[15px] flex flex-col gap-[15px]">
  <h1 className="text-[24px] font-bold">Eddit filter</h1>
  {filter && (
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
                  Name filter<span className="text-red-500">*</span>
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
                name="filterValue"
                render={arrayHelpers => (
                  <>
                    <div className="flex items-center gap-[15px]">
                      <h2 className="text-[24px] font-bold">
                        Eddit filter values
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
                      {values.filterValue.map((filter, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-[15px]"
                        >
                          <label className="flex items-center gap-[15px] text-[18px] font-medium">
                            Filter value
                            <Field
                              placeholder="Filter value"
                              name={`filterValue[${index}].name`}
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
                Update filter
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  )}
</div>
}

export default AdminFilterUpdate
