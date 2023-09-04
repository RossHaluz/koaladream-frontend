import { NavLink } from "react-router-dom";
import { HeroContainer } from "./Hero.styled"
import hero_banner_desctop_1x from './img/hero/bg/desctop/hero-banner-desctop@1x.jpg';
import hero_banner_desctop_2x from './img/hero/bg/desctop/hero-banner-desctop@2x.jpg'
import hero_banner_mobile_1x from './img/hero/bg/mobile/hero-banner-mobile@1x.jpg';
import hero_banner_mobile_2x from './img/hero/bg/mobile/hero-banner-mobile@2x.jpg';

const Hero = () => {
  return  <HeroContainer bgDesctop1x={hero_banner_desctop_1x} bgDesctop2x={hero_banner_desctop_2x} bgMobile1x={hero_banner_mobile_1x} bgMobile2x={hero_banner_mobile_2x} className="bg-[linear-gradient(90deg,_rgba(255, 255, 255, 0.70)_0%,_rgba(255, 255, 255, 0.70)_46.62%,_rgba(255, 255, 255, 0.07)_100%)] flex flex-col xs:justify-center items-center">
    <div className='container'>
        <div className="flex flex-col gap-[28px]">
          <h1 className="xs:text-[20px] sm:text-[24px] text-[#484848] font-bold font-secondery w-[332px] tb:text-[48px] tb:w-[656px]">Нова колекція постільної 
білизни із вареної бавовни</h1>
<h3 className="text-[14px] text-[#484848] w-[235px] tb:text-[24px] tb:w-[610px] tracking-[0.48px]">Постільна білизна лише із 
натуральних тканин</h3>
        </div>
        <NavLink to='/' className='py-[11.5px] px-[20px] tb:py-[15px] tb:px-[25px] tb:text-[16px] tb:tracking-[0.32px] font-semibold bg-[#7FAA84] rounded-[5px] text-[#fff] inline-flex mt-[43px]'>
           Перейти в каталог
        </NavLink>
    </div>
  </HeroContainer>
}

export default Hero
