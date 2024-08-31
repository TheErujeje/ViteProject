import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MdOutlineMenu } from "react-icons/md";

import Logoicon from './Logoicon';




function Header() {

    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    //swipe component function
    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        if (touchStart - touchEnd > 100) {
            console.log('Swiped left');
            // handle left swipe
        }

        if (touchEnd - touchStart > 150) {
            console.log('Swiped right');
            setIsMenuOpen(!isMenuOpen);
            // handle right swipe
        }
    };

    // handle signup
    const handleSignup = () => {
        navigate("/Signup");
    };

    const handleLogin = () => {
        navigate("/Login");
    };

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (<>
        <div onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className='flex fixed top-0 place-items-center justify-center w-full px-[7%] bg-[#F5F7FA] h-[84px]'>
            <nav className='  py-[20px] flex bg-[#F5F7FA] w-[100%] items-center justify-center h-full'>
                <Link to="/"><Logoicon /></Link>

                <ul className='hidden md:flex align-middle items-center justify-between bg-[#F5F7FA] mx-[11%] w-[41%] font-["Inria Sans"] text-base'>
                    <li><Link to="/">Home</Link></li>
                    <li>Features</li>
                    <li>Community</li>
                    <li>Blogs</li>
                    <li>Pricing</li>
                    <li>FAQ</li>
                </ul> 

                {/* Toggle menu button for small screens */}
                <div className={`md:hidden ${!isMenuOpen ? 'block' : 'hidden'}`}>
                    <button onClick={handleMenuToggle}>
                        {/* Replace with your icon */}
                        <MdOutlineMenu />
                    </button>
                </div>

                <div className='hidden md:flex align-middle w-[12%] h-[40px]'>
                    <button onClick={handleLogin} className='bg-[#F5F7FA] text-[#4CAF4F] w-[42.5%] h-full mr-[7.5%] rounded-md text-sm hover:bg-[#4CAF4F] hover:text-[#F5F7FA]'>Login</button>
                    <button onClick={handleSignup} className='bg-[#4CAF4F] text-[#F5F7FA] w-[50%] h-full rounded-md text-sm'>Signup</button>
                </div>

                {/* Mobile menu - initially hidden */}
                <div className={`fixed top-0 right-0 h-full w-[200px] bg-[#263238] text-white font-["Inter"] transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    } transition-transform duration-300 ease-in-out z-50`}>
                    <ul className='flex flex-col items-center'>
                        <li className='py-2'><Link to="/">Home</Link></li>
                        <li className='py-2'>Features</li>
                        <li className='py-2'>Community</li>
                        <li className='py-2'>Blogs</li>
                        <li className='py-2'>Pricing</li>
                        <li className='py-2'>FAQ</li>
                        <div className='w-full flex flex-col place-items-center py-2 space-y-[8px] h-[100px]'>
                            <button onClick={handleLogin} className='bg-[#F5F7FA] text-[#4CAF4F] w-[42.5%] h-full rounded-md text-sm'>Login</button>
                            <button onClick={handleSignup} className='bg-[#4CAF4F] text-[#F5F7FA] w-[50%] h-full rounded-md text-sm'>Signup</button>
                        </div>
                    </ul>
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