import { motion } from "framer-motion";
import ActiveLine from "./ActiveLine";

const ItemDetailsDescItem = ({isSelected, handleClick, item}) => {
  return (
    <motion.li
    onClick={handleClick}
    className="text-[16px] font-medium tracking-[0.32px] leading-[24px] relative cursor-pointer"
    initial={{fontWeight: 500}}
    animate={{fontWeight: isSelected ? 700 : 500}}
    >
        {isSelected && <ActiveLine/>}
      {item}
    </motion.li>
  )
}

export default ItemDetailsDescItem
