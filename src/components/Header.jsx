import React from 'react'

import Logoicon from './Logoicon';


function Header() {
    return (<>
        <div className='flex fixed top-0 place-items-center justify-center w-full px-[7%] bg-[#F5F7FA] h-[84px]'>
            <nav className='  py-[20px] flex bg-[#F5F7FA] w-[100%] items-center justify-center h-full'>
                <Logoicon />
                <ul className='flex align-middle items-center justify-between bg-[#F5F7FA] mx-[11%] w-[41%] font-["Inria Sans"] text-base'>
                    <li>Home</li>
                    <li>Features</li>
                    <li>Community</li>
                    <li>Blogs</li>
                    <li>Pricing</li>
                    <li>FAQ</li>
                </ul>

                <div className='align-middle w-[12%] h-[40px]'>
                    <button className='bg-[#F5F7FA] text-[#4CAF4F] w-[42.5%] h-full mr-[7.5%] rounded-md text-sm'>Login</button>
                    <button className='bg-[#4CAF4F] text-[#F5F7FA] w-[50%] h-full rounded-md text-sm'>Signup</button>
                </div>

            </nav>
        </div>
    </>
    )
}

//   <div className='flex items-center justify-center w-full bg-[#F5F7FA] h-21 fixed'>
// <nav className=' px-[105px] py-[20px] flex bg-[#F5F7FA] w-[100%] items-center self-center'>
// <div className='flex w-[154.5px] h-[24px] items-center justify-center items-center self-center'>
//   <AiFillApple className='w-[35px] h-6 self-center' />
//   <h1 className='w-[111.5px] h-[20.6 px] font-bold self-center text-lg'>ERUJEJE</h1>
// </div>
//   <ul className='flex align-middle items-center justify-between bg-[#F5F7FA] mx-[145px] w-[588px] font-["Inria Sans"] text-base'>
//     <li>Home</li>
//     <li>Features</li>
//     <li>Community</li>
//     <li>Blogs</li>
//     <li>Pricing</li>
//     <li>FAQ</li>
//   </ul>

// <div className='align-middle w-[182px] h-[40px]'>
//   <button className='bg-[#F5F7FA] text-[#4CAF4F] w-[77px] h-full mr-[14px] rounded-md text-sm'>Login</button>
//   <button className='bg-[#4CAF4F] text-[#F5F7FA] w-[91px] h-full rounded-md text-sm'>Signup</button>
// </div>

// </nav>
// </div>
export default Header