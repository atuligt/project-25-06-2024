import React from "react";

const Service = () => {
  return (
    <div className="service bg-[#F8F8F8] pt-[40px] pb-[110px] px-4">
      <div className="inner_service max-w-[827px] m-auto ">
        <div className="top_service text-center" data-aos="zoom-out" data-aos-once="true">
          <h1 className="md:text-[48px] text-[29px] font-black font-railway">OUR SERVICE</h1>
        </div>
        <div className="service_box_group flex flex-wrap">
          <div className="md:w-1/2 w-full  mt-[74px]" data-aos="fade-up" data-aos-once="true">
            <div className="px-10 py-10 hover:shadow-2xl transition-all rounded-lg">
              <div>
                <img
                  className="bg-[#31979D] p-[13px] rounded-[10px] shadow-2xl"
                  src="/images/Group 27.png"
                />
              </div>
              <div className="mt-[29px]">
                <h3 className="text-[18px] font-bold leading-tight font-railway">
                  Acquisition and Retention Strategy Development
                </h3>
                <p className="text-[16px] mt-2 font-opensans">
                  We don’t do guess work, we start our ongoing process of market
                  research to understand who you are as a brand, how you want to
                  serve your customers and what their desires are. From here we
                  develop a full end to end strategy aligned with your business
                  goals.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full  mt-[74px]" data-aos="fade-up" data-aos-once="true">
            <div className="px-10 py-10 hover:shadow-2xl transition-all rounded-lg">
              <div>
                <img
                  className="bg-[#31979D] p-[13px] rounded-[10px] shadow-2xl"
                  src="/images/bullhorn 1.png"
                />
              </div>
              <div className="mt-[29px]">
                <h3 className="text-[18px] font-bold leading-tight font-railway">
                  Full-Suite Digital Advertising
                </h3>
                <p className="text-[16px] mt-2 font-opensans">
                  We incorporate the channels you need to support your growth.
                  This means that when your business scale up to new levels, we
                  will introduce the appropriate marketing channels to continue
                  that growth in a vertical or horizontal manner. Whether your
                  needs go from Google’s PPC Suite to Email marketing we’ll have
                  you covered.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full  mt-[74px]" data-aos="fade-up" data-aos-once="true">
            <div className="px-10  py-10 hover:shadow-2xl transition-all rounded-lg">
              <div>
                <img
                  className="bg-[#31979D] p-[13px] rounded-[10px] shadow-2xl"
                  src="/images/optimization 2.png"
                />
              </div>
              <div className="mt-[29px]">
                <h3 className="text-[18px] font-bold leading-tight font-railway">
                Funnel Design and Optimisation
                </h3>
                <p className="text-[16px] mt-2 font-opensans">
                How you present your offer(s), how prospects get to your offer and what they do after matters. It all matters. We design this flow for you and constantly optimise to ensure we’re always moving the needle forward so that you’re never wasting money on traffic.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full  mt-[74px]" data-aos="fade-up" data-aos-once="true">
            <div className="px-10  py-10 hover:shadow-2xl transition-all rounded-lg">
              <div>
                <img
                  className="bg-[#31979D] p-[13px] rounded-[10px] shadow-2xl"
                  src="/images/copywriting 1.png"
                />
              </div>
              <div className="mt-[29px]">
                <h3 className="text-[18px] font-bold leading-tight font-railway">
                Direct Response Copywriting and Storyboarding
                </h3>
                <p className="text-[16px] mt-2 font-opensans">
                Show your potential customers and customers that you understand them along each step of their journey. Our team will develop messaging that resonates to evoke curiosity, build trust, overcome objections and inspire advocacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
