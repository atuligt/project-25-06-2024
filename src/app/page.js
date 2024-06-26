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

export default function Home() {
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
