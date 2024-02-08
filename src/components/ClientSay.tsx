import React from 'react'

export default function ClientSay() {
    return (
        <>
            <div className=" relative mt-10 bg-[#1B454D] py-2">
                <img
                    src={require("../assets/architecture/vector1.png").default}
                    alt="Vector"
                    width={300}
                    height={300}
                    className="absolute w-[10%] left-0 z-10"
                />

                <img
                    src={require("../assets/architecture/vector2.png").default}
                    alt="Vector"
                    width={300}
                    height={300}
                    className="absolute bottom-0 right-0 z-10"
                />
                <div className='w-11/12 md:w-10/12 mx-auto my-6 flex justify-between'>
                    <h1 className='font-bold text-3xl text-white'>What our Customer Says</h1>
                    <div className='mr-10 flex justify-evenly items-center w-40'>
                        <div className='px-[14px] py-[10px] rounded-full bg-[#7AD9BA] text-[#005B3E] text-xl'>&larr;</div>
                        <div className='px-[14px] py-[10px] rounded-full bg-[#F69D98] text-[#005B3E] text-xl'>&rarr;</div>
                    </div>


                </div>
                {/* 1 */}
                <div className="w-11/12 md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                        <div className="  bg-white rounded-r-[50px] rounded-tl-[50px] text-black p-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. De
                            maiores ab dicta cupiditate expedita eum maxime molestias commodi
                            ducimus saepe aut magni quos ea eius.
                        </div>
                        <div className="flex items-center justify-center w-68 mt-4">
                            <img
                                src={require("../assets/architecture/Photo.jpg").default}
                                width={70}
                                height={70}
                                alt="profilepic"
                                className="rounded-full border-2 border-[#7AD9BA]"
                            />
                            <p className="text-[#F1F052] ml-4 text-xl ">Victor Murphy</p>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className="hidden md:block ml-4">
                        <div className=" bg-white rounded-r-[50px] rounded-tl-[50px] text-black p-6">
                            Lorem ipsum dolor sit amet, consectetur adipisicingvoluptates
                            possimus nostrum vitae iusto repudiandae magni mollitia vero sint
                            corrupti pariatur sapiente enim alias? Inventore, magni? Quis,
                            saepe atque?
                        </div>
                        <div className="flex items-center justify-center w-68 mt-4">
                            <img
                                src={require("../assets/architecture/Photo.jpg").default}
                                width={70}
                                height={70}
                                alt="profilepic"
                                className="rounded-full border-2 border-[#7AD9BA]"
                            />
                            <p className="text-[#F1F052] ml-4 text-xl ">Victor Murphy</p>
                        </div>
                    </div>
                    {/* 3 */}
                    <div className="ml-4">
                        <div className="  md:w-80 bg-white rounded-r-[50px] rounded-tl-[50px] text-black p-6">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
                            tempore fugiat distinctio eius quisluptatibus neque repellendus
                            cumque!
                        </div>
                        <div className="flex items-center justify-center w-68 mt-4">
                            <img
                                src={require("../assets/architecture/Photo.jpg").default}
                                width={70}
                                height={70}
                                alt="profilepic"
                                className="rounded-full border-2 border-[#7AD9BA]"
                            />
                            <p className="text-[#F1F052] ml-4 text-xl ">Victor Murphy</p>
                        </div>
                    </div>
                    <img
                        src={require("../assets/architecture/vector2.png").default}
                        alt="Vector"
                        width={500}
                        height={500}
                        className="w-[10%]  absolute bottom-0 right-0 z-10 hidden md:block"
                    />
                </div>
            </div>
        </>
    )
}