import { useState } from "react"

const ItemDetailsDescription = ({desc}) => {
const [showAll, setShowAll] = useState(false);

const handleShowAll = () => {
  setShowAll(prev => !prev)
}

  return <div className='flex flex-col gap-[15px]'>
     <p className={`tb:text-[16px] ${showAll ? 'line-clamp-none' : 'line-clamp-[10]'}`}>
      {desc}
    </p>
    <button type='button' onClick={handleShowAll} className='font-bold underline text-[#7FAA84] flex items-start'>{showAll ? 'Приховати' : 'Читати повністю'}</button>
  </div>
}

export default ItemDetailsDescription
