"use client";
import React from "react";


const Masonmry = () => {
  return (
    <div className="masonry  px-4 bg-white py-[40px]">
      <div className="inner-masonry max-w-[1247px] m-auto text-center">
        <h2 className="md:text-[49px] text-[29px] font-black font-railway">OUR WORK</h2>
        <div className="mt-[32px]">
          <section>
            <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
              <div className="grid  md:grid-cols-4 grid-rows-3 gap-2 md:gap-4 h-[800px] md:h-[600px]">
                <div className="row-span-2 col-span-2">
                  <img
                    src="images/Mask group4.png"
                    alt=""
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                </div>

                <div className="row-span-3">
                  <img
                    src="images/Mask group3.png"
                    alt=""
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                </div>
                <div className="">
                  <img
                    src="images/Mask group2.png"
                    alt=""
                    className=" h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                </div>

                <div className="">
                  <img
                    src="images/Mask group1.png"
                    alt=""
                    className=" h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                </div>

                <div className="">
                  <img
                    src="images/Mask group1.png"
                    alt=""
                    className=" h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                </div>

                <div>
                  <img
                    src="images/Mask group1.png"
                    alt=""
                    className=" h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                </div>

                <div>
                  <img
                    src="images/Mask group1.png"
                    alt=""
                    className=" h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Masonmry;