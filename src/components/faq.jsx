import React, { useState } from 'react';

const faqs = [
    {
        question: "What is the cost of a mobile application?",
        answer: `Development terms directly depend on the requirements for the mobile application, 
        the characteristics of the company, as well as the wishes of the customer. 
        Average development time from start to finished application: 
        Medium projects up to 3 months. 
        Large projects about 4-6 months. 
        To get a more accurate estimate of the project completion time, it is necessary to determine the main task of the application, think over its logic and functionality.`
    },
    {
        question: "How long will development take?",
        answer: `Development terms directly depend on the requirements for the mobile application, 
        the characteristics of the company, as well as the wishes of the customer. 
        Average development time from start to finished application: 
        Medium projects up to 3 months. 
        Large projects about 4-6 months. 
        To get a more accurate estimate of the project completion time, it is necessary to determine the main task of the application, think over its logic and functionality.`
    },
    {
        question: "Do you provide a guarantee for the mobile application?",
        answer: `Development terms directly depend on the requirements for the mobile application, 
        the characteristics of the company, as well as the wishes of the customer. 
        Average development time from start to finished application: 
        Medium projects up to 3 months. 
        Large projects about 4-6 months. 
        To get a more accurate estimate of the project completion time, it is necessary to determine the main task of the application, think over its logic and functionality.`
    },
    {
        question: "I will not tell my idea, do you guarantee confidentiality?",
        answer: `Development terms directly depend on the requirements for the mobile application, 
        the characteristics of the company, as well as the wishes of the customer. 
        Average development time from start to finished application: 
        Medium projects up to 3 months. 
        Large projects about 4-6 months. 
        To get a more accurate estimate of the project completion time, it is necessary to determine the main task of the application, think over its logic and functionality.`
    }
];

const Faq = () => {
    const [clicked, setClicked] = useState(null);

    const toggleClick = index => {
        setClicked(clicked === index ? null : index);
    };

    return (
        <div className='ml-[13%]'>
            <h1 className='text-[36px] leading-[144%] font-[700] tracking-[0.326px] text-[#101828] mb-8'>FAQ</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className='border-t-2 pt-4 hover:cursor-pointer'
                        onClick={() => toggleClick(index)}
                    >
                        <div className='flex flex-row justify-between items-center'>
                            <h1
                                className='text-[#101828] font-semibold text-[20px] leading-[24px] tracking-[0.38px]'
                                style={{ fontFeatureSettings: "'clig' off, 'liga' off" }}
                            >
                                {faq.question}
                            </h1>
                            <div className='h-[36px] w-[36px]'>
                                <img src={clicked === index ? "/add_36 (1).png" : "/add_36.png"} alt="Toggle icon" />
                            </div>
                        </div>
                        {clicked === index && (
                            <div
                                className='mt-4 text-[#101828] text-[15px] leading-[20px] font-normal tracking-[-0.24px]'
                                style={{ fontFeatureSettings: "'clig' off, 'liga' off" }}
                            >
                                {faq.answer.split('\n').map((line, i) => (
                                    <React.Fragment key={i}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
