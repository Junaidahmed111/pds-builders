import Image from "next/image";
import React from "react";
import serviceOne from "@/public/assets/service-one.png";
import serviceTwo from "@/public/assets/service-two.png";
import serviceThree from "@/public/assets/service-three.png";

const Services = () => {
  return (
    <section className="bg-red-200 pt-8 px-10">
      <span className="flex text-center items-center justify-center text-3xl font-bold">
        {" "}
        Our Services
      </span>
      <div className="flex flex-col items-center justify-center gap-y-8 pt-4">
        <div className="relative text-center">
          <Image
            src={serviceOne}
            alt=""
            width={1000}
            height={1000}
            className="h-[200px] sm:h-[200px] md:h-[300px] lg:h-[400px] w-screen "
          />
          <span className="absolute text-center bottom-[45%] left-[40%] font-bold md:text-xl sm:text-lg text-sm lg:text-2xl xl:text-4xl text-white">
            New Home Builds
          </span>
        </div>
        <div className="">
          <Image src={serviceTwo} alt="" />
        </div>
        <div className="">
          <Image src={serviceThree} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Services;
