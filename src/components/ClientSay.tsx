import React from 'react'

export default function ClientSay() {
    let next = 0;
	let prev = 3;
	function onClickLeft() {
		let cardWidth = document.querySelector(".carousel-item")?.clientWidth;
		let carousel = document.getElementsByClassName("carousel")[0];
		carousel?.scrollBy({
			left: -cardWidth!,
			behavior: "smooth",
		});
	}
	function onClickRight() {
		let cardWidth = document.querySelector(".carousel-item")?.clientWidth;
		let carousel = document.getElementsByClassName("carousel")[0];
		carousel.scrollBy({
			left: +cardWidth!,
			behavior: "smooth",
		});
	}

    return (
        <>
            <div className=" relative bg-[#1B454D] py-2">
                <img
                    src={require("../assets/architecture/vector1.png").default}
                    alt="Vector"
                    className="absolute w-[10%] left-0 z-10"
                />

                <img
                    src={require("../assets/architecture/vector2.png").default}
                    alt="Vector"
                    className="absolute bottom-0 right-0 z-10"
                />
                <div className='w-11/12 md:w-10/12 mx-auto my-6 flex justify-between '>
                    <h1 className='font-bold text-3xl text-white'>What our Customer Says</h1>
                    <div className='mr-10 flex justify-evenly items-center w-40'>
                        <button className='px-[14px] py-[10px] rounded-full bg-[#7AD9BA] text-[#005B3E] text-xl cursor-pointer' onClick={onClickLeft}>&larr;</button>
                        <button className='px-[14px] py-[10px] rounded-full bg-[#F69D98] text-[#005B3E] text-xl cursor-pointer' onClick={onClickRight}>&rarr;</button>
                    </div>


                </div>
                <div className='w-11/12 md:w-10/12 mx-auto overflow-hidden'>

                    <div className="carousel-center carousel   z-10  space-x-4 p-4">
                        <div className='carousel-item'>
                            <div className='mx-2  w-[400px!important] '>
                                <div className=" h-[115px] bg-white rounded-r-[50px] rounded-tl-[50px] text-black p-6">
                                    Outstanding design They captured our vision with precision and efficiency. Highly satisfied!

                                </div>
                                <div className="flex items-center justify-center w-68 mt-4">
                                    <img
                                        src={require("../assets/testimonials/mitali-sinha.jpeg").default}
                                        width={70}
                                        height={70}
                                        alt="profilepic"
                                        className="rounded-full border-2 border-[#7AD9BA]"
                                    />
                                    <p className="text-[#F1F052] ml-4 text-xl ">Mitali Sinha</p>
                                </div>
                            </div>
                        </div>
                        <div className='carousel-item'>
                            <div className="mx-2  w-[400px!important] ">
                                <div className="h-[115px] bg-white rounded-r-[50px] rounded-tl-[50px] text-black p-6">
                                    Transformed our space beautifully. A seamless process from start to finish.Highly recommended.
                                </div>
                                <div className="flex items-center justify-center w-68 mt-4">
                                    <img
                                        src={require("../assets/testimonials/p-gowda.jpeg").default}
                                        width={70}
                                        height={70}
                                        alt="profilepic"
                                        className="rounded-full border-2 border-[#7AD9BA]"
                                    />
                                    <p className="text-[#F1F052] ml-4 text-xl ">P. Gowda</p>
                                </div>
                            </div>
                        </div>
                        <div className='carousel-item'>
                            <div className="mx-2  w-[400px!important] ">
                                <div className="h-[115px] bg-white rounded-r-[50px] rounded-tl-[50px] text-black p-6">
                                    They listened, they delivered. Impressed by their service.</div>
                                <div className="flex items-center justify-center w-68 mt-4">
                                    <img
                                        src={require("../assets/testimonials/nitin-prajapat.jpeg").default}
                                        width={70}
                                        height={70}
                                        alt="profilepic"
                                        className="rounded-full border-2 border-[#7AD9BA]"
                                    />
                                    <p className="text-[#F1F052] ml-4 text-xl ">Nitin Prajapat</p>
                                </div>
                            </div>
                        </div>
                        <div className='carousel-item'>
                            <div className="mx-2  w-[400px!important] ">
                                <div className="h-[115px] bg-white rounded-r-[50px] rounded-tl-[50px] text-black p-6">
                                    Fantastic architecture design & affordable.
                                </div>
                                <div className="flex items-center justify-center w-68 mt-4">
                                    <img
                                        src={require("../assets/testimonials/snehal-raj.jpeg").default}
                                        width={70}
                                        height={70}
                                        alt="profilepic"
                                        className="rounded-full border-2 border-[#7AD9BA]"
                                    />
                                    <p className="text-[#F1F052] ml-4 text-xl ">Snehal Raj</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    src={require("../assets/architecture/vector2.png").default}
                    alt="Vector"
                    className="w-[10%]  absolute bottom-0 right-0 z-10 hidden md:block"
                />
            </div >
        </>
    )
}