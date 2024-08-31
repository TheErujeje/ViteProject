import React from 'react'
import { VscVscode } from "react-icons/vsc";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaAws } from "react-icons/fa";

function OurClient() {
  return (<>
    <div className='flex flex-col px-[10%] mt-[40px] h-[190px] w-[100%] space-y-[16px] items-center'>
        <div className='text-center font-["Inter"]  w-[77%] mx-[]'>
            <p className=' text-[28px] md:text-[36px] text-[#4D4D4D] font-semibold'>Our Tools</p>
            <p className=' text-sm md:text-[16px] text-[#717171]'> I have been getting my hands dirty</p>
        </div>
        <div className='flex items-center justify-between text-center w-full md:w-[80%] h-[98px]'>
          <VscVscode className='w-[32px] h-[32px]'/>
          <FaPython className='w-[32px] h-[32px]'/>
          <IoLogoJavascript className='w-[32px] h-[32px]'/>
          <FaAws className='w-[32px] h-[32px]'/>

        </div>

    </div>
  </>
  );
}

export default OurClient