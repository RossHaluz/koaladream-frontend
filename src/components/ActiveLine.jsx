import { motion } from "framer-motion"

const ActiveLine = () => {
  return (
    <motion.div
    layoutId="activeItem"
    className="w-full h-[2px] absolute bottom-[-10px] bg-[#484848]"
    >
      
    </motion.div>
  )
}

export default ActiveLine
