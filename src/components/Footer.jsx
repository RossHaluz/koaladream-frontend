import { Link } from 'react-router-dom';
import Logo from './Logo';
import Section from './Section';
import icons from './img/icons/icons.svg';
import visa from './img/payment/visa.png';
import mastercard from './img/payment/mastercard.png';
import applepay from './img/payment/applepay.png';
import privateIcon from './img/payment/private.png';

const Footer = () => {
  return (
    <Section styles={'bg-[#EAF2EB]'}>
      <footer className="container">
        <div className='flex flex-col bg:flex-row'>
        <div className="flex flex-col tb:flex-row mb-[30px] tb:items-start tb:mr-[50px]">
          <div className="tb:mr-[50px] lg:mr-[70px]">
            <Logo />
            {/* Contacts  */}
            <div className="flex flex-col gap-[15px] mt-[10px] mb-[15px] tb:mt-[20px]">
              <h3 className="font-semibold tb:hidden">Контакти:</h3>

              <div className="flex flex-col gap-[15px] tb:flex tb:gap-[45px] tb:flex-col">
                <div>
                  <a href="tel:+380964009130" className="font-semibold bg:tracking-[0.32px] bg:text-[16px]">
                    +38 (096) 400 91 30
                  </a>
                </div>
                <div className="flex gap-[15px] flex-col tb:gap-[15px]">
                  <p className="text-[12px] bg:text-[14px] bg:tracking-[0.28px] w-[173px] bg:w-[201px] tracking-[0.24px]">
                    Адреса: м. Хмельницький, вул. Молодіжна 15/1
                  </p>
                  <p className="text-[12px] bg:text-[14px] bg:tracking-[0.28px] w-[116px] bg:w-[135px] tracking-[0.24px]">
                    пн-сб 10:00 - 18:00 нд - вихідний
                  </p>
                  <a
                    href="mailto:info@koaladream.com.ua"
                    className="text-[12px] tracking-[0.24px] bg:text-[14px] bg:tracking-[0.28px]"
                  >
                    info@koaladream.com.ua
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[15px] mr-auto items-start tb:flex-row tb:gap-[155px]">
            <div>
            <button type='button' className="font-semibold tb:mb-[20px] tracking-[0.28px]">
              Каталог товарів
            </button>
            <nav className='flex-col gap-[20px] xs:hidden tb:flex w-[187px]'>
              <Link to='/' className='tracking-[0.28px]'>Ковдри</Link>
              <Link to='/' className='tracking-[0.28px]'>Наматрацники</Link>
              <Link to='/' className='tracking-[0.28px]'>Піжами</Link>
              <Link to='/' className='tracking-[0.28px]'>Пледи</Link>
              <Link to='/' className='tracking-[0.28px]'>Подушки</Link>
              <Link to='/' className='tracking-[0.28px]'>Покривала</Link>
              <Link to='/' className='tracking-[0.28px]'>Постільна білизна</Link>
              <Link to='/' className='tracking-[0.28px]'>Простирадла на резинці</Link>
            </nav>
            </div>
            <div>
            <button type='button' className="font-semibold tb:mb-[20px] tracking-[0.28px]">
            Інформація
            </button>
            <nav className='flex-col gap-[20px] xs:hidden tb:flex w-[187px]'>
              <Link to='/' className='tracking-[0.28px]'>Каталог</Link>
              <Link to='/' className='tracking-[0.28px]'>Про нас</Link>
              <Link to='/' className='tracking-[0.28px]'>Відгуки</Link>
              <Link to='/' className='tracking-[0.28px]'>Новини та статті</Link>
              <Link to='/' className='tracking-[0.28px]'>Доставка та оплата</Link>
              <Link to='/' className='tracking-[0.28px]'>Обмін та повернення</Link>
              <Link to='/' className='tracking-[0.28px]'>Дропшипінг / гурт</Link>
              <Link to='/' className='tracking-[0.28px]'>Договір оферти</Link>
              <Link to='/' className='tracking-[0.28px]'>Контакти</Link>
            </nav>
            </div>
          </div>
        </div>

        {/* Social media  */}
        <div className="flex flex-col gap-[15px] bg:gap-[30px] mb-[15px] bg:ml-auto bg:w-[276px]">
          <h3 className="font-semibold tracking-[0.28px]">
            Слідкуйте за нами у соцмережах:
          </h3>
          <div className="flex gap-[30px] items-center">
            <svg className="w-[24px] h-[24px]">
              <use href={`${icons}#icon-instagram`}></use>
            </svg>
            <svg className="w-[24px] h-[24px]">
              <use href={`${icons}#icon-facebook`}></use>
            </svg>
            <svg className="w-[24px] h-[24px]">
              <use href={`${icons}#icon-telegram`}></use>
            </svg>
          </div>

          <div className="w-full h-[1px] bg-[#484848]/[.50] bg:hidden"></div>

          <div className="flex gap-[5px] items-center mx-auto bg:mt-[30px] bg:ml-0">
            <div className="py-[8px] px-[9px] w-[50px] h-[28px] bg-[#fff] flex justify-center items-center rounded-[5px]">
              <img src={visa} alt="Vasa" width="33" height="11" />
            </div>
            <div className="py-[8px] px-[9px] w-[50px] h-[28px] bg-[#fff] flex justify-center items-center rounded-[5px]">
              <img src={mastercard} alt="Mastercard" width="23" height="19" />
            </div>
            <div className="py-[8px] px-[9px] w-[50px] h-[28px] bg-[#fff] flex justify-center items-center rounded-[5px]">
              <img src={applepay} alt="ApplePay" width="32" height="13" />
            </div>
            <div className="py-[8px] px-[9px] w-[50px] h-[28px] bg-[#fff] flex justify-center items-center rounded-[5px]">
              <img src={privateIcon} alt="Private" width="13" height="13" />
            </div>
          </div>
        </div>
        </div>

        <div className="w-full h-[1px] bg-[#484848]/[.50] mb-[15px] tb:mb-[18px]"></div>

        <div className="flex flex-col gap-[15px]">
          <div className="flex gap-[10px] mx-auto">
            <svg className="w-[24px] h-[24px]">
              <use href={`${icons}#icon-copyright`}></use>
            </svg>
            <h3 className="tracking-[0.28px]">
              2022 KoalaDream права захищені
            </h3>
          </div>
          <h3 className="tracking-[0.28px] flex mx-auto">
          Розробка сайту - <a href="https://hiweber.com/" target='_blanck' className='underline'>Hiweber</a>
          </h3>
        </div>
      </footer>
    </Section>
  );
};

export default Footer;
