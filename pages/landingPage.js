import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaHandHoldingHeart, FaStethoscope } from 'react-icons/fa'
import { GiCandleLight } from 'react-icons/gi'
import { MdOutlineCall } from 'react-icons/md'
import CircularProgressBar from '../components/CircularProgressBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FundraiseRequests from '../models/FundraiseRequests'
import mongoose from "mongoose";


function LandingPage() {
    const host = `${process.env.NEXT_PUBLIC_DEPLOYED}`;
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${host}/api/getFundraisers`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const json = await response.json();
            console.log("JSON", json);
            if (json.success) {
                setData(JSON.parse(JSON.stringify(json)));
                console.log("here", data);
            }
        }
        fetchData();
    }, [])

    console.log("data", data);
    let finaldata = data.data;
    console.log("final", finaldata)

    // const percentage = 90;
    return (
        <>

            <Navbar navtype={"landing"} />
            <div className='mt-[80px]'>
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
                            <Link href={'/setupFundraiser'}>Start a fundraiser - it's FREE</Link>
                        </div>
                    </div>

                    <div className='ml-auto cursor-default z-[-1] '>
                        <Image className='scale-[1.15] h-auto mr-10 mt-[-80px]' style={{width:"auto"}} width={500} priority={100} height={500} src={"/assets/bgImage.jpg"} alt="op" />
                    </div>
                </div>

                <div className='mb-12'>
                    <h1 className='text-[#212121] text-3xl text-center mb-5'>Thousands are fundraising online on HopeFund</h1>
                    <p className='text-center leading-[0.5] m-0 mb-[2em] text-[#5d5d5d]'>
                        <span className='inline-block relative before:content-[""] before:right-[100%] 
                        before:mr-[54px] before:absolute before:h-[5px] before:border-b-[1px] before:border-solid before:border-[#707070] before:top-[5px] before:w-[120px] before:opacity-[0.53] 
                        after:content-[""] after:left-[100%] after:ml-[54px] after:absolute after:h-[5px] after:border-b-[1px] after:border-solid after:border-[#707070] after:top-[5px] after:w-[120px] after:opacity-[0.53]'>
                            <span className='inline-block relative w-[18px] h-[18px] bg-[#9c3353] rotate-45 
                            before:top-[27px] before:left-[-21px] before:content-[""] before:absolute before:bg-[#691a47] before:w-[11px] before:h-[11px] before:opacity-[0.53] 
                            after:top-[-21px] after:right-[-21px] after:content-[""] after:absolute after:bg-[#691a47] after:w-[11px] after:h-[11px] after:opacity-[0.53]'></span>
                        </span>
                    </p>
                </div>

                <div className="relative flex justify-center mb-[4rem]">
                    <input type="text"
                        className="inline-block min-h-[auto] w-[40%] rounded-tl-full rounded-bl-full border-2 bg-transparent py-[0.32rem] px-5 leading-[2.15] outline-none border-[#9c3353] shadow-[0_0_30px_0_rgba(156,51,83,0.2)]"
                        id="email" name='email' placeholder="Search by fundraiser name, title, location, cause or other keywords" />
                    <button className='bg-[#9c3353] px-4 rounded-tr-full rounded-br-full'>
                        <AiOutlineSearch color='white' size={30} />
                    </button>
                </div>
                <div className='flex justify-center mb-10'>
                    <div className='flex flex-col justify-center items-center h-[150px] w-[200px] hover:bg-[#691a47] mx-2 shadow-[0_0_30px_0_rgba(156,51,83,0.2)] rounded-md hover:text-white text-[15px] font-semibold peer'><FaStethoscope size={50} className='my-4 peer-hover:text-white' /> Medical</div>
                    <div className='flex flex-col justify-center items-center h-[150px] w-[200px] hover:bg-[#691a47] mx-2 shadow-[0_0_30px_0_rgba(156,51,83,0.2)] rounded-md hover:text-white text-[15px] font-semibold peer'><GiCandleLight size={50} className='my-4 peer-hover:text-white' /> Memorial</div>
                    <div className='flex flex-col justify-center items-center h-[150px] w-[200px] hover:bg-[#691a47] mx-2 shadow-[0_0_30px_0_rgba(156,51,83,0.2)] rounded-md hover:text-white text-[15px] font-semibold peer'><FaHandHoldingHeart size={50} className='my-4 peer-hover:text-white' /> Non-Profit</div>
                </div>

                {/* Cards */}
                <div className='relative flex flex-wrap mx-[130px] justify-center'>
                    {finaldata && finaldata.map((item) => {
                        return (
                            <div key={item._id} className="cursor-pointer mx-3 mb-5 h-[530px] hover:shadow-[0_0_20px_0_rgba(156,51,83,0.3)] shadow-[0_0_30px_0_rgba(156,51,83,0.2)] w-[30%] bg-white border border-gray-200 rounded-lg relative">
                                <Link href={`/fundraiser/${item.slug}`}>
                                    {item.includeTaxBenefit === true &&
                                        <div className="absolute top-0 left-[-5px] px-2 py-1 bg-[#9c3353] text-white rounded-tr-lg rounded-bl-lg transform overflow-hidden">Tax Benefit</div>
                                    }
                                    <img className="w-[100%] rounded-t-lg" src="https://cimages.milaap.org/milaap/image/upload/c_fill,h_452,w_603/v1679944130/production/images/campaign/639821/A7852872-9C10-4830-9813-12066662E039_ahi9m1_1679944133.jpg" alt="" />
                                    <div className="px-5 mb-5 h-[50px] mt-[20px]">
                                        <h5 className="h-[50px] text-[1.3rem] font-[500] tracking-tight text-gray-500">{item.fundraiserTitle}</h5>
                                    </div>

                                    <div className='flex pl-5 h-[90px]'>
                                        <div> <CircularProgressBar percentage={Math.ceil(100 * (item.amountRaised / item.amountRequired))} /> </div>
                                        <div className='mt-4'>
                                            <p className='text-[#71737B] text-sm font-bold'>Raised</p>
                                            <p className='mt-1 text-xl'>₹{item.amountRaised}</p>
                                        </div>
                                        <div className='relative flex mx-auto before:bg-[#dde0e0] before:content-[""] before:absolute before:h-[30%] before:w-[2px] before:left-[-12px] before:top-[26px]'>
                                            <div className='mt-5'>
                                                <p className='text-[#71737B] text-xs'>Created By</p>
                                                <p className='mt-1 text-[#53545a] text-sm'>{item.createdBy}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`ml-5 mr-6 ${item.includeTaxBenefit === true?"bg-[#f7f7f7]":""} h-[55px] text-[#2b2b35] p-2`}>
                                        {item.includeTaxBenefit === true &&
                                            <p className='relative before:absolute before:content-[""] before:bg-[#691a47] text-sm ml-2 before:h-[136%] before:top-[-8px] before:w-[4px] before:left-[-16px]'>Recieve Tax benefit by contributing to this cause.</p>
                                        }
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>

                {/* Request a call */}
                <div className='bg-[linear-gradient(264deg,#9c3353,#5f2747)] text-[#5d5d5d] text-[14px] leading-[1.5] font-[400] w-[100%] mb-10'>
                    <div className='rounded-[6px] bg-floral-pattern bg-no-repeat p-[29px_0]'>
                        <div className='text-center m-[0_auto] bg-[#fff] rounded-[9px] p-[18px_0] w-[85%] max-w-[1280px] '>
                            <div className='flex items-center justify-center'>
                                <p className='text-[#212121] text-[30px] mr-[15px] m-[24px_0_17px]'>Need help to setup your free fundraiser?</p>
                                <button className='h-[45px] leading-[45px] inline-block w-[250px] m-[0_2px_24px] mb-[0] text-[18px] transition-colors delay-[0.2s] ease bg-[#9c3353] text-white rounded-full shadow-[0_0_6px_0_rgba(156,51,83,.2)] hover:shadow-[0_0_8px_0_rgba(156,51,83,.4)] '>
                                    <span className='flex items-center justify-center'>
                                        <MdOutlineCall className='h-[24px] w-[24px] mr-[11px] ' size={25} />
                                        <span className='text-[20px]'>Request a call</span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Us */}
                <div className='bottom-0 right-[70px] fixed z-[1000000] '>
                    <Link href={'/contactUs'} className='px-2 flex text-[18px] justify-evenly items-center text-white rounded-[5px_5px_0_0] w-[140px] h-[50px] bg-[#9c3353] shadow-[0_2px_1px_0_rgba(156,51,83,.3098)] normal-case leading-[32.4px] '>
                        <img className='py-1 w-[30px]' src="https://assets-give.milaap.org/assets/support/support-026639827351db2f76f01cb2405a636907a4b4ea56506f138364b541f9518a4d.png" alt="" />
                        <span>Contact us</span>
                    </Link>
                </div>

                {/* Footer */}
                <Footer />
            </div>
        </>
    )
}

export async function getServerSideProps() {
    if (!mongoose.connections[0].readystate) {
        await mongoose.connect(process.env.MONGO_URI);
    }

    let data = await FundraiseRequests.find({ verified: true });
    // console.log(data);
    return {
        props: { data }, // will be passed to the page component as props
    };
}

export default LandingPage