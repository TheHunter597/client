"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface SectionFourProps {}

const SectionFour = () => {
  let info = [
    {
      name: "Renting",
      info: "In this space market-facing, yet UI work flows , or bake it in. Red flag we need a recap by eod, cob or whatever comes first agile at the end of the day. Not enough bandwidth closing these latest prospects is like putting socks on an octopus, yet due diligence",
    },
    {
      name: "Selling",
      info: "In this space market-facing, yet UI work flows , or bake it in. Cob or whatever comes first agile at the end of the day. Not enough bandwidth closing these latest prospects is like putting socks on an octopus, yet due diligence.Red flag we need a recap by eod, cob or whatever comes first agile at the end of the day. Not enough bandwidth closing these latest prospects is like putting socks on an octopus, yet due diligence",
    },
    {
      name: "Building",
      info: "In this space market-facing, yet UI work flows , or bake it in. Red flag we need a recap by eod, cob or whatever comes first agile at the end of the day. Not enough bandwidth closing these latest prospects is like putting socks on an octopus, yet due diligence",
    },
  ];
  let headerAnimation = {
    active: (index: number) => {
      return {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.8,
          delay: index * 0.2,
        },
      };
    },
    inactive: {
      opacity: 0,
      x: 200,
    },
  };
  let paragraphAnimation = {
    active: (index: number) => {
      return {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          delay: 0.6 + 0.2 * index,
        },
      };
    },
    inactive: {
      y: -70,
      opacity: 0,
    },
  };
  let res = info.map((item, index) => {
    return (
      <div key={item.name}>
        <motion.h5
          className="text-3xl mb-6 text-center lg:text-start mx-auto "
          variants={headerAnimation}
          initial="inactive"
          whileInView="active"
          custom={index}
        >
          {item.name}
        </motion.h5>
        <motion.p
          className="tracking-wider text-tiny leading-6 text-center lg:text-start"
          variants={paragraphAnimation}
          initial="inactive"
          whileInView="active"
          custom={index}
        >
          {item.info}
        </motion.p>
      </div>
    );
  });
  return (
    <div className="mt-20 container mx-auto pt-20" id="agents">
      <div className="py-4 lg:w-4/12 w-8/12 mx-auto text-center ">
        <h4 className="text-4xl lg:text-5xl leading-normal mb-4 ">Services</h4>
        <p className="leading-7 text-tiny mb-16">
          In this space market-facing, yet UI work flows , or bake it in. Red
          flag we need a first agile at the end of the day.
        </p>
      </div>
      <div className="grid md:grid-cols-12 sm:grid-col-1 place-content-center mx-auto ">
        <div className=" md:-translate-x-28 -z-10 col-span-7 ">
          <Image
            src="/images/services.png"
            alt="services image"
            width={630}
            height={800}
            className="h-heightHero w-11/12 mx-auto sm:mx-none 
            sm:w-full max-h-none mb-16 lg:mb-0"
          />
        </div>
        <div className="flex flex-col gap-12 w-10/12 col-span-5 text-center mx-auto">
          {res}
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
