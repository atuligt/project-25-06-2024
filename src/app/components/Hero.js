"use client";
import React, { useEffect, useRef } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

const Hero = () => {

  

  return (
    <div className="hero bg-[#2B1634] py-[100px] px-4">
      <div className="inner_hero max-w-[1247px] 2xl:max-w-[1547px] m-auto">
        <div className="max-w-[577px]" data-aos="zoom-out"  data-aos-once="true">
          <h2 className="text-white text-[55px] font-black font-railway">
            YOUR PARTNERS IN <span className="text-[#3BBA9C]">GROWTH</span>
          </h2>
          <p className="text-white font-black	font-railway">
            STRATEGIC ECOMMERCE AND DIGITAL AGENCY
          </p>
          <p className="text-[#3BBA9C] font-bold mt-[25px] font-railway">
            ACHIEVE YOUR GOAL WITHOUT GIVING UP
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
