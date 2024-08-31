import React from 'react'
import Logoicon from './Logoicon'
import { FaInstagram } from "react-icons/fa6";
import { AiFillOpenAI } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import Footerlist from './Footerlist';

function Footer() {
    const footerlisttext = [
        { ptext: 'Company', l1text: 'About us', l2text: 'Blog', l3text: 'Contact us', l4text: 'Pricing', l5text: 'Testimonials' },
        { ptext: 'Support', l1text: 'Help center', l2text: 'Terms of service', l3text: 'Legal', l4text: 'Privacy policy', l5text: 'Status' }
    ]
    return (<>
        <div className='flex justify-center left-0 h-auto md:h-[328px] bg-[#263238] w-full py-[20px] md:pt-[94px] md:space-x-[7%] '>
            <div className='flex flex-col self-center h-auto md:h[190px] md:w-[24.3%] '>
                <Logoicon className="self-center md:self-auto" color="white" />
                <div className='text-white text-[12px] md:font-thin'>
                    <p className=' text-center md:text-[14px] justify-center '> Copywright 2020 Erujeje Ltd.</p>
                    <p className='jutify-center text-center'> All rights reserved</p>
                </div>
                <div className='hidden md:flex jusitfy-between w-[48.8%] bg-[blue]'>
                    <FaInstagram style={{ color: "white" }} />
                    <AiFillOpenAI style={{ color: "white" }} />
                    <FaTwitter style={{ color: "white" }} />
                    <FaYoutube style={{ color: "white" }} />
                </div>

            </div>

            <div className='hidden md:flex md:h-[200px] md:w-[44%] space-x-[2%] font-["Inter"]' >
                <div className='md:w-[50%]'> {footerlisttext.map((footerlisttext, index) => (
                    <Footerlist
                        key={index}
                        ptext={footerlisttext.ptext}
                        l1text={footerlisttext.l1text}
                        l2text={footerlisttext.l2text}
                        l3text={footerlisttext.l3text}
                        l4text={footerlisttext.l4text}
                        l5text={footerlisttext.l5text}
                    />

                ))}

                    {/* <div className='flex justify-between w-[]'>
                    second first footer
                </div>
                <div>
                    second second Footer
                </div> */}

                </div>
                <div className='h-[92px] md:w-[40%] space-y-[24px]'>
                    <p className='text-white text-xl font-semibold'> Stay up to date</p>
                    <input className='rounded-[8px] bg-[#D9DBE1]  h-[40px] text-[black] placeholder:text-[white] pl-[6px] focus:outline-none focus:ring-0' placeholder='Your email address' type='text' />
                </div>
            </div>

        </div>
    </>)
}

export default Footer