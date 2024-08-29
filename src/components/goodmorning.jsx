import React, {useState} from 'react'
import Gudmonin from '../assets/images/gudmonin.jpg'
import FLower from '../assets/images/flower.jpg'

function Goodmorning() {
    const [ImgSrc, setImgSrc] = useState('../assets/images/gudmonin.jpg');

    const changeImgSrc =()=> {
        setImgSrc('../assets/images/flower.jpg');
    };

    return (<>
        <div className='flex justify-center space-x-[10%] w-full h-[599px] bg-[#F5F7FA] px-[10%] pt-[96px]  mt-[84px]'>
            <div className='h-[276px] w-[46%] my-[65px]'>
                <div>

                    <h1 className='font-["Inter"] text-[56px] text-[#4d4d4d] font-[650]'>Goodmorning Love<br />
                        <span className='text-[#4CAF4F]'>from your baby</span></h1>
                    <p className='font-["Inter"] text-base text-[#717171]'>How was your night? hope it was good. Have a great day</p>

                </div>
                <button className='mt-[32px] h-[52px] bg-[#4CAF4F] text-white w-[19.5%] rounded-md text-base' > Like </button>
            </div>

            <div className='h-[68%] w-[27.15%]'>
                <img src={Gudmonin} className='w-full h-full' />
            </div>
            

        </div>
    </>
    )
}

export default Goodmorning
