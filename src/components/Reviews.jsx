import ReviewStars from "./ReviewStars";
import ReviewsAuthore from "./ReviewsAuthore";
import ReviewsText from "./ReviewsText";

const Reviews = () => {
  return <>
  <div className="p-[15px] bg-[#EAF2EB] rounded-[5px]">
    <h3 className="font-bold w-[303px]">Ви ще не залишали відгуків на нашому
сайті</h3>
  </div>
  <div className="border border-solid border-[#7FAA84] p-[15px] flex flex-col gap-[15px] rounded-[5px]">
    <ReviewStars/>
    <ReviewsText/>
    <ReviewsAuthore/>
  </div>
  </>
}

export default Reviews
