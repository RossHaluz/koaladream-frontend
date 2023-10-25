import { useDispatch } from "react-redux"
import { addItemToCart } from "redux/order/slice";
import { toast } from "react-toastify";

const ItemDetailsBtn = ({title, image, price, article, oldPrice, id, count}) => {
const dispatch = useDispatch();

const handleAddItem = () => {
  dispatch(addItemToCart({title, image, price, article, oldPrice, id, count}))
  toast.success('Item add to cart', {
    position: "top-right",
    autoClose: 5000})
}

  return <button type='button' onClick={handleAddItem} className="py-[10px] px-[45.5px] rounded-[5px] bg-[#7FAA84] text-[16px] text-[#fff] tracking-[0.32px] font-medium">
  Купити
</button>
}

export default ItemDetailsBtn
