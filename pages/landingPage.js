import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


function LandingPage() {
    return (
        <>
            <div className="flex items-center justify-center font-sans">

                <div className='mt-[-10px] mx-auto ml-[150px] w-[40%]'>
                    <div>
                        <h1 className='font-[500] text-5xl text-[#212121]'>HopeFund</h1>
                        <h5 className='text-[#5d5d5d] font-[500] text-md mx-36 mt-[-4px]'>Your Generosity Creates Hope.</h5>
                    </div>
                    <div>
                        <h3 className='mt-12 text-[22px] text-[#414040]'>Free Crowdfunding For India</h3>
                    </div>
                    <div className='text-[#5d5d5d] font-[400] text-[16px] mt-2'>Raise funds online for medical emergencies and social causes</div>
                    <div className='flex justify-center items-center my-6 w-[313px] h-[50px] rounded-3xl text-[20px] p-4 font-[500] bg-[#9c3353] hover:bg-[#b8355c] text-white'>
                        <Link href={'/'}>Start a fundraiser - it's FREE</Link>
                    </div>

                </div>

                <div className='ml-auto cursor-default z-[-1] '>
                    <Image className='scale-[1.15] mr-10 mt-[-80px]' width={500} height={500} src={"/assets/bgImage.jpg"} alt="op" />
                </div>
            </div>

        </>
    )
}

export default LandingPage