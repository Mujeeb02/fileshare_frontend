import React from 'react';
import { IoMdPhonePortrait } from 'react-icons/io';
import { MdOutlineEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className='absolute z-40 mt-4 flex justify-between items-center max-w-[1222px] w-full h-[100px] bg-[#FFF] rounded-[12px] shadow-[0px 2px 4px 0px rgba(0,0,0,0.8)] p-4'>
      <div className='w-[174px] h-[190px] flex-shrink-0'>
        <img src='/logo.png' alt='Company Logo' className='h-full w-full object-contain' />
      </div>
      <div className='hidden md:flex gap-[24px] font-[SF Pro Text] text-[14px] font-500 tracking-[-0.154px] leading-[18px] text-[#101828]'>
        <div><a href="#services">Services</a></div>
        <div><a href="#media">Media</a></div>
        <div><a href="#cases">Cases</a></div>
        <div><a href="#faq">FAQ</a></div>
        <div><a href="#contact">Contact</a></div>
      </div>
      <div className='flex flex-col md:flex-row gap-4 justify-center items-center text-[#80A948] text-[14px]'>
        <div className='flex gap-2 justify-center items-center'>
          <IoMdPhonePortrait /> +91 000000000
        </div>
        <div className='flex gap-2 justify-center items-center'>
          <MdOutlineEmail /> demo@gmail.com
        </div>
      </div>
      <div className='block md:hidden mr-2'>
        <button className='text-[#101828] text-[24px]'>☰</button>
      </div>
    </div>
  );
};

export default Navigation;
