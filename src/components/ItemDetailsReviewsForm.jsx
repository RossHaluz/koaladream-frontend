import { Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import ReactStars from "react-rating-stars-component";
import { useRef, useState } from "react";
import icons from './img/icons/icons.svg';

const validationSchema = Yup.object({
    name: Yup.string('Type your name').required('Name is required'),
    email: Yup.string('Type your email').email('Type a valid email').required('Email is required'),
    
})


const ItemDetailsReviewsForm = () => {
    const selectRef = useRef();
    const [reting, setRating] = useState(null);
    const [selected, setSelected] = useState(null);

    console.log(reting);

    const initialValues = {
        name: '',
        email: '',
        response: ''
    }

    const handleSelectFile = e => {
        const files = e.target.files;
        const selectedImagesArray = Array.from(files);
        setSelected(selectedImagesArray);
    }

    const ratingChanged = (newRating) => {
        setRating(newRating);
      };

    const onSubmit = (value, {resetForm}) => {
   
        resetForm()
    }

  return <div>
    <h3 className="mb-[30px] text-[16px] font-medium tracking-[0.32px] leading-[24px]">Залиште свій відгук</h3>
    <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
    >
        <Form className="flex flex-col gap-[30px]">
            <div className="flex flex-col gap-[15px] mb-[30px]">
            <label className="flex flex-col gap-[10px] text-[16px] font-medium tracking-[0.32px] leading-[24px]">
            Ваше імʼя*
            <Field name='name' className='border border-solid border-[#7FAA84] rounded-[5px] p-[15px] h-[40px] bg-transparent' />
            </label>

            <label className="flex flex-col gap-[10px] text-[16px] font-medium tracking-[0.32px] leading-[24px]">
            Ваш Email*
            <Field name='email' className='border border-solid border-[#7FAA84] rounded-[5px] p-[15px] h-[40px] bg-transparent' />
            </label>

           <div className="flex items-center gap-[30px]">
            <h3>Ваша оцінка*</h3>
           <ReactStars 
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#7FAA84"
            />
           </div>
            </div>

            <div className="flex flex-col gap-[30px]">
                <label className="flex flex-col gap-[10px] text-[16px] font-medium tracking-[0.32px] leading-[24px]">
                Ваш відгук*
                <Field name='response' as='textarea' className='border border-solid border-[#7FAA84] rounded-[5px] p-[15px] h-[160px] resize-none bg-transparent' />
                </label>

                <div className="flex flex-col gap-[15px]">
                <input type="file" multiple className="hidden" ref={selectRef} onChange={handleSelectFile} />
                <button type="button" onClick={() => selectRef.current.click()} className="flex items-center gap-[10px] text-[#7FAA84]">
                    <svg className="w-[24px] h-[24px]">
                        <use href={`${icons}#select`}></use>
                    </svg>
                Прикріпити фото
                </button>
                <div className="flex items-center gap-[10px]">
                {selected && selected.map((image, index) => {
                    return <img className="w-[64px] h-[63px] rounded-[5px]" key={index} src={URL.createObjectURL(image)} alt="selected img" />
                })}
                </div>
                </div>
            </div>

            <button type="submit" className="py-[8px] px-[32.5px] rounded-[5px] bg-[#7FAA84] text-[#fff] text-[16px] tracking-[0.32px] leading-[24px] font-semibold flex items-center justify-center w-[155px]">Надіслати</button>
        </Form>
    </Formik>
  </div>
}

export default ItemDetailsReviewsForm
