import React from 'react'
import { AiFillApple } from "react-icons/ai";

const Logoicon =({color}) => {
    return (<>
        <div className='flex w-[155px] h-[24px] items-center justify-center items-center self-center' >
            <AiFillApple className='w-[22%] h-6 self-center bg' style={{color:color}}/>
            <h1 className='w-[70%] h-[20.6 px] font-bold self-center text-lg' style={{color:color}}>ERUJEJE</h1>
        </div>
    </>

    )
}

export default Logoicon