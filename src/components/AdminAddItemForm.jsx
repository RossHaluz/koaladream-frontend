import { Formik, Form, Field } from "formik";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCategories } from "redux/categories/operetions";
import { selectCategiries } from "redux/categories/selectors";
import { getFilters } from "redux/filtersAdmin/operetions";
import { selectFilters } from "redux/filtersAdmin/selectors";
import { addItem } from "redux/items/operetions";
import { getOptions } from "redux/options/operetions";
import { selectOptions } from "redux/options/selectors";

const AdminAddItemForm = () => {
   const dispatch = useDispatch();
   const categories = useSelector(selectCategiries);
   const options = useSelector(selectOptions);
   const filters = useSelector(selectFilters);
   const [selectedOptions, setSelectedOptions] = useState([]);
   const [selectedOptionValues, setSelectedOptionValues] = useState([]);
   const [selected, setSelected] = useState(null);
   const [chooseFilters, setChooseFilters] = useState([]);
   const [chooseFilterOptions, setChooseFilterOptions] = useState([]);
   const [selectedFilters, setSelectedFilters] = useState(null);
   const [selectFile, setSelectFile] = useState(null);
   const fileRef = useRef();
   const navigate = useNavigate();

   useEffect(() => {
      const setOptionValues = () => {
        const selectedOptionsArray = selectedOptions.map((name) => ({ name }));
        const selectedOptionValuesArray = selectedOptionValues.map((name) => ({ name }));
        const selectedCombined = selectedOptionsArray.map((option) => ({
          ...option,
          options: selectedOptionValuesArray.map((value) => value.name),
        }));
        setSelected(selectedCombined);
      };
      setOptionValues();
    }, [selectedOptionValues, selectedOptions]);


    useEffect(() => {
      const setFilterValues = () => {
         const selectedFiltersArray = chooseFilters.map((name) => ({name}));
         const selectedFilterOptionsArray = chooseFilterOptions.map((name) => ({name}));
         const selectedCombined = selectedFiltersArray.map((option) => ({
            ...option,
            options: selectedFilterOptionsArray.map((value) => value.name)
         }));
         setSelectedFilters(selectedCombined)
      }
      setFilterValues()
    }, [chooseFilters, chooseFilterOptions])
    


   const handleChangeOption = e => {
      const {value, checked} = e.target;
  
      if (checked) {
         setSelectedOptions(prev => [...prev, value]);
       } else {
         setSelectedOptions(selectedOptions.filter((item) => item !== value));
       }
   }

   const handleChangeOptionValues = e => {
      const {value, checked} = e.target;

      if(checked){
         setSelectedOptionValues(prev => [...prev, value])
      } else {
         setSelectedOptionValues(selectedOptionValues.filter((item) => item !== value));
       }
   }

   const handleChangeFilter = e => {
      const {value, checked} = e.target;

      if(checked){
         setChooseFilters(prev => [...prev, value]);
      }else{
         setChooseFilters(chooseFilters.filter(item => item !== value))
      }
   }

   const handleChangeFilterOptions = e => {
      const {value, checked} = e.target;

      if(checked){
         setChooseFilterOptions(prev => [...prev, value])
      }else{
         setChooseFilterOptions(chooseFilterOptions.filter(item => item !== value));
      }
   }

   const handleSelectFile = (e) => {
      const file = e.target.files[0];
     setSelectFile(file);
   }


useEffect(() => {
   dispatch(getCategories())
   dispatch(getFilters());
   dispatch(getOptions())
}, [dispatch])

    const initialValues = {
        title: '',
        desc: '',
        price: '',
        oldPrice: '',
        status: '',
        article: '',
        categoryName: '',
        hitSales: false,
    }

    const onSubmit = (values, { resetForm }) => {
      const {title, desc, price, oldPrice, status, article, categoryName, hitSales} = values;
      console.log(categoryName);
      const data = new FormData();
      data.append('title', title);
      if(desc){
         data.append('desc', desc);
      }
      data.append('hitSales', hitSales);
      data.append('price', price);
      if(oldPrice){
         data.append('oldPrice', oldPrice);
      }
      data.append('status', status);
      data.append('article', article);
      data.append('categoryName', categoryName);
      if(selected){
         data.append('options', JSON.stringify(selected));
      }
      if(selectedFilters){
         data.append('filters', JSON.stringify(selectedFilters));
      }
      if(selectFile){
         data.append('imageItem', selectFile);
      }

     dispatch(addItem(data))
     navigate('/admin/items')
     resetForm()
    };

  return (
    <div className="flex items-start gap-[15px]">
    <Formik 
    initialValues={initialValues}
    onSubmit={onSubmit}
    >
     <Form className="w-full flex flex-col gap-[15px]">
    <div className="grid grid-cols-1 items-center gap-[15px]">
     <div className="flex flex-col gap-[15px]">
        <h3 className="text-[18px] font-medium">Title item <span className="text-red-500">*</span></h3>
        <Field name='title' type='text' placeholder='Title item' className='bg-transparent border border-solid border-[#7FAA84] rounded-[5px] px-[15px] py-[15px] text-[16px] text-[#484848]/[.50] tracking-[0.32px] leading-[24px] outline-none'/>
     </div>

     <div className="flex flex-col gap-[15px]">
        <h3 className="text-[18px] font-medium">Article item <span className="text-red-500">*</span></h3>
        <Field name='article' type='text' placeholder='Article item' className='bg-transparent border border-solid border-[#7FAA84] rounded-[5px] px-[15px] py-[15px] text-[16px] text-[#484848]/[.50] tracking-[0.32px] leading-[24px] outline-none'/>
     </div>
     </div>

     <div className="grid grid-cols-1 items-center gap-[15px]">
     <div className="flex flex-col gap-[15px]">
        <h3 className="text-[18px] font-medium">Price item <span className="text-red-500">*</span></h3>
        <Field name='price' type='text' placeholder='Price item' className='bg-transparent border border-solid border-[#7FAA84] rounded-[5px] px-[15px] py-[15px] text-[16px] text-[#484848]/[.50] tracking-[0.32px] leading-[24px] outline-none'/>
     </div>

     <div className="flex flex-col gap-[15px]">
        <h3 className="text-[18px] font-medium">Old price item</h3>
        <Field name='oldPrice' type='text' placeholder='Old price  item' className='bg-transparent border border-solid border-[#7FAA84] rounded-[5px] px-[15px] py-[15px] text-[16px] text-[#484848]/[.50] tracking-[0.32px] leading-[24px] outline-none'/>
     </div>
     </div>

     <div className="grid grid-cols-1 items-center gap-[15px]">
     <div className="flex flex-col gap-[15px]">
        <h3 className="text-[18px] font-medium">Choose category<span className="text-red-500">*</span></h3>
        <Field name='categoryName' as="select" className='bg-transparent border border-solid border-[#7FAA84] rounded-[5px] px-[15px] py-[15px] text-[18px] font-medium text-[#484848]/[.50] tracking-[0.32px] leading-[24px] outline-none'>
         <option value="">--Choose a categoty--</option>
         {categories?.map(({title, _id: id}) => {
            return <option key={id} value={title}>{title}</option>
         })}
        </Field>
     </div>

     <div className="flex flex-col gap-[15px]">
        <h3 className="text-[18px] font-medium">Choose status</h3>
        <Field name='status' as='select' className='bg-transparent border border-solid border-[#7FAA84] rounded-[5px] px-[15px] py-[15px] text-[16px] text-[#484848]/[.50] tracking-[0.32px] leading-[24px] outline-none'>
         <option value=''>--Choose a status--</option>
         <option value='В наявності'>В наявності</option>
         <option value='Закінчується'>Закінчується</option>
         <option value='Немає в наявності'>Немає в наявності</option>
        </Field>
     </div>
     </div>

     <div>
      <h3 className="text-[24px] font-medium">Choose options</h3>
      <ul className="flex flex-col gap-[15px]">
      {options?.map(({optionValues, name, _id: id}, idx) => {
         return <li key={id}>
            <label className="flex items-center gap-[10px]">
               <Field name={`${options}[${idx}].${name}`} checked={selectedOptions?.find(item => item.name === name)} type='checkbox' value={name} onChange={handleChangeOption} />
               <h3 className="text-[18px] font-semibold">{name}</h3>
            </label>
            {selectedOptions.find(item => item === name) && optionValues?.map(({name}, idx) => {
               return <label className="flex items-center gap-[10px]" key={idx}>
                  <Field name={`${options}[${idx}].${name}`} value={name} checked={selectedOptionValues.find(item => item === name)}  onChange={handleChangeOptionValues} type='checkbox'/>
                  <h3 className="text-[16px] font-medium">{name}</h3>
               </label>
            })}
         </li>
      })}
      </ul>
     </div>

     <div>
     <h3 className="text-[24px] font-medium">Choose filters</h3>
     <ul>
     {filters?.map(({name, filterValue, _id: id}, idx) => {
      return <li key={id}>
         <label className="flex items-center gap-[10px]">
            <Field name={`${filters}[${idx}].${name}`} value={name} type='checkbox' checked={chooseFilters.find(item => item === name)} onChange={handleChangeFilter}/>
            <h3 className="text-[18px] font-semibold">{name}</h3>
         </label>
         {chooseFilters.find(item => item === name) && filterValue?.map(({name}, idx) => {
            return <label className="flex items-center gap-[10px]">
               <Field name={`${filters}[${idx}].${name}`} value={name} type='checkbox' checked={chooseFilters.find(item => item === name)} onChange={handleChangeFilterOptions}/>
            <h3 className="text-[16px] font-medium">{name}</h3>
            </label>
         })}
      </li>
     })}
     </ul>
     </div>

     <div className="flex flex-col gap-[15px] items-start">
     <h3 className="text-[24px] font-medium">Hot sales</h3>
     <Field name='hitSales' type='checkbox' />
     </div>

     <div className="flex flex-col gap-[15px]">
        <h3 className="text-[18px] font-medium">Description item</h3>
        <Field name='desc' as="textarea" placeholder='Description item' className='bg-transparent resize-none border border-solid border-[#7FAA84] w-full h-[350px] rounded-[5px] px-[15px] py-[15px] text-[16px] text-[#484848]/[.50] tracking-[0.32px] leading-[24px] outline-none'/>
     </div>

     <button type="submit" className="py-[15px] px-[25px] bg-[#7FAA84] rounded-[5px] text-[#fff] text-[16px] font-medium w-[220px]">Create item</button>
     </Form>
    </Formik>

<div className="flex flex-col gap-[15px]">
    <div>
      <input type="file" className="hidden" ref={fileRef} onChange={handleSelectFile} />
      <button type="button" onClick={() => fileRef.current.click()} className="text-gray-300 bg-gray-600 text-sm flex justify-center items-center border-2 border-dotted cursor-pointer py-4 w-[350px]">
         Add file
      </button>
    </div>

{selectFile &&  <div className="w-[350px]">
   <img src={URL.createObjectURL(selectFile)} alt="Item img" />
</div>}
    </div>

    </div>
  )
}

export default AdminAddItemForm