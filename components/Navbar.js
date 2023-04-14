import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineAccountCircle } from 'react-icons/md'
// assets\logo_transparent.png

function Navbar({ page, count }) {
    return (
        <nav className={`block bg-white ${page==="landing"?"fixed":""} top-0 w-[100%] z-[1000000]`}>
            <div className="bg-white flex items-center h-[70px] shadow-[0_0_30px_0_rgba(156,51,83,.2)] sticky top-0 z-[1000] box-border w-[100%]">
                <div className='w-[12%]'>
                    <Link href={'/'}>
                        <Image className='ml-3' alt='HopeFund-Logo' width={200} height={60} src={"/assets/logoo.png"} />
                    </Link>
                </div>
                {page === "landing" &&
                    <>
                        <div className='ml-8 w-[50%]'>
                            <ul className='flex'>
                                <li className='active:bg-[#9c3353] mr-1 active:text-[#ffc1d3] text-[#212121] hover:bg-[#f5f5f5] px-4 pb-[24.2px] pt-[22px]'><Link href={'/'}>Home</Link></li>
                                <li className='active:bg-[#9c3353] mr-1 active:text-[#ffc1d3] text-[#212121] hover:bg-[#f5f5f5] px-4 pb-[24.2px] pt-[22px]'><Link href={'/'}>Donate</Link></li>
                                <li className='active:bg-[#9c3353] mr-1 active:text-[#ffc1d3] text-[#212121] hover:bg-[#f5f5f5] px-4 pb-[24.2px] pt-[22px]'><Link href={'/'}>Lend</Link></li>
                                <li className='active:bg-[#9c3353] mr-1 active:text-[#ffc1d3] text-[#212121] hover:bg-[#f5f5f5] px-4 pb-[24.2px] pt-[22px]'><Link href={'/contactUs'}>Contact Us</Link></li>
                            </ul>
                        </div>
                        <div className='flex items-center justify-end cursor-pointer w-[30%]'>
                            <div className='m-auto w-[200px] text-center bg-[#9c3353] py-[8px] shadow-[0_0_6px_0_rgba(156,51,83,.2)] rounded-2xl' >
                                <Link className='text-[#fff]' href="/setupFundraiser" >Start a fundraiser</Link>
                            </div>
                            <div>
                                <Link href={'/signIn'}>
                                    <MdOutlineAccountCircle className='text-[#9c3353]' size={40} />
                                </Link>
                            </div>
                        </div>
                    </>
                }
                {page === "setupFundraiser" &&
                    <>
                        <div className='ml-10 text-[18px] font-[400] text-[#282828] '>Setup Fundraiser</div>
                        <div className='ml-auto mr-[100px]'>
                            <span className='text-[#56bc30] text-sm'>Step {count}</span> of 4
                        </div>
                    </>
                }
            </div>
        </nav>
    )
}

export default Navbar