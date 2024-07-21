import React from 'react'

const Services = () => {
    return (
        <div>
            <div className='overflow-auto md:w-[1440px] md:m-12 h-[100px] border-t-2 border-b-2 flex flex-row justify-around gap-[80px]'>
                <img src="/planet.png" alt="" />
                <img src="/planet.png" alt="" />
                <img src="/planet.png" alt="" />
                <img src="/planet.png" alt="" />
                <img src="/planet.png" alt="" />
                <img src="/planet.png" alt="" />
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center md:justify-around'>
                <div className='flex ml-[3%] md:ml-0 flex-col gap-2'>
                    <h1 className='text-[36px] font-[700] text-[#101828] tracking-[0.326px] leading-[51.84px]'>Full development cycle</h1>
                    <h1>We use proven technologies</h1>
                    <h2 className='text-[20px] font-[700] text-[#101828] tracking-[0.326px] leading-[51.84px]'>Web</h2>
                    <h1 className='w-[300px] md:w-[496px]'>PHP / Javascript / Node.JS / Web Socket / Socket.io / Vue.js/ Nuxt / MySQL / Laravel / GO lang / django / Python</h1>
                    <h2 className='text-[20px] font-[700] text-[#101828] tracking-[0.326px] leading-[51.84px]'>Mobile</h2>
                    <h1 className='w-[300px] md:w-[496px]'>Swift / Kotlin / Alamofire / Firebase / CoreData / Room / Realm / Coroutine / RxJava / RxSwift / Unit Test / Navigation</h1>
                </div>
                <div className='flex flex-col gap-4 mt-4 mr-8'>
                    {[
                        'iOS development',
                        'Android development',
                        'Web development',
                        'UI/UX design',
                        'Testing',
                        'Launch',
                        'IT Consulting'
                    ].map((service) => (
                        <h1 key={service} className='text-[20px] font-[400] flex justify-between items-center'>
                            {service} <span className='text-xl'>&gt;</span>
                        </h1>
                    ))}
                </div>

            </div>
        </div>

    )
}

export default Services
