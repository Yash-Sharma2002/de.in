import React from "react";
import BlogsSection from "../components/BlogsSection";
import ArchitectureData from "../constants/ArchitectureData";
import TextWIthBack from "../components/TextWIthBack";
import Steps from "../components/Steps";
import Title from "../components/Title";
import Experience360 from "../components/Experience360";
import Gallery from "../components/Gallery";
import ClientSay from "../components/ClientSay";
import { TiTick } from "react-icons/ti";
import Header from "../components/Header";

export default function ArchitecturePage() {
  return (
    <>
      <Title title="Architecture Deisgn | Design Elementary" />
      <Header />
      <div className="flex w-[95%] md:w-[80%] justify-around py-4 md:py-10 m-auto">
        <div className="md:w-[50%] w-full text-black">
          <h1 className="text-2xl leading-8 md:text-[3rem] font-semibold md:leading-[56px] tracking-wide">
            Crafting <br /> Timeless Spaces, <br />
            Redefining <br />
            Living.
          </h1>
          <p className="text-sm py-6">
            Share Where a Every Detail Tells a Story of Elegance and <br />
            innovation
          </p>
          <div className="py-2">
            <a
              href={"https://justcall.io/calendar/DesignElementary"}
              className="bg-[#E93B3B] shadow-lg text-white text-sm md:text-lg font-semibold py-2 px-4 md:py-3 md:px-6 rounded-3xl mr-2"
            >
              Book a consultation &rarr;
            </a>
          </div>
          <div className="flex py-10 justify-between">
            {/* 6180 */}
            <div>
              <div className="text-[#3B3A5D] text-center font-black text-lg md:text-[36px] py-1">
                6,180
              </div>
              <p className="text-sm md:text-base text-center">
                In property sales
              </p>
            </div>
            {/* 99 */}
            <div>
              <div className="text-[#3B3A5D] text-center font-black text-lg md:text-[36px] py-1">
                99%
              </div>
              <p className="text-sm md:text-base text-center">
                Customer satisfaction
              </p>
            </div>
            {/* 25k+ */}
            <div>
              <div className="text-[#3B3A5D] text-center font-black text-lg md:text-[36px] py-1">
                25k+
              </div>
              <p className="text-sm md:text-base text-center">
                Property Transaction
              </p>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="w-[50%] scale-50 mb-8 md:scale-100 hidden md:block">
          <div className="flex justify-center">
            <img
              src={require("../assets/architecture/architecture1.png").default}
              alt="Vector"
              width={230}
              height={230}
              className="z-10 "
            />
            <img
              src={require("../assets/architecture/architecture2.png").default}
              alt="Vector"
              width={50}
              height={50}
              className="z-10 ml-2 w-[160px] h-[155px]"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={require("../assets/architecture/architecture4.png").default}
              alt="Vector"
              width={50}
              height={50}
              className="z-10 mt-2 w-[160px] h-[155px]"
            />
            <img
              src={require("../assets/architecture/architecture3.png").default}
              alt="Vector"
              width={230}
              height={230}
              className="z-10 ml-2 relative  bottom-16"
            />
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className="flex justify-center  ">
        <div
          style={{
            backgroundImage: `url(${
              require("../assets/architecture/architecture5.png").default
            })`,
          }}
          className="bg-cover bg-center relative  md:py-8 w-11/12 m-auto "
        >
          <div
            className="w-full h-full absolute top-0 left-0 z-10"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(217, 217, 217, 0) 100%)",
            }}
          ></div>
          <div className="relative z-10 py-6 md:py-0">
            <h1 className="text-[35px] mt-6 md:mt-0 md:text-[4rem] text-white font-[Italiana] pl-4 md:pl-20">
              Design Your Home{" "}
              <span className="font-bold text-[yellow]">
                {" "}
                <br className="block md:hidden" /> ₹11 / Sq.Ft
              </span>
            </h1>
            <p className="text-white pl-4 md:pl-20">
              3D Elevation | Structural Design | Electrical & Plumbing Design |
              360'View
            </p>
            <div className="py-6">
              <div className="flex justify-start item-center md:text-[26px] text-white ml-[30px] md:ml-[84px]">
                <TiTick className="text-[yellow] mr-2 md:text-[30px] mt-1" />
                <p> Affordable Luxury</p>
              </div>
              <div className="flex justify-start item-center md:text-[26px] text-white ml-[30px] md:ml-[84px]">
                <TiTick className="text-[yellow] mr-2 md:text-[30px] mt-1" />
                <p> Unmatched Quality</p>
              </div>
            </div>

            <a
              href={"https://justcall.io/calendar/DesignElementary"}
              className="bg-[#E93B3B] shadow-lg ml-[30px] md:ml-[84px] text-white text-sm md:text-xl font-semibold p-2 px-4 md:px-6 rounded-3xl mr-2"
            >
              Book free consultation &rarr;
            </a>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="py-14 ">
        <h1 className="font-bold md:text-[40px] text-[28px] text-center text-black head-shade w-fit mx-auto">
          Ready To Transform Your Space ?
        </h1>
        <p className="p-8 md:py-14 w-full md:w-[90%] mx-auto md:text-[20px] text-[16px] text-center text-black">
          Begin your design journey with Design Elementary. Explore our
          portfolio, schedule a consultation, and collaborate on your unique
          concept. Receive a detailed proposal, refine the design, and celebrate
          the transformation of your space. Ready to start? Contact us for a
          personalized consultation.
        </p>
        <div className="flex justify-center md:justify-[unset] md:w-10/12 w-11/12 m-auto mt-4 h-fit">
          <div
            className="w-[45%] hidden md:block h-auto"
            style={{
              backgroundImage: `url(${
                require("../assets/architecture/architecture7.png").default
              })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="w-full md:w-1/2">
            <Steps
              number={1}
              img={
                <svg
                  className="w-[30px] h-[45px] md:w-[unset] md:h-[unset]"
                  width="17"
                  height="63"
                  viewBox="0 0 17 63"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="path-1-outside-1_441_3557"
                    maskUnits="userSpaceOnUse"
                    x="-1"
                    y="-1"
                    width="19"
                    height="65"
                    fill="black"
                  >
                    <rect fill="white" x="-1" y="-1" width="19" height="65" />
                    <path d="M0.264 8.02736V0.898101H16.4122V63H8.5099V8.02736H0.264Z" />
                  </mask>
                  <path
                    d="M0.264 8.02736H-0.736V9.02736H0.264V8.02736ZM0.264 0.898102V-0.1019H-0.736V0.898102H0.264ZM16.4122 0.898102H17.4122V-0.1019H16.4122V0.898102ZM16.4122 63V64H17.4122V63H16.4122ZM8.5099 63H7.5099V64H8.5099V63ZM8.5099 8.02736H9.5099V7.02736H8.5099V8.02736ZM1.264 8.02736V0.898102H-0.736V8.02736H1.264ZM0.264 1.8981H16.4122V-0.1019H0.264V1.8981ZM15.4122 0.898102V63H17.4122V0.898102H15.4122ZM16.4122 62H8.5099V64H16.4122V62ZM9.5099 63V8.02736H7.5099V63H9.5099ZM8.5099 7.02736H0.264V9.02736H8.5099V7.02736Z"
                    fill="#34846A"
                    mask="url(#path-1-outside-1_441_3557)"
                  />
                </svg>
              }
              title="Explore inspiring designs"
              description="Let us guide you through our diverse portfolio and bring your vision to life."
            />

            <Steps
              number={2}
              img={
                <svg
                  className="w-[30px] h-[45px] md:w-[unset] md:h-[unset]"
                  width="42"
                  height="64"
                  viewBox="0 0 42 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="path-1-outside-1_441_3561"
                    maskUnits="userSpaceOnUse"
                    x="-1"
                    y="-1"
                    width="44"
                    height="66"
                    fill="black"
                  >
                    <rect fill="white" x="-1" y="-1" width="44" height="66" />
                    <path d="M0.380632 57.7297C7.65305 51.8888 13.3507 47.1074 17.4737 43.3853C21.5966 39.6059 25.0611 35.6834 27.8669 31.6177C30.7301 27.4947 32.1617 23.4577 32.1617 19.5065C32.1617 15.7844 31.2455 12.864 29.4131 10.7453C27.6379 8.56926 24.7461 7.48126 20.7377 7.48126C16.8438 7.48126 13.8088 8.71242 11.6328 11.1747C9.51411 13.5798 8.36884 16.8152 8.19705 20.8808H0.638316C0.867369 14.4674 2.81432 9.5141 6.47916 6.02105C10.144 2.528 14.8682 0.781468 20.6518 0.781468C26.5499 0.781468 31.2168 2.41347 34.6526 5.67747C38.1457 8.94147 39.8922 13.4366 39.8922 19.1629C39.8922 23.9158 38.4606 28.5541 35.5975 33.0779C32.7916 37.5444 29.5848 41.4956 25.9773 44.9314C22.3697 48.3099 17.76 52.2611 12.1482 56.7848H41.696V63.3128H0.380632V57.7297Z" />
                  </mask>
                  <path
                    d="M0.380632 57.7297L-0.245559 56.95L-0.619368 57.2502V57.7297H0.380632ZM17.4737 43.3853L18.1438 44.1275L18.1494 44.1224L17.4737 43.3853ZM27.8669 31.6177L27.0456 31.0473L27.0439 31.0497L27.8669 31.6177ZM29.4131 10.7453L28.6382 11.3774L28.6473 11.3885L28.6567 11.3994L29.4131 10.7453ZM11.6328 11.1747L10.8835 10.5125L10.8825 10.5137L11.6328 11.1747ZM8.19705 20.8808V21.8808H9.15569L9.19616 20.9231L8.19705 20.8808ZM0.638316 20.8808L-0.361047 20.8451L-0.398036 21.8808H0.638316V20.8808ZM6.47916 6.02105L7.1691 6.74492H7.1691L6.47916 6.02105ZM34.6526 5.67747L33.9639 6.4025L33.9699 6.40813L34.6526 5.67747ZM35.5975 33.0779L34.7525 32.5431L34.7507 32.5459L35.5975 33.0779ZM25.9773 44.9314L26.6608 45.6613L26.6669 45.6555L25.9773 44.9314ZM12.1482 56.7848L11.5206 56.0063L9.31433 57.7848H12.1482V56.7848ZM41.696 56.7848H42.696V55.7848H41.696V56.7848ZM41.696 63.3128V64.3128H42.696V63.3128H41.696ZM0.380632 63.3128H-0.619368V64.3128H0.380632V63.3128ZM1.00682 58.5094C8.28567 52.6634 14.0002 47.8682 18.1438 44.1275L16.8036 42.643C12.7012 46.3465 7.02044 51.1143 -0.245559 56.95L1.00682 58.5094ZM18.1494 44.1224C22.3205 40.2989 25.8363 36.3206 28.69 32.1857L27.0439 31.0497C24.2858 35.0461 20.8728 38.9129 16.798 42.6481L18.1494 44.1224ZM28.6883 32.1881C31.6363 27.943 33.1617 23.7106 33.1617 19.5065H31.1617C31.1617 23.2048 29.8239 27.0465 27.0456 31.0473L28.6883 32.1881ZM33.1617 19.5065C33.1617 15.6242 32.2044 12.4441 30.1694 10.0911L28.6567 11.3994C30.2865 13.2839 31.1617 15.9447 31.1617 19.5065H33.1617ZM30.1879 10.1131C28.152 7.61744 24.9128 6.48126 20.7377 6.48126V8.48126C24.5794 8.48126 27.1238 9.52108 28.6382 11.3774L30.1879 10.1131ZM20.7377 6.48126C16.6153 6.48126 13.2847 7.7954 10.8835 10.5125L12.3822 11.8369C14.333 9.62944 17.0723 8.48126 20.7377 8.48126V6.48126ZM10.8825 10.5137C8.57555 13.1324 7.37674 16.6071 7.19794 20.8386L9.19616 20.9231C9.36094 17.0232 10.4527 14.0272 12.3832 11.8358L10.8825 10.5137ZM8.19705 19.8808H0.638316V21.8808H8.19705V19.8808ZM1.63768 20.9165C1.86002 14.6909 3.74039 10.0129 7.1691 6.74492L5.78922 5.29718C1.88824 9.0153 -0.125286 14.2438 -0.361047 20.8451L1.63768 20.9165ZM7.1691 6.74492C10.6212 3.45459 15.0857 1.78147 20.6518 1.78147V-0.218533C14.6507 -0.218533 9.66675 1.60141 5.78922 5.29718L7.1691 6.74492ZM20.6518 1.78147C26.3594 1.78147 30.7567 3.35567 33.9639 6.40247L35.3414 4.95247C31.677 1.47127 26.7404 -0.218533 20.6518 -0.218533V1.78147ZM33.9699 6.40813C37.221 9.44601 38.8922 13.6543 38.8922 19.1629H40.8922C40.8922 13.219 39.0704 8.43693 35.3354 4.94682L33.9699 6.40813ZM38.8922 19.1629C38.8922 23.7032 37.5276 28.1585 34.7525 32.5431L36.4425 33.6127C39.3937 28.9497 40.8922 24.1283 40.8922 19.1629H38.8922ZM34.7507 32.5459C31.9864 36.9463 28.8316 40.832 25.2876 44.2072L26.6669 45.6555C30.3381 42.1592 33.5968 38.1426 36.4443 33.6098L34.7507 32.5459ZM25.2937 44.2015C21.7103 47.5574 17.121 51.4917 11.5206 56.0063L12.7758 57.5634C18.399 53.0304 23.0291 49.0624 26.6608 45.6613L25.2937 44.2015ZM12.1482 57.7848H41.696V55.7848H12.1482V57.7848ZM40.696 56.7848V63.3128H42.696V56.7848H40.696ZM41.696 62.3128H0.380632V64.3128H41.696V62.3128ZM1.38063 63.3128V57.7297H-0.619368V63.3128H1.38063Z"
                    fill="#34846A"
                    mask="url(#path-1-outside-1_441_3561)"
                  />
                </svg>
              }
              title="Schedule your design consultation"
              description="Your vision, our expertise. Let us collaborate to turn your ideas into stunning realities."
            />

            <Steps
              number={3}
              img={
                <svg
                  className="w-[30px] h-[45px] md:w-[unset] md:h-[unset]"
                  width="42"
                  height="65"
                  viewBox="0 0 42 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="path-1-outside-1_441_3564"
                    maskUnits="userSpaceOnUse"
                    x="-1"
                    y="-1"
                    width="44"
                    height="67"
                    fill="black"
                  >
                    <rect fill="white" x="-1" y="-1" width="44" height="67" />
                    <path d="M1.15368 17.5309C1.55453 12.2627 3.58737 8.13979 7.25221 5.1621C10.9171 2.18442 15.6699 0.695575 21.5107 0.695575C25.4046 0.695575 28.7545 1.41137 31.5604 2.84295C34.4236 4.21726 36.5709 6.10694 38.0025 8.512C39.4914 10.917 40.2358 13.6371 40.2358 16.672C40.2358 20.2223 39.2051 23.2859 37.1436 25.8627C35.1394 28.4396 32.5053 30.1002 29.2413 30.8446V31.2741C32.9634 32.1903 35.9124 33.9941 38.0884 36.6855C40.2644 39.3768 41.3524 42.8985 41.3524 47.2505C41.3524 50.5145 40.608 53.4636 39.1192 56.0977C37.6303 58.6745 35.3971 60.7074 32.4194 62.1962C29.4417 63.6851 25.8627 64.4295 21.6825 64.4295C15.6126 64.4295 10.6307 62.8547 6.73684 59.7053C2.84295 56.4985 0.666948 51.9747 0.208842 46.1339H7.76758C8.16842 49.5697 9.57137 52.3756 11.9764 54.5516C14.3815 56.7276 17.5882 57.8156 21.5966 57.8156C25.6051 57.8156 28.64 56.7848 30.7015 54.7234C32.8202 52.6046 33.8796 49.8846 33.8796 46.5634C33.8796 42.2686 32.448 39.1764 29.5848 37.2867C26.7217 35.3971 22.3983 34.4522 16.6147 34.4522H14.6392V27.9242H16.7006C21.9688 27.8669 25.9486 27.008 28.64 25.3474C31.3314 23.6295 32.6771 20.9954 32.6771 17.445C32.6771 14.4101 31.6749 11.9764 29.6707 10.144C27.7238 8.31158 24.9179 7.39536 21.2531 7.39536C17.7027 7.39536 14.8396 8.31158 12.6636 10.144C10.4876 11.9764 9.19916 14.4387 8.79832 17.5309H1.15368Z" />
                  </mask>
                  <path
                    d="M1.15368 17.5309L0.156567 17.4551L0.074707 18.5309H1.15368V17.5309ZM7.25221 5.1621L6.62162 4.38599H6.62162L7.25221 5.1621ZM31.5604 2.84295L31.106 3.73371L31.1168 3.73922L31.1277 3.74447L31.5604 2.84295ZM38.0025 8.512L37.1432 9.02348L37.1477 9.03096L37.1523 9.03835L38.0025 8.512ZM37.1436 25.8627L36.3626 25.238L36.3542 25.2488L37.1436 25.8627ZM29.2413 30.8446L29.0189 29.8697L28.2413 30.047V30.8446H29.2413ZM29.2413 31.2741H28.2413V32.0578L29.0022 32.2451L29.2413 31.2741ZM38.0884 36.6855L38.8661 36.0567L38.0884 36.6855ZM39.1192 56.0977L39.9851 56.598L39.9897 56.5897L39.1192 56.0977ZM32.4194 62.1962L32.8666 63.0906L32.4194 62.1962ZM6.73684 59.7053L6.10111 60.4772L6.10797 60.4828L6.73684 59.7053ZM0.208842 46.1339V45.1339H-0.87266L-0.788096 46.2121L0.208842 46.1339ZM7.76758 46.1339L8.76084 46.018L8.6577 45.1339H7.76758V46.1339ZM11.9764 54.5516L11.3055 55.2931L11.9764 54.5516ZM30.7015 54.7234L29.9944 54.0163L30.7015 54.7234ZM29.5848 37.2867L30.1357 36.4521L29.5848 37.2867ZM14.6392 34.4522H13.6392V35.4522H14.6392V34.4522ZM14.6392 27.9242V26.9242H13.6392V27.9242H14.6392ZM16.7006 27.9242V28.9243L16.7115 28.9241L16.7006 27.9242ZM28.64 25.3474L29.1651 26.1984L29.1716 26.1944L29.178 26.1903L28.64 25.3474ZM29.6707 10.144L28.9854 10.8722L28.9906 10.8771L28.996 10.882L29.6707 10.144ZM8.79832 17.5309V18.5309H9.67705L9.79002 17.6595L8.79832 17.5309ZM2.1508 17.6068C2.53354 12.5765 4.45753 8.72125 7.8828 5.93821L6.62162 4.38599C2.71721 7.55832 0.575512 11.9489 0.156567 17.4551L2.1508 17.6068ZM7.8828 5.93821C11.3303 3.13711 15.8436 1.69558 21.5107 1.69558V-0.304426C15.4962 -0.304426 10.5038 1.23172 6.62162 4.38599L7.8828 5.93821ZM21.5107 1.69558C25.2833 1.69558 28.4702 2.38891 31.106 3.73371L32.0149 1.95218C29.0389 0.433821 25.526 -0.304426 21.5107 -0.304426V1.69558ZM31.1277 3.74447C33.838 5.04544 35.8255 6.80967 37.1432 9.02348L38.8618 8.00051C37.3164 5.40422 35.0091 3.38909 31.9932 1.94142L31.1277 3.74447ZM37.1523 9.03835C38.536 11.2737 39.2358 13.8089 39.2358 16.672H41.2358C41.2358 13.4652 40.4467 10.5604 38.8528 7.98564L37.1523 9.03835ZM39.2358 16.672C39.2358 20.0137 38.2712 22.8524 36.3627 25.238L37.9244 26.4874C40.1389 23.7194 41.2358 20.4309 41.2358 16.672H39.2358ZM36.3542 25.2488C34.4956 27.6385 32.0642 29.1751 29.0189 29.8697L29.4636 31.8196C32.9464 31.0253 35.7832 29.2407 37.9329 26.4767L36.3542 25.2488ZM28.2413 30.8446V31.2741H30.2413V30.8446H28.2413ZM29.0022 32.2451C32.5363 33.115 35.2869 34.811 37.3108 37.3142L38.8661 36.0567C36.5379 33.1772 33.3904 31.2656 29.4803 30.3031L29.0022 32.2451ZM37.3108 37.3142C39.3091 39.7858 40.3524 43.0671 40.3524 47.2505H42.3524C42.3524 42.7299 41.2197 38.9679 38.8661 36.0567L37.3108 37.3142ZM40.3524 47.2505C40.3524 50.3561 39.646 53.1334 38.2486 55.6056L39.9897 56.5897C41.57 53.7938 42.3524 50.673 42.3524 47.2505H40.3524ZM38.2533 55.5974C36.8738 57.985 34.7962 59.8897 31.9722 61.3018L32.8666 63.0906C35.9979 61.525 38.3868 59.364 39.985 56.598L38.2533 55.5974ZM31.9722 61.3018C29.1642 62.7057 25.7462 63.4295 21.6825 63.4295V65.4295C25.9793 65.4295 29.7191 64.6644 32.8666 63.0906L31.9722 61.3018ZM21.6825 63.4295C15.7913 63.4295 11.0461 61.9046 7.36571 58.9277L6.10797 60.4828C10.2153 63.8049 15.4339 65.4295 21.6825 65.4295V63.4295ZM7.37255 58.9333C3.72241 55.9273 1.64638 51.6734 1.20578 46.0557L-0.788096 46.2121C-0.312487 52.2761 1.96349 57.0697 6.10114 60.4772L7.37255 58.9333ZM0.208842 47.1339H7.76758V45.1339H0.208842V47.1339ZM6.77432 46.2498C7.20121 49.9089 8.70816 52.9431 11.3055 55.2931L12.6473 53.81C10.4346 51.808 9.13563 49.2305 8.76084 46.018L6.77432 46.2498ZM11.3055 55.2931C13.9352 57.6723 17.4014 58.8156 21.5966 58.8156V56.8156C17.7751 56.8156 14.8278 55.7828 12.6473 53.81L11.3055 55.2931ZM21.5966 58.8156C25.7687 58.8156 29.0982 57.7408 31.4086 55.4305L29.9944 54.0163C28.1818 55.8289 25.4414 56.8156 21.5966 56.8156V58.8156ZM31.4086 55.4305C33.736 53.103 34.8796 50.1183 34.8796 46.5634H32.8796C32.8796 49.6509 31.9044 52.1062 29.9944 54.0163L31.4086 55.4305ZM34.8796 46.5634C34.8796 42.0287 33.351 38.5742 30.1357 36.4521L29.034 38.1213C31.545 39.7786 32.8796 42.5085 32.8796 46.5634H34.8796ZM30.1357 36.4521C27.0316 34.4034 22.4742 33.4522 16.6147 33.4522V35.4522C22.3225 35.4522 26.4118 36.3907 29.034 38.1213L30.1357 36.4521ZM16.6147 33.4522H14.6392V35.4522H16.6147V33.4522ZM15.6392 34.4522V27.9242H13.6392V34.4522H15.6392ZM14.6392 28.9242H16.7006V26.9242H14.6392V28.9242ZM16.7115 28.9241C22.0537 28.8661 26.2477 27.9985 29.1651 26.1984L28.1149 24.4963C25.6496 26.0175 21.884 26.8678 16.6898 26.9243L16.7115 28.9241ZM29.178 26.1903C32.1934 24.2656 33.6771 21.2915 33.6771 17.445H31.6771C31.6771 20.6993 30.4693 22.9934 28.102 24.5044L29.178 26.1903ZM33.6771 17.445C33.6771 14.166 32.5825 11.4512 30.3455 9.40597L28.996 10.882C30.7674 12.5016 31.6771 14.6542 31.6771 17.445H33.6771ZM30.3561 9.4158C28.1641 7.3527 25.0769 6.39537 21.2531 6.39537V8.39537C24.7589 8.39537 27.2835 9.27046 28.9854 10.8722L30.3561 9.4158ZM21.2531 6.39537C17.5273 6.39537 14.417 7.36008 12.0194 9.37909L13.3077 10.9089C15.2621 9.26307 17.8782 8.39537 21.2531 8.39537V6.39537ZM12.0194 9.37909C9.63299 11.3887 8.23627 14.0879 7.80661 17.4024L9.79002 17.6595C10.162 14.7895 11.3422 12.5641 13.3077 10.9089L12.0194 9.37909ZM8.79832 16.5309H1.15368V18.5309H8.79832V16.5309Z"
                    fill="#34846A"
                    mask="url(#path-1-outside-1_441_3564)"
                  />
                </svg>
              }
              title="Collaborative concept development"
              description="Where ideas converge and innovation thrives. Together, we create transformative solutions for you."
            />

            <Steps
              number={4}
              img={
                <svg
                  className="w-[30px] h-[45px] md:w-[unset] md:h-[unset]"
                  width="49"
                  height="62"
                  viewBox="0 0 49 62"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="path-1-outside-1_441_3567"
                    maskUnits="userSpaceOnUse"
                    x="-1"
                    y="-1"
                    width="51"
                    height="64"
                    fill="black"
                  >
                    <rect fill="white" x="-1" y="-1" width="51" height="64" />
                    <path d="M0.43579 48.1709V42.2442L30.5848 0.499366H39.9474V41.3853H48.5368V48.1709H39.9474V62H32.2168V48.1709H0.43579ZM32.5604 8.65936L9.45474 41.3853H32.5604V8.65936Z" />
                  </mask>
                  <path
                    d="M0.43579 48.1709H-0.56421V49.1709H0.43579V48.1709ZM0.43579 42.2442L-0.374889 41.6587L-0.56421 41.9209V42.2442H0.43579ZM30.5848 0.499367V-0.500633H30.0735L29.7742 -0.0861244L30.5848 0.499367ZM39.9474 0.499367H40.9474V-0.500633H39.9474V0.499367ZM39.9474 41.3853H38.9474V42.3853H39.9474V41.3853ZM48.5368 41.3853H49.5368V40.3853H48.5368V41.3853ZM48.5368 48.1709V49.1709H49.5368V48.1709H48.5368ZM39.9474 48.1709V47.1709H38.9474V48.1709H39.9474ZM39.9474 62V63H40.9474V62H39.9474ZM32.2168 62H31.2168V63H32.2168V62ZM32.2168 48.1709H33.2168V47.1709H32.2168V48.1709ZM32.5604 8.65936H33.5604V5.5092L31.7435 8.0826L32.5604 8.65936ZM9.45474 41.3853L8.63783 40.8085L7.52457 42.3853H9.45474V41.3853ZM32.5604 41.3853V42.3853H33.5604V41.3853H32.5604ZM1.43579 48.1709V42.2442H-0.56421V48.1709H1.43579ZM1.24647 42.8297L31.3955 1.08486L29.7742 -0.0861244L-0.374889 41.6587L1.24647 42.8297ZM30.5848 1.49937H39.9474V-0.500633H30.5848V1.49937ZM38.9474 0.499367V41.3853H40.9474V0.499367H38.9474ZM39.9474 42.3853H48.5368V40.3853H39.9474V42.3853ZM47.5368 41.3853V48.1709H49.5368V41.3853H47.5368ZM48.5368 47.1709H39.9474V49.1709H48.5368V47.1709ZM38.9474 48.1709V62H40.9474V48.1709H38.9474ZM39.9474 61H32.2168V63H39.9474V61ZM33.2168 62V48.1709H31.2168V62H33.2168ZM32.2168 47.1709H0.43579V49.1709H32.2168V47.1709ZM31.7435 8.0826L8.63783 40.8085L10.2716 41.962L33.3773 9.23613L31.7435 8.0826ZM9.45474 42.3853H32.5604V40.3853H9.45474V42.3853ZM33.5604 41.3853V8.65936H31.5604V41.3853H33.5604Z"
                    fill="#34846A"
                    mask="url(#path-1-outside-1_441_3567)"
                  />
                </svg>
              }
              title="Detailed Proposal"
              description="Dive into our detailed proposals crafted to bring clarity, inspire confidence, and where precision meets possibility."
            />

            <Steps
              number={5}
              img={
                <svg
                  className="w-[30px] h-[45px] md:w-[unset] md:h-[unset]"
                  width="43"
                  height="64"
                  viewBox="0 0 43 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="path-1-outside-1_441_3570"
                    maskUnits="userSpaceOnUse"
                    x="-1"
                    y="-1"
                    width="45"
                    height="66"
                    fill="black"
                  >
                    <rect fill="white" x="-1" y="-1" width="45" height="66" />
                    <path d="M38.9229 7.68378H8.7739V27.2678C10.0909 25.4354 12.0379 23.9465 14.6147 22.8013C17.1916 21.5987 19.9688 20.9975 22.9465 20.9975C27.6994 20.9975 31.5646 21.9996 34.5423 24.0038C37.52 25.9507 39.6387 28.4989 40.8985 31.6484C42.2156 34.7406 42.8741 38.0333 42.8741 41.5263C42.8741 45.6493 42.1011 49.3427 40.555 52.6067C39.0088 55.8707 36.6324 58.4476 33.4257 60.3373C30.2762 62.2269 26.3537 63.1718 21.6581 63.1718C15.6455 63.1718 10.7781 61.6257 7.056 58.5335C3.3339 55.4413 1.072 51.3183 0.270316 46.1646H7.91495C8.65937 49.4286 10.2341 51.9768 12.6392 53.8093C15.0442 55.6417 18.0792 56.5579 21.744 56.5579C26.2678 56.5579 29.6749 55.2122 31.9655 52.5208C34.256 49.7722 35.4013 46.1646 35.4013 41.6981C35.4013 37.2316 34.256 33.7958 31.9655 31.3907C29.6749 28.9284 26.2964 27.6973 21.8299 27.6973C18.7949 27.6973 16.1322 28.4417 13.8417 29.9305C11.6084 31.3621 9.97642 33.3377 8.94569 35.8573H1.55874V0.812207H38.9229V7.68378Z" />
                  </mask>
                  <path
                    d="M38.9229 7.68378V8.68378H39.9229V7.68378H38.9229ZM8.7739 7.68378V6.68378H7.7739V7.68378H8.7739ZM8.7739 27.2678H7.7739V30.3725L9.58591 27.8514L8.7739 27.2678ZM14.6147 22.8013L15.0209 23.7151L15.0293 23.7113L15.0376 23.7074L14.6147 22.8013ZM34.5423 24.0038L33.9839 24.8335L33.9951 24.8408L34.5423 24.0038ZM40.8985 31.6484L39.9701 32.0198L39.9742 32.0301L39.9785 32.0403L40.8985 31.6484ZM40.555 52.6067L41.4587 53.0348L40.555 52.6067ZM33.4257 60.3373L32.918 59.4757L32.9112 59.4798L33.4257 60.3373ZM7.056 58.5335L7.69502 57.7643L7.056 58.5335ZM0.270317 46.1646V45.1646H-0.897265L-0.7178 46.3183L0.270317 46.1646ZM7.91495 46.1646L8.88991 45.9423L8.71256 45.1646H7.91495V46.1646ZM31.9655 52.5208L32.7271 53.169L32.7337 53.161L31.9655 52.5208ZM31.9655 31.3907L31.2332 32.0719L31.2413 32.0804L31.9655 31.3907ZM13.8417 29.9305L14.3814 30.7724L14.3867 30.769L13.8417 29.9305ZM8.94569 35.8573V36.8573H9.61704L9.87123 36.2359L8.94569 35.8573ZM1.55874 35.8573H0.558737V36.8573H1.55874V35.8573ZM1.55874 0.812206V-0.187794H0.558737V0.812206H1.55874ZM38.9229 0.812206H39.9229V-0.187794H38.9229V0.812206ZM38.9229 6.68378H8.7739V8.68378H38.9229V6.68378ZM7.7739 7.68378V27.2678H9.7739V7.68378H7.7739ZM9.58591 27.8514C10.7765 26.195 12.5662 24.806 15.0209 23.7151L14.2086 21.8875C11.5096 23.087 9.40542 24.6758 7.96188 26.6842L9.58591 27.8514ZM15.0376 23.7074C17.4758 22.5696 20.1079 21.9975 22.9465 21.9975V19.9975C19.8298 19.9975 16.9074 20.6278 14.1919 21.8951L15.0376 23.7074ZM22.9465 21.9975C27.5639 21.9975 31.217 22.971 33.9839 24.8334L35.1007 23.1742C31.9122 21.0281 27.8349 19.9975 22.9465 19.9975V21.9975ZM33.9951 24.8408C36.8098 26.6812 38.7904 29.0706 39.9701 32.0198L41.827 31.277C40.4871 27.9273 38.2302 25.2203 35.0896 23.1668L33.9951 24.8408ZM39.9785 32.0403C41.2407 35.0037 41.8741 38.1625 41.8741 41.5263H43.8741C43.8741 37.904 43.1905 34.4775 41.8186 31.2566L39.9785 32.0403ZM41.8741 41.5263C41.8741 45.5222 41.1255 49.0662 39.6512 52.1786L41.4587 53.0348C43.0766 49.6193 43.8741 45.7763 43.8741 41.5263H41.8741ZM39.6512 52.1786C38.1935 55.256 35.9579 57.6843 32.918 59.4757L33.9334 61.1988C37.3069 59.2108 39.8242 56.4855 41.4587 53.0348L39.6512 52.1786ZM32.9112 59.4798C29.9548 61.2536 26.2221 62.1718 21.6581 62.1718V64.1718C26.4853 64.1718 30.5976 63.2003 33.9402 61.1948L32.9112 59.4798ZM21.6581 62.1718C15.8206 62.1718 11.1973 60.6739 7.69502 57.7643L6.41698 59.3027C10.3589 62.5775 15.4704 64.1718 21.6581 64.1718V62.1718ZM7.69502 57.7643C4.17565 54.8405 2.02581 50.9441 1.25843 46.0109L-0.7178 46.3183C0.118187 51.6925 2.49214 56.042 6.41698 59.3027L7.69502 57.7643ZM0.270317 47.1646H7.91495V45.1646H0.270317V47.1646ZM6.93998 46.387C7.73052 49.8532 9.4215 52.6149 12.0331 54.6047L13.2452 53.0138C11.0467 51.3388 9.58822 49.0041 8.88991 45.9423L6.93998 46.387ZM12.0331 54.6047C14.6468 56.5961 17.9079 57.5579 21.744 57.5579V55.5579C18.2504 55.5579 15.4416 54.6873 13.2452 53.0138L12.0331 54.6047ZM21.744 57.5579C26.4726 57.5579 30.1959 56.1431 32.727 53.169L31.2039 51.8727C29.154 54.2814 26.063 55.5579 21.744 55.5579V57.5579ZM32.7337 53.161C35.2083 50.1916 36.4013 46.3388 36.4013 41.6981H34.4013C34.4013 45.9905 33.3037 49.3529 31.1973 51.8807L32.7337 53.161ZM36.4013 41.6981C36.4013 37.0653 35.2111 33.3487 32.6896 30.7011L31.2413 32.0804C33.3009 34.2429 34.4013 37.3978 34.4013 41.6981H36.4013ZM32.6977 30.7096C30.1615 27.9833 26.4788 26.6973 21.8299 26.6973V28.6973C26.114 28.6973 29.1884 29.8735 31.2333 32.0718L32.6977 30.7096ZM21.8299 26.6973C18.6237 26.6973 15.7671 27.4863 13.2967 29.0921L14.3867 30.769C16.4973 29.3971 18.9662 28.6973 21.8299 28.6973V26.6973ZM13.302 29.0886C10.8907 30.6343 9.1266 32.7739 8.02014 35.4786L9.87123 36.2359C10.8262 33.9014 12.3261 32.0899 14.3814 30.7724L13.302 29.0886ZM8.94569 34.8573H1.55874V36.8573H8.94569V34.8573ZM2.55874 35.8573V0.812206H0.558737V35.8573H2.55874ZM1.55874 1.81221H38.9229V-0.187794H1.55874V1.81221ZM37.9229 0.812206V7.68378H39.9229V0.812206H37.9229Z"
                    fill="#34846A"
                    mask="url(#path-1-outside-1_441_3570)"
                  />
                </svg>
              }
              title="Participate in our design feedback loop."
              description="We engage in our Design Development & Feedback Loop where creativity evolves, excellence emerges, and your input shapes the vision, ensuring every detail exceeds expectations."
            />
          </div>
        </div>
      </div>

      <Experience360 />

      {/* Section 4 */}
      <div className="py-10 w-[95%] md:w-[80%] m-auto">
        <h1 className="text-black font-bold text-[28px] mx-auto md:text-[3rem] ml-2 w-fit head-shade my-6">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ArchitectureData.map((item, index) => {
            return <TextWIthBack {...item} key={index} clasName="w-full" />;
          })}
        </div>
      </div>

      <div className="border border-black py-4 md:py-5  bg-[#1B454D] relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-white">
        <img
          src={require("../assets/architecture/vector-a.png").default}
          alt="Vector"
          className="top-[10%] left-0 absolute z-0"
        />
        <img
          src={require("../assets/architecture/vector-b.png").default}
          alt="Vector"
          className="top-[10%] right-0 absolute z-0"
        />
        <div className="flex flex-col justify-center items-center">
          <img
            src={require("../assets/architecture/logo1.png").default}
            className="w-[4.5rem]"
            width={60}
            height={60}
            alt="image"
          />
          <div className="text-center py-2 md:py-4">3D Elevation </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <svg
            width="118"
            height="53"
            viewBox="0 0 118 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 31.4205L39.5148 52.6927L67.0185 38.0559L51.0037 29.469L48.9148 28.298L27.5037 16.7838L0 31.4205Z"
              fill="#F1F052"
            />
            <path
              d="M31.3334 14.637L52.9186 26.1513L64.7556 19.9063L80.4223 11.5145L58.8371 0.000244141L31.3334 14.637Z"
              fill="#F1F052"
            />
            <path
              d="M56.9226 28.298L71.0226 35.9091L90.1707 46.2525L102.008 40.0074L68.5856 22.053L56.9226 28.298Z"
              fill="#F1F052"
            />
            <path
              d="M117.674 31.4205L84.4263 13.6612L72.5892 19.9062L105.837 37.8607L117.674 31.4205Z"
              fill="#F1F052"
            />
          </svg>

          <div className="text-center py-2 md:py-4">Structural Design </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            src={require("../assets/architecture/logo3.png").default}
            className="w-[4.5rem]"
            width={60}
            height={60}
            alt="image"
          />
          <div className="text-center py-2 md:py-4">
            Electrical & Plumbing Design
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            src={require("../assets/architecture/logo4.png").default}
            className="w-[4.5rem]"
            width={60}
            height={60}
            alt="image"
          />
          <div className="text-center py-2 md:py-4">360{'"'} View</div>
        </div>
      </div>

      <Gallery />

      <div className="w-11/12 md:w-10/12 py-3 mx-auto">
        <BlogsSection title="Design Diary" readMore={true} />
      </div>

      <ClientSay />
    </>
  );
}
