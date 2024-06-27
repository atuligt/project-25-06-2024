"use client"
import About from "./components/About";
import Baner from "./components/Baner";
import Calender from "./components/Calender";
import Enquiry from "./components/Enquiry";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Masonmry from "./components/Masonry";
import Philosophy from "./components/Philosophy";
import Service from "./components/Service";
import Footer from "./components/Footer";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

export default function Home() {

    useEffect(() => {
      Aos.init();

  },[])
  
  return (
    <>
      <div className="">
         <Header/>
         <Hero/>
         <Masonmry/>
         <About/>
         <Philosophy/>
         <Service/>
         <Baner/>
         <Calender/>
         <Enquiry/>
         <Footer/>
      </div>
    </>
  );
}
