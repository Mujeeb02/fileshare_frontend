import React from 'react'

const Team = () => {
    return (
        <div className='mt-[950px] md:-mt-[10%]  bg-[#F2F4F7] flex flex-row h-auto w-full'>
            <div className='flex flex-col gap-[24px] ml-[13%] mt-[7%]'>
                <h1 className='text-[36px] leading-[144%] font-[700] tracking-[0.326px] text-[#101828]'>Our Team</h1>
                <h2 className='w-[300px] md:w-[600px] text-[15px] leading-[20px] font-[500] -tracking-[0.24px] text-[#101828]'>Thousand is a full-cycle digital production company with its own product analytics, design, web and mobile development.</h2>
                <div className=' md:-ml-[10%] flex flex-col items-center md:flex-row justify-center  md:justify-around'>
                    <div className='flex flex-row justify-center items-center gap-4 md:flex-col  md:gap-0'>
                        <h1 className='text-[36px] leading-[144%] font-[700] tracking-[0.326px] text-[#101828]'>28</h1>
                        <h2 className='text-[15px] leading-[20px] font-[500] -tracking-[0.24px] text-[#667085]'>team members</h2>
                    </div>
                    <div className='flex flex-row justify-center items-center gap-4 md:flex-col  md:gap-0'>
                        <h1 className='text-[36px] leading-[144%] font-[700] tracking-[0.326px] text-[#101828]'>+100</h1>
                        <h2 className='text-[15px] leading-[20px] font-[500] -tracking-[0.24px] text-[#667085]'>projects</h2>
                    </div>
                    <div className='flex flex-row justify-center items-center gap-4 md:flex-col  md:gap-0'>
                        <h1 className='text-[36px] leading-[144%] font-[700] tracking-[0.326px] text-[#101828]'>7 Years</h1>
                        <h2 className='text-[15px] leading-[20px] font-[500] -tracking-[0.24px] text-[#667085]'>in IT sphere</h2>
                    </div>
                </div>
                <h3 className='w-[300px] md:w-[600px] text-[15px] leading-[20px] font-[500] -tracking-[0.24px] text-[#101828]'>All the necessary specialists - from a designer to a tester - are on our staff. We hire the best specialists in the market. It's expensive but worth it</h3>
            </div>
            <div className='mt-[5%] ml-[24px] w-[600px] h-[400px] rounded-lg'>
                <img src="/team.png" alt="" className='rounded-lg' />
            </div>
        </div>
    )
}

export default Team
