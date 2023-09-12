import React from 'react'

const Section = ({title, children, styles}) => {
  return <div className={`py-[30px] ${styles}`}>
     <h2 className={`text-[24px] w-[285px] ml-[0px] tb:w-full tb:text-[32px] font-bold tracking-[0.24px] font-secondery ${title ? 'mb-[30px]' : 'mb-[0px]'} container`}>{title}</h2>
    {children}
  </div>
}

export default Section
