"use client";
import { FunctionComponent } from "react";
import { motion } from "framer-motion";

interface SectionThreeProps {}

const SectionThree: FunctionComponent<SectionThreeProps> = () => {
  let info = [
    {
      number: "01",
      name: "Find Your Location",
      info: "In this space market-facing, yet UI work flows , or bake it in. Red flag we neef the day.",
    },
    {
      number: "02",
      name: "Find Appartment",
      info: "In this space market-facing, yet UI work flows , or bake it in. Red flag we neef the day.",
    },
    {
      number: "03",
      name: "Make Contact",
      info: "In this space market-facing, yet UI work flows , or bake it in. Red flag we neef the day.",
    },
  ];
  let cardsAnimation = {
    active: () => {
      return {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5,
          type: "spring",
          bounce: 0.3,
          ease: "easeInOut",
        },
      };
    },
    inactive: {
      x: 500,
      opacity: 0,
    },
  };
  let res = info.map((card, index) => {
    return (
      <motion.div
        key={card.name}
        className=" w-9/12 sm:w-7/12 mx-auto lg:w-full md:w-10/12 overflow-hidden relative z-10 p-4 shadow-lg h-96
        hover:bg-yellow-400 duration-500 "
        variants={cardsAnimation}
        custom={index}
      >
        <div className="relative h-1/4 w-full">
          <div className="text-gigantic absolute -top-40 -left-16 z-20 ">
            {card.number}
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <span className="text-lg mt-7">{card.number}</span>
          <div className="flex flex-col gap-8">
            <span className="text-lg mt-7">{card.name}</span>
            <span className="text-tiny leading-7 tracking-widest">
              {card.info}
            </span>
            <p className="">
              <span className=" border-b-2 border-primary cursor-pointer">
                Find Location
              </span>
            </p>
          </div>
        </div>
      </motion.div>
    );
  });
  return (
    <div className="mt-14 pt-24" id="how-it-works">
      <div className="container mx-auto">
        <h4
          className="text-4xl lg:text-5xl text-center lg:text-start py-6 lg:w-4/12 w-full
        leading-normal"
        >
          How it works?
        </h4>
        <p className="lg:w-4/12 w-11/12 mx-auto lg:mx-0 text-center  lg:text-start leading-7 text-tiny">
          {" "}
          In this space market-facing, yet UI work flows , or bake it in. Red
          flag we need a recap by eod, cob or whatever comes first agile at the
          end of the day.
        </p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full mt-24"
          initial="inactive"
          whileInView="active"
          transition={{ staggerChildren: 0.2 }}
        >
          {res}
        </motion.div>
      </div>
    </div>
  );
};

export default SectionThree;
