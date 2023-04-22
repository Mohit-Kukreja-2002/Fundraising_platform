import { useRef, useState, useEffect } from "react";
import CircularProgressBar from "../../components/CircularProgressBar";
import Navbar from "../../components/Navbar";
import { BsWhatsapp, BsFacebook } from 'react-icons/bs';
import { FaHandsHelping } from 'react-icons/fa';
import Link from "next/link";
import Image from "next/image";
import Footer from "../../components/Footer";
import mongoose from 'mongoose'
import FundraiseRequests from "../../models/FundraiseRequests";
import Checkout from "../checkout";

const Post = ({ fundraiserDetails }) => {
    console.log(fundraiserDetails);
    // const { finaldata } = props;
    const ref = useRef(null)

    useEffect(() => {
        localStorage.removeItem("fundraiserTitle");
        localStorage.setItem("fundraiserTitle", fundraiserDetails.fundraiserTitle);
        const handleScroll = () => {
            const element = ref.current;
            const distanceFromBottom = document.documentElement.scrollHeight - (window.scrollY + window.innerHeight);
            if (element) {
                if (distanceFromBottom <= 300) {
                    element.classList.remove('fixed');
                } else {
                    element.classList.add('fixed');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [storyUpdate, setstoryUpdate] = useState("story");

    return (
        <>
            <Navbar navtype={"landing"} subpage={"donate"} />
            <div className="flex my-[74px]">

                {/* Left Box */}
                <div className="w-[577px] ml-[18%]">
                    {/* Label */}
                    <div className="bg-[#f3f3f3] rounded-[0_0_4px_4px] text-[#212121] p-[10px] text-center text-[14px] w-full leading-[22px] ">
                        Hopefund will not charge any fee on your donation to this fundraiser.
                    </div>

                    {/* Title */}
                    <div className="m-[20px_0_10px] text-[#212121] p-[3px_10px_10px]  pl-0 text-[24px] w-full leading-[33px] ">
                        {fundraiserDetails.fundraiserTitle}
                    </div>

                    {/* Image here */}
                    <div className="relative m-0">
                        <img className="w-[100%] rounded-lg" src="https://cimages.milaap.org/milaap/image/upload/c_fill,h_452,w_603/v1679944130/production/images/campaign/639821/A7852872-9C10-4830-9813-12066662E039_ahi9m1_1679944133.jpg" alt="" />
                    </div>

                    {/* progess Bar  and etc */}
                    <div className='flex h-[90px] mt-4'>
                        <div>
                            <CircularProgressBar percentage={Math.ceil(100 * (fundraiserDetails.amountRaised / fundraiserDetails.amountRequired))} />
                        </div>
                        <div className='mt-4'>
                            <p className='text-[#5d5d5d] text-sm font-bold'>Raised</p>
                            <p className='mt-1'><span className="text-xl font-bold text-[#9c3353]">₹{fundraiserDetails.amountRaised}</span> out of ₹{fundraiserDetails.amountRequired}</p>
                        </div>
                        <div className='relative mt-5 ml-auto mr-2 text-[#691a47]'>
                            <p className="text-xl cursor-pointer bg-[#f3f3f3] p-[0_15px] leading-[40px] font-[500] underline rounded-2xl">233 supporters</p>
                        </div>
                    </div>

                    {/* Share links */}
                    <div className="flex items-center justify-around mt-2 mb-6">
                        <div className="rounded-full flex w-2/5 bg-[#25d366] cursor-pointer py-2 justify-center items-center">
                            <BsWhatsapp size={30} className="text-white" />
                            <p className=" ml-4 text-[16px] text-white">Share</p>
                        </div>
                        <div className="rounded-full flex w-2/5 bg-[#3b5998] cursor-pointer py-2 justify-center items-center">
                            <BsFacebook size={30} className="text-white" />
                            <p className=" ml-4 text-[16px] text-white">Share</p>
                        </div>
                    </div>

                    {/* created by... */}
                    <div className="flex justify-start mb-8 tracking-wide">
                        <div className="p-2 flex w-[46%] rounded-[4px] border-[1px] border-solid border-[#e0e1e3] items-center justify-start ">
                            <p className="ml-3 relative bg-[#9c3353] text-[22px] rounded-full h-16 w-16 text-white after:absolute after:content-['V'] after:top-4 after:left-6 "></p>
                            <ul className="ml-4">
                                <li className="text-sm text-[#5d5d5d]">Created by</li>
                                <li className="text-[18px] font-[500] text-[#212121]">{fundraiserDetails.createdBy}</li>
                            </ul>
                        </div>
                        <div className="p-2 flex ml-4 right-0 w-[52%] rounded-[4px] border-[1px] border-solid border-[#e0e1e3] items-center justify-start ">
                            <p className="ml-3 relative bg-[#9c3353] text-[22px] rounded-full h-16 w-16 text-white after:absolute after:content-['V'] after:top-4 after:left-6 "></p>
                            <ul className="ml-4">
                                <li className="text-sm mb-1 text-[#5d5d5d]">This fundraiser will benefit</li>
                                <li className="text-[18px] mb-1 font-[500] text-[#212121]">{fundraiserDetails.benefitterName}</li>
                                <li className="text-sm text-[#5d5d5d]">from {fundraiserDetails.benefitterAddress}</li>
                            </ul>
                        </div>
                    </div>

                    {/* Story Update handler */}
                    <div className="flex mb-6 text-center">
                        <button onClick={() => { setstoryUpdate("story") }} className={`w-full ${storyUpdate === "story" ? "font-bold text-white bg-[#9c3353] " : " text-[#212121] bg-white"} rounded-[30px_0_0_30px] text-[18px] border-[1px] border-solid border-[#9c3353] leading-[50px]`}>Story</button>
                        <button onClick={() => { setstoryUpdate("update") }} className={`w-full ${storyUpdate === "update" ? "font-bold text-white bg-[#9c3353] " : " text-[#212121] bg-white"} rounded-[0px_30px_30px_0px] text-[18px] border-[1px] border-solid border-[#9c3353] leading-[50px]`}>Update</button>
                    </div>

                    {/* Story */}
                    <div className="tracking-wider text-[#3a3a3a] leading-6">
                        <div dangerouslySetInnerHTML={{ __html: fundraiserDetails.fundraiserStory }}>
                            {/* {fundraiserDetails.fundraiserStory} */}
                        </div>
                    </div>

                    {/* Update */}

                    {/* Issue */}
                    <div className="text-center text-[#212121] rounded-[2px_20px] m-[60px_0] p-[20px] text-[16px] leading-[25px] shadow-[0_1px_6px_0_rgba(33,33,33,0.3)] ">
                        <p className="text-[16px]">If something isn't right, we will work with you to ensure no misuse occurs.</p>
                        <Link href={'/'} className="underline text-[#691a47]">Report this cause</Link>
                    </div>
                </div>

                {/* right box */}
                <div ref={ref} className={`transition-transform duration-10000 fixed right-[14%] `}>
                    <div className="pt-3 mx-8 top-0 sticky w-[390px] bg-[#f7f7f7] shadow-[-7px_-2px_14px_0_rgba(150,51,83,0.28)]">
                        {/*Donate*/}
                        <div className="flex m-[0_30px] ">
                            <img className="w-[30px]" src="https://assets-give.milaap.org/assets/donate-icon-7cabb309d2c7a586a914c0a23abe52032aa0ce01115fb54e07c6148ab2cf8c6a.svg" alt="" />
                            <p className="mx-3 mt-auto text-[#212121] text-[18px] ">Donate</p>
                            <div className='relative mt-auto ml-auto text-[#691a47]'>
                                <p className="text-xl cursor-pointer mt-auto p-[0_15px] leading-[40px] font-[500] underline">233 supporters</p>
                            </div>
                        </div>

                        <div className='flex m-[0_30px] h-[85px] my-3'>
                            <div>
                                <CircularProgressBar size={16} percentage={Math.ceil(100 * (fundraiserDetails.amountRaised / fundraiserDetails.amountRequired))} />
                            </div>
                            <div className='mt-4 ml-5'>
                                <p className='text-[#696969] text-[14px] font-bold'>Raised</p>
                                <p className='mt-1 text-[17px]'><span className="text-xl font-[400] text-[#9c3353]">₹{fundraiserDetails.amountRaised}</span> out of ₹{fundraiserDetails.amountRequired}</p>
                            </div>
                        </div>

                        <div className='mx-auto w-[330px] text-center bg-[#9c3353] shadow-[0_0_6px_0_rgba(156,51,83,.2)] rounded-full hover:shadow-[0_3px_3px_0_rgba(0,0,0,.14),0_1px_7px_0_rgba(0,0,0,.12),0_3px_1px_-1px_rgba(0,0,0,.2)]' >
                            <Link className='text-[#fff] text-xl leading-[50px] ' href={'/checkout'} onClick={Checkout} >Donate Now</Link>
                        </div>

                        <div className="text-[#5d5d5d] leading-[21px] m-[0_30px] text-center my-[12px] text-[14px]">
                            Card, Netbanking, Cheque pickups
                        </div>

                        <div className="m-[0_30px] relative text-center text-[#5d5d5d]">
                            <p className="before:absolute before:content-[''] before:border-[#691a47] before:top-[10px] before:left-8 before:w-[20%] before:h-[5px] before:border-t-[2px] before:border-solid after:absolute after:content-[''] after:border-[#691a47] after:top-[10px] after:right-8 after:w-[20%] after:h-[5px] after:border-t-[2px] after:border-solid">
                                Or <span className="text-[#9c3353] font-semibold ">Donate Using</span>
                            </p>
                        </div>

                        {/* Qr Box */}
                        <div className="relative pb-[10px] text-center m-[20px_30px] flex justify-center ">
                            {/* <img src={'assets/Qrcode.jpg'} alt="" /> */}
                            <Image className="opacity-30 border-[1px] border-solid border-[#707070] p-[10px] " alt='Qrcode' width={170} height={170} src={"/assets/Qrcode.jpg"} />
                            <a className="h-[30px] top-[70px] absolute bg-white  border-[1px] border-solid border-[#9c3353] leading-[24px] p-[3px_0] text-[#9c3353] rounded-[25px] shadow-[0_0_6px_0_rgba(156,51,83,.2)] tracking-wider w-[160px] hover:shadow-[0_3px_3px_0_rgba(0,0,0,.14),0_1px_7px_0_rgba(0,0,0,.12),0_3px_1px_-1px_rgba(0,0,0,.2)]" href="/">Generate Qr</a>
                        </div>

                        <div className="py-3 text-center bg-white">
                            <p className="text-[#5d5d5d]">Scan and donate with any app</p>
                            <ul className="flex mt-2 mx-[30px] justify-between">
                                <li>
                                    <Image src={'/assets/bhim.png'} className="object-contain rounded-full border-solid border-[4px] border-[#feaf6b] " alt="/" width={40} height={40} />
                                </li>
                                <li>
                                    <Image src={'/assets/gpay.png'} className="object-contain rounded-full border-solid border-[4px] border-[#d3d7fb] " alt="/" width={40} height={40} />
                                </li>
                                <li>
                                    <Image src={'/assets/paytm.png'} className="object-contain rounded-full border-solid border-[4px] border-[#67d5f5] " alt="/" width={40} height={40} />
                                </li>
                                <li>
                                    <Image src={'/assets/phonepe.png'} className="object-contain rounded-full border-solid border-[4px] border-[#c2b0e2] " alt="/" width={40} height={40} />
                                </li>
                                <li>
                                    <Image src={'/assets/paypal.png'} className="object-contain rounded-full border-solid border-[4px] border-[#ffdba6] " alt="/" width={40} height={40} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readystate) {
        await mongoose.connect(process.env.MONGO_URI);
    }

    let fundraiserDetails = await FundraiseRequests.findOne({ slug: context.query.slug });

    return {
        props: { fundraiserDetails: JSON.parse(JSON.stringify(fundraiserDetails)) }, // will be passed to the page component as props
    };
}
export default Post;