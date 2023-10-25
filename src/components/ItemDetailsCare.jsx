import React from 'react'

const ItemDetailsCare = ({care}) => {
  return <>{care && <p className='tb:text-[16px] tracking-[0.32px] leading-[24px]'>{care}</p>}</>
}

export default ItemDetailsCare
