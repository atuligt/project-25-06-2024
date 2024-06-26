"use client"
import React, { useEffect, useState } from "react";
import CalenderLayout from "./CalenderLayout";

export const Calender = () => {

    const [height, setheight] = useState();
    
   const getheight = ()=>{
    console.log(document.getElementById("getheight").offsetHeight); 
    setheight(document.getElementById("getheight").offsetHeight)
   }
   useEffect(()=>{
    getheight();

   },[])
 
  return (
    <div className="calender  px-4">
      <div className="inner_calender max-w-[1080px] m-auto  border-b-[2px] border-[#3BBA9C]  py-[67px]">
        <div className="flex flex-wrap">
          <div className="md:w-1/2 w-full">
            <div className="scrollable-element rounded-[29px] px-[20px] md:px-[69px] py-[36px] shadow-2xl overflow-y-scroll overflow-x-hidden" style={{height: height}}>
              <div className="intro px-5 border-b-[#3BBA9C] border-b py-3">
                <div className="flex justify-center">
                  <img src="images/Mask Group.png" />
                </div>
                <div className="text-center">
                  <h4 className="text-[#3BBA9C] text-[24px] font-bold font-railway">
                    Jermaine
                  </h4>
                  <p className="text-[12px] font-opensans">
                    Schedule your call directly with Jermaine
                  </p>
                  <h4 className="text-[24px] font-bold text-[#3BBA9C]">
                    25-MINUTE DEMO CAll{" "}
                  </h4>
                </div>
                <div className="mt-6">
                  <div className="flex items-baseline">
                    <div className="mr-2">
                      <img src="images/clock.png" />
                    </div>
                    <p>25-min</p>
                  </div>
                  <div className="flex items-baseline">
                    <div className="mr-2">
                      <img src="images/camera.png" />
                    </div>
                    <p>
                      Web conferencing details procides <br /> upon confirmation
                    </p>
                  </div>
                  <div>
                    <p className="text-[14px] font-opensans font-semibold text-[#3BBA9C]">
                      This is a 15m call with our CMO - Jermaine to see if
                      you're a good fir to work with our agency.
                    </p>
                    <p className="mt-2 text-[14px] font-opensans font-semibold text-[#3BBA9C]">
                      If we believe that's the case, you'll have the opportunity
                      to speak to Imam 1 on 1 in a longer call.
                    </p>
                  </div>
                </div>
              </div>
              
                <CalenderLayout/> 
           
            </div>
          </div>
          <div className="md:w-1/2  w-full">
            <div className="px-[20px] md:px-[69px] py-[36px]" id="getheight">
              <div className="top_right_calender text-center border-b-[2px] border-[#3BBA9C] pb-3">
                <div className="flex justify-center">
                  <img src="images/Mask Group.png" />
                </div>
                <h4 className="text-[#3BBA9C] text-[24px] font-bold font-railway">
                  Jermaine
                </h4>
                <h5 className="text-[16px] font-opensans font-semibold">
                  Schedule your call directly with Jermaine
                </h5>
                <h4 className="text-[24px] font-bold ">25-MINUTE DEMO CAll </h4>
              </div>
              <div className="bottom_right_calender mt-7 px-8">
                <p className="text-[14px] font-opensans">
                  By the end of this Audit call, you will have a clear
                  understanding of the next steps you can take for your business
                  to start ganerating consistent and reliable result online with
                  Funnels & Paid Advertising
                </p>
                <p className="text-[14px] font-opensans mt-4">
                  Find a time on jermaine's calendar to schedule your call today
                  and we look forword to speaking to you soon!
                </p>
                <h4 className="text-[18px] font-bold text-[#3BBA9C] font-railway mt-5">
                  THIS CALL IS PERFECT FOR
                </h4>
                <div className="flex items-baseline mt-2">
                  <div className="me-5">
                    <img
                      className="max-w-4xl bg-[#3BBA9C] rounded-full p-1"
                      src="/images/righticon.png"
                    />
                  </div>
                  <div>
                    <p className="text-[14px] font-opensans">
                      Businesses passionate about their brand and are ready to
                      further positively impact the world with their products or
                      services.
                    </p>
                  </div>
                </div>
                <div className="flex items-baseline mt-2">
                  <div className="me-5">
                    <img
                      className="max-w-4xl bg-[#3BBA9C] rounded-full p-1"
                      src="/images/righticon.png"
                    />
                  </div>
                  <div>
                    <p className="text-[14px] font-opensans">
                    Businesses committed to improving their offerings, customer experience and operations.
                    </p>
                  </div>
                </div>
                <div className="flex items-baseline mt-2">
                  <div className="me-5">
                    <img
                      className="max-w-4xl bg-[#3BBA9C] rounded-full p-1"
                      src="/images/righticon.png"
                    />
                  </div>
                  <div>
                    <p className="text-[14px] font-opensans">
                    Businesses who want to be around for a long time.
                    </p>
                  </div>
                </div>
                <div className="flex items-baseline mt-2">
                  <div className="me-5">
                    <img
                      className="max-w-4xl bg-[#3BBA9C] rounded-full p-1"
                      src="/images/righticon.png"
                    />
                  </div>
                  <div>
                    <p className="text-[14px] font-opensans">
                    Businesses looking for a reliable agency that is dedicated to the brand’s growth and ultimate goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
