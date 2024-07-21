import React from 'react'
import { IoMdPhonePortrait } from 'react-icons/io';
import { MdOutlineEmail } from 'react-icons/md';
const Footer = () => {
    return (
        <div className='-mb-4 mt-[1%] bg-[#111] w-auto-[1224px] h-auto-[311px] m-[13%] rounded-lg'>
            <div className='md:ml-[35%] w-[290px] h-[113px] rounded-lg  flex md:justify-center items-center'>
                <img src="/logo2.png" alt="" />
            </div>
            <div className='flex flex-col justify-center items-center md:flex-row md:gap-[80px]'>
                <div className='ml-[15%] flex flex-col gap-0 mt-4'>
                    <div className='flex gap-4 text-[#98A2B3]'>
                        <IoMdPhonePortrait className='text-[#98A2B3]' />
                        <h1 className='text-[14px] leading-[18px] -tracking-[0.154px] text-[#98A2B3]'>Contact nums</h1>
                    </div>
                    <h1 className='pl-2 text-[17px] leading-[22px] -tracking-[0.408px] text-[#FFF]'>+91 00000000</h1>
                </div>
                <div className='flex flex-col gap-0 mt-4'>
                    <div className='flex gap-4 text[#98A2B3]'>
                        <IoMdPhonePortrait className='text-[#98A2B3]' />
                        <h1 className='text-[14px] leading-[18px] -tracking-[0.154px] text-[#98A2B3]'>Contact nums</h1>
                    </div>
                    <h1 className='pl-2 text-[17px] leading-[22px] -tracking-[0.408px] text-[#FFF]'>+91 00000000</h1>
                </div>
                <div className='flex flex-col gap-0 mt-4'>
                    <div className='flex gap-4 text-[#98A2B3]'>
                        <IoMdPhonePortrait className='text-[#98A2B3]' />
                        <h1 className='text-[14px] leading-[18px] -tracking-[0.154px] text-[#98A2B3]'>Contact nums</h1>
                    </div>
                    <h1 className='pl-2 text-[17px] leading-[22px] -tracking-[0.408px] text-[#FFF]'>+91 00000000</h1>
                </div>
                <div className='flex flex-col gap-0 mb-8 mt-4'>
                    <div className='flex gap-4 text-[#98A2B3]'>
                        <IoMdPhonePortrait className='text-[#98A2B3]' />
                        <h1 className='text-[14px] leading-[18px] -tracking-[0.154px] text-[#98A2B3]'>Contact nums</h1>
                    </div>
                    <h1 className='pl-2 text-[17px] leading-[22px] -tracking-[0.408px] text-[#FFF]'>+91 00000000</h1>
                </div>
            </div>
            <h3 className='pl-[40%] pb-4 text-[14px] leading-[18px] -tracking-[0.154px] text-[#98A2B3]'>We work throughout the world</h3>
        </div>
    )
}

export default Footer
