"use client";
import Link from 'next/link';
import React, { useState } from 'react'

 const Header = () => {

    const [mobileview, setmobilemenu] = useState(false);

    const showmobilemenu = ()=>{
        setmobilemenu(!mobileview);
    }

  return (
 
         <div className="header md:py-8  py-2 w-full  z-10 header py-4 w-full  px-4 z-10 bg-[#2B1634]">
            <div className="innerheader max-w-[1247px]  m-auto">
                <div className="flex justify-between items-center z-[40]">
                    <div>
                        <img src="images/logo.png" />
                    </div>
                    <div className="hidden md:flex">
                        <div>
                            <ul>
                                <li className="inline-block mr-[16px]"><Link className="text-white text-[14px] font-opensans font-bold hover:text-[#3BBA9C] transition" href="/">ABOUT US</Link></li>
                                <li className="inline-block font-opensans"><Link className="text-white text-[14px] font-bold hover:text-[#3BBA9C] transition" href="/">CONTACT</Link></li> 
                                <button className="text-white text-[13px] bg-[#3BBA9C] px-3 py-2 rounded-[5px] font-bold ml-[40px] hover:bg-white hover:text-[#3BBA9C] transition "><Link className="font-opensans" href="/">Start Growing</Link></button>
                            </ul>
                        </div>
                    </div>
                    <div className="block ml-auto mr-2 md:hidden">
                        <div className="flex items-center">
                        <button className="text-white bg-[#3BBA9C] px-3 py-2 rounded-[5px] font-opensans text-[13px] font-bold px-[6px] py-[10px] font-opensans"><Link href="/">Start Growing</Link></button>
                        </div>
                    </div>
                    <div className="md:hidden text-center">
                        <p onClick={showmobilemenu} style={{ background: mobileview ? "#efefef" : "white" }} className="text-2xl h-10 w-10 rounded ">&#8801;</p>
                    </div>
                </div>
                <div className={mobileview == true ? "block md:hidden text-center pt-[10px] transition-all absolute w-full left-0 right-0 top-[92px]   pb-4 bg-[#2B1634] h-full" : "opacity-0 absolute text-center w-full left-0 transition-all right-0 md:hidden h-auto"}>
                    <ul>
                        <li onClick={showmobilemenu} className="py-2 font-opensans"><Link className="text-white text-[14px] hover:text-[#3BBA9C] transition font-bold" href="/">ABOUT US</Link></li>
                        <li onClick={showmobilemenu} className="py-2 font-opensans"><Link className="text-white text-[14px] hover:text-[#3BBA9C] transition font-bold" href="/">CONTACT</Link></li>
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default Header;