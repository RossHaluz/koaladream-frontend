import { useDispatch, useSelector } from "react-redux";
import ReviewStars from "./ReviewStars";
import ReviewsAuthore from "./ReviewsAuthore";
import ReviewsText from "./ReviewsText";
import { reviewsUser } from "redux/reviews/operetions";
import { useEffect } from "react";
import { selectReviews } from "redux/reviews/selectors";

const Reviews = () => {
  const dispatch = useDispatch();
  const reviews = useSelector(selectReviews);

  useEffect(() => {
    dispatch(reviewsUser());
  }, [dispatch])

  return <>
  {reviews?.length > 0 ?  <div className="flex flex-col gap-[15px]">
  {reviews && reviews?.length > 0 && reviews?.map((item) => {
    if(!item){
      return null
    }
   const {name, rating, review, images, dateAdded} = item;
    return  <div className="border border-solid border-[#7FAA84] p-[15px] flex flex-col gap-[15px] rounded-[5px]">
    <ReviewStars rating={rating}/>
    <ReviewsText review={review}/>
    <ReviewsAuthore name={name} dateAdded={dateAdded} images={images}/>
  </div>
  })}
  </div> :  <div className="p-[15px] bg-[#EAF2EB] rounded-[5px]">
    <h3 className="font-bold w-[303px]">Ви ще не залишали відгуків на нашому
сайті</h3>
  </div>}
  </>
}

export default Reviews
