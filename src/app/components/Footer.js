import Link from "next/link";
import React from "react";

const Footer = () => {

  return (
    <div className="footer px-4 bg-black pt-[35px] pb-[45px]">
      <div className="inner-footer max-w-[1247px] m-auto">
        <div className="flex flex-wrap">
          <div className="md:w-1/4 w-full">
            <div className="md:text-left">
                <div className="flex justify-center md:justify-start">
                    <img src="images/logo.png" />
                </div>
              <div className="flex md:justify-start justify-center text-center mt-[20px]">
                <div className="ml-[14px]">
                  <img className="cursor-pointer hover:bg-[#3bba9c] rounded-full" src="/images/Facebook.png" />
                </div>
                <div className="ml-[14px]">
                  <img  className="cursor-pointer hover:bg-[#3bba9c] rounded-full" src="/images/Youtube.png" />
                </div>
                <div className="ml-[14px]">
                  <img className="cursor-pointer hover:bg-[#3bba9c] rounded-full" src="/images/Twitter.png" />
                </div>
                <div className="ml-[14px]">
                  <img className="cursor-pointer hover:bg-[#3bba9c] rounded-full" src="/images/LinkedIN.png" />
                </div>
                <div className="ml-[14px]">
                  <img className="cursor-pointer hover:bg-[#3bba9c] rounded-full" src="/images/Google.png" />
                </div>
            
              </div>
            </div>
          </div>
          <div className="md:w-1/4  w-full">
            <div className="md:flex md:text-start text-center md:justify-center">
              <ul>
                <li className="mt-[15px]">
               
                  <h4 className="text-white mb-[25px] text-[18px] font-bold font-bold">
                    Agency
                  </h4>
                </li>
                <li>
                  <Link
                    className="text-white text-[14px]  font-opensans hover:text-[#3BBA9C] transition"
                    href="\"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/4  w-full">
            <div className="md:flex md:text-start text-center md:justify-center">
              <ul>
                <li className="mt-[15px]">
                  <h4 className="text-white mb-[25px] text-[18px] font-bold font-bold">
                    Services
                  </h4>
                </li>
                <li className="mt-[15px]">
                  <Link
                    className="text-white text-[14px]  font-opensans hover:text-[#3BBA9C] transition"
                    href="\"
                  >
                    Paid Social
                  </Link>
                </li>
                <li className="mt-[15px]">
                  <Link
                    className="text-white text-[14px]  font-opensans hover:text-[#3BBA9C] transition"
                    href="\"
                  >
                    Pay-Per-Click
                  </Link>
                </li>
                <li className="mt-[15px]">
                  <Link
                    className="text-white text-[14px]  font-opensans hover:text-[#3BBA9C] transition"
                    href="\"
                  >
                    Digital Strategy
                  </Link>
                </li>
                <li className="mt-[15px]">
                  <Link
                    className="text-white text-[14px]  font-opensans hover:text-[#3BBA9C] transition"
                    href="\"
                  >
                    Funnel Design
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/4  w-full">
            <div className="md:flex md:text-start text-center md:justify-center">
              <ul>
                <li className="mt-[15px]">
            
                  <h4 className="text-white mb-[25px] text-[18px] font-bold font-bold">
                    Agency
                  </h4>
                </li>
                <li className="mt-[15px]">
                  <Link
                    className="text-white text-[14px] flex justify-center md:justify-start items-center font-opensans hover:text-[#3BBA9C] transition"
                    href="\"
                  >
                    <div>
                      <img className="me-[10px]" src="images/mobile.png" />
                    </div>
                    <span>+44 7960 618 705</span>
                  </Link>
                </li>
                <li className="mt-[15px]">
                  <Link
                    className="text-white text-[14px] flex justify-center md:justify-start items-center font-opensans hover:text-[#3BBA9C] transition"
                    href="\"
                  >
                    <div>
                      <img className="me-[10px]" src="images/email.png" />
                    </div>
                    <span>hello@squarelessmedia.com</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
