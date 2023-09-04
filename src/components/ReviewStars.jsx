import ReactStars from "react-rating-stars-component";

const ReviewStars = () => {

  return <ReactStars
  count={5}
  value={4}
  size={24}
//   emptyIcon={<BsStar className="text-[#7FAA84]"/>}
//   filledIcon={<BsStar className="text-[#7FAA84]"/>}
  edit={false}
  activeColor="#7FAA84"
/>
}

export default ReviewStars
