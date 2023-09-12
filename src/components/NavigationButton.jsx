import icons from './img/icons/icons.svg';

const NavigationButton = ({navigationPrevRef, navigationNextRef, splicePosts, activeIndex, setActiveIndex}) => {;

  return  <div className='xs:hidden bg:flex gap-[15px] items-center'>
  <div ref={navigationPrevRef}>
 <svg className='w-[24px] h-[24px] cursor-pointer hover:stroke-[#78AB7E]' stroke='#484848' onClick={() => {
        if(activeIndex === 4){
            setActiveIndex(splicePosts?.length + 1)
        }else if(activeIndex === 3){
            setActiveIndex(splicePosts?.length + 1)
        }
        setActiveIndex(prev => prev - 1)
    }}>
    <use href={`${icons}#icon-arrow-left`}></use>
 </svg>
  </div>
  <span className='tracking-[0.32px] text-[16px] font-medium'>{activeIndex}/{splicePosts?.length}</span>
    <div ref={navigationNextRef} onClick={() => {
        if(activeIndex === splicePosts?.length){
            setActiveIndex(4 - 1)
        }else if(activeIndex === 3){
            setActiveIndex(3 - 1)
        }
        setActiveIndex(prev => prev + 1)
    }}>
    <svg className='w-[24px] h-[24px] cursor-pointer hover:stroke-[#78AB7E]' stroke='#484848'>
    <use href={`${icons}#icon-arrow-right`}></use>
 </svg>
    </div>
    </div>
}

export default NavigationButton
