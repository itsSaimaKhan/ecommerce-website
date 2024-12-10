import Image from "next/image";

import Hero from "./components/hero";
import SubHero from "./components/subhero";

import Products from "./components/products";
import Slides from "./components/Slides";

import Funicture from "./components/funicture";
import Check from "./components/check";

export default function Home() {
  return (
    <div>
      <Hero />
      <SubHero />
     <Products />
      <Slides />
      <Funicture />

      
     <Check/>
    </div>
  );
}
