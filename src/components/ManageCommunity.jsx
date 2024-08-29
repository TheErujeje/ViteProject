import React from 'react'
import ManageCommunityCard from './ManageCommunityCard'

function ManageCommunity() {
  const Iconsrcs = '../assets/images/OurClientIcon5.svg'

  return (<>
  <div className='flex flex-col items-center w-[100%] h-[416px] space-y-[16px]'>
    <div className='text-center h-[120px]'> 
        <p className='text-[36px] font-semibold text-[#4d4d4d] bg-[red]'> Manage your entire community <br/> in a single system </p>
        <p className='w-[100%] bg-[green] text-[16px]'> Who is Nextcent suitable for?</p>
        </div>
    <div> 
        <ManageCommunityCard Iconsrc={Iconsrcs} ptext={"How are you doing"} h1text={"I am fine"}/>
    </div>
    </div>
    </>
      )
}

export default ManageCommunity