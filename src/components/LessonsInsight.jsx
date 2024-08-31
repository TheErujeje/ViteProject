import React from 'react'
import Illustration from '../assets/images/Illustration.svg'
import { useNavigate } from 'react-router-dom';

function LessonsInsight() {

    const navigate = useNavigate();

    const handleSignup = () => {
        navigate("/Signup");
    };

    return (<>
        <div className='flex flex-col md:flex-row justify-center space-y-[24px] md:space-y-[0] md:space-x-[10%] w-full h-auto md:h-[599px] bg-[#F5F7FA] px-6 md:px-[10%] pt-[48px] md:pt-[96px] mt-[84px]'>
            <div className='h-auto md:h-[276px] w-full md:w-[46%] my-0 md:my-[65px] text-center md:text-left'>
                <div>

                    <h1 className='font-["Inter"] text-[28px] md:text-[56px] text-[#4d4d4d] font-[650]'>Welcome to My Page<br />
                        <span className='text-[#4CAF4F]'>Testing APIs</span></h1>
                    <p className='font-["Inter"] text-sm md:text-base text-[#717171]'>my journey through web development</p>

                </div>
                <button onClick={handleSignup} className='mt-6 mt-[32px] h-[52px] bg-[#4CAF4F] text-white w-[60%] md:w-[19.5%] mx-auto md:mx-0 rounded-md text-sm md:text-base'>Register</button>
            </div>

            <div className='h-[200px] md:h-[68%] w-full md:w-[27.15%]'>
                <img src={Illustration} className='w-full h-full object-contain' />
            </div>

        </div>
    </>
    )
}

export default LessonsInsight