import Logo from "../assets/home/Logo.svg";
import Email from "../assets/home/email.png";
import Social from "../assets/home/socialIcons.png";

function Footer() {
  return (
    <div className="py-20 bg-[#1C1C1C]">
      <div className="container m-auto px-5 flex flex-col gap-10 justify-center items-center">
        <div>
          <img src={Logo} alt="" className="m-auto pb-10" />
          <ul className="flex gap-10 items-center justify-center">
            <li>
              <a className="text-white text-lg font-medium" href="">
                Home
              </a>
            </li>
            <li>
              <a className="text-white text-lg font-medium" href="">
                Careers
              </a>
            </li>
            <li>
              <a className="text-white text-lg font-medium" href="">
                About
              </a>
            </li>
            <li>
              <a className="text-white text-lg font-medium" href="">
                Security
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap gap-5 justify-center items-center">
          <span className="flex gap-2">
            <img src={Email} alt="" />
            <p className="text-white text-base font-thin">
              hello@skillbirdge.com
            </p>
          </span>
          <span className="flex gap-2">
            <img src={Email} alt="" />
            <p className="text-white text-base font-thin">
              hello@skillbirdge.com
            </p>
          </span>
          <span className="flex gap-2">
            <img src={Email} alt="" />
            <p className="text-white text-base font-thin">
              hello@skillbirdge.com
            </p>
          </span>
        </div>
        <div className="grid grid-rows-1 grid-cols-1 gap-8 bg-[#191919] w-full p-10 mt-10 lg:grid-cols-3 lg:p-5 lg:items-center lg:rounded-xl">
          <img
            src={Social}
            alt=""
            className="m-auto mt-[-60px] lg:m-0 lg:w-4/12"
          />
          <p className="text-gray-400 text-center text-base font-thin">
            YourBank All Rights Reserved
          </p>
          <p className="text-gray-400 text-center text-base font-thin lg:text-right">
            Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
