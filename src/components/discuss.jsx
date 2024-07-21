import ContactCard from "./contact_card"

const Discuss = () => {
    return (
        <div className="-mt-[20%] flex flex-col h-auto md:flex-row md:h-[350px] w-full bg-gradient-to-r from-[#FABC1F] to-[#7CA546]">
            <div className="flex flex-col gap-[24px] mt-[6%] ml-[13%]">
                <h1 className="-ml-[10%] md:ml-0 text-[36px] leading-[144%] font-[700] tracking-[0.326px] text-[#FFF]">
                    Let's discuss <br /> Your project
                </h1>
                <h2 className="-ml-[10%] md:ml-0 w-[300px] md:w-[600px] text-[15px] leading-[20px] font-[500] text-[#FFF]">
                    Let's figure out how to create an effective application, <br /> its cost and terms of its development
                </h2>
            </div>
            <div className="-ml-[3%] md:ml-0 m-8">
                <ContactCard/>
            </div>

        </div>
    )
}

export default Discuss
