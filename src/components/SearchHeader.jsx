import icons from './img/icons/icons.svg';

const SearchHeader = () => {
  return <svg className='w-[24px] h-[24px]'> 
    <use href={`${icons}#icon-search`}></use>
  </svg>
}

export default SearchHeader
