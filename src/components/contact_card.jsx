import React, { useState } from 'react';
import { toast } from 'react-toastify'; // Import toast

const ContactCard = () => {
    const [fullName, setName] = useState("");
    const [number, setNumber] = useState("");
    const [business, setBusiness] = useState("");
    const [email, setEmail] = useState("");
    const data = {
        fullName, number, business, email
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://fileshare-backend-do2r.onrender.com/api/user/create', {
                credentials: 'include',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                toast.error("User could not be created");
                throw new Error(`User creation failed with status: ${response.status}`);
            }

            const res = await response.json();
            toast.success("Thank you! We'll get back to you");
            console.log(res);

        } catch (error) {
            console.error("An error occurred:", error);
            toast.error("Something went wrong. Please try again later.");
        }

        console.log(data);
    }

    return (
        <div className='w-auto md:w-[600px] bg-[#FFF] mt-4 p-6 rounded-lg' style={{
            boxShadow: "0px 0px 2px 0px rgba(0, 0, 0, 0.08), 0px 0px 24px 0px rgba(0, 0, 0, 0.16)"
        }}>
            <h1 className='text-[20px] leading-[120%] font-[700] tracking-[0.38px] text-[#101828] mb-6'>
                Leave your contacts and we will call you back within 30 minutes
            </h1>
            <form onSubmit={submitHandler}>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <label className='flex flex-col w-[60%]'>
                            <span className='mb-2 text-[#101828]'>Full name</span>
                            <input type="text" placeholder='My Name' onChange={(e) => setName(e.target.value)} className='p-2 border border-[#E5E7EB] rounded-md' />
                        </label>
                        <label className='flex flex-col w-full'>
                            <span className='mb-2 text-[#101828]'>Phone number</span>
                            <input type="text" placeholder='+91 00000000' onChange={(e) => setNumber(e.target.value)} className='p-2 border border-[#E5E7EB] rounded-md' />
                        </label>
                    </div>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <label className='flex flex-col w-full'>
                            <span className='mb-2 text-[#101828]'>Business name</span>
                            <input type="text" placeholder='Abc technologies' onChange={(e) => setBusiness(e.target.value)} className='p-2 border border-[#E5E7EB] rounded-md' />
                        </label>
                        <label className='flex flex-col w-full'>
                            <span className='mb-2 text-[#101828]'>Business email</span>
                            <input type="text" placeholder='abc@gmail.com' onChange={(e) => setEmail(e.target.value)} className='p-2 border border-[#E5E7EB] rounded-md' />
                        </label>
                        <button type='submit' className='mt-6 w-[60%] py-2 bg-[#80A948] text-white rounded-md hover:bg-[#6e8d3d]'>
                            Get consultant
                        </button>
                    </div>

                </div>

            </form>
        </div>
    );
};

export default ContactCard;
