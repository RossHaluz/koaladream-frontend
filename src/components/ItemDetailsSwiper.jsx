import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import NavigationButtonItemDetails from './NavigationButtonItemDetails';

const ItemDetailsSwiper = ({images}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const navigationNext = useRef(null);
    const [thumbsSwiper, setThumbsSwiper] = useState(images[0]);

  return <div className='flex items-start gap-[30px]'>
  <div className='flex flex-col items-center gap-[15px]'> 
  <Swiper
        modules={[Thumbs, Navigation, Pagination]}
        onSwiper={setThumbsSwiper}
        watchSlidesProgress
        direction="vertical"
        slidesPerView={3}
        navigation={{
          nextEl: navigationNext.current,
        }}
        // pagination={{ clickable: true }} // Додаємо пагінацію для вертикального Swiper
        spaceBetween={30}
        style={{ height: '260px', overflow: 'hidden' }}
        className="flex flex-col ml-0"
      >
        {images?.map((image, index) => (
          <SwiperSlide
            key={index}
            style={{ height: '64px' }}
            onClick={() => setActiveIndex(index)}
          >
            <img src={image} alt="" className='h-[64px] w-[64px] flex flex-col rounded-[5px]' />
          </SwiperSlide>
        ))}
      </Swiper>
      <NavigationButtonItemDetails navigationNext={navigationNext} />
  </div>

      {/* Swiper для горизонтальних зображень */}
      <Swiper
        modules={[Navigation, Pagination]}
        thumbs={{ swiper: thumbsSwiper }}
        slidesPerView={1}
        style={{ height: '445px', width: '445px', display: 'flex', alignItems: 'flex-start', marginLeft: 0 }}
      >
        {images?.filter((__, index) => index === activeIndex).map((image, index) => (
          <SwiperSlide key={index} style={{ height: '445px', width: '445px' }}>
            <img src={image} alt="" className='w-[445px] h-[445px] rounded-[5px]' />
          </SwiperSlide>
        ))}
      </Swiper>
</div>
}

export default ItemDetailsSwiper
