import Astract from "../assets/home/abstract.png";
import Graow from "../assets/home/g.png";
import Logo from "../assets/home/Logo.svg";
import Hambargar from "../assets/home/Icon.png";
import Banner from "../assets/about/Image.png";
import Container from "../assets/about/Image Container.png";
import ContainerOne from "../assets/about/Image Container (1).png";
import PostOne from "../assets/about/Image (1).png";
import PostTow from "../assets/about/Image (2).png";
import PostThree from "../assets/about/Image (3).png";
import PostFour from "../assets/about/Image (4).png";
import { Link } from "react-router-dom";
import { useState } from "react";

function About() {
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
              style={{ backgroundImage: `url(${Graow})` }}
              className="bg-no-repeat bg-right-top bg-contain flex flex-col-reverse lg:flex-row lg:items-start bg-[#1C1C1C] p-10 rounded-xl mt-20 lg:mt-32"
            >
              <div className="flex flex-col gap-4 items-center pt-10 bg-[#191919] p-8 rounded-t-xl mt-[-30px] lg:mt-0 lg:mr-[-100px] lg:w-[53%] lg:rounded-none lg:rounded-br-[70px] lg:h-auto lg:z-10 lg:p-16 lg:items-start">
                <h5 className="text-white text-base font-thin">
                  Welcome to YourBank
                </h5>
                <h2 className="text-white text-5xl font-normal leading-snug text-center lg:text-left">
                  Where Banking Meets
                  <span className="text-[#CAFF33]">Excellence!</span>
                </h2>
                <p className="text-gray-300 text-base font-thin leading-loose text-center lg:text-left">
                  At YourBank, we believe that banking should be more than just
                  transactions. It should be an experience that empowers
                  individuals and businesses to thrive and reach their financial
                  goals. As a trusted financial institution, we are committed to
                  delivering exceptional banking services that go beyond
                  expectations. With a focus on innovation, personalized
                  solutions, and unwavering integrity, we strive to provide the
                  best banking experience for our valued customers. Join us on
                  this exciting journey and discover a new level of banking
                  excellence.
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

      {/* vission */}
      <div>
        <div className="container m-auto p-5">
          <div className="flex flex-col gap-3 items-center mb-14 lg:items-start">
            <h2 className="text-[#CAFF33] text-3xl">Mission & Vision</h2>
            <p className="text-gray-300 text-base font-thin text-center lg:text-left lg:w-9/12">
              We envision being a leading force in the industry, driven by
              innovation, integrity, and inclusivity, creating a brighter
              financial future for individuals and businesses while maintaining
              a strong commitment to customer satisfaction and community
              development
            </p>
          </div>
          <div className="lg:flex lg:items-center">
            <div className="lg:w-2/6">
              <img src={Container} alt="" />
            </div>
            <div className="border-t-2 border-[#CAFF33] lg:border-t-0 lg:border-l-2 lg:items-start flex flex-col gap-5 py-14 lg:w-4/6 lg:h-auto lg:pl-5">
              <h2 className="text-white text-3xl">Mission</h2>
              <p className="text-gray-300 text-base font-thin text-center lg:text-left">
                At YourBank, our mission is to empower our customers to achieve
                financial success. We are dedicated to delivering innovative
                banking solutions that cater to their unique needs. Through
                personalized services, expert guidance, and cutting-edge
                technology, we aim to build strong, lasting relationships with
                our customers. Our mission is to be their trusted partner,
                helping them navigate their financial journey and realize their
                dreams.
              </p>
            </div>
          </div>
          <div className="lg:flex lg:flex-row-reverse lg:items-center">
            <div className="lg:w-2/6">
              <img src={ContainerOne} alt="" />
            </div>
            <div className="border-t-2 border-[#CAFF33] lg:border-t-0 lg:border-r-2 lg:items-start flex flex-col gap-5 py-14 lg:w-4/6 lg:h-auto lg:pl-5">
              <h2 className="text-white text-3xl">Vision</h2>
              <p className="text-gray-300 text-base font-thin text-center lg:text-left lg:pr-10">
                At YourBank, our mission is to empower our customers to achieve
                financial success. We are dedicated to delivering innovative
                banking solutions that cater to their unique needs. Through
                personalized services, expert guidance, and cutting-edge
                technology, we aim to build strong, lasting relationships with
                our customers. Our mission is to be their trusted partner,
                helping them navigate their financial journey and realize their
                dreams.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* vission */}

      {/* press */}
      <div className="pb-20">
        <div className="container m-auto px-5">
          <div className="flex flex-col gap-5 items-center pb-14 lg:items-start lg:gap-2">
            <h2 className="text-[#CAFF33] text-4xl font-normal">
              Press Releases
            </h2>
            <p className="text-gray-300 text-base font-thin text-center leading-loose">
              Stay updated with the latest happenings and exciting developments
              at YourBank through our press releases.
            </p>
          </div>
          <div className="grid grid-cols-1 grid-rows-1 gap-10 lg:grid-rows-2 lg:grid-cols-2 lg:gap-5">
            <div className="bg-[#1C1C1C] p-8 rounded-xl flex flex-col gap-5">
              <img src={PostOne} alt="" />
              <h3 className="text-white text-2xl font-normal leading-relaxed">
                YourBank Launches New Rewards Program to Enhance Customer
                Loyalty and Satisfaction
              </h3>
              <p className="text-gray-300 text-xl font-thin">
                Location: India || Date: 06/11/2024
              </p>
              <p className="text-gray-300 text-base font-thin">
                YourBank is pleased to announce the introduction of our new
                Rewards Program, aimed at rewarding our loyal customers and
                enhancing their banking experience. The program offers exclusive
                benefits, discounts, and personalized offers tailored to
                individual customer preferences. With this initiative, YourBank
                reaffirms its commitment to delivering exceptional value and
                building lasting relationships with our valued customers.
              </p>
            </div>
            <div className="bg-[#1C1C1C] p-8 rounded-xl flex flex-col gap-5">
              <img src={PostTow} alt="" />
              <h3 className="text-white text-2xl font-normal leading-relaxed">
                YourBank Launches New Rewards Program to Enhance Customer
                Loyalty and Satisfaction
              </h3>
              <p className="text-gray-300 text-xl font-thin">
                Location: India || Date: 06/11/2024
              </p>
              <p className="text-gray-300 text-base font-thin">
                YourBank is pleased to announce the introduction of our new
                Rewards Program, aimed at rewarding our loyal customers and
                enhancing their banking experience. The program offers exclusive
                benefits, discounts, and personalized offers tailored to
                individual customer preferences. With this initiative, YourBank
                reaffirms its commitment to delivering exceptional value and
                building lasting relationships with our valued customers.
              </p>
            </div>
            <div className="bg-[#1C1C1C] p-8 rounded-xl flex flex-col gap-5">
              <img src={PostThree} alt="" />
              <h3 className="text-white text-2xl font-normal leading-relaxed">
                YourBank Launches New Rewards Program to Enhance Customer
                Loyalty and Satisfaction
              </h3>
              <p className="text-gray-300 text-xl font-thin">
                Location: India || Date: 06/11/2024
              </p>
              <p className="text-gray-300 text-base font-thin">
                YourBank is pleased to announce the introduction of our new
                Rewards Program, aimed at rewarding our loyal customers and
                enhancing their banking experience. The program offers exclusive
                benefits, discounts, and personalized offers tailored to
                individual customer preferences. With this initiative, YourBank
                reaffirms its commitment to delivering exceptional value and
                building lasting relationships with our valued customers.
              </p>
            </div>
            <div className="bg-[#1C1C1C] p-8 rounded-xl flex flex-col gap-5">
              <img src={PostFour} alt="" />
              <h3 className="text-white text-2xl font-normal leading-relaxed">
                YourBank Launches New Rewards Program to Enhance Customer
                Loyalty and Satisfaction
              </h3>
              <p className="text-gray-300 text-xl font-thin">
                Location: India || Date: 06/11/2024
              </p>
              <p className="text-gray-300 text-base font-thin">
                YourBank is pleased to announce the introduction of our new
                Rewards Program, aimed at rewarding our loyal customers and
                enhancing their banking experience. The program offers exclusive
                benefits, discounts, and personalized offers tailored to
                individual customer preferences. With this initiative, YourBank
                reaffirms its commitment to delivering exceptional value and
                building lasting relationships with our valued customers.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* press */}
    </>
  );
}

export default About;
