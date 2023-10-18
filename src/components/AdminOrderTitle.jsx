import React from 'react'

const AdminOrderTitle = ({number, title}) => {
  return <div className='flex items-center justify-between'>
  <div className="flex items-center gap-[15px]">
<div className="border border-solid border-[#7faa84]/[.50] w-[30px] h-[30px] rounded-[50%] flex justify-center items-center">
    {number}
</div>
<h3 className="font-bold text-[24px]">{title}</h3>
</div>
</div>
}

export default AdminOrderTitle
