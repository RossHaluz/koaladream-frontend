import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import { ItemSlide } from './SwiperCategories.styled';
import { Link } from 'react-router-dom';

const SwiperCategories = ({categories}) => {
  return <div className='relative w-full m-auto mt-5 lg:hidden'>
    <Swiper
     spaceBetween={10}
     slidesPerView={1.7}
     centeredSlides={true}
     roundLengths={true}
     loop={true}
    //  loopAdditionalSlides={30}
    >
        {categories?.map(({_id: id, title, img}) => {
            return  <SwiperSlide key={id}>
            {({ isActive })=> (
              <Link to={`${title}`}>
               <ItemSlide className={`flex rounded-[5px] px-[27px] py-[20px] transition ease-in-out delay-250 h-[255px] transform scale-[0.8] ${isActive && "transform scale-[1] h-[255px] drop-shadow-[1px_1px_5px_rgba(127,170,132,0.50)]"}`} img={img}>
     <h3 className='mt-auto text-[16px] text-[#484848] font-semibold tracking-[0.32px]'>{title}</h3>
     </ItemSlide>
              </Link>
        )}
            </SwiperSlide>
        })}
    </Swiper>
  </div>
}

export default SwiperCategories
