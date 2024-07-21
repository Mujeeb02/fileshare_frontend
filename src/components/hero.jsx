import React from 'react';
import ContactCard from './contact_card';

const Hero = () => {
  return (
    <div className='absolute mt-[130px] ml-24 bg-inherit flex flex-row items-start'>
      <div className='mb-8'>
        <div className='w-[300px] -ml-20 md:ml-0 md:w-[600px] font-extrabold md:text-[39px] leading-normal tracking-[0.326px] text-[#101828]'>
          <span className='text-[#FFBA00]'>User-Centric Excellence</span>: Our App Development services Tackle Your Pain Points
        </div>
        <div className='w-[300px] -ml-20 md:ml-0 md:w-[600px] md:text-[18px] font-normal text-[#101828] tracking-[-0.24px] leading-normal'>
          Experience a Seamless Digital Journey with <span className='font-bold'>Desun</span> -
          Where Every Line of Code Resolves Your Challenges
          and <span className='text-[#FFBA00] font-bold'>Elevates Your App Experience</span> to Unparalleled Heights.
        </div>
        <div className='w-[300px] -ml-[27%] md:ml-0' id='#contact'>
          <ContactCard />
        </div>
      </div>
      <div className='hidden md:flex -mt-16 pl-[120px] ml-18'>
        <div className='flex flex-row gap-0'>
          <div className='w-[310px] h-[672.314px] rounded-md transform -rotate-12'>
            <img src='/phone1.png' alt='Phone 1' className='h-full w-full object-contain' />
          </div>
          <div className='w-[310px] h-[672.314px] rounded-md transform -rotate-12'>
            <img src='/phone2.png' alt='Phone 2' className='h-full w-full object-contain' />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
