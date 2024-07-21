import React from 'react'
import Project from './project'

const Projects = () => {
    return (
        <div className='mt-4 h-[1392px] flex flex-col  w-full bg-[#F2F4F7]'>
            <h1 className='md:mt-[100px] w-[300px] md:w-[600px] h-[104px] ml-[2%] md:ml-[13%] md:text-[36px] leading-[144%] font-[700] tracking-[0.326px] text-[#101828]'>Developed more than <span className='text-[#80A948]'>100</span> projects in <span className='text-[#80A948]'>15</span> industries</h1>
            <div className='md:mt-4 flex flex-row justify-center items-center md:gap-[320px]'>
                <div className='flex flex-col gap-[16px]'>
                    <div className='flex flex-row md:gap-2'>
                        <span><img src="/narrative_active_outline_24.png" alt="" /></span>Social Media
                    </div>
                    <div className='flex flex-row gap-[16px]'>
                        <span><img src="/ball_outline_24.png" alt="" /></span>Fitness and sport
                    </div>
                    <div className='flex flex-row gap-[16px]'>
                        <span><img src="/bank_outline_24.png" alt="" /></span>Bank
                    </div>
                    <div className='flex flex-row gap-[16px]'>
                        <span><img src="/employee_outline_24.png" alt="" /></span>Construction
                    </div>
                    <div className='flex flex-row gap-[16px]'>
                        <span><img src="/game_outline_24.png" alt="" /></span>Game projects
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-row gap-2'>
                        <span><img src="/education_outline_24.png" alt="" /></span>Education
                    </div>
                    <div className='flex flex-row gap-2'>
                        <span><img src="/car_outline_24.png" alt="" /></span>Auto, transport 
                    </div>
                    <div className='flex flex-row gap-2'>
                        <span><img src="/health_outline_24.png" alt="" /></span>Medicine, health
                    </div>
                    <div className='flex flex-row gap-2'>
                        <span><img src="/bowl_sticks_outline_24.png" alt="" /></span>Restaurents. food delivery
                    </div>
                    <div className='flex flex-row gap-2'>
                        <span><img src="/Source.png" alt="" /></span>Market, place
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-row gap-2'>
                        <span><img src="/live_outline_24.png" alt="" /></span>AR technology
                    </div>
                    <div className='flex flex-row gap-2'>
                        <span><img src="/video_outline_24.png" alt="" /></span>Tv series
                    </div>
                    <div className='flex flex-row gap-2'>
                        <span><img src="/work_outline_24.png" alt="" /></span>Startups
                    </div>
                    <div className='flex flex-row gap-2'>
                        <span><img src="/magic_wand_outline_24.png" alt="" /></span>Religion
                    </div>
                    <div className='flex flex-row gap-2'>
                        <span><img src="/video_circle_outline_24.png" alt="" /></span>Online courses
                    </div>
                </div>
            </div>
            <h1 className='mt-12 ml-[2%] md:ml-[13%] md:text-[36px] font-[700] leading-[144%] tracking-[0.326px] text-[#101828]'>
                Projects we are proud of
            </h1>
            <h1 className='mt-4 ml-[2%] text-[10px] md:text-[15px] font-[500] leading-[20px] -tracking-[0.24px] w-[300px] md:w-[600px] md:ml-[13%] md:mt-4 '>
                Our software development company is truly proud of the wonderful clients we have worked with. We enjoy a long-term partnership
            </h1>
            <Project/>
        </div>
    )
}

export default Projects
