import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { SiUnsplash } from "react-icons/si";

export default function Footer() {
	return (
		<>
			<div className="w-full  bg-[#23262F] text-white">
				<div className="mx-auto flex w-11/12 flex-wrap items-center justify-between md:w-10/12">
					<div className="w-10/12 md:w-[30%]">
						<p className="text=[20px] font-[700] leading-8 md:text-[24px] md:leading-[32px]  ">
							Let’s make a great design together!
						</p>
						<img src="/footer/footerlogo.svg" alt="Design Elementary" width={200} height={16}
						 className="my-8 w-auto h-auto" />
						<p className="hidden text-[12px] font-[400] leading-[20px] md:block ">
							© 2023 Design Elementary. All rights reserved
						</p>
					</div>

					<div className="my-0 flex w-10/12 flex-wrap items-start justify-evenly md:my-4 md:w-[60%] ">
						<div className="divider divider-horizontal opacity-[0.1] before:bg-[#E6E8EC!important] after:bg-[#E6E8EC!important]"></div>
						<div className="my-4 w-11/12 md:w-auto">
							<p className="text-[16px] font-[500] leading-[24px]">Company</p>
							<div className="mt-2 md:mt-8">
								<p className="text-[14px] font-[700] leading-[24px]">
									<a href="/career">Careers</a>
								</p>
								<p className="text-[14px] font-[700] leading-[24px]">
									<a href="/policies">Policies</a>
								</p>
								<p className="text-[14px] font-[700] leading-[24px]">
									<a href="/terms-and-conditions">Terms & Conditions</a>
								</p>
								<p className="text-[14px] font-[700] leading-[24px]">
									<a href="/subscriptions">Pricings</a>
								</p>
								<p className="text-[14px] font-[700] leading-[24px]">
									<a href="/about">About Us</a>
								</p>
							</div>
						</div>
						<div className="divider divider-horizontal opacity-[0.1] before:bg-[#E6E8EC!important] after:bg-[#E6E8EC!important]"></div>
						<div className="my-4 w-11/12 md:w-auto">
							<p className="text-[16px] font-[500] leading-[24px]">Explore</p>
							<div className="mt-2 md:mt-8">
								<p className="text-[14px] font-[700] leading-[24px]">
									<a href="/quiz/choose-designs">Style Quiz</a>
								</p>
								<p className="text-[14px] font-[700] leading-[24px]">
									<a href="/refer-n-earn">Refers & Earn</a>
								</p>
								<p className="text-[14px] font-[700] leading-[24px]">
									<a href="/promotion-program">Promotion Program</a>
								</p>
								<p className="text-[14px] font-[700] leading-[24px]">
									<a href="/faq"> FAQ</a>
								</p>
								<p className="text-[14px] font-[700] leading-[24px]">
									<a href="/my-account#support-center">Help Center</a>
								</p>
							</div>
						</div>
						<div className="divider divider-horizontal opacity-[0.1] before:bg-[#E6E8EC!important] after:bg-[#E6E8EC!important]"></div>
						<div className="my-4 w-11/12 md:w-auto">
							<p className="text-[16px] font-[500] leading-[24px]">Contacts</p>
							<div className="mt-2 md:mt-8">
								<a href="tel:+14358501234">
									{" "}
									<p className="text-[14px] font-[700] leading-[24px]">Call: +1 435 850 1234</p>
								</a>
								{/* <p className="text-[14px] leading-[24px] font-[700]">Text: 222222</p> */}
								<a href="mailto:hello@designelementary.com">
									<p className="text-[14px] font-[700] leading-[24px]">Email: hello@designelementary.com</p>
								</a>
								<div className="my-2 flex items-center justify-start">
									<div className="mx-2 rounded-lg bg-white p-1">
										<a target="_blank" href="https://www.facebook.com/DesignElementary">
											<BsFacebook className="text-[16px] text-black" />
										</a>
									</div>
									<div className="mx-2 rounded-lg bg-white p-1">
										<a target="_blank" href="https://instagram.com/designelementary_global?igshid=ZDdkNTZiNTM=">
											<BsInstagram className="text-[16px] text-black" />
										</a>
									</div>
									<div className="mx-2 rounded-lg bg-white p-1">
										<a target="_blank" href="https://www.aedin.com/company/design-elementary">
											<GrLinkedinOption className="text-[16px] text-black" />
										</a>
									</div>
									<div className="mx-2 rounded-lg bg-white p-1">
										<a target="_blank" href="https://unsplash.com/@designelementary">
											<SiUnsplash className="text-[16px] text-black" />
										</a>
									</div>
									<div className="mx-2 rounded-lg bg-white p-1">
										<a target="_blank" href="https://www.youtube.com/@DesignElementary">
											<AiFillYoutube className="text-[16px] text-black" />
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="divider divider-horizontal opacity-[0.1] before:bg-[#E6E8EC!important] after:bg-[#E6E8EC!important]"></div>
					</div>
					<div className="mx-auto flex w-full items-center justify-center">
						<div className="my-2 flex w-full flex-wrap  items-start justify-start md:ml-0 md:w-fit md:items-center md:justify-evenly ">
							<div className="mx-2 my-1 flex w-fit items-center justify-evenly rounded-md border-2 border-white bg-[#284963] p-2">
								<img
									src={"/footer/genuine-quality.png"}
									alt="Genuine Quality"
									width={100}
									height={100}
									className="mx-auto w-[50px]"
								/>
								<div className="mx-1 text-[16px] font-[600] md:mx-3">
									<p className="text-[#92a2b1]">Genuine</p>
									<p className="text-white"> Quality</p>
								</div>
							</div>
							<div className="mx-2 my-1 flex w-fit items-center justify-evenly rounded-md border-2 border-white bg-[#284963] p-2">
								<img
									src={"/footer/secured.png"}
									alt="Secured Checkout"
									width={100}
									height={100}
									className="mx-auto w-[50px]"
								/>
								<div className="mx-1 text-[16px] font-[600] md:mx-3">
									<p className="text-[#92a2b1]">Secured </p>
									<p className="text-white"> Checkout </p>
								</div>
							</div>
							<div className="mx-2 my-1 flex w-fit items-center justify-evenly rounded-md border-2 border-white bg-[#284963] p-2">
								<img
									src={"/footer/satisfaction.png"}
									alt="Satisfaction Guaranteed "
									width={100}
									height={100}
									className="mx-auto w-[50px]"
								/>
								<div className="mx-1 text-[16px] font-[600] md:mx-3">
									<p className="text-[#92a2b1]">Satisfaction </p>
									<p className="text-white"> Guaranteed </p>
								</div>
							</div>
						</div>
					</div>
					<p className="mx-auto w-11/12 py-2 text-[12px] font-[400] leading-[20px] md:hidden ">
						© 2023 Design Elementary. All rights reserved
					</p>
				</div>
			</div>
		</>
	);
}