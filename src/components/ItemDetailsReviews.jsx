import { useDispatch, useSelector } from 'react-redux';
import ItemDetailsReviewsForm from './ItemDetailsReviewsForm';
import icons from './img/icons/icons.svg';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAllReviewsItem } from 'redux/reviews/operetions';
import { selectIsLoading, selectReviewsItem } from 'redux/reviews/selectors';
import ReviewStars from './ReviewStars';
import {Link} from 'react-scroll';

const ItemDetailsReviews = () => {
  const { itemId } = useParams();
  const dispatch = useDispatch();
  const reviews = useSelector(selectReviewsItem);
  const isLoading = useSelector(selectIsLoading);
  const [countReview, setCountReview] = useState(0);

  useEffect(() => {
    if (reviews && reviews.length > 0) {
      const totalRating = reviews?.reduce(
        (total, item) => total + item?.rating,
        0
      );
      setCountReview(totalRating / reviews.length);
    }
  }, [reviews]);

  useEffect(() => {
    dispatch(getAllReviewsItem(itemId));
  }, [dispatch, itemId]);

  return (
    <>
      {reviews?.length > 0 && !isLoading ? (
        <div className="flex flex-col gap-[30px]">
          {' '}
          <div className="p-[15px] tb:p-[30px] bg-[#EAF2EB] rounded-[5px] tb:flex tb:items-center tb:justify-center w-full">
            <div className="flex flex-col gap-[15px] tb:flex-row  tb:items-center tb:gap-[30px]">
              {countReview && <ReviewStars rating={countReview} />}
              <div className="flex items-center gap-[15px]">
                <span className="leading-[21px]">Оцінка {countReview}/5</span>
                <div className="h-[30px] w-[1px] bg-[#484848]"></div>
                <p className="leading-[21px]">
                  На основі {reviews.length} відгуку
                </p>
              </div>
              <Link
                to="form"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="py-[15px] px-[25px] w-[203px] rounded-[5px] bg-[#7FAA84] text-[#fff] tracking-[0.32px] text-[16px] font-semibold"
              >
                Залишити відгук
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-[15px]">
            {reviews &&
              reviews.length > 0 &&
              !isLoading &&
              reviews?.map(item => {
                if(item){
                  const {
                    _id: id,
                    review,
                    rating,
                    name,
                    images,
                    dateAdded,
                  } = item;
                  const day = new Date(dateAdded).getDate();
                  const month = new Date(dateAdded).getMonth();
                  const year = new Date(dateAdded).getFullYear();
                  return (
                    <div
                      key={id}
                      className="p-[15px] w-full rounded-[5px] border border-solid border-[#7FAA84] flex flex-col gap-[15px] tb:gap-[30px]"
                    >
                      <ReviewStars rating={rating} />
                      <div className="flex flex-col gap-[10px]">
                        <p className="text-[16px] leading-[24px] tracking-[0.32px]">
                          {review}
                        </p>
                        <div className="w-full h-[1px] bg-[#7FAA8480]"></div>
                        <span className="text-[16px] leading-[24px] tracking-[0.32px]">
                          {name}
                        </span>
                        <span className="text-[16px] leading-[24px] tracking-[0.32px]">
                          Опубліковано: {day}.{month < 10 ? '0' + month : month}
                          .{year}
                        </span>
                        <div className="flex items-center gap-[30px]">
                          {images?.length > 0 &&
                            images?.map(item => {
                              return (
                                <img
                                  src={item}
                                  alt="Review"
                                  className="w-[65px] h-[65px] rounded-[5px]"
                                />
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  );
                }
                return null
              })}
          </div>
          <div className="flex flex-col gap-[30px] mt-[30px]" id="form">
            <div className="w-full h-[1px] bg-[#7FAA8480]"></div>
            <div className="flex items-center justify-between">
              <svg className="hidden tb:inline-block w-[60px] h-[60px]">
                <use href={`${icons}#quotes-1`}></use>
              </svg>

              <svg className="hidden tb:inline-block w-[60px] h-[60px]">
                <use href={`${icons}#quotes-2`}></use>
              </svg>
            </div>
          </div>
          <ItemDetailsReviewsForm />
        </div>
      ) : (
        <>
          {' '}
          <>
            {!isLoading && (
              <div>
                <div className="flex items-end justify-between mb-[30px] tb:mb-[42px]">
                  <svg className="hidden tb:inline-block w-[60px] h-[60px]">
                    <use href={`${icons}#quotes-1`}></use>
                  </svg>
                  <p className="tb:text-[16px] leading-[24px] tracking-[0.32px] w-[368px] text-center">
                    На жаль, у цього товару ще немає відгуків. Станьте першим,
                    хто залишив відгук!
                  </p>
                  <svg className="hidden tb:inline-block w-[60px] h-[60px]">
                    <use href={`${icons}#quotes-2`}></use>
                  </svg>
                </div>
              </div>
            )}
          </>
          <ItemDetailsReviewsForm />
        </>
      )}
    </>
  );
};

export default ItemDetailsReviews;
