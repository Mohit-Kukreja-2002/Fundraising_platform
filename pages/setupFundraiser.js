//* Imports
import React, { useEffect, useState, useRef } from 'react'
import Navbar from '../components/Navbar'
import { IoMdArrowDropdown } from 'react-icons/io'
import { GoPerson } from 'react-icons/go'
import { AiOutlineCheck, AiTwotonePlusCircle } from 'react-icons/ai'
import { TiGroup } from 'react-icons/ti'
import { MdSchool } from 'react-icons/md'
import { GiCandleLight } from 'react-icons/gi'
import { BsThreeDots, BsFillTelephoneFill } from 'react-icons/bs'
import { CgOrganisation } from 'react-icons/cg'
import { RiStethoscopeLine } from 'react-icons/ri';
import { MdEdit } from 'react-icons/md'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const SetupFundraiser = () => {

    // Variables
    const divref = useRef(null);
    const inputRef = useRef(null);

    const [cause, setCause] = useState("medical");
    const [selectedImage, setSelectedImage] = useState(null);
    const [count, setCount] = useState(1);
    const [value, setValue] = useState('');
    const [benefitter, setBenefitter] = useState("");
    const [details, setdetails] = useState({ category: cause, createdBy: "", creatorMail: "", creatorImg: "", benefitterCreatorRelation: benefitter, benefitterName: "", benefitterAge: "", benefitterGender: "Male", benefitterAddress: "", benefitterContact: "", amountRequired: "", amountRaised: 0, endDateToRaise: "", includeTaxBenefit: true, hospitalName: "", hospitalLocation: "", ailment: "", coverImg: "h", fundraiserTitle: "h", fundraiserStory: "" });

    useEffect(() => {
        // details.category = cause;
        console.log("useEffect running")
    }, [cause, count])


    const handleClick = () => {
        inputRef.current.click();
    };

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

    const handleCountIncreaseChange = () => {
        setCount(count + 1);
    };
    const handleCountDecreaseChange = () => {
        setCount(count - 1);
    };

    const handleImageChange = (event) => {
        setSelectedImage(URL.createObjectURL(event.target.files[0]));
    }

    const toggleBlockHidden = () => {
        if (divref.current.classList.contains("hidden")) {
            divref.current.classList.remove("hidden");
            divref.current.classList.add("block");
        } else {
            divref.current.classList.remove("block");
            divref.current.classList.add("hidden");
        }
    };

    const handleChange = (content, delta, source, editor, e) => {
        changing(e);
        setValue(content);
    }

    const changing = (e) => {
        console.log(details);
        setdetails({ ...details, [e.target.name]: e.target.value });
    }

    const host=`${process.env.NEXT_PUBLIC_DEPLOYED}`;

    const handleSubmit = async (e) => {
        setdetails(cause, details.createdBy, details.creatorMail, details.creatorImg, benefitter, details.benefitterName, details.benefitterAge, details.benefitterGender, details.benefitterAddress, details.benefitterContact, details.amountRequired, details.amountRaised, details.endDateToRaise, details.includeTaxBenefit, details.hospitalName, details.hospitalLocation, details.ailment, details.coverImg, details.fundraiserTitle, details.fundraiserStory);

        const response = await fetch(`${host}/api/setupfund/createRequest`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(details)
        });
        const json=await response.json();
        console.log("Processing the fundraise request", json);
        // e.preventDefault();
        setdetails({ category: "", createdBy: "", creatorMail: "", creatorImg: "", benefitterCreatorRelation: "", benefitterName: "", benefitterAge: "", benefitterGender: "", benefitterAddress: "", benefitterContact: "", amountRequired: "", amountRaised: 0, endDateToRaise: "", includeTaxBenefit: "", hospitalName: "", hospitalLocation: "", ailment: "", coverImg: "", fundraiserTitle: "", fundraiserStory: "" });
    }
    // setupfundraiser(cause, details.createdBy, details.creatorMail, details.creatorImg, benefitter, details.benefitterName, details.benefitterAge, details.benefitterGender, details.benefitterAddress, details.benefitterContact, details.amountRequired, details.amountRaised, details.endDateToRaise, details.includeTaxBenefit, details.hospitalName, details.hospitalLocation, details.ailment, details.coverImg, details.fundraiserTitle, details.fundraiserStory);

    return (
        <>
            <Navbar navtype={"setupFundraiser"} count={count} />
            {/* Page 1 */}
            <div className={`${count !== 1 ? "hidden" : ""} mb-[100px] mt-[72px] flex flex-col items-center justify-center`}>
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
                    <div className=" relative left-[-170px]">
                        <input value={details.createdBy} onChange={changing} id="createdBy" type="name" name="createdBy" className="peer h-10 w-[270%] border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600" placeholder="name" />
                        <label htmlFor="name" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Name</label>
                    </div>
                    <div className="mt-10 relative left-[-170px]">
                        <input value={details.creatorMail} onChange={changing} id="email" name="creatorMail" type="text" className="w-[270%] h-10 text-gray-900 placeholder-transparent border-b-2 border-gray-300 peer focus:outline-none focus:border-rose-600" placeholder="john@doe.com" />
                        <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email address</label>
                    </div>
                </form>
            </div>

            {/* Page 2 */}
            <div className={`${count !== 2 ? "hidden" : ""} mb-[100px] mt-[72px] flex flex-col items-center justify-center`}>
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
                            <div className="p-[0_2rem] ml-[-0.75rem] mr-[-0.75rem] flex">
                                <div className="w-full mr-5px">
                                    <div onClick={(e) => handleBenefitterChange(e, "my relative")} className='cursor-pointer my-auto w-full bg-[#f8f8f8] flex items-center text-[14px] border-[1px_solid_#cecece] shadow-[0_0_7px_rgba(31,156,51,.32549)] rounded'>
                                        <GoPerson size={22} className='ml-4' />
                                        <div className='my-auto p-[10px_10px_5px]'>Individual</div>
                                    </div>
                                </div>
                                <div className="w-full ml-5">
                                    <div onClick={(e) => handleBenefitterChange(e, "my relative")} className='cursor-pointer my-auto w-full bg-[#f8f8f8] flex items-center text-[14px] border-[1px_solid_#cecece] shadow-[0_0_7px_rgba(31,156,51,.32549)] rounded'>
                                        <TiGroup size={22} className='ml-4' />
                                        <div className='my-auto p-[10px_10px_5px]'>Group</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="leading-[1.5rem] h-[30px] text-[rgba(0,0,0,0.87)] w-[100%] text-left  mt-[55px]">
                            <label className="p-[0_2rem] ml-[-0.75rem] mr-[-0.75rem] inline-block text-[14px] w-full type-title">My friends<span className='text-[12px]'>, classmates, colleagues & people I know</span></label>
                            <div className="p-[0_2rem] ml-[-0.75rem] mr-[-0.75rem] flex">
                                <div className="w-full mr-5px">
                                    <div onClick={(e) => handleBenefitterChange(e, "my friends")} className='cursor-pointer my-auto w-full bg-[#f8f8f8] flex items-center text-[14px] border-[1px_solid_#cecece] shadow-[0_0_7px_rgba(31,156,51,.32549)] rounded'>
                                        <GoPerson size={22} className='ml-4' />
                                        <div className='my-auto p-[10px_10px_5px]'>Individual</div>
                                    </div>
                                </div>
                                <div className="w-full ml-5">
                                    <div onClick={(e) => handleBenefitterChange(e, "my friends")} className='cursor-pointer my-auto w-full bg-[#f8f8f8] flex items-center text-[14px] border-[1px_solid_#cecece] shadow-[0_0_7px_rgba(31,156,51,.32549)] rounded'>
                                        <TiGroup size={22} className='ml-4' />
                                        <div className='my-auto p-[10px_10px_5px]'>Group</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="leading-[1.5rem] h-[30px] text-[rgba(0,0,0,0.87)] w-[100%] text-left  mt-[55px]">
                            <label className="p-[0_2rem] ml-[-0.75rem] mr-[-0.75rem] inline-block text-[14px] w-full type-title">Others<span className='text-[12px]'> (everyone else: people, animals, businesses, communities etc)</span></label>
                            <div className="p-[0_2rem] ml-[-0.75rem] mr-[-0.75rem] flex">
                                <div className="w-full mr-5px">
                                    <div onClick={(e) => handleBenefitterChange(e, "others")} className='cursor-pointer my-auto w-full bg-[#f8f8f8] flex items-center text-[14px] border-[1px_solid_#cecece] shadow-[0_0_7px_rgba(31,156,51,.32549)] rounded'>
                                        <GoPerson size={22} className='ml-4' />
                                        <div className='my-auto p-[10px_10px_5px]'>Individual</div>
                                    </div>
                                </div>
                                <div className="w-full ml-5">
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
                {benefitter === "myself" && <div className='items-center border-solid border-2 border-[#beb0b4] mb-20 rounded-3xl overflow-hidden shadow-2xl'>
                    <div className='p-3 bg-slate-200'>
                        <div className='relative w-20 h-20 m-auto'>
                            <img className='rounded-full h-20 w-20 border-[#beb0b4] border-solid border-2 border-rounded p-0' src={selectedImage || '/assets/user.png'} alt="Selected" onClick={handleClick} />
                            <input type="file" accept="image/*" ref={inputRef} onChange={handleImageChange} style={{ display: 'none' }} />
                            <AiTwotonePlusCircle size={20} className="z-[200]  bottom-1 right-0 absolute m-0 text-[#9c3353]" />
                        </div>
                    </div>
                    <div className='p-4 px-20 pb-10 space-y-4 border-t border-b-0'>
                        <div> <span>I'm </span>
                            <input value={details.benefitterName} onChange={changing} type="text" name="benefitterName" id="name" className='flex-1 py-1 text-gray-600 border-b-2 border-gray-400 outline-none' placeholder='  Name' />
                        </div>
                        <div>
                            <input value={details.benefitterAge} onChange={changing} type="number" name="benefitterAge" id="age" className='flex-1 py-1 mr-1 text-gray-600 border-b-2 border-gray-400 outline-none' placeholder='Age' />
                            <select id="date" name="date" className='flex-1 py-1.5 border-b-2 border-gray-400 text-gray-600 outline-none'>
                                <option value="year">years</option>
                                <option value="month">months</option>
                                <option value="day">days</option>
                            </select>
                        </div>
                        <div className="pt-6 grid w-[18rem] grid-cols-3 p-2" x-data="app">
                            <div>
                                <input checked type="radio" name="option" id="0" className="hidden peer" />
                                <label htmlFor="0" className="block cursor-pointer select-none p-2 text-center peer-checked:bg-[#9c3353] peer-checked:font-bold peer-checked:text-white">Male</label>
                            </div>
                            <div>
                                <input type="radio" name="option" id="1" className="hidden peer" />
                                <label htmlFor="1" className="block cursor-pointer select-none p-2 text-center peer-checked:bg-[#9c3353] peer-checked:font-bold peer-checked:text-white">Female</label>
                            </div>
                            <div>
                                <input type="radio" name="option" id="2" className="hidden peer" />
                                <label htmlFor="2" className="block cursor-pointer select-none p-2 text-center peer-checked:bg-[#9c3353] peer-checked:font-bold peer-checked:text-white">Other</label>
                            </div>
                        </div>
                        <br />
                        <div>I'm residing in <input value={details.benefitterAddress} onChange={changing} type="text" name="benefitterAddress" id="city" className='flex-1 py-0 text-gray-600 border-b-2 border-gray-400 outline-none' /> </div>
                    </div>
                    <div className='p-4 px-20 bg-slate-200'>
                        <div className='border-b-2 border-gray-400'>
                            <BsFillTelephoneFill className='text-[#000000] inline' />
                            <select id="ccode" name="ccode" className='flex-1 py-1.5 outline-none inline bg-slate-200'>
                                <option value="0">+91</option>
                                <option value="1">+1</option>
                                <option value="2">+2</option>
                            </select>
                            <input value={details.benefitterContact} onChange={changing} type="tel" name="benefitterContact" id="number" className='flex-1 inline py-1 text-gray-600 outline-none bg-slate-200' placeholder="Beneficiary's mobile no." />
                        </div>
                    </div>
                </div>}
                {/* Relative */}
                {benefitter === "my relative" && <div className='items-center border-solid border-2 border-[#beb0b4] mb-20 rounded-3xl overflow-hidden shadow-2xl'>
                    <div className='p-3 bg-slate-200'>
                        <div className='relative w-20 h-20 m-auto'>
                            <img className='rounded-full h-20 w-20 border-[#beb0b4] border-solid border-2 border-rounded p-0' src={selectedImage || '/assets/user.png'} alt="Selected" onClick={handleClick} />
                            <input type="file" accept="image/*" ref={inputRef} onChange={handleImageChange} style={{ display: 'none' }} />
                            <AiTwotonePlusCircle size={20} className="absolute z-[200]  bottom-1 right-0 m-0 text-[#9c3353]" />
                        </div>
                    </div>

                    <div className='items-center p-4 px-20 pb-10 space-y-4 border-t border-b-0'>
                        <div>
                            <input type="text" name="name" id="name" className='flex-1 w-full py-1 text-gray-600 border-b-2 border-gray-400 outline-none' placeholder="Relative's name" />
                        </div>
                        <div className='inline-block ml-10'>
                            is my
                            <select id="relative" name="relative" className='flex-1 py-1.5 pl-2 pr-16 border-b-2 border-gray-400 text-gray-600 outline-none'>
                                <option value="0">relation</option>
                                <option value="1">father</option>
                                <option value="2">mother</option>
                                <option value="3">sister</option>
                                <option value="4">brother</option>
                                <option value="5">spouse</option>
                            </select>
                        </div>
                        <div>
                            <input type="number" name="age" id="age" className='flex-1 py-1 mr-1 text-gray-600 border-b-2 border-gray-400 outline-none' placeholder='Age' />
                            <select id="date" name="date" className='flex-1 py-1.5 border-b-2 border-gray-400 text-gray-600 outline-none'>
                                <option value="year">years</option>
                                <option value="month">months</option>
                                <option value="day">days</option>
                            </select>
                        </div>
                        <br />
                        <div>& residing in <input type="text" name="city" id="city" className='flex-1 py-0 text-gray-600 border-b-2 border-gray-400 outline-none' /> </div>
                    </div>
                    <div className='p-4 px-20 bg-slate-200'>
                        <div className='border-b-2 border-gray-400'>
                            <BsFillTelephoneFill className='text-[#000000] inline' />
                            <select id="ccode" name="ccode" className='flex-1 py-1.5 outline-none inline bg-slate-200'>
                                <option value="0">+91</option>
                                <option value="1">+1</option>
                                <option value="2">+2</option>
                            </select>
                            <input type="tel" name="number" id="number" className='flex-1 inline py-1 text-gray-600 outline-none bg-slate-200' placeholder="Beneficiary's mobile no." />
                        </div>
                    </div>
                </div>}
                {/* Frined */}
                {benefitter === "my friends" && <div className='items-center border-solid border-2 border-[#beb0b4] mb-20 rounded-3xl overflow-hidden shadow-2xl'>
                    <div className='p-3 bg-slate-200'>
                        <div className='relative w-20 h-20 m-auto'>
                            <img className='rounded-full h-20 w-20 border-[#beb0b4] border-solid border-2 border-rounded p-0' src={selectedImage || '/assets/user.png'} alt="Selected" onClick={handleClick} />
                            <input type="file" accept="image/*" ref={inputRef} onChange={handleImageChange} style={{ display: 'none' }} />
                            <AiTwotonePlusCircle size={20} className="absolute z-[200]  bottom-1 right-0 m-0 text-[#9c3353]" />
                        </div>
                    </div>

                    <div className='items-center p-4 px-20 pb-10 space-y-4 border-t border-b-0'>
                        <div>
                            <input type="text" name="name" id="name" className='flex-1 w-full py-1 text-gray-600 border-b-2 border-gray-400 outline-none' placeholder="Write friend's full name" />
                        </div>
                        <div>
                            <input type="number" name="age" id="age" className='flex-1 py-1 mr-1 text-gray-600 border-b-2 border-gray-400 outline-none' placeholder='Age' />
                            <select id="date" name="date" className='flex-1 py-1.5 border-b-2 border-gray-400 text-gray-600 outline-none'>
                                <option value="year">years</option>
                                <option value="month">months</option>
                                <option value="day">days</option>
                            </select>
                        </div>
                        <br />
                        <div
                            className="grid w-[18rem] grid-cols-3 p-2"
                            x-data="app"
                        >
                            <div>
                                <input type="radio" name="option" id="0" className="hidden peer" checked />
                                <label htmlFor="0" className="block cursor-pointer select-none p-2 text-center peer-checked:bg-[#9c3353] peer-checked:font-bold peer-checked:text-white">Male</label>
                            </div>
                            <div>
                                <input type="radio" name="option" id="1" className="hidden peer" />
                                <label htmlFor="1" className="block cursor-pointer select-none p-2 text-center peer-checked:bg-[#9c3353] peer-checked:font-bold peer-checked:text-white">Female</label>
                            </div>
                            <div>
                                <input type="radio" name="option" id="2" className="hidden peer" />
                                <label htmlFor="2" className="block cursor-pointer select-none p-2 text-center peer-checked:bg-[#9c3353] peer-checked:font-bold peer-checked:text-white">Other</label>
                            </div>
                        </div>
                        <div>& residing in <input type="text" name="city" id="city" className='flex-1 py-0 text-gray-600 border-b-2 border-gray-400 outline-none' /> </div>
                    </div>
                    <div className='p-4 px-20 bg-slate-200'>
                        <div className='border-b-2 border-gray-400'>
                            <BsFillTelephoneFill className='text-[#000000] inline' />
                            <select id="ccode" name="ccode" className='flex-1 py-1.5 outline-none inline bg-slate-200'>
                                <option value="0">+91</option>
                                <option value="1">+1</option>
                                <option value="2">+2</option>
                            </select>
                            <input type="tel" name="number" id="number" className='flex-1 inline py-1 text-gray-600 outline-none bg-slate-200' placeholder="Beneficiary's mobile no." />
                        </div>
                    </div>
                </div>}
                {/* Others */}
                {benefitter === "others" && <div className='items-center border-solid border-2 border-[#beb0b4] mb-20 rounded-3xl overflow-hidden shadow-2xl'>
                    <div className='p-3 bg-slate-200'>
                        <div className='relative w-20 h-20 m-auto'>
                            <img className='rounded-full h-20 w-20 border-[#beb0b4] border-solid border-2 border-rounded p-0' src={selectedImage || '/assets/user.png'} alt="Selected" onClick={handleClick} />
                            <input type="file" accept="image/*" ref={inputRef} onChange={handleImageChange} style={{ display: 'none' }} />
                            <AiTwotonePlusCircle size={20} className="absolute z-[200]  bottom-1 right-0 m-0 text-[#9c3353]" />
                        </div>
                    </div>

                    <div className='items-center p-4 px-20 pb-10 text-gray-400 border-t border-b-0'>
                        <div>Funds raised will help <input type="text" name="name" id="name" className='flex-1 py-0 text-gray-600 border-b-2 border-gray-400 outline-none' /> </div>
                        <div className='pt-3 my-8 ml-4'>based out of<input type="text" name="city" id="city" className='py-0 text-gray-600 border-b-2 border-gray-400 outline-none' /> </div>
                    </div>
                    <div className='p-4 px-20 bg-slate-200'>
                        <div className='border-b-2 border-gray-400'>
                            <BsFillTelephoneFill className='text-[#000000] inline' />
                            <select id="ccode" name="ccode" className='flex-1 py-1.5 outline-none inline bg-slate-200'>
                                <option value="0">+91</option>
                                <option value="1">+1</option>
                                <option value="2">+2</option>
                            </select>
                            <input type="tel" name="number" id="number" className='flex-1 inline py-1 text-gray-600 outline-none bg-slate-200' placeholder="Beneficiary's mobile no." />
                        </div>
                    </div>
                </div>}
                {/* NGO */}
                {benefitter === "Registered NGO" && <div className='items-center border-solid border-2 border-[#beb0b4] mb-20 rounded-3xl overflow-hidden shadow-2xl'>
                    <div className='items-center p-4 px-20 pb-10 text-gray-400 border-t border-b-0'>
                        <input type="text" name="organ" id="organ" className='flex-1 w-full my-4 text-gray-600 border-b-2 border-gray-400 outline-none' placeholder='Name of the organisation' />
                        <div>Funds raised will help <input type="text" name="name" id="name" className='flex-1 py-0 mt-4 text-gray-600 border-b-2 border-gray-400 outline-none' /> </div>
                        <div className='pt-3 my-6 ml-0'>based out of<input type="text" name="city" id="city" className='py-0 text-gray-600 border-b-2 border-gray-400 outline-none ' /> </div>
                    </div>
                    <div className='p-4 px-20 bg-slate-200'>
                        <div className='border-b-2 border-gray-400'>
                            <BsFillTelephoneFill className='text-[#000000] inline' />
                            <select id="ccode" name="ccode" className='flex-1 py-1.5 outline-none inline bg-slate-200'>
                                <option value="0">+91</option>
                                <option value="1">+1</option>
                                <option value="2">+2</option>
                            </select>
                            <input type="tel" name="number" id="number" className='flex-1 inline py-1 text-gray-600 outline-none bg-slate-200' placeholder="Beneficiary's mobile no." />
                        </div>
                    </div>
                </div>}
            </div >

            {/* Page 3 */}
            <div className={`${count !== 3 ? "hidden" : ""} mb-[100px] mt-[72px] flex flex-col items-center justify-center`}>
                <div className='text-[#282828] border-[1.5px] border-solid border-[#e0e1e3] tracking-widest text-[16px] p-[10px_0] bg-[hsla(210,4%,89%,.2)] w-[200px] text-center '>Cause Details</div>
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
                {/* medical */}
                {cause === "medical" && <div className='my-10 space-y-10 text-gray-500 w-[460px] '>
                    <div>
                        <span>I want to raise &#8377;</span>
                        <input value={details.amountRequired} onChange={changing} type="number" name="amountRequired" id="amount" className='flex-1 py-1 text-gray-600 border-b-2 border-gray-400 outline-none' />
                    </div>
                    <div className='ml-24'>
                        <span>by</span>
                        <div className='relative inline'>
                            <input value={details.endDateToRaise} onChange={changing} type="date" name="endDateToRaise" id="date" className="flex-1 px-2 py-1 text-black border-b-2 outline-none border-gray-40" />
                            <p className=' absolute text-[13px] top-[-16px] pl-7'>End Date</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='text-sm text-black'>Do you want donors to receive tax benefits for their donation?</div>
                        <div>
                            <div className="grid w-[12rem] grid-cols-2" x-data="app">
                                <div>
                                    <input value={true} onChange={changing} type="radio" name="includeTaxBenefit" id="0" className="hidden peer" checked />
                                    <label htmlFor="Yes" className="block p-2 text-center cursor-pointer select-none peer-checked:bg-green-500 peer-checked:font-bold peer-checked:text-white">Yes</label>
                                </div>
                                <div>
                                    <input value={false} onChange={changing} type="radio" name="includeTaxBenefit" id="1" className="hidden peer" />
                                    <label htmlFor="No" className="block p-2 text-center cursor-pointer select-none peer-checked:bg-green-500 peer-checked:font-bold peer-checked:text-white">No</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='space-y-4'>
                        <p className='text-sm'>Hospital name, location and ailment will have to be provided in order to issue tax receipts to your donors</p>
                        <input value={details.hospitalName} onChange={changing} type="text" name="hospitalName" id="Hname" className='flex-1 py-0.5 border-b-2 border-gray-400 text-gray-400 outline-none w-full' placeholder='Hospital Name' />
                        <input value={details.hospitalLocation} onChange={changing} type="text" name="hospitalLocation" id="Hloc" className='flex-1 py-0.5 border-b-2 border-gray-400 text-gray-400 outline-none w-full' placeholder='Location (City) of the hospital' />
                        <input value={details.ailment} onChange={changing} type="text" name="ailment" id="ailment" className='flex-1 py-0.5 border-b-2 border-gray-400 text-gray-400 outline-none w-full' placeholder='Ailment' />
                    </div>
                </div>}

                {/* education and others */}
                {(cause === "education" || cause === "others") && <div className='my-10 space-y-10 text-gray-500 w-[460px]'>
                    <div>
                        <span>I want to raise &#8377;</span>
                        <input type="number" name="amount" id="amount" className='flex-1 py-1 text-gray-600 border-b-2 border-gray-400 outline-none' />
                    </div>
                    <div className='ml-24'>
                        <span>by</span>
                        <div className='relative inline'>
                            <input type="date" name="date" id="date" className="flex-1 px-2 py-1 text-black border-b-2 outline-none border-gray-40" />
                            <p className=' absolute text-[13px] top-[-16px] pl-7'>End Date</p>
                        </div>
                    </div>
                </div>}

                {/* Memorial */}
                {cause === "memorial" && <div className='my-10 space-y-10 text-gray-500 w-[460px] '>
                    <div>
                        <span>I want to raise &#8377;</span>
                        <input type="number" name="amount" id="amount" className='flex-1 py-1 text-gray-600 border-b-2 border-gray-400 outline-none' />
                    </div>
                    <div className='ml-24'>
                        <span>by</span>
                        <div className='relative inline'>
                            <input type="date" name="date" id="date" className="flex-1 px-2 py-1 text-black border-b-2 outline-none border-gray-40" />
                            <p className=' absolute text-[13px] top-[-16px] pl-7'>End Date</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='text-sm text-black'>Do you want donors to receive tax benefits for their donation?</div>
                        <div>
                            <div className="grid w-[12rem] grid-cols-2" x-data="app">
                                <div>
                                    <input type="radio" name="tax" id="0" className="hidden peer" checked />
                                    <label htmlFor="Yes" className="block p-2 text-center cursor-pointer select-none peer-checked:bg-green-500 peer-checked:font-bold peer-checked:text-white">Yes</label>
                                </div>
                                <div>
                                    <input type="radio" name="tax" id="1" className="hidden peer" />
                                    <label htmlFor="No" className="block p-2 text-center cursor-pointer select-none peer-checked:bg-green-500 peer-checked:font-bold peer-checked:text-white">No</label>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>}

            </div>

            {/* Page 4 */}
            <div className={`${count !== 4 ? "hidden" : ""} mb-[100px] mt-[72px] flex flex-col items-center justify-center`}>
                <div className='text-[#282828] mb-6 border-[1.5px] border-solid border-[#e0e1e3] tracking-widest text-[16px] p-[10px_0] bg-[hsla(210,4%,89%,.2)] w-[200px] text-center '>Elaborate Cause</div>
                <div className='py-0'>
                    <div className='relative h-[220px] w-[380px] m-auto rounded-xl'>
                        <img className='p-0 my-2 rounded-xl h-[220px] w-[380px]' src={selectedImage || '/assets/medical.jpg'} alt="Selected" onClick={handleClick} />
                        <input className='h-[220px] w-[380px]' type="file" accept="image/*" ref={inputRef} onChange={handleImageChange} style={{ display: 'none' }} />
                        {selectedImage === null &&
                            <div className='bg-[#9c3353] text-sm py-0.5 px-2 text-white absolute top-[-5px] right-[-20px] rounded-2xl'>Upload Cover Photo</div>
                        }
                        {selectedImage !== null &&
                            <div className="absolute bottom-[-4px] right-[-4px] m-0 bg-[#9c3353] p-2 rounded-full " onClick={handleClick}>
                                <MdEdit className='text-white' />
                            </div>
                        }
                    </div>
                </div>
                <div className='mt-8 pb-16 p-8 w-[480px] items-center border-solid border-2 border-[#beb0b4] mb-10 rounded-3xl overflow-hidden shadow-2xl'>
                    <div>
                        <p className='text-center'>Name your fundraiser</p>
                        <input onChange={changing} value={details.fundraiserTitle} type="text" name="fundraiserTitle" id="title" className='flex-1 w-full p-2 py-1 text-sm text-center text-gray-600 border-b-2 border-gray-400 outline-none align-centre' placeholder="Eg: Help Mohit in saving activa" />
                    </div>
                    <div className='p-1 mt-4 bg-gray-500 rounded-xl'>
                        <div className='pb-10 m-1 bg-white rounded-lg'>
                            <ReactQuill className='m-0 h-[300px] placeholder:text-gray-400'
                                value={details.fundraiserStory}
                                name="fundraiserStory"
                                // onChange={changing}
                                placeholder="Write your story. Keep it simple, personal, and about the specific use of funds. Write about: Who is this fundraiser for? When do you need funds? How do you plan to use the funds?"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className='p-[0_50px] fixed bottom-0 w-[100%] z-[1000] '>
                <div className='max-h-[80px] p-[40px_10px] w-[60%] relative mx-auto bg-[linear-gradient(0deg,#9c3353,#5f2747)] flex items-center'>
                    <img className='left-[120px] w-[65.3px] absolute top-[-4px] ' src={"/assets/fixedbottom.png"} alt="temp" />
                    {count > 2 && <button onClick={() => handleCountDecreaseChange()} className='w-fit ml-8 underline underline-offset-4 text-white py-2 text-[15px] '>Back</button>}
                    {count === 4 &&
                        <button onClick={() => handleSubmit()} className='absolute rounded-full right-[40px] inline-block w-[120px] text-[#9c3353] py-2 bg-[#fff] text-[15px] '>Continue</button>
                    }{count !== 4 &&
                        <button onClick={() => handleCountIncreaseChange()} className='absolute rounded-full right-[40px] inline-block w-[120px] text-[#9c3353] py-2 bg-[#fff] text-[15px] '>Continue</button>
                    }
                    {count > 1 && <button className={`absolute right-[180px] text-white py-2 text-[15px] underline underline-offset-4`}>Close</button>}
                </div>
            </div>
        </>
    )
}

