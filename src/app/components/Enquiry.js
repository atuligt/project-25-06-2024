import React from "react";

const Enquiry = () => {
  return (
    <div className="enquiry pb-[71px] pt-[41px] bg-[url('/images/quirybackground.png')] px-4 bg-no-repeat bg-cover">
      <div className="inner-inquiry max-w-[604px] m-auto">
        <div className="enquiry-heading text-center">
          <h2 className="md:text-[36px] text-[29px] font-railway font-black">
            HAVE A GENERAL INQUIRY?
          </h2>
          <p className="text-[18px] font-railway mt-[10px] md:mt-[29px]">
            If you have a general inquiry and would like to speak to our expert
            team, also feel free to reach out to us.
          </p>
        </div>
        <div className="enquiry-form mt-[15px]">
          <form>
            <div className="flex flex-wrap">
              <div className="md:w-1/2 w-full mt-[21px]">
                 <div className="mr-[10px]">
                    <input className="border-[#3BBA9C] w-full border-[2px] py-[10px] px-[20px] outline-0 rounded-[10px]" type="text" placeholder="Full Name"/>
                 </div>
              </div>
              <div className="md:w-1/2 w-full mt-[21px]">
                 <div className="mr-[10px]">
                    <input className="border-[#3BBA9C] w-full border-[2px] py-[10px] px-[20px] outline-0 rounded-[10px]" type="text" placeholder="E Mail"/>
                 </div>
              </div>
              <div className="md:w-1/2 w-full mt-[21px]">
                 <div className="mr-[10px]">
                    <input className="border-[#3BBA9C] w-full border-[2px] py-[10px] px-[20px] outline-0 rounded-[10px]" type="text" placeholder="Number"/>
                 </div>
              </div>
              <div className="md:w-1/2 w-full mt-[21px]">
                 <div className="mr-[10px]">
                    <input className="border-[#3BBA9C] w-full border-[2px] py-[10px] px-[20px] outline-0 rounded-[10px]" type="text" placeholder="Where did you hear about us?"/>
                 </div>
              </div>
              <div className="w-full mt-[21px]">
                 <div className="mr-[10px]">
                    <textarea className="border-[#3BBA9C] w-full border-[2px] py-[10px] px-[20px] outline-0 rounded-[10px] resize-none" rows="7" placeholder="Comment"/>
                 </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
