// src/components/Project.jsx
import React, { useState } from 'react';

const Project = () => {
    

    const projects = [
        {
            id: 1,
            title: 'Project 1',
            description: 'Crafted an innovative rental property management app, seamlessly integrating secure login, absence registration, and a tenant notice board. Elevating the resident experience with user-friendly design and efficient communication channels',
            details: 'Business analysis / iOS / Android / QA / UI/UX Design',
            location: 'India',
            industry: 'Real Estate',
            userGrowth: '400%',
            activeUsers: '+ 200 000',
            imageSrc: '/mobile.png',
            iosBadge: '/ios.png',
            frameBadge: '/Frame 10782.png'
        },
        {
            id: 2,
            title: 'Project 2',
            description: 'Details of Project 2...',
        },
        {
            id: 3,
            title: 'Project 3',
            description: 'Details of Project 3...',
        },
        {
            id: 4,
            title: 'Project 4',
            description: 'Details of Project 4...',
        },
    ];

    const [selectedProject, setSelectedProject] = useState(projects[0]);

    const handleProjectClick = (project) => {
        console.log(project)
        setSelectedProject(project);
    };

    return (
        <div className='mb-2 md:mb-0 mt-8 ml-[2%] md:ml-[13%]'>
            <div className='flex flex-row gap-4 md:gap-12'>
                {projects.map(project => (
                    <div key={project.id} onClick={() => handleProjectClick(project)}>
                        {project.title}
                    </div>
                ))}
            </div>
            {selectedProject && (
                <div className='mb-2 md:mb-0 flex flex-row gap-[24px] mt-4'>
                    <div className='flex flex-col gap-8'>
                        <h1 className='text-[36px] leading-[144%] font-[700] tracking-[0.326px] text-[#101828]'>{selectedProject.title}</h1>
                        <h2 className='w-[300px] md:w-[600px] text-[15px] leading-[20px] font-[400] -tracking-[0.24px] text-[#101828]'>
                            {selectedProject.description}
                        </h2>
                        <h3 className='w-[300px] md:w-[496px] text-[17px] leading-[22px] font-[400] -tracking-[0.408px] text-[#475467]'>
                            {selectedProject.details}
                        </h3>
                        <div className='flex flex-row gap-8'>
                            <h1 className='flex flex-row gap-2'><span><img src="/place_outline_24.png" alt="" /></span> {selectedProject.location}</h1>
                            <h1 className='flex flex-row gap-2'><span><img src="/work_outline_24.png" alt="" /></span> {selectedProject.industry}</h1>
                        </div>
                        <div className='flex flex-row gap-8'>
                            <div className='flex flex-col'>
                                <h1 className='text-[24px] leading-[144%] font-[700] tracking-[0.326px] text-[#101828]'>{selectedProject.userGrowth}</h1>
                                <h2 className='text-[13px] font-[400] leading-[16px] -tracking-[0.078px] text-[#667085]'>User Growth</h2>
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='text-[24px] leading-[144%] font-[700] tracking-[0.326px] text-[#101828]'>{selectedProject.activeUsers}</h1>
                                <h2 className='text-[13px] font-[400] leading-[16px] -tracking-[0.078px] text-[#667085]'>Active Users</h2>
                            </div>
                        </div>
                        <div className='flex flex-row gap-8'>
                            <img src={selectedProject.iosBadge} alt="" className='h-[40px] w-[148px]'/>
                            <img src={selectedProject.frameBadge} alt="" />
                        </div>
                    </div>
                    <div className=''>
                        <img src={selectedProject.imageSrc} alt="" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Project;
