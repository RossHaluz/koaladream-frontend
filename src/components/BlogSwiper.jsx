import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useEffect, useRef, useState } from 'react';
import NavigationButton from './NavigationButton';
import { NavLink } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';

const BlogSwiper = ({posts}) => {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    const splicePosts = posts?.slice(0, 10);
    const [slidesPerView, setSlidesPerView] = useState(4);
    const [activeIndex, setActiveIndex] = useState(4);

    useEffect(() => {
      // Функция для обновления slidesPerView на основе размера экрана
      const updateSlidesPerView = () => {
        const windowWidth = window.innerWidth;
        if (windowWidth >= 1280 && windowWidth < 1440) {
          setSlidesPerView(3); // Например, 3 слайда на планшете
          setActiveIndex(3)
          return
        } else if (windowWidth >= 320 && windowWidth <= 768) {
          setSlidesPerView('auto'); // Например, 2 слайда на мобильном устройстве
          return
        } else if (windowWidth >= 768 && windowWidth <= 1280) {
            setSlidesPerView(3); // Например, 2 слайда на мобильном устройстве
            setActiveIndex(3)
            return
          } else {
          setSlidesPerView(4); // По умолчанию 4 слайда на большом экране
          setActiveIndex(4)
        }
      };

        // Вызываем функцию при загрузке страницы и при изменении размера окна
    window.addEventListener('resize', updateSlidesPerView);
    updateSlidesPerView();

    // Отписываемся от события при размонтировании компонента
    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, []);

  return   <div className='container'>
    <div className='flex justify-between items-center'>
        <h2 className='text-[24px] w-[285px] ml-[0px] tb:w-full tb:text-[32px] font-bold tracking-[0.24px] font-secondery mb-[30px]'>Новини та статті</h2>
    <NavigationButton navigationPrevRef={navigationPrevRef} navigationNextRef={navigationNextRef} splicePosts={splicePosts} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
    </div>
    <div className='relative w-full m-auto'>
  <Swiper
  modules={[Navigation, Pagination]}
  roundLengths={true}
  slidesPerView={slidesPerView}
  loop={true}
  navigation = {{
    prevEl: navigationPrevRef.current,
    nextEl: navigationNextRef.current,
  }}
  breakpoints={{
    320: {
      spaceBetween: 10,
      centeredSlides: true,
    },
    1280: {
        spaceBetween: 20,
        centeredSlides: false
    },
    1440: {
        spaceBetween: 20,
        centeredSlides: false
    }
   }}
  >
      <ul>
    {splicePosts?.map(({title, img, desc, _id: id}) => {
      return <SwiperSlide key={id}>
         {({ isActive }) => (
          <li className={`min-h-[448px] rounded-[5px] flex flex-col mx-auto border border-solid border-[#484848]/[.20] transition ease-in-out delay-250 transform xs:scale-[0.8] bg:scale-[1] ${isActive && 'xs:transform xs:scale-[1] shadow-[-1px_-1px_5px_0_rgba(127,170,132,0.50),-1px_-1px_5px_0_rgba(127,170,132,0.50)]'}`}>
            <img src={img} alt={title} className={`w-full h-[255px]`}/>

            <div className='px-[15px] pb-[15px] pt-[20px] flex flex-col gap-[15px]'>
                <h3 className='font-bold text-[16px] tracking-[0.32px] w-full'>{title}</h3>
                <p className='text-[12px] w-full line-clamp-4'>{desc}</p>
                <NavLink to='/' className='text-[#78AB7E] text-[12px] font-bold underline'>Читати повністю</NavLink>
            </div>
          </li>
         )}
      </SwiperSlide>
    })}
    </ul>
  </Swiper>
  {/* <NavigationButtonMobile navigationPrevRef={navigationPrevRef} navigationNextRef={navigationNextRef} splicePosts={splicePosts} activeIndexMob={activeIndexMob} setActiveIndexMob={setActiveIndexMob}/> */}
  </div>
  </div>
}

export default BlogSwiper

