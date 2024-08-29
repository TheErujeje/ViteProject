import React from 'react'
import Illustration from '../assets/images/Illustration.svg'

function LessonsInsight() {
    return (<>
        <div className='flex justify-center space-x-[10%] w-full h-[599px] bg-[#F5F7FA] px-[10%] pt-[96px]  mt-[84px]'>
            <div className='h-[276px] w-[46%] my-[65px]'>
                <div>

                    <h1 className='font-["Inter"] text-[56px] text-[#4d4d4d] font-[650]'>Lessons and Insights<br />
                        <span className='text-[#4CAF4F]'>from 8 years</span></h1>
                    <p className='font-["Inter"] text-base text-[#717171]'>where to grow your business as a photographer: site or social media?</p>

                </div>
                <button className='mt-[32px] h-[52px] bg-[#4CAF4F] text-white w-[19.5%] rounded-md text-base'>Register</button>
            </div>

            <div className='h-[68%] w-[27.15%]'>
                <img src={Illustration} className='w-full h-full' />
            </div>

        </div>
    </>
    )
}

export default LessonsInsight