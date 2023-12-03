import { Link } from "react-router-dom";
import Logo from "../assets/home/Logo.svg";
import Hambargar from "../assets/home/Icon.png";
import Banner from "../assets/career/Image.png";
import Container from "../assets/career/Icon Container.png";
import ContainerTow from "../assets/career/Icon Container (1).png";
import ContainerThree from "../assets/career/Icon Container (2).png";
import ContainerFour from "../assets/career/Icon Container (3).png";
import Astract from "../assets/home/abstract.png";
import { useState } from "react";

function Career() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      {/* header */}
      <header
        style={{ backgroundImage: `url(${Astract})` }}
        className="bg-left-top bg-no-repeat pt-14"
      >
        <div className="container px-5 m-auto">
          <div className="lg:h-screen">
            <div className="relative bg-[#1C1C1C] rounded-full py-5 px-10">
              <div className="flex justify-between items-center">
                <Link to="/" className="w-full">
                  <img src={Logo} alt="" className="w-4/12 lg:w-[150px]" />
                </Link>
                <a
                  className="bg-[#CAFF33] w-20 h-12 rounded-full flex justify-center items-center lg:hidden"
                  href="#"
                  onClick={() => setMenu(!menu)}
                >
                  <img src={Hambargar} alt="" />
                </a>
              </div>
              <ul
                id="menuItems"
                className={`px-5 lg:bg-transparent lg:px-0 lg:top-0 absolute lg:flex left-0 bg-[#1C1C1C] py-8 w-full lg:w-[30%] lg:right-[37%] lg:left-auto lg:gap-0 lg:py-3 ${
                  !menu && "hidden"
                }`}
              >
                <li className="rounded-full hover:bg-[#262626] w-full text-center transform hover:scale-105 duration-500 p-4">
                  <Link className="text-white text-sm font-normal" to="/">
                    Home
                  </Link>
                </li>
                <li className="rounded-full hover:bg-[#262626] w-full text-center transform hover:scale-105 duration-500 p-4">
                  <Link className="text-white text-sm font-normal" to="/career">
                    Careers
                  </Link>
                </li>
                <li className="rounded-full hover:bg-[#262626] w-full text-center transform hover:scale-105 duration-500 p-4">
                  <Link className="text-white text-sm font-normal" to="/about">
                    About
                  </Link>
                </li>
                <li className="rounded-full hover:bg-[#262626] w-full text-center transform hover:scale-105 duration-500 p-4">
                  <Link
                    className="text-white text-sm font-normal"
                    to="/security"
                  >
                    Security
                  </Link>
                </li>
                <li className="w-full py-5 lg:hidden">
                  <button className="bg-[#CAFF33] hover:bg-[#b5ee1a] w-full rounded-full py-3 text-black font-normal text-sm">
                    Sing Up
                  </button>
                </li>
                <li className="w-full lg:hidden">
                  <button className="bg-[#CAFF33] hover:bg-[#b5ee1a] w-full rounded-full py-3 text-black font-normal text-sm">
                    Login
                  </button>
                </li>
              </ul>
              <ul className="hidden lg:flex lg: gap-5 absolute top-[25%] right-[40px]">
                <li className="w-fit">
                  <button className="bg-[#CAFF33] hover:bg-[#b5ee1a] w-full rounded-full py-3 px-10 text-black font-normal text-sm">
                    Sing Up
                  </button>
                </li>
                <li className="w-fit">
                  <button className="bg-[#CAFF33] hover:bg-[#b5ee1a] w-full rounded-full py-3 px-10 text-black font-normal text-sm">
                    Login
                  </button>
                </li>
              </ul>
            </div>
            <div
              style={{ backgroundImage: `url(${Astract})` }}
              className="bg-no-repeat bg-right-top bg-contain flex flex-col-reverse lg:flex-row lg:items-start bg-[#1C1C1C] p-10 rounded-xl mt-20 lg:mt-32"
            >
              <div className="flex flex-col gap-4 items-center lg:items-start pt-10 bg-[#191919] p-8 rounded-t-xl mt-[-30px] lg:mt-0 lg:mr-[-100px] lg:w-[53%] lg:rounded-none lg:rounded-br-[70px] lg:h-auto lg:z-10 lg:p-16">
                <h2 className="text-white text-3xl lg:text-5xl font-normal leading-snug text-center lg:text-left lg:w-46">
                  Welcome to <span className="text-[#CAFF33]">YourBank</span>{" "}
                  Careers!
                </h2>
                <p className="text-gray-300 text-base font-thin leading-loose text-center lg:text-left">
                  At YourBank, we understand the importance of keeping your
                  financial information secure. We employ robust security
                  measures and advanced technologies to protect your personal
                  and financial data. Rest assured that when you bank with us,
                  your security is our utmost priority.
                </p>
              </div>
              <div
                style={{ backgroundImage: `url(${Astract})` }}
                className="bg-right-top bg-contain bg-no-repeat lg:w-6/12"
              >
                <img src={Banner} alt="" />
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* header */}

      {/* values */}
      <div>
        <div className="container m-auto p-5">
          <div className="flex flex-col gap-3 items-center mb-14 lg:items-start">
            <h2 className="text-white text-3xl">
              Our <span className="text-[#CAFF33]">Values</span>
            </h2>
            <p className="text-gray-300 text-base font-thin text-center lg:text-left lg:w-9/12">
              At YourBank, we prioritize the security and confidentiality of
              your financial information. Our state-of-the-art encryption
              technology and stringent data protection measures ensure your
              assets and transactions are safeguarded at all times
            </p>
          </div>
          <div className="grid grid-rows-1 grid-cols-1 gap-14 lg:grid-rows-2 lg:grid-cols-2">
            <div className="flex flex-col gap-5 p-5 border-l-2 border-[#CAFF33]">
              <h2 className="text-gray-600 text-3xl leading-relaxed">
                Integrity
              </h2>
              <p className="text-gray-300 text-base font-thin text-left leading-loose">
                Our online banking platform is built with multiple layers of
                security to safeguard your information. We utilize
                industry-standard encryption protocols to ensure that your data
                remains confidential and protected during transmission.
              </p>
            </div>
            <div className="flex flex-col gap-5 p-5 border-l-2 border-[#CAFF33]">
              <h2 className="text-gray-600 text-3xl leading-relaxed">
                Integrity
              </h2>
              <p className="text-gray-300 text-base font-thin text-left leading-loose">
                Our online banking platform is built with multiple layers of
                security to safeguard your information. We utilize
                industry-standard encryption protocols to ensure that your data
                remains confidential and protected during transmission.
              </p>
            </div>
            <div className="flex flex-col gap-5 p-5 border-l-2 border-[#CAFF33]">
              <h2 className="text-gray-600 text-3xl leading-relaxed">
                Integrity
              </h2>
              <p className="text-gray-300 text-base font-thin text-left leading-loose">
                Our online banking platform is built with multiple layers of
                security to safeguard your information. We utilize
                industry-standard encryption protocols to ensure that your data
                remains confidential and protected during transmission.
              </p>
            </div>
            <div className="flex flex-col gap-5 p-5 border-l-2 border-[#CAFF33]">
              <h2 className="text-gray-600 text-3xl leading-relaxed">
                Integrity
              </h2>
              <p className="text-gray-300 text-base font-thin text-left leading-loose">
                Our online banking platform is built with multiple layers of
                security to safeguard your information. We utilize
                industry-standard encryption protocols to ensure that your data
                remains confidential and protected during transmission.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* values */}

      {/* benifit */}
      <div className="py-20">
        <div className="container m-auto p-5">
          <div className="flex flex-col gap-3 items-center mb-14 lg:items-start">
            <h2 className="text-[#CAFF33] text-3xl">How We Protect You</h2>
            <p className="text-gray-300 text-base font-thin text-center lg:text-left lg:w-9/12">
              At YourBank, we prioritize the security and confidentiality of
              your financial information. Our state-of-the-art encryption
              technology and stringent data protection measures ensure your
              assets and transactions are safeguarded at all times
            </p>
          </div>
          <div className="grid grid-rows-1 grid-cols-1 gap-10 lg:grid-rows-2 lg:grid-cols-2 lg:gap-5">
            <div className="flex flex-col gap-5 bg-[#1C1C1C] p-10 border-2 border-[#262626] rounded-3xl">
              <span>
                <img src={Container} alt="" />
                <h2 className="text-white text-2xl leading-relaxed pt-5">
                  Secure Online Banking Platform
                </h2>
              </span>
              <p className="text-gray-300 text-base font-thin text-left leading-loose">
                Our online banking platform is built with multiple layers of
                security to safeguard your information. We utilize
                industry-standard encryption protocols to ensure that your data
                remains confidential and protected during transmission.
              </p>
            </div>
            <div className="flex flex-col gap-5 bg-[#1C1C1C] p-10 border-2 border-[#262626] rounded-3xl">
              <span>
                <img src={ContainerTow} alt="" />
                <h2 className="text-white text-2xl leading-relaxed pt-5">
                  Secure Online Banking Platform
                </h2>
              </span>
              <p className="text-gray-300 text-base font-thin text-left leading-loose">
                Our online banking platform is built with multiple layers of
                security to safeguard your information. We utilize
                industry-standard encryption protocols to ensure that your data
                remains confidential and protected during transmission.
              </p>
            </div>
            <div className="flex flex-col gap-5 bg-[#1C1C1C] p-10 border-2 border-[#262626] rounded-3xl">
              <span>
                <img src={ContainerThree} alt="" />
                <h2 className="text-white text-2xl leading-relaxed pt-5">
                  Secure Online Banking Platform
                </h2>
              </span>
              <p className="text-gray-300 text-base font-thin text-left leading-loose">
                Our online banking platform is built with multiple layers of
                security to safeguard your information. We utilize
                industry-standard encryption protocols to ensure that your data
                remains confidential and protected during transmission.
              </p>
            </div>
            <div className="flex flex-col gap-5 bg-[#1C1C1C] p-10 border-2 border-[#262626] rounded-3xl">
              <span>
                <img src={ContainerFour} alt="" />
                <h2 className="text-white text-2xl leading-relaxed pt-5">
                  Secure Online Banking Platform
                </h2>
              </span>
              <p className="text-gray-300 text-base font-thin text-left leading-loose">
                Our online banking platform is built with multiple layers of
                security to safeguard your information. We utilize
                industry-standard encryption protocols to ensure that your data
                remains confidential and protected during transmission.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* benifit */}
    </>
  );
}

export default Career;
