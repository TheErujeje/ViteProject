import React from 'react'

function ManageCommunityCard ({Iconsrc, h1text, ptext}) {
  return (<>
  <div className='space-y-[8px] '>
    <div className='space-y-[16px] mx-[10.7px]'>
    <img src={Iconsrc} className='h-[48px] w-[48px] bg-[red]'/>
    <p className='text-[28px] text-[#4d4d4d] font-["Inter"]'>{h1text}</p>
    </div>
    <div className='mx-[10.7px]'>
    <p className='text-[14px]'>{ptext}</p>
    </div>
  </div>
  </>
   
  )
}

export default ManageCommunityCard