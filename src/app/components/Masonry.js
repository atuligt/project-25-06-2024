"use client";
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Masonmry = () => {
  return (
    <div className="masonry bg-white py-[40px]">
      <div className="inner-masonry max-w-[1247px] 2xl:max-w-[1547px] m-auto text-center">
        <h2 className="text-[49px] font-black">OUR WORK</h2>
        <div className="masonry_layout mt-[32px]">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 5 }} 
          >
            <Masonry>
             
                <img src="/images/Mask group4.png" />
              
                  <img src="/images/Mask group1.png" />
                  <img src="/images/Mask group1.png" />
              
                <img src="/images/Mask group3.png" />
           
                <img src="/images/Mask group2.png" />
                <img src="/images/Mask group1.png" />
                <img src="/images/Mask group1.png" />
            
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </div>
  );
};

export default Masonmry;
