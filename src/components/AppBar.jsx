import Catalog from './Catalog';
import HeaderPhone from './HeaderPhone';
import Logo from './Logo';
import MobileCatalog from './MobileCatalog';
import MobileMenu from './MobileMenu';
import Navigation from './Navigation';
import SearchHeader from './SearchHeader';
import UserNav from './UserNav';

const AppBar = () => {
  return (
    <header className="xs:bg-[#EAF2EB] lg:bg-[#F5FAF6]">
      <div className="flex items-center justify-between container">
        <Logo />
        <div className="flex item-center gap-[70px]">
          <HeaderPhone />
          <UserNav />
        </div>
      </div>
      <div className="xs:bg-[#F5FAF6]">
        <div className="container flex items-center justify-between">
          <MobileCatalog />
          <MobileMenu />
        </div>

        <div className="xs:hidden lg:flex">
          <Catalog />
          <div className="flex items-center justify-between container pl-0">
            <Navigation />
            <SearchHeader />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppBar;
