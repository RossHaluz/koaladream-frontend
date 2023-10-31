import ReactStars from "react-rating-stars-component";

const ReviewStars = ({rating}) => {

  return <ReactStars
  count={5}
  value={rating}
  size={24}
  edit={false}
  activeColor="#7FAA84"
/>
}

export default ReviewStars
