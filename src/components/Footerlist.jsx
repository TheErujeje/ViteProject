import React from 'react'

const Footerlist =({ptext, l1text, l2text, l3text, l4text, l5text}) => {
  return (
    <div className='bg-[] space-y-[24px] justify-between'>
        <p className='text-white font-semibold text-xl'>{ptext}</p>
        <div className='w-[160px] h-[148px] font-md text-white text-sm bg-[] justify-between space-y-[12px]'>
            <p>{l1text}</p>
            <p>{l2text}</p>
            <p>{l3text}</p>
            <p>{l4text}</p>
            <p>{l5text}</p>
        </div>
    </div>
  )
}

export default Footerlist