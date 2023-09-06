import { useEffect } from "react";
import Section from "./Section";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "redux/categories/operetions";
import { selectCategiries } from "redux/categories/selectors";
import { CategoryItem } from "./CategoriesOnHome.styled";



const CategoriesOnHome = () => {
    const dispatch = useDispatch();
    const categories = useSelector(selectCategiries);
 
    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

  return <Section title='Популярні категорії 
  товарів'>
    <ul className="justify-center container grid grid-cols-2 gap-[20px] lg:grid-rows-2 lg:grid-cols-3 lg:gap-[30px]">
        {categories?.map(({_id: id, img, title}) => {
            return <CategoryItem key={id} className='relative rounded-[5px] cursor-pointer w-full hover:scale-105 transition h-[255px] lg:first-of-type:w-full lg:first-of-type:col-span-2 lg:last-of-type:w-full lg:last-of-type:col-span-2' img={img} >
                {/* <img src={img} alt={title} className=""/> */}
                <h3 className="absolute bottom-[15px] left-[15px] w-[198px] text-[16px] tracking-[0.32px] tb:[24px] font-semibold tb:tracking-[0.48px]">{title}</h3>
            </CategoryItem>
        })}
    </ul>

    <button type="button">

    </button>
    </Section>
}

export default CategoriesOnHome
