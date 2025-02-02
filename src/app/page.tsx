import Image from "next/image";

import Hero from "../components/hero";
import SubHero from "../components/subhero";
import Products from "../components/products";
import Slides from "../components/Slides";
import Funicture from "../components/funicture";
import ProductCards from "./Products/page";
// import Tosity from "@/components/addtocarttosity";



export default function Home() {
  return (
    <div>
      <Hero />
      <SubHero />
      {/* <Tosity/> */}
      <Products/>
      <Slides />
      <ProductCards/>
      <Funicture />
     
     
     
      
      
      

      

      
     
    </div>
  );
}
