"use client"

import useScroll from "@/hooks/useScroll";
import {useEffect} from "react";
import Maintenance from "@/components/Maintenance/Maintenance";

export default function HomePage() {
    const scroll = useScroll();
    useEffect(() => {
        if (scroll > 20) {

        }
    }, [scroll]);
  return (
      <div className="flex flex-1 items-center min-h-screen">
          <Maintenance />
          {/*<section id="main" className="relative">*/}
          {/*    <div className="absolute bg-[url(/nature-light.jpg)] h-full bg-cover bg-no-repeat bg-center transition-opacity duration-700 opacity-100 min-h-[720px]"></div>*/}
          {/*    <div>*/}
          {/*      <CardPixel title="!!!" size="w-1/2">Test</CardPixel>*/}
          {/*      <h1 className="head-text">Welcome, To my blog site. personal coding experience</h1>*/}
          {/*      <div className="h-14"></div>*/}
          {/*    </div>*/}
          {/*</section>*/}
          {/*<section id="menu">*/}
          {/*    <CardPixel title="!!!" size="w-1/2">Test</CardPixel>*/}
          {/*    <h1 className="head-text">Welcome, To my blog site. personal coding experience</h1>*/}
          {/*    <div className="h-14"></div>*/}
          {/*</section>*/}
    </div>
  );
}
