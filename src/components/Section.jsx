import React from 'react'

const Section = ({title, children}) => {
  return <div className='my-[30px]'>
    <h2 className='text-[32px] font-bold tracking-[0.24px] font-secondery mb-[30px] container'>{title}</h2>
    {children}
  </div>
}

export default Section
