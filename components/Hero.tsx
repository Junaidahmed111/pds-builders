import Image from "next/image";
import React from "react";
import heroImage from "@/public/assets/hero-bg.jpg";
import pdsBuilders from "@/public/assets/pds-builders.png";

const Hero = () => {
  return (
    <section className="w-full h-screen bg-slate-600">
      <div className="">
        <Image
          src={heroImage}
          alt=""
          width={1000}
          height={1000}
          className="h-[400px] lg:h-[800px] w-screen relative"
        />
        <div className="absolute top-[25%] left-[32%] flex justify-center items-center ">
          <Image
            src={pdsBuilders}
            alt="pds-logo"
            width={2000}
            height={2000}
            className="w-52 h-40 md:w-96 md:h-80"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
