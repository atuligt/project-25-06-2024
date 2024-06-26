import React from "react";

const About = () => {
  return (
    <div className="about bg-[#F8F8F8] py-[60px] px-4">
      <div className="inner_about max-w-[1000px] m-auto">
        <div className="top_about">
          <h4 className="text-[20px] font-bold font-railway">
            EXCITING BRANDS
          </h4>
          <h2 className="text-[30px] font-black font-railway">The Turmeric Co.</h2>
        </div>
        <div className="middle_about mt-2 ">
          <div className="flex flex-wrap">
            <div className="md:w-[25%] w-full">
              <img src="/images/01 1.png" />
            </div>
            <div className="md:w-[75%] w-full">
              <div className="md:px-[55px]">
                <p className="text-[16px] font-semibold	text-[#0B0C10] font-opensans">
                  From pain to triumph a true hero’s journey. The Turmeric Co.s
                  founder Thomas ‘Hal’ Robson-Kanu wanted to share his
                  careersaving family turmeric drink recipe with the rest of the
                  UK.
                </p>
                <p className="text-[16px] font-semibold	text-[#0B0C10] font-opensans">
                  Armed with a great product, but challenged to effectively
                  marketand get his message out, The Turmeric Co. needed help to
                  share their powerful product.
                </p>
                <h4 className="text-[18px] font-black mt-[25px] font-railway">Result</h4>
                <p className="text-[16px] font-semibold mt-[10px] font-opensans text-[#0B0C10]">
                  100x growth over 2 years. Recognized by Shopify as one of
                  their fastest growing brands of 2020.
                </p>
              </div>
            </div>
          </div>
          <div className="border_text relative mt-[20px]">
            <p
              className="md:text-[20px] md:ml-[52px] font-semibold after:absolute after:content-[''] after:right-[0] after:h-[1px] after:top-[50%] right-0  after:flex after:bg-black block md:after:w-[80%] before:content-[''] before:left-[0]  before:h-[1px] before:top-[50%]
             before:flex before:bg-black md:before:w-[4%] before:absolute after:w-[55%] before:w-[7%] ml-[35px] font-railway"
            >
              Facts & Figure
            </p>
          </div>
        </div>
        <div className="about_graph mt-[20px]">
          <div className="inner_graph flex flex-wrap">
            <div className="md:w-1/4">
              <div className="px-6 py-4 md:border-e border-black">
                <div className="flex items-center">
                  <div>
                    <img src="images/Group 1.png" />
                  </div>
                  <div>
                    <p className="pl-[20px] text-[13px] font-semibold  font-opensans">
                      Grew from 30k to 3M per year
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/4">
              <div className="px-6 py-4 md:border-e border-black">
                <div className="flex items-center">
                  <div>
                    <img src="images/optimization 1.png" />
                  </div>
                  <div>
                    <p className="pl-[20px] text-[13px] font-semibold font-opensans">
                      Grew from 30k to 3M per year
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/4">
              <div className="px-6 py-4 md:border-e border-black">
                <div className="flex items-center">
                  <div>
                    <img src="images/campaign 1.png" />
                  </div>
                  <div>
                    <p className="pl-[20px] text-[13px] font-semibold font-opensans">
                      Grew from 30k to 3M per year
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/4">
              <div className="px-6 py-4">
                <div className="flex items-center">
                  <div>
                    <img src="images/online-advertising 2.png" />
                  </div>
                  <div>
                    <p className="pl-[20px] text-[13px] font-semibold font-opensans">
                      Grew from 30k to 3M per year
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="about_discription py-[80px]">
          <div className="text-center max-w-[596px] m-auto">
            <div className="flex justify-center mb-[21px]">
                <img src="/images/image 19.png" />
            </div>
  
            <div className="">
              <h2 className="font-black text-[26px] font-railway">THMAS ROBSON - KANU</h2>
              <h4 className="text-[16px] font-semibold font-opensans">
                Founder of The Turmeric Co.
              </h4>
              <p className="text-[16px] font-semibold font-opensans mt-[20px]">
                I have worked with jermaine for several years. He is extremely
                dedicated and passionate about his work and is a specialist in
                the eCommerce space. His company has played a massive part in
                helping my business grow over the last few years. They played a
                part in identifing what my business needs and supoorted
                acpuisition, email marketing through to ad creative, and has
                been an integral part in developing the stratehy for each.
                Highly recommended and I will continue working with Squareless
                Media to Scale my eCommerce business durther.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
