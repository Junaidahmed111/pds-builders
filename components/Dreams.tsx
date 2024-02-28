import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import dreamOne from "@/public/assets/dreams/dream-one.png";
import dreamTwo from "@/public/assets/dreams/dream-two.png";
import dreamThree from "@/public/assets/dreams/dream-three.png";

const Dreams = () => {
  return (
    <section className="flex flex-col px-5 md:px-20 lg:px-18 gap-y-8 pt-4">
      <span className="font-bold text-4xl">Building Dreams</span>
      <div className="flex flex-col gap-y-3">
        <span className="max-w-5xl text-xl md:text-3xl">
          We have been in business for more than 20 years, and we specialize in
          construction and renovation work for both private residences and
          businesses. We are a full-service professional construction business
          in Auckland that specializes in builder renovators and is committed to
          enhancing houses with superior services.
        </span>
        <Button
          className="w-28 h-12 md:px-20 px-16 md:py-8 text-md md:text-lg bg-black text-white hover:bg-black hover:text-white rounded-full"
          variant="outline"
        >
          View More
        </Button>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly items-center gap-y-6 gap-x-4 lg:gap-x-16 xl:gap-x-32 px-3 lg:px-12">
        <Image
          src={dreamThree}
          alt=""
          width={1000}
          height={1000}
          className="aspect-video"
        />
        <Image
          src={dreamThree}
          alt=""
          width={1000}
          height={1000}
          className="aspect-video"
        />
        <Image
          src={dreamThree}
          alt=""
          width={1000}
          height={1000}
          className="aspect-video"
        />
      </div>
    </section>
  );
};

export default Dreams;
