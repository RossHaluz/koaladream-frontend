import { Link } from 'react-router-dom';
import icons from './img/icons/icons.svg';

const CategoryItemsItem = ({
  images,
  title,
  status,
  article,
  price,
  oldPrice,
  category,
  id,
}) => {
  return (
    <li className="w-full border border-solid border-[#484848]/[.20] rounded-[5px]">
      <Link to={`/${category}/${id}`}>
        <img src={images?.length > 0 && images[0]} alt={title} className="w-full h-[253px]" />
      </Link>
      <div className="px-[15px] pt-[20px] pb-[15px]">
        <div className="flex flex-col gap-[13px] mb-[25px]">
          <div className="flex flex-col gap-[15px]">
            <h2 className="text-[16px] font-bold tracking-[0.64px]">{title}</h2>
            <h3
              className={`text-[12px] ${
                status === 'В наявності' ? 'text-[#7FAA84]' : 'text-[#EF787A]'
              } font-medium mb-[13px] flex gap-[6px] items-center`}
            >
              <svg className="w-[20px] h-[20px]">
                <use href={`${icons}#icon-status-in-stock`}></use>
              </svg>
              {status}
            </h3>
          </div>
          <span className="text-[12px]">Артикул: {article}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[7px]">
            <h3 className="text-[16px] font-bold text-[#619967]">{price}₴</h3>
            <div className="w-[1px] h-[24px] bg-[#484848]/[.30]"></div>
            <h3 className="text-[#484848]/[.30] font-semibold line-through">
              {oldPrice}₴
            </h3>
          </div>

          <button type="button">
            <svg className="w-[24px] h-[24px]">
              <use href={`${icons}#icon-bag`}></use>
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
};

export default CategoryItemsItem;
