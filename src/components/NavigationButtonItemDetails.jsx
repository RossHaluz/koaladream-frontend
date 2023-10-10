import icons from './img/icons/icons.svg';

const NavigationButtonItemDetails = ({ navigationNext }) => {
    return (
      <div ref={navigationNext}>
        <svg className='w-[20px] h-[20px]' fill='none' stroke='#7FAA84'>
          <use href={`${icons}#arrow-down`}></use>
        </svg>
      </div>
    )
  }


export default NavigationButtonItemDetails
