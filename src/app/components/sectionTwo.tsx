"use client";
import { motion, useInView } from "framer-motion";
import { FunctionComponent, useRef } from "react";
import Image from "next/image";
import Card from "./secondSection/card";
interface SectionTwoProps {}

const SectionTwo: FunctionComponent<SectionTwoProps> = () => {
  let ref = useRef<HTMLDivElement>(null);
  let inView = useInView(ref);
  let info = [
    {
      info: "Random Street, Apt B453, New York",
      price: "$3,500",
      bathrooms: 2,
      bedrooms: 2,
    },
    {
      info: "Random Street, Lst B653, California",
      price: "$4,862",
      bathrooms: 1,
      bedrooms: 3,
    },
    {
      info: "Random Street, Apt B875, Chicago",
      price: "$2,256",
      bathrooms: 3,
      bedrooms: 5,
    },
    {
      info: "Random Street, Apt B243, Washington",
      price: "$3,478",
      bathrooms: 2,
      bedrooms: 4,
    },
    {
      info: "Random Street, Apt B683, Virginia",
      price: "$4,500",
      bathrooms: 4,
      bedrooms: 8,
    },
    {
      info: "Random Street, Apt B858, Oriana",
      price: "$3,500",
      bathrooms: 2,
      bedrooms: 5,
    },
  ];
  let res = info.map((card, index) => {
    return <Card card={card} key={card.info} index={index} inView={inView} />;
  });
  return (
    <motion.div className="bg-secondary" id="appartments">
      <div className="sm:container mx-auto py-14 pt-24">
        <h3 className="text-4xl  lg:text-5xl pb-14 w-full text-center lg:text-start lg:w-6/12 leading-normal">
          More Than 500+ Appartments For Rent
        </h3>
        <div
          className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8 
          place-content-center"
          ref={ref}
        >
          {res}
        </div>
        <div className="mt-10 flex flex-col lg:flex-row items-center">
          <div className="flex lg:flex-row lg:w-10/12 mx-auto ">
            <div className="flex flex-row bg-white p-6 gap-3 ">
              <Image
                src="/images/search.svg"
                height={15}
                width={15}
                alt="search icon"
              />
              <input
                placeholder="Search Location"
                className="outline-none lg:w-80 w-auto"
              />
            </div>
            <button className="bg-yellow-400 p-6 px-10 rounded-r-md  w-auto">
              Search
            </button>
          </div>
          <button
            className="lg:ml-12 bg-white px-14  mt-16 lg:mt-0 py-7 lg:py-5
          hover:bg-yellow-300 duration-300 w-96 "
          >
            View All Appartments
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default SectionTwo;
