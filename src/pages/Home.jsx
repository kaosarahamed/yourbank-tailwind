import Logo from "../assets/home/Logo.svg";
import Hambargar from "../assets/home/Icon.png";
import Cradit from "../assets/home/Subtract.svg";
import GroupOne from "../assets/home/Group 1.png";
import ContainerOne from "../assets/home/Icon Container.png";
import ContainerTOw from "../assets/home/Icon Container (1).png";
import ContainerThree from "../assets/home/Icon Container (2).png";
import ContainerFour from "../assets/home/Icon Container (3).png";
import ContainerFive from "../assets/home/Icon Container (3).png";
import Arrow from "../assets/home/arrow.png";
import Astract from "../assets/home/abstract.png";
import Graow from "../assets/home/g.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function Home() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      {/* header */}
      <header
        style={{ backgroundImage: `url(${Astract})` }}
        className="bg-left-top bg-no-repeat py-14"
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
            <div className="lg:flex lg:justify-between lg:h-[90vh] lg:items-center">
              <div className="flex flex-col items-center gap-7 pt-10 lg:items-start lg:w-6/12">
                <span className="flex gap-2 bg-[#262626] rounded-full p-5 w-fit">
                  <img src={Cradit} alt="" />
                  <p className="text-white font-xs font-thin">
                    No LLC Required, No Credit Check.
                  </p>
                </span>
                <h2 className="text-white text-3xl font-medium leading-relaxed text-center lg:text-left lg:w-[60%]">
                  Welcome to YourBank Empowering Your
                  <span className="text-[#CAFF33]">Financial Journey</span>
                </h2>
                <p className="text-white text-lg font-thin leading-relaxed text-center lg:text-left">
                  At YourBank, our mission is to provide comprehensive banking
                  solutions that empower individuals and businesses to achieve
                  their financial goals. We are committed to delivering
                  personalized and innovative services that prioritize our
                  customers needs.
                </p>
                <button className="bg-[#CAFF33] px-14 py-4 rounded-full">
                  Open Account
                </button>
              </div>
              <div className="mt-14">
                <img src={GroupOne} alt="" />
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* header */}

      {/* products */}
      <div className="py-20 lg:pb-52">
        <div className="container px-5 m-auto">
          <div className="lg:flex lg:justify-between">
            <span>
              <h2 className="pb-5 text-4xl text-white font-medium text-center lg:text-left">
                Our <span className="text-[#CAFF33]">Products</span>
              </h2>
              <p className="text-lg text-white font-thin leading-relaxed text-center lg:text-left lg:w-4/6">
                Discover a range of comprehensive and customizable banking
                products at YourBank, designed to suit your unique financial
                needs and aspirations
              </p>
            </span>
            <span className="flex bg-[#262626] py-4 px-4 lg:w-4/12 rounded-full gap-6 items-center w-fit m-auto mt-10">
              <button className="bg-[#CAFF33] px-10 py-4 rounded-full m-auto lg:w-full">
                For Individuals
              </button>
              <a
                href="#"
                className="text-white text-lg font-medium pr-5 lg:w-full"
              >
                For Businesses
              </a>
            </span>
          </div>
          <div className="flex flex-col gap-14 mt-20 lg:flex-row lg:gap-28 lg:mt-40">
            <div className="flex flex-col justify-center items-center gap-3 lg:gap-5">
              <img src={ContainerOne} alt="" className="w-3/12" />
              <h3 className="text-white text-xl font-normal text-center">
                Checking Accounts
              </h3>
              <p className="text-gray-400 text-lg font-normal text-center leading-loose">
                Enjoy easy and convenient access to your funds with our range of
                checking account options. Benefit from features such as online
                and mobile banking, debit cards, and free ATM access.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-3 lg:gap-5">
              <img src={ContainerTOw} alt="" className="w-3/12" />
              <h3 className="text-white text-xl font-normal text-center">
                Savings Accounts
              </h3>
              <p className="text-gray-400 text-lg font-normal text-center leading-loose">
                Enjoy easy and convenient access to your funds with our range of
                checking account options. Benefit from features such as online
                and mobile banking, debit cards, and free ATM access.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-3 lg:gap-5">
              <img src={ContainerThree} alt="" className="w-3/12" />
              <h3 className="text-white text-xl font-normal text-center">
                Loans and Mortgages
              </h3>
              <p className="text-gray-400 text-lg font-normal text-center leading-loose">
                Enjoy easy and convenient access to your funds with our range of
                checking account options. Benefit from features such as online
                and mobile banking, debit cards, and free ATM access.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* products */}

      {/* userCase */}
      <div>
        <div className="container m-auto px-5">
          <div className="flex flex-col gap-10 lg:gap-5">
            <h2 className="text-[#CAFF33] text-3xl lg:text-5xl font-medium text-center lg:text-left">
              Use Cases
            </h2>
            <p className="text-gray-400 text-lg font-normal text-center leading-loose lg:text-left">
              At YourBank, we cater to the diverse needs of individuals and
              businesses alike, offering a wide range of financial solutions
            </p>
          </div>
          <div className="py-24 lg:flex lg:gap-20">
            <div
              style={{ backgroundImage: `url(${Graow})` }}
              className="bg-left-top bg-no-repeat bg-[#1C1C1C] p-6 grid grid-cols-2 grid-rows-2 gap-4 pt-10 lg:w-3/6 lg:p-10"
            >
              <div className="bg-[#191919] p-5 border-[#262626] border-2 rounded-xl flex flex-col items-center lg:justify-center lg:gap-3">
                <img
                  src={ContainerFour}
                  alt=""
                  className="w-6/8 m-auto lg:w-4/12 lg:m-0"
                />
                <h3 className="text-white text-base font-medium leading-relaxed text-center lg:leading-loose">
                  Managing Personal Finances
                </h3>
              </div>
              <div className="bg-[#191919] p-5 border-[#262626] border-2 rounded-xl flex flex-col items-center lg:justify-center lg:gap-3">
                <img
                  src={ContainerFive}
                  alt=""
                  className="w-6/8 m-auto lg:w-4/12 lg:m-0"
                />
                <h3 className="text-white text-base font-medium leading-relaxed text-center">
                  Saving for the Future
                </h3>
              </div>
              <div className="bg-[#191919] p-5 border-[#262626] border-2 rounded-xl flex flex-col items-center lg:justify-center lg:gap-3">
                <img
                  src={ContainerOne}
                  alt=""
                  className="w-6/8 m-auto lg:w-4/12 lg:m-0"
                />
                <h3 className="text-white text-base font-medium leading-relaxed text-center">
                  Homeownership
                </h3>
              </div>
              <div className="bg-[#191919] p-5 border-[#262626] border-2 rounded-xl flex flex-col items-center lg:justify-center lg:gap-3">
                <img
                  src={ContainerOne}
                  alt=""
                  className="w-6/8 m-auto lg:w-4/12 lg:m-0"
                />
                <h3 className="text-white text-base font-medium leading-relaxed text-center">
                  Education Funding
                </h3>
              </div>
            </div>
            <div className="flex flex-col gap-20 pt-10 lg:w-3/6 lg:gap-14">
              <div className="flex flex-col gap-7">
                <h3 className="text-white text-3xl font-medium text-center lg:text-left">
                  For Individuals
                </h3>
                <p className="text-gray-400 text-lg font-thin text-center leading-loose lg:text-left">
                  For individuals, our mortgage services pave the way to
                  homeownership, and our flexible personal loans provide vital
                  support during various life milestones. We also prioritize
                  retirement planning, ensuring a financially secure future for
                  our customers
                </p>
              </div>
              <div className="flex flex-col gap-16 lg:flex-row">
                <span>
                  <h1 className="text-[#CAFF33] text-6xl font-medium text-center pb-5">
                    78%
                  </h1>
                  <p className="text-gray-400 text-lg text-center font-thin">
                    Secure Retirement Planning
                  </p>
                </span>
                <span>
                  <h1 className="text-[#CAFF33] text-6xl font-medium text-center pb-5">
                    63%
                  </h1>
                  <p className="text-gray-400 text-lg text-center font-thin">
                    Manageable Debt Consolidation
                  </p>
                </span>
                <span>
                  <h1 className="text-[#CAFF33] text-6xl font-medium text-center pb-5">
                    91%
                  </h1>
                  <p className="text-gray-400 text-lg text-center font-thin">
                    Reducing financial burdens
                  </p>
                </span>
              </div>
              <button className="text-white bg-[#1C1C1C] border-[#262626] border-2 py-6 rounded-full text-center px-14 m-auto lg:m-0 lg:w-fit lg:py-3">
                Learn More
              </button>
            </div>
          </div>
          <div className="my-20 lg:flex lg:flex-row-reverse lg:gap-20">
            <div
              style={{ backgroundImage: `url(${Graow})` }}
              className="bg-left-top bg-no-repeat bg-[#1C1C1C] p-6 grid grid-cols-2 grid-rows-2 gap-4 pt-10 lg:w-6/12 lg:p-10"
            >
              <div className="bg-[#191919] p-5 border-[#262626] border-2 rounded-xl flex flex-col items-center lg:justify-center lg:gap-3">
                <img
                  src={ContainerOne}
                  alt=""
                  className="w-6/8 m-auto lg:w-4/12 lg:m-0"
                />
                <h3 className="text-white text-base font-medium leading-relaxed text-center">
                  Managing Personal Finances
                </h3>
              </div>
              <div className="bg-[#191919] p-5 border-[#262626] border-2 rounded-xl flex flex-col items-center lg:justify-center lg:gap-3">
                <img
                  src={ContainerOne}
                  alt=""
                  className="w-6/8 m-auto lg:w-4/12 lg:m-0"
                />
                <h3 className="text-white text-base font-medium leading-relaxed text-center">
                  Saving for the Future
                </h3>
              </div>
              <div className="bg-[#191919] p-5 border-[#262626] border-2 rounded-xl flex flex-col items-center lg:justify-center lg:gap-3">
                <img
                  src={ContainerOne}
                  alt=""
                  className="w-6/8 m-auto lg:w-4/12 lg:m-0"
                />
                <h3 className="text-white text-base font-medium leading-relaxed text-center">
                  Homeownership
                </h3>
              </div>
              <div className="bg-[#191919] p-5 border-[#262626] border-2 rounded-xl flex flex-col items-center lg:justify-center lg:gap-3">
                <img
                  src={ContainerOne}
                  alt=""
                  className="w-6/8 m-auto lg:w-4/12 lg:m-0"
                />
                <h3 className="text-white text-base font-medium leading-relaxed text-center">
                  Education Funding
                </h3>
              </div>
            </div>
            <div className="flex flex-col gap-20 pt-10 lg:w-6/12 lg:gap-14">
              <div className="flex flex-col gap-7">
                <h3 className="text-white text-3xl font-medium text-center lg:text-left">
                  For Individuals
                </h3>
                <p className="text-gray-400 text-lg font-thin text-center leading-loose lg:text-left">
                  For individuals, our mortgage services pave the way to
                  homeownership, and our flexible personal loans provide vital
                  support during various life milestones. We also prioritize
                  retirement planning, ensuring a financially secure future for
                  our customers
                </p>
              </div>
              <div className="flex flex-col gap-16 lg:flex-row">
                <span>
                  <h1 className="text-[#CAFF33] text-6xl font-medium text-center pb-5">
                    78%
                  </h1>
                  <p className="text-gray-400 text-lg text-center font-thin">
                    Secure Retirement Planning
                  </p>
                </span>
                <span>
                  <h1 className="text-[#CAFF33] text-6xl font-medium text-center pb-5">
                    63%
                  </h1>
                  <p className="text-gray-400 text-lg text-center font-thin">
                    Manageable Debt Consolidation
                  </p>
                </span>
                <span>
                  <h1 className="text-[#CAFF33] text-6xl font-medium text-center pb-5">
                    91%
                  </h1>
                  <p className="text-gray-400 text-lg text-center font-thin">
                    Reducing financial burdens
                  </p>
                </span>
              </div>
              <button className="text-white bg-[#1C1C1C] border-[#262626] border-2 py-6 rounded-full text-center px-14 m-auto lg:m-0 lg:w-fit lg:py-3">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* userCase */}

      {/* features */}
      <div className="py-20">
        <div className="container px-5 m-auto">
          <div>
            <h2 className="text-white text-3xl font-medium text-center lg:text-left lg:text-5xl">
              Our <span className="text-[#CAFF33]">Features</span>
            </h2>
            <p className="text-gray-400 text-lg font-normal text-center leading-loose pt-10 lg:text-left lg:pt-5 lg:w-9/12">
              Experience a host of powerful features at YourBank, including
              seamless online banking, secure transactions, and personalized
              financial insights, all designed to enhance your banking
              experience
            </p>
          </div>
          <div className="lg:flex lg:gap-10 lg:py-16 lg:items-start">
            <ul className="lg:w-3/12 flex justify-around items-center flex-col gap-10 bg-[#1C1C1C] p-10 lg:gap-5 rounded-xl lg:p-6 lg:justify-start lg:items-start">
              <li>
                <a
                  className="text-white text-lg font-normal hover:text-[#CAFF33]"
                  href="#"
                >
                  Onliine Banking
                </a>
              </li>
              <li>
                <a
                  className="text-white text-lg font-normal hover:text-[#CAFF33]"
                  href="#"
                >
                  Financial Tools
                </a>
              </li>
              <li>
                <a
                  className="text-white text-lg font-normal hover:text-[#CAFF33]"
                  href="#"
                >
                  Cusstomer Support
                </a>
              </li>
            </ul>
            <div className="grid grid-cols-1 grid-rows-4 gap-5 pt-10 lg:pt-0 lg:grid-rows-2 lg:grid-cols-2">
              <div className="bg-[#1C1C1C] p-7">
                <span className="flex justify-between">
                  <h3 className="text-white text-2xl font-normal">
                    24/7 Account Access
                  </h3>
                  <img src={Arrow} alt="" />
                </span>
                <p className="text-gray-300 text-base font-thin leading-loose pt-7">
                  Enjoy the convenience of accessing your accounts anytime,
                  anywhere through our secure online banking platform. Check
                  balances, transfer funds, and pay bills with ease.
                </p>
              </div>
              <div className="bg-[#1C1C1C] p-7">
                <span className="flex justify-between">
                  <h3 className="text-white text-2xl font-normal">
                    24/7 Account Access
                  </h3>
                  <img src={Arrow} alt="" />
                </span>
                <p className="text-gray-300 text-base font-thin leading-loose pt-7">
                  Enjoy the convenience of accessing your accounts anytime,
                  anywhere through our secure online banking platform. Check
                  balances, transfer funds, and pay bills with ease.
                </p>
              </div>
              <div className="bg-[#1C1C1C] p-7">
                <span className="flex justify-between">
                  <h3 className="text-white text-2xl font-normal">
                    24/7 Account Access
                  </h3>
                  <img src={Arrow} alt="" />
                </span>
                <p className="text-gray-300 text-base font-thin leading-loose pt-7">
                  Enjoy the convenience of accessing your accounts anytime,
                  anywhere through our secure online banking platform. Check
                  balances, transfer funds, and pay bills with ease.
                </p>
              </div>
              <div className="bg-[#1C1C1C] p-7">
                <span className="flex justify-between">
                  <h3 className="text-white text-2xl font-normal">
                    24/7 Account Access
                  </h3>
                  <img src={Arrow} alt="" />
                </span>
                <p className="text-gray-300 text-base font-thin leading-loose pt-7">
                  Enjoy the convenience of accessing your accounts anytime,
                  anywhere through our secure online banking platform. Check
                  balances, transfer funds, and pay bills with ease.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* features */}

      {/* faq */}
      <div className="py-20">
        <div className="container px-5 m-auto">
          <div>
            <h2 className="text-[#CAFF33] text-3xl font-medium text-center lg:text-left">
              Frequently <span className="text-white">Asked Questions</span>
            </h2>
            <p className="text-gray-400 text-lg font-normal text-center leading-loose pt-10 lg:text-left lg:w-3/4">
              Experience a host of powerful features at YourBank, including
              seamless online banking, secure transactions, and personalized
              financial insights, all designed to enhance your banking
              experience
            </p>
          </div>
          <div className="grid grid-cols-1 grid-rows-4 gap-5 pt-10 lg:grid-cols-2 lg:grid-rows-2">
            <div className="bg-[#1C1C1C] p-7 border-[#262626] border-2 rounded-xl">
              <h3 className="text-white text-2xl font-normal">
                24/7 Account Access
              </h3>
              <p className="text-gray-300 text-base font-thin leading-loose pt-7">
                Enjoy the convenience of accessing your accounts anytime,
                anywhere through our secure online banking platform. Check
                balances, transfer funds, and pay bills with ease.
              </p>
            </div>
            <div className="bg-[#1C1C1C] p-7 border-[#262626] border-2 rounded-xl">
              <h3 className="text-white text-2xl font-normal">
                24/7 Account Access
              </h3>
              <p className="text-gray-300 text-base font-thin leading-loose pt-7">
                Enjoy the convenience of accessing your accounts anytime,
                anywhere through our secure online banking platform. Check
                balances, transfer funds, and pay bills with ease.
              </p>
            </div>
            <div className="bg-[#1C1C1C] p-7 border-[#262626] border-2 rounded-xl">
              <h3 className="text-white text-2xl font-normal">
                24/7 Account Access
              </h3>
              <p className="text-gray-300 text-base font-thin leading-loose pt-7">
                Enjoy the convenience of accessing your accounts anytime,
                anywhere through our secure online banking platform. Check
                balances, transfer funds, and pay bills with ease.
              </p>
            </div>
            <div className="bg-[#1C1C1C] p-7 border-[#262626] border-2 rounded-xl">
              <h3 className="text-white text-2xl font-normal">
                24/7 Account Access
              </h3>
              <p className="text-gray-300 text-base font-thin leading-loose pt-7">
                Enjoy the convenience of accessing your accounts anytime,
                anywhere through our secure online banking platform. Check
                balances, transfer funds, and pay bills with ease.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* faq */}

      {/* testimonial */}
      <div className="pb-10 lg:py-32">
        <div className="container px-5 m-auto">
          <div className="lg:flex lg:justify-between">
            <span>
              <h2 className="pb-5 text-4xl text-white font-medium text-center lg:text-left">
                Our <span className="text-[#CAFF33]">Testimonials</span>
              </h2>
              <p className="text-lg text-white font-thin leading-relaxed text-center lg:text-left lg:w-4/6">
                Discover a range of comprehensive and customizable banking
                products at YourBank, designed to suit your unique financial
                needs and aspirations
              </p>
            </span>
            <span className="flex bg-[#262626] py-4 px-4 lg:w-4/12 rounded-full gap-6 items-center w-fit m-auto mt-10">
              <button className="bg-[#CAFF33] px-10 py-4 rounded-full m-auto lg:w-full">
                For Individuals
              </button>
              <a
                href="#"
                className="text-white text-lg font-medium pr-5 lg:w-full"
              >
                For Businesses
              </a>
            </span>
          </div>
          <div className="flex flex-col gap-6 mt-20 lg:flex-row">
            <div className="flex flex-col justify-center items-center gap-3 border-[#262626] p-8 rounded-lg border-2">
              <img src={ContainerOne} alt="" className="w-3/12" />

              <p className="text-gray-400 text-lg font-normal text-center leading-loose">
                Enjoy easy and convenient access to your funds with our range of
                checking account options. Benefit from features such as online
                and mobile banking, debit cards, and free ATM access.
              </p>
              <h3 className="text-white hover:text-[#CAFF33] text-base font-normal text-center">
                John D
              </h3>
            </div>
            <div className="flex flex-col justify-center items-center gap-3 border-[#262626] p-8 rounded-lg border-2">
              <img src={ContainerOne} alt="" className="w-3/12" />
              <p className="text-gray-400 text-lg font-normal text-center leading-loose">
                Enjoy easy and convenient access to your funds with our range of
                checking account options. Benefit from features such as online
                and mobile banking, debit cards, and free ATM access.
              </p>
              <h3 className="text-white hover:text-[#CAFF33] text-base font-normal text-center">
                John D
              </h3>
            </div>
            <div className="flex flex-col justify-center items-center gap-3 border-[#262626] p-8 rounded-lg border-2">
              <img src={ContainerOne} alt="" className="w-3/12" />
              <p className="text-gray-400 text-lg font-normal text-center leading-loose">
                Enjoy easy and convenient access to your funds with our range of
                checking account options. Benefit from features such as online
                and mobile banking, debit cards, and free ATM access.
              </p>
              <h3 className="text-white hover:text-[#CAFF33] text-base font-normal text-center">
                John D
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* testimonial */}

      {/* colAction */}
      <div
        style={{ backgroundImage: `url(${Astract})` }}
        className="bg-left-top bg-no-repeat bg-[#1C1C1C] p-8 container lg:m-auto lg:p-20 lg:rounded-2xl lg:my-24"
      >
        <div className="flex justify-between flex-col gap-10 items-center m-auto lg:flex-row">
          <div>
            <h2 className="text-white text-3xl text-center font-normal leading-relaxed lg:text-left">
              Start your financial journey with
              <span className="text-[#CAFF33]">YourBank today!</span>
            </h2>
            <p className="text-gray-300 text-lg font-thin leading-relaxed text-center pt-10 lg:text-left lg:pt-5 lg:w-3/4">
              Ready to take control of your finances? Join YourBank now, and let
              us help you achieve your financial goals with our tailored
              solutions and exceptional customer service
            </p>
          </div>
          <button className="bg-[#CAFF33] px-10 py-4 rounded-full m-auto lg:w-3/12">
            Open Account
          </button>
        </div>
      </div>
      {/* colAction */}
    </>
  );
}

export default Home;
