import React from 'react'
import OurClientIcon1 from '../assets/images/OurClientIcon1.svg'
import OurClientIcon2 from '../assets/images/OurClientIcon2.svg'
import OurClientIcon3 from '../assets/images/OurClientIcon3.svg'
import OurClientIcon4 from '../assets/images/OurClientIcon4.svg'
import OurClientIcon5 from '../assets/images/OurClientIcon5.svg'
import OurClientIcon6 from '../assets/images/OurClientIcon6.svg'

function OurClient() {
  return (<>
    <div className='flex flex-col px-[10%] my-[40px] h-[190px] w-[100%] space-y-[16px] items-center'>
        <div className='text-center font-["Inter"]  w-[77%] mx-[]'>
            <p className='text-[36px] text-[#4D4D4D] font-semibold'>Our Client</p>
            <p className='text-[16px] text-[#717171]'> We have been working with some Fortune 500+ clients</p>
        </div>
        <div className='flex items-center justify-between text-center w-[80%] h-[98px]'>
            <img src={OurClientIcon1} className='w-[48px] h-[48px]'/>
            <img src={OurClientIcon2} className='w-[48px] h-[48px]' />
            <img src={OurClientIcon3} className='w-[48px] h-[48px]'/>
            <img src={OurClientIcon4} className='w-[48px] h-[48px]'/>
            <img src={OurClientIcon5} className='w-[48px] h-[48px]'/>
            <img src={OurClientIcon6} className='w-[48px] h-[48px]'/>
            <img src={OurClientIcon3} className='w-[48px] h-[48px]'/>
        </div>

    </div>
  </>
  );
}

export default OurClient