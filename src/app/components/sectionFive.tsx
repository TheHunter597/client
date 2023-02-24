"use client";
import { useRef } from "react";
import Card from "./sectionFive/card";
import { useInView } from "framer-motion";
const SectionFive = () => {
  let ref = useRef<HTMLDivElement>(null);
  let inView = useInView(ref);
  let data = [
    {
      name: "Mr. Luke Skywalker",
      title: "Agent",
    },
    {
      name: "heimerdenger",
      title: "chief of the State",
    },
    {
      name: "Mr . Yasuo",
      title: "Agent",
    },
  ];
  let res = data.map((card, index) => {
    return <Card card={card} key={card.name} inView={inView} index={index} />;
  });
  return (
    <div className="my-14 bg-secondary py-20" ref={ref} id="sectionFive">
      <div className="container mx-auto">
        <div className=" mb-20">
          <h4
            className="text-4xl lg:text-5xl text-center
           lg:text-start pb-4 w-10/12 mx-auto lg:mx-0 lg:w-4/12 leading-normal"
          >
            Meet Our Agents
          </h4>
          <p
            className="w-9/12 text-center leading-7 text-tiny 
          lg:text-start pb-4 mx-auto lg:mx-0 lg:w-4/12"
          >
            {" "}
            In this space market-facing, yet UI work flows , or bake it in. Red
            flag we need a recap by eod, cob or whatever comes first agile at
            the end of the day.
          </p>
        </div>
        <div
          className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8 
          place-content-center"
        >
          {res}
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