// export async function getServerSideProps(context) {
//     if (!mongoose.connections[0].readystate) {
//         await mongoose.connect(process.env.MONGO_URI);
//     }

//     const setupfundraiser = async (category, createdBy, creatorMail, creatorImg, benefitterCreatorRelation, benefitterName, benefitterAge, benefitterGender, benefitterAddress, benefitterContact, amountRequired, amountRaised, endDateToRaise, includeTaxBenefit, hospitalName, hospitalLocation, ailment, coverImg, fundraiserTitle, fundraiserStory) => {
//         const response = await fetch(`${host}/api/profile/addEmployee`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 // 'auth-token': localStorage.getItem('token').toString()
//             },
//             body: JSON.stringify({ category, createdBy, creatorMail, creatorImg, benefitterCreatorRelation, benefitterName, benefitterAge, benefitterGender, benefitterAddress, benefitterContact, amountRequired, amountRaised, endDateToRaise, includeTaxBenefit, hospitalName, hospitalLocation, ailment, coverImg, fundraiserTitle, fundraiserStory })
//         });
//         // const json = await response.json();
//         console.log("Processing the fundraise request", response)
//         // setProfiles(profiles.concat(json))
//     }
//     return {
//         props: { }, // will be passed to the page component as props
//     };
// }

export default SetupFundraiser