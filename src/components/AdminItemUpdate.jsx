import { Formik, Form, Field, FieldArray } from "formik";
import { useEffect, useRef, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCategories } from "redux/categories/operetions";
import { selectCategiries } from "redux/categories/selectors";
import { getFilters } from "redux/filtersAdmin/operetions";
import { selectFilters } from "redux/filtersAdmin/selectors";
import { updateItem } from "redux/items/operetions";
import { getOptions } from "redux/options/operetions";
import { selectOptions } from "redux/options/selectors";

const AdminItemUpdate = ({item}) => {

    const {title, desc, images, price, oldPrice, care, characteristics, status, categoryName, article, options, filters, hitSales, _id: itemId} = item;
    console.log(filters);

    const dispatch = useDispatch();
    const categories = useSelector(selectCategiries);
    const allOptions = useSelector(selectOptions);
    const allFilters = useSelector(selectFilters);
    const [selectedOptions, setSelectedOptions] = useState(JSON.parse(options));
    const [selectedOptionValues, setSelectedOptionValues] = useState(JSON.parse(options).flatMap(item => item.options))
    const [chooseFilters, setChooseFilters] = useState(JSON.parse(filters));
    const [chooseFilterOptions, setChooseFilterOptions] = useState(JSON.parse(filters).flatMap(item => item.options));
    const [currentImg] = useState(images.map(item => item));
    const [selectFile, setSelectFile] = useState(null);
    const fileRef = useRef();
    const navigate = useNavigate();

    console.log(chooseFilterOptions);

    const handleChangeOption = e => {
       const {value, checked, attributes} = e.target;
       const optionId = attributes.opt_val.value;

       if (checked) {
          setSelectedOptions(prev => [
            ...prev,
            {name: value, optionId: optionId, options: selectedOptions}
          ]);
        } else {
          setSelectedOptions(selectedOptions.filter(item => item.name !== value));
        }
    }
 
    const handleChangeOptionValues = e => {
       const {value, checked, attributes} = e.target;
       const optionId = attributes.opt_val.value;

       if(checked){
          setSelectedOptionValues(prev => [...prev, { name: value, price: null, optionId: optionId }])
          setSelectedOptions(prevOptions => {
            return prevOptions.map(item => {
               if(item.optionId === optionId){
                  return {
                     ...item, 
                     options: [
                        ...item.options,
                        { name: value, price: null, optionId: optionId }
                     ]
                  }
               }
               return item;
            })
          })
       } else {
         setSelectedOptionValues(prev => prev.filter(item => item.name !== value))
         setSelectedOptions(prev => {
            return prev.map(option => {
               if(option.optionId === optionId){
                  return {
                     ...option,
                     options: option.options.filter(item => item.name !== value)
                  }
               }
               return option;
            })
         })
        }
    }
 
    const handleChangeFilter = e => {
       const {value, checked, attributes} = e.target;
       const filterId = attributes.filter_val.value;
 
       if(checked){
          setChooseFilters(prev => [...prev, {name: value, filterId: filterId, options: chooseFilters}]);
       }else{
          setChooseFilters(chooseFilters.filter(item => item .name!== value))
       }
    }
 
    const handleChangeFilterOptions = e => {
       const {value, checked, attributes} = e.target;
       const filterId = attributes.filter_val.value;

       if(checked){
         setChooseFilterOptions(prev => [...prev, {name: value, filterId: filterId}]);
         setChooseFilters(prevFilters => {
            return prevFilters.map(option => {
               if(option.filterId === filterId){
                  return {
                     ...option,
                     options: [
                        ...option.options,
                        {name: value, filterId: filterId}
                     ]
                  }
               }
               return option
            })
         })
       }else{
         setChooseFilterOptions(prev => prev.filter(item => item.name !== value))
         setChooseFilters(prevFilters => {
            return prevFilters.map(item => {
               if(item.filterId === filterId){
                  return {
                     ...item,
                     options: item.options.filter(item => item.name !== value)
                  }
               }
               return item;
            })
         })
       }
    }

    const onChangeOptionPrice = (e, nameOption) => {
      const {value} = e.target;
      const options = selectedOptions.flatMap(item => item.options);
      const findOption = options.find(item => item.name === nameOption.name);
      findOption.price = Number(value)
    }

    const handleSelectFile = (e) => {
       const files = e.target.files;
       const selectedImagesArray = Array.from(files);
      setSelectFile(selectedImagesArray);
    }
 
 
 useEffect(() => {
    dispatch(getCategories())
    dispatch(getFilters());
    dispatch(getOptions())
 }, [dispatch])
 
     const initialValues = {
         title: title,
         desc: desc,
         price: price,
         oldPrice: oldPrice,
         status: status,
         article: article,
         categoryName: categoryName,
         hitSales: hitSales,
         characteristics: characteristics.length > 0 ? JSON.parse(characteristics) : [],
         care: care || ''
     }
 
     const onSubmit = (values, { resetForm }) => {
       const {title, desc, price, oldPrice, status, article, characteristics, categoryName, hitSales} = values;
       const data = new FormData();
       data.append('title', title);
         data.append('desc', desc);
       data.append('hitSales', hitSales);
       data.append('price', price);
          data.append('oldPrice', oldPrice);
    
       data.append('status', status);
       data.append('article', article);
       data.append('categoryName', categoryName);
       if(selectedOptions){
          data.append('options', JSON.stringify(selectedOptions));
       }
       if (characteristics) {
         data.append('characteristics', JSON.stringify(characteristics));
       }
       if(chooseFilters){
          data.append('filters', JSON.stringify(chooseFilters));
       }
       data.append('care', care);

       if(selectFile){
         for (let i = 0; i < selectFile.length; i++) {
          data.append('updateImage', selectFile[i]);
         }
       }else{
         currentImg.map(item => {
           return data.append('`updateImage`', item)
         })

       }
    
      
      dispatch(updateItem({data, itemId}))
      navigate('/admin/items')
      resetForm()
     };
 
   return (
    <div className="p-[15px] flex  gap-[15px]">
        <div className="w-full">
    <h1 className="text-[24px] font-bold">Eddit item</h1>
      <Formik 
     initialValues={initialValues}
     onSubmit={onSubmit}
     >
      {({values}) => {
      return (
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
       {allOptions?.map(({optionValues, name, _id: id}, idx) => {
          return <li key={id}>
             <label className="flex items-center gap-[10px]">
                <Field name={`${allOptions}[${idx}].${name}`} opt_val={id} checked={selectedOptions?.find(item => item.name === name)} type='checkbox' value={name} onChange={handleChangeOption} />
                <h3 className="text-[18px] font-semibold">{name}</h3>
             </label>
             {selectedOptions.find(item => item.name === name) && optionValues?.map(({name, price}, idx) => {
                return <><label className="flex items-center gap-[10px]" key={idx}>
                <Field name={`${allOptions}[${idx}].${name}`} opt_val={id} value={name} checked={selectedOptionValues.find(item => item.name === name)} onChange={handleChangeOptionValues} type='checkbox'/>
                <h3 className="text-[16px] font-medium">{name}</h3>
             </label>
               {selectedOptionValues?.find(item => item.name === name) && (
                  <input
                    type="text"
                    value={selectedOptions.map(item => item.options.find(item => item.name === name)).flatMap(item => item?.price)[0] || ''}
                    placeholder="Type price for option"
                    onChange={e => {
                      const nameOption =
                        selectedOptionValues?.find(
                          item => item.name === name
                        );
                      onChangeOptionPrice(e, nameOption);
                    }}
                  />
                )}</>
             })}
          </li>
       })}
       </ul>
      </div>
 
      <div>
      <h3 className="text-[24px] font-medium">Choose filters</h3>
      <ul>
      {allFilters?.map(({name, filterValue, _id: id}, idx) => {
       return <li key={id}>
          <label className="flex items-center gap-[10px]">
             <Field name={`${allFilters}[${idx}].${name}`} filter_val={id} value={name} type='checkbox' checked={chooseFilters.find(item => item.name === name)} onChange={handleChangeFilter}/>
             <h3 className="text-[18px] font-semibold">{name}</h3>
          </label>
          {chooseFilters.find(item => item.name === name) && filterValue?.map(({name}, idx) => {
             return <label className="flex items-center gap-[10px]">
                <Field name={`${allFilters}[${idx}].${name}`} filter_val={id} checked={chooseFilterOptions.find(item => item.name === name)} value={name} type='checkbox'  onChange={handleChangeFilterOptions}/>
             <h3 className="text-[16px] font-medium">{name}</h3>
             </label>
          })}
       </li>
      })}
      </ul>
      </div>

      <div>
                <FieldArray
                  name="characteristics"
                  render={arrayHelpers => (
                    <div className="flex flex-col gap-[15px]">
                      <div className="flex items-center gap-[15px]">
                        <h2 className="text-[24px] font-bold">
                          Add characteristics
                        </h2>
                        <button
                          type="button"
                          onClick={() =>
                            arrayHelpers.push({ name: '', option: '' })
                          }
                          className="p-[15px] bg-[#343a40] rounded-[5px] w-[34px] h-[34px] relative"
                        >
                          <BsPlusLg className="text-[#fff] text-[24px] absolute top-[5px] left-[5px]" />
                        </button>
                      </div>
                      <div className="flex flex-col gap-[15px]">
                        {values.characteristics &&
                          values.characteristics.length > 0 &&
                          values.characteristics?.map((item, index) => {
                            return (
                              <>
                                <div className="flex items-center gap-[10px]">
                                  <label className="flex flex-col gap-[10px]">
                                    Name
                                    <Field
                                      name={`characteristics[${index}].name`}
                                    />
                                  </label>

                                  <label className="flex flex-col gap-[10px]">
                                    Option
                                    <Field
                                      name={`characteristics[${index}].option`}
                                    />
                                  </label>

                                  <button
                                    type="button"
                                    onClick={() => arrayHelpers.remove(index)}
                                  >
                                    <RiDeleteBinLine className="w-[24px] h-[24px] text-red-500" />
                                  </button>
                                </div>
                              </>
                            );
                          })}
                      </div>
                    </div>
                  )}
                />
              </div>

              <div>
                <h3 className="text-[18px] font-medium">Care for item</h3>
                <Field
                  name="care"
                  as="textarea"
                  placeholder="Care for item"
                  className="bg-transparent resize-none border border-solid border-[#7FAA84] w-full h-[350px] rounded-[5px] px-[15px] py-[15px] text-[16px] text-[#484848]/[.50] tracking-[0.32px] leading-[24px] outline-none"
                />
              </div>
 
      <div className="flex flex-col gap-[15px] items-start">
      <h3 className="text-[24px] font-medium">Hot sales</h3>
      <Field name='hitSales' type='checkbox' />
      </div>
 
      <div className="flex flex-col gap-[15px]">
         <h3 className="text-[18px] font-medium">Description item</h3>
         <Field name='desc' as="textarea" placeholder='Description item' className='bg-transparent resize-none border border-solid border-[#7FAA84] w-full h-[350px] rounded-[5px] px-[15px] py-[15px] text-[16px] text-[#484848]/[.50] tracking-[0.32px] leading-[24px] outline-none'/>
      </div>
 
      <button type="submit" className="py-[15px] px-[25px] bg-[#7FAA84] rounded-[5px] text-[#fff] text-[16px] font-medium w-[220px]">Update item</button>
      </Form>
      )
       }}
     </Formik>
     </div>
 <div className="flex flex-col gap-[15px]">
     <div>
       <input type="file" className="hidden" multiple ref={fileRef} onChange={handleSelectFile} />
       <button type="button" onClick={() => fileRef.current.click()} className="text-gray-300 bg-gray-600 text-sm flex justify-center items-center border-2 border-dotted cursor-pointer py-4 w-[350px]">
          Add file
       </button>
     </div>
 
 {selectFile ?  <ul className="flex flex-col gap-[10px]">
            {selectFile.map((image, index) => (
              <li key={index}>
              <img
                src={URL.createObjectURL(image)}
                alt={image.name}
                className="w-[350px] h-[150px]"
              />
            </li>
            ))}
          </ul> : <>{currentImg?.map(item => <div key={item} className="w-[350px]">
    <img src={item} alt="Item img" />
 </div>)}</>}
     </div>
 
     </div>
   )
}

export default AdminItemUpdate
