"use client";

import { FunctionComponent, useRef } from "react";
import { motion, useInView } from "framer-motion";
import InfoCard from "./sectionOne/infoCard";
interface SectionOneProps {}

const SectionOne: FunctionComponent<SectionOneProps> = () => {
  let ref = useRef<HTMLDivElement>(null);
  let inView = useInView(ref);
  let info = [
    {
      number: 748,
      name: "Apartments",
    },
    {
      number: 3854,
      name: "Client",
    },
    {
      number: 24,
      name: "Employees",
    },
    {
      number: 14,
      name: "Awards",
    },
  ];
  let leftSideAnimation = {
    active: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
    inactive: {
      y: 200,
      opacity: 0,
    },
  };
  let result = info.map((element, index) => {
    return (
      <InfoCard
        element={element}
        index={index}
        key={element.name}
        inView={inView}
      />
    );
  });
  return (
    <div
      className="grid lg:grid-cols-2 md:grid-col-1 gap-16 my-16 pt-20 sm:container mx-auto"
      id="about"
    >
      <motion.div
        className="[&>p]:text-tiny [&>p]:leading-6 flex flex-col"
        variants={leftSideAnimation}
        initial="inactive"
        whileInView="active"
      >
        <h3 className="text-4xl lg:text-5xl w-full text-center lg:w-9/12 md:text-center">
          Our’s Company Statistics
        </h3>
        <p className="mt-16 mb-6 text-center lg:text-start w-11/12 mx-auto lg:mx-0 ">
          In this space market-facing, yet UI work flows , or bake it in. Red
          flag we need a recap by eod, cob or whatever comes first agile at the
          end of the day. Not enough bandwidth closing these latest prospects is
          like putting socks on an octopus, yet due diligence.
        </p>
        <p className=" w-11/12 mx-auto lg:mx-0 text-center  lg:text-start">
          We need to get all stakeholders up to speed and in the right place
          hard stop, or technologically savvy or pre launch. Pro-sumer software
          commitment to the cause offline this discussion and wiggle room blue
          sky. Beef up teams were able to drive adoption and awareness. Screw
          the pooch killing it.
        </p>
      </motion.div>
      <motion.div
        className="w-10/12 mx-auto grid grid-cols-2 gap-10"
        transition={{ staggerChildren: 0.3 }}
        ref={ref}
      >
        {result}
      </motion.div>
    </div>
  );
};

export default SectionOne;
