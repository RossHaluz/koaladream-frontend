import { useEffect } from "react";
import Section from "./Section";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "redux/categories/operetions";
import { selectCategiries } from "redux/categories/selectors";
import { CategoryItem } from "./CategoriesOnHome.styled";
import SwiperCategories from "./SwiperCategories";
import { Link, NavLink } from "react-router-dom";

const CategoriesOnHome = () => {
    const dispatch = useDispatch();
    const categories = useSelector(selectCategiries);
 
    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

  return <Section title='Популярні категорії 
  товарів'>
    <ul className="xs:hidden justify-center container lg:grid lg:grid-rows-2 lg:grid-cols-3 lg:gap-[30px]">
        {categories?.map(({_id: id, img, title}) => {
            return <Link to={`/${title}`} key={id} className='relative rounded-[5px] cursor-pointer w-full hover:scale-105 transition h-[255px] lg:first-of-type:w-full lg:first-of-type:col-span-2 lg:last-of-type:w-full lg:last-of-type:col-span-2'>
            <CategoryItem className='w-full  h-[255px]' img={img} >
            <h3 className="absolute bottom-[15px] left-[15px] w-[198px] text-[16px] tracking-[0.32px] tb:[24px] font-semibold tb:tracking-[0.48px]">{title}</h3>
        </CategoryItem>
            </Link>
        })}
    </ul>

<SwiperCategories categories={categories}/>
    <NavLink to='/' className='py-[15px] px-[25px] bg-[#7FAA84] rounded-[5px] text-[14px] text-[#fff] font-semibold flex mx-auto mt-[30px] w-[247px] justify-center items-center'>
    Переглянути всі категорії
    </NavLink>
    </Section>
}

export default CategoriesOnHome
