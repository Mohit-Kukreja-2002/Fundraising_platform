import React, { useEffect, useState, useRef } from 'react'
import Navbar from '../components/Navbar'
// import SelectBox from '../components/SelectBox';
import { IoMdArrowDropdown } from 'react-icons/io'
import { GoPerson } from 'react-icons/go'
import { AiOutlineCheck } from 'react-icons/ai'
import { TiGroup } from 'react-icons/ti'
import { MdSchool } from 'react-icons/md'
import { GiCandleLight } from 'react-icons/gi'
import { BsThreeDots } from 'react-icons/bs'
import { CgOrganisation } from 'react-icons/cg'
import { RiStethoscopeLine } from 'react-icons/ri';

const SetupFundraiser = () => {
    const divref = useRef(null);
    const [cause, setCause] = useState("medical");
    const [count, setCount] = useState(1);
    const [benefitter, setBenefitter] = useState("");
    useEffect(() => {
        console.log("useEffect running")
    }, [cause, count])


    const handleCauseChange = (value) => {
        setCause(value);
    };
    const handleBenefitterChange = (e, value) => {
        console.log("hello");
        e.preventDefault();
        setBenefitter(value);
        divref.current.classList.remove("block");
        divref.current.classList.add("hidden");
    };

    const handleCountChange = () => {
        setCount(count + 1);
    };

    const toggleBlockHidden = () => {
        if (divref.current.classList.contains("hidden")) {
            divref.current.classList.remove("hidden");
            divref.current.classList.add("block");
        } else {
            divref.current.classList.remove("block");
            divref.current.classList.add("hidden");
        }
    }

    return (
        <>
            <Navbar page={"setupFundraiser"} count={count} />

            {/* Page 1 */}
            <div className={`${count !== 1 ? "hidden" : ""} flex flex-col items-center justify-center`}>
                <div className='text-[#282828] border-[1.5px] border-solid border-[#e0e1e3] tracking-widest text-[16px] p-[10px_0] bg-[hsla(210,4%,89%,.2)] w-[200px] text-center '>Basic Details</div>
                <span className='my-10 tracking-[0.1em] text-[14px] text-[#5d5d5d]'>I am raising funds for a/an
                    <span className='inline-block relative w-[122px] text-[16px] border-b-[1px] border-solid border-[#c2c2c4] ml-[10px] mr-[5px] text-left overflow-hidden text-[#282828] pr-8'>{cause}
                        <span className='absolute top-[3px] right-[6px]'><IoMdArrowDropdown /></span>
                    </span>
                    cause
                </span>
                <div className='relative mb-[30px] w-[549px] rounded-[4px] border-[1px] border-solid border-[#fff] shadow-[0_2px_2px_0_rgba(0,0,0,.14),0_3px_1px_-2px_rgba(0,0,0,.12),0_1px_5px_0_rgba(0,0,0,.2)]'>
                    <span className=' h-0 w-0 top-[-12px] right-[25%] border-solid border-l-transparent border-r-transparent absolute border-l-[8px] border-r-[8px] border-b-[11px] border-b-[#f5f5f5]'></span>
                    <span className=' h-0 w-0 border-solid border-r-transparent border-l-transparent absolute border-l-[6px] border-r-[6px] border-b-[13px] border-b-[#fff] top-[-11.5px] right-[25.5%]'></span>
                    <ul className='m-[14px_0] p-[0_14px] text-[16px]'>
                        <div className='flex mt-[10px]'>
                            <li className='hover:bg-transparent cursor-pointer p-[0_5px] w-[50%] ' onClick={() => handleCauseChange("medical")}>
                                <span className={`${cause === "medical" ? " border-[#eaeaea] bg-[#691a47] text-[#fff] " : "bg-white text-[#282828]"} text-[20px] py-4 align-middle items-center rounded w-[100%] relative border-[1px] border-solid border-[#ecedee] flex `}>
                                    {cause === "medical" && <AiOutlineCheck className='ml-3' />}
                                    <div className='flex'>
                                        <RiStethoscopeLine size={20} className={`${cause !== "medical" ? "ml-10 mr-3 text-[#9c3353]" : "text-white mx-3"} w-6 h-6`} />
                                        <span className='tracking-wider'>Medical</span>
                                    </div>
                                </span>
                            </li>
                            <li className='hover:bg-transparent cursor-pointer p-[0_5px] w-[50%]' onClick={() => handleCauseChange("education")}>
                                <span className={`${cause === "education" ? " border-[#eaeaea] bg-[#691a47] text-[#fff] " : "bg-white text-[#282828]"} text-[20px] py-4 align-middle items-center rounded w-[100%] relative border-[1px] border-solid border-[#ecedee] flex `}>
                                    {cause === "education" && <AiOutlineCheck className='ml-3' />}
                                    <div className='flex'>
                                        <MdSchool size={20} className={`${cause !== "education" ? "ml-10 mr-3 text-[#9c3353]" : "text-white mx-3"} w-6 h-6`} />
                                        <span className='tracking-wider'>Education</span>
                                    </div>
                                </span>
                            </li>
                        </div>
                        <div className='flex my-[10px]'>
                            <li className='hover:bg-transparent cursor-pointer p-[0_5px] w-[50%]' onClick={() => handleCauseChange("memorial")}>
                                <span className={`${cause === "memorial" ? " border-[#eaeaea] bg-[#691a47] text-[#fff] " : "bg-white text-[#282828]"} text-[20px] py-4 align-middle items-center rounded w-[100%] relative border-[1px] border-solid border-[#ecedee] flex `}>
                                    {cause === "memorial" && <AiOutlineCheck className='ml-3' />}
                                    <div className='flex'>
                                        <GiCandleLight size={20} className={`${cause !== "memorial" ? "ml-10 mr-3 text-[#9c3353]" : "text-white mx-3"} w-6 h-6`} />
                                        <span className='tracking-wider'>Memorial</span>
                                    </div>
                                </span>
                            </li>
                            <li className='hover:bg-transparent cursor-pointer p-[0_5px] w-[50%]' onClick={() => handleCauseChange("others")}>
                                <span className={`${cause === "others" ? " border-[#eaeaea] bg-[#691a47] text-[#fff] " : "bg-white text-[#282828]"} text-[20px] py-4 align-middle items-center rounded w-[100%] relative border-[1px] border-solid border-[#ecedee] flex `}>
                                    {cause === "others" && <AiOutlineCheck className='ml-3' />}
                                    <div className='flex'>
                                        <BsThreeDots size={20} className={`${cause !== "others" ? "ml-10 mr-3 text-[#9c3353]" : "text-white mx-3"} w-6 h-6`} />
                                        <span className='tracking-wider'>Others</span>
                                    </div>
                                </span>
                            </li>
                        </div>
                    </ul>
                </div>
                <form className="mt-12" action="" method="POST">
                    <div class=" relative left-[-170px]">
                        <input id="name" type="name" name="name" class="peer h-10 w-[270%] border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600" placeholder="name" />
                        <label for="name" class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Name</label>
                    </div>
                    <div class="mt-10 relative left-[-170px]">
                        <input id="email" name="email" type="text" className="w-[270%] h-10 text-gray-900 placeholder-transparent border-b-2 border-gray-300 peer focus:outline-none focus:border-rose-600" placeholder="john@doe.com" />
                        <label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email address</label>
                    </div>
                </form>
            </div>

            {/* Page 2 */}
            <div className={`${count !== 2 ? "hidden" : ""} flex flex-col items-center justify-center`}>
                <div className='text-[16px] tracking-widest text-[#282828] border-[1.5px] border-solid border-[#e0e1e3] p-[10px_0] bg-[hsla(210,4%,89%,.2)] w-[200px] text-center '>Beneficiary Details</div>
                <span className='my-10 tracking-[0.1em] text-[14px] text-[#5d5d5d]'>This fundraiser will benefit
                    <span className='inline-block relative w-fit text-[16px] border-b-[1px] border-solid border-[#c2c2c4] ml-[10px] mr-[5px] text-left overflow-hidden text-[#282828] pr-8'>{benefitter}
                        <span className='absolute top-[3px] right-[6px]'><IoMdArrowDropdown onClick={() => toggleBlockHidden()} /></span>
                    </span>
                </span>
                <div ref={divref} className={`${benefitter === "" ? "block" : "hidden"} transition-all delay-200 ease-in-out text-[#282828] relative w-[480px] h-[535px] z-[2000] rounded-md border-[1px_solid_#cecece] bg-white p-[6%_5%_3%] shadow-[0_0_10px_1px_#d3d3d3] top-[-35px] right-[-34px]`}>
                    <span className=' h-0 w-0 top-[-14px] right-[26.2%] border-solid border-l-transparent border-r-transparent absolute border-l-[12px] border-r-[12px] border-b-[14px] border-b-[#cecece]'></span>
                    <span className=' h-0 w-0 border-solid border-r-transparent border-l-transparent absolute border-l-[9px] border-r-[9px] border-b-[12px] border-b-[#fff] top-[-11.5px] right-[26.6%]'></span>
                    <ul className='absolute m-[0_0_10px] w-full p-[0_10px] top-[35px] left-0'>
                        <li className='leading-[1.5rem] h-[30px] text-[rgba(0,0,0,0.87)] w-[100%] text-left mt-[15px] '>
                            <div className='p-[0_2rem] ml-[-0.75rem] mr-[-0.75rem]'>
                                <div onClick={(e) => handleBenefitterChange(e, "myself")} className='cursor-pointer my-auto w-full bg-[#f8f8f8] text-[14px] border-[1px_solid_#cecece] shadow-[0_0_7px_rgba(31,156,51,.32549)] rounded'>
                                    <div className='my-auto p-[10px_30px_5px]'>Myself</div>
                                </div>
                            </div>
                        </li>
                        <li className="leading-[1.5rem] h-[30px] text-[rgba(0,0,0,0.87)] w-[100%] text-left  mt-[35px]">
                            <label className="p-[0_2rem] ml-[-0.75rem] mr-[-0.75rem] inline-block text-[14px] w-full type-title">My family<span className='text-[12px]'>, next of kin &amp; relatives</span></label>
                            <div class="p-[0_2rem] ml-[-0.75rem] mr-[-0.75rem] flex">
                                <div class="w-full mr-5px">
                                    <div onClick={(e) => handleBenefitterChange(e, "my relative")} className='cursor-pointer my-auto w-full bg-[#f8f8f8] flex items-center text-[14px] border-[1px_solid_#cecece] shadow-[0_0_7px_rgba(31,156,51,.32549)] rounded'>
                                        <GoPerson size={22} className='ml-4' />
                                        <div className='my-auto p-[10px_10px_5px]'>Individual</div>
                                    </div>
                                </div>
                                <div class="w-full ml-5">
                                    <div onClick={(e) => handleBenefitterChange(e, "my relative")} className='cursor-pointer my-auto w-full bg-[#f8f8f8] flex items-center text-[14px] border-[1px_solid_#cecece] shadow-[0_0_7px_rgba(31,156,51,.32549)] rounded'>
                                        <TiGroup size={22} className='ml-4' />
                                        <div className='my-auto p-[10px_10px_5px]'>Group</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="leading-[1.5rem] h-[30px] text-[rgba(0,0,0,0.87)] w-[100%] text-left  mt-[55px]">
                            <label className="p-[0_2rem] ml-[-0.75rem] mr-[-0.75rem] inline-block text-[14px] w-full type-title">My friends<span className='text-[12px]'>, classmates, colleagues & people I know</span></label>
                            <div class="p-[0_2rem] ml-[-0.75rem] mr-[-0.75rem] flex">
                                <div class="w-full mr-5px">
                                    <div onClick={(e) => handleBenefitterChange(e, "my friends")} className='cursor-pointer my-auto w-full bg-[#f8f8f8] flex items-center text-[14px] border-[1px_solid_#cecece] shadow-[0_0_7px_rgba(31,156,51,.32549)] rounded'>
                                        <GoPerson size={22} className='ml-4' />
                                        <div className='my-auto p-[10px_10px_5px]'>Individual</div>
                                    </div>
                                </div>
                                <div class="w-full ml-5">
                                    <div onClick={(e) => handleBenefitterChange(e, "my friends")} className='cursor-pointer my-auto w-full bg-[#f8f8f8] flex items-center text-[14px] border-[1px_solid_#cecece] shadow-[0_0_7px_rgba(31,156,51,.32549)] rounded'>
                                        <TiGroup size={22} className='ml-4' />
                                        <div className='my-auto p-[10px_10px_5px]'>Group</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="leading-[1.5rem] h-[30px] text-[rgba(0,0,0,0.87)] w-[100%] text-left  mt-[55px]">
                            <label className="p-[0_2rem] ml-[-0.75rem] mr-[-0.75rem] inline-block text-[14px] w-full type-title">Others<span className='text-[12px]'> (everyone else: people, animals, businesses, communities etc)</span></label>
                            <div class="p-[0_2rem] ml-[-0.75rem] mr-[-0.75rem] flex">
                                <div class="w-full mr-5px">
                                    <div onClick={(e) => handleBenefitterChange(e, "others")} className='cursor-pointer my-auto w-full bg-[#f8f8f8] flex items-center text-[14px] border-[1px_solid_#cecece] shadow-[0_0_7px_rgba(31,156,51,.32549)] rounded'>
                                        <GoPerson size={22} className='ml-4' />
                                        <div className='my-auto p-[10px_10px_5px]'>Individual</div>
                                    </div>
                                </div>
                                <div class="w-full ml-5">
                                    <div onClick={(e) => handleBenefitterChange(e, "others")} className='cursor-pointer my-auto w-full bg-[#f8f8f8] flex items-center text-[14px] border-[1px_solid_#cecece] shadow-[0_0_7px_rgba(31,156,51,.32549)] rounded'>
                                        <TiGroup size={22} className='ml-4' />
                                        <div className='my-auto p-[10px_10px_5px]'>Group</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='leading-[1.5rem] h-[30px] text-[rgba(0,0,0,0.87)] w-[100%] text-left mt-[60px] '>
                            <div className='p-[0_2rem] ml-[-0.75rem] mr-[-0.75rem] '>
                                <div className='cursor-pointer my-auto w-full bg-[#f8f8f8] text-[14px] border-[1px_solid_#cecece] shadow-[0_0_7px_rgba(31,156,51,.32549)] rounded'>
                                    <div className="my-auto p-[10px_10px_5px]" onClick={(e) => handleBenefitterChange(e, "Registered NGO")}>
                                        <div className='flex items-center align-middle'>
                                            <CgOrganisation size={22} className='ml-4' />
                                            <div className='my-auto p-[10px_10px_5px]'>Registered NGO</div>
                                        </div>
                                        <div className='ml-4'>
                                            A registered not-for-profit that has a valid PAN card issued in its name
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>                                 
                </div>
                {/* Myself */}
                {/* Relative */}
                {/* Frined */}
                {/* Others */}
                {/* NGO */}
            </div >

            {/* Page 3 */}

            {
                count < 4 && <div className='p-[0_50px] fixed bottom-0 w-[100%] z-[1000] '>
                    <div className='p-[40px_10px] w-[60%] relative mx-auto bg-[linear-gradient(0deg,#9c3353,#5f2747)]'>
                        <img className='left-[120px] w-[65.3px] absolute top-[-4px] ' src={"/assets/fixedbottom.png"} alt="temp" />
                        <button onClick={() => handleCountChange()} className='absolute top-[20px] rounded-full right-[40px] inline-block w-[120px] text-[#9c3353] py-2 bg-[#fff] text-[15px] '>Continue</button>
                    </div>
                </div>
            }

        </>
    )
}

export default SetupFundraiser