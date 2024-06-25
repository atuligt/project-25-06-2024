import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Masonmry from "./components/Masonry";
import Philosophy from "./components/philosophy";

export default function Home() {
  return (
    <>
      <div className="">
         <Header/>
         <Hero/>
         <Masonmry/>
         <About/>
         <Philosophy/>
      </div>
    </>
  );
}
