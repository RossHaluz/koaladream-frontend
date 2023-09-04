import logo_mobile_1x from './img/logo/mobile/logo-mb@1x.png';
import logo_mobile_2x from './img/logo/mobile/logo-mb@2x.png';
import logo_desctop_1x from './img/logo/desctop/logo-desctop@1x.png';
import logo_desctop_2x from './img/logo/desctop/logo-desctop@2x.png';
import { Link } from 'react-router-dom';


const Logo = () => {
  return  <Link to='/'><img
  srcSet={`${logo_mobile_1x} 159w, ${logo_mobile_2x} 318w, ${logo_desctop_1x} 255w, ${logo_desctop_2x} 510w`}
  sizes="(max-width: 1440px) 159px, (max-width: 1440px) 318px, (min-width: 1440px) 255px, (min-width: 1440px) 510px, 100vw"
  src={logo_mobile_1x}
  alt="Logo"
/></Link>
}

export default Logo
