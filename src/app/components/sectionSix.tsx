"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import YellowCard from "./yellowCard";
const SectionSix = () => {
  let data = [
    {
      title: "Super Awesome Add",
      content:
        "In this space market-facing, yet UI work flows , or bake it in. Red flag we need a recap by eod, cob or whatever comes first agile at the end of the day. Not enough bandwidth closing these latest prospects is like putting socks on an octopus, yet due diligence",
      site: {
        image: "/images/point-icon.svg",
        content: "Melbourne,Australia",
      },
    },
    {
      title: "Super Awesome Add",
      content:
        "In this space market-facing, yet UI work flows , or bake it in. Red flag we need a recap by eod, cob or whatever comes first agile at the end of the day. Not enough bandwidth closing these latest prospects is like putting socks on an octopus, yet due diligence",
      site: {
        image: "/images/point-icon.svg",
        content: "Toronto,Canada",
      },
    },
    {
      title: "Super Awesome Add",
      content:
        "In this space market-facing, yet UI work flows , or bake it in. Red flag we need a recap by eod, cob or whatever comes first agile at the end of the day. Not enough bandwidth closing these latest prospects is like putting socks on an octopus, yet due diligence",
      site: {
        image: "/images/point-icon.svg",
        content: "Berlin, Germany",
      },
    },
  ];
  let imageAnimation = {
    active: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    inactive: (side: number) => {
      return {
        x: side === 1 ? -100 : 100,
        opacity: 0,
      };
    },
  };
  let yellowCardAnimation = {
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
  let infoPartAnimation = {
    active: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
    inactive: {
      y: -200,
      opacity: 0,
    },
  };

  let res = data.map((item, index) => {
    return (
      <div key={`section six card number ${index}`}>
        {index % 2 === 0 ? (
          <motion.div
            className="flex flex-col lg:flex-row place-content-center 
            xl:gap-36 gap-8 lg:mb-none "
            transition={{ staggerChildren: 0.5 }}
          >
            <motion.div
              className="relative z-10  mx-auto lg:mx-0"
              transition={{ staggerChildren: 0.2 }}
            >
              <motion.div
                variants={imageAnimation}
                whileInView="active"
                initial="inactive"
                custom={1}
              >
                <Image
                  src="/images/add.png"
                  height={540}
                  width={540}
                  alt="540x330"
                  className="max-w-screen md:max-w-none"
                />
              </motion.div>
              <motion.div
                className="py-5 bg-yellow-400 text-center w-7/12 flex flex-row
               place-content-center absolute -bottom-9 left-28"
                variants={yellowCardAnimation}
                initial="inactive"
                whileInView="active"
              >
                <YellowCard key={item.site.content} data={item.site} />;
              </motion.div>
            </motion.div>
            <motion.div
              className="flex flex-col place-content-center text-center lg:text-start
              w-11/12 lg:w-full mx-auto lg:mx-none mt-16 lg:mt-none"
              variants={infoPartAnimation}
              initial="inactive"
              whileInView="active"
            >
              <h5 className="mb-10 text-3xl">{item.title}</h5>
              <p className="leading-7 text-tiny">{item.content}</p>
              {index === data.length - 1 ? (
                <div
                  className="mt-12 px-20 w-72 py-6 bg-primary hover:bg-yellow-400 
                duration-300 cursor-pointer self-center lg:self-start "
                >
                  <button
                    className=" text-white 
                   "
                  >
                    Show Me More
                  </button>
                </div>
              ) : (
                <div></div>
              )}
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            className="flex flex-col-reverse lg:flex-row xl:gap-36 gap-8"
            transition={{ staggerChildren: 0.5 }}
          >
            <motion.div
              className="flex flex-col place-content-center text-center lg:text-right
              w-11/12 lg:w-full mx-auto lg:mx-none mt-16 lg:mt-none
              "
              variants={infoPartAnimation}
              initial="inactive"
              whileInView="active"
            >
              <h5 className="mb-10 text-3xl ">{item.title}</h5>
              <p className="leading-7 text-tiny">{item.content}</p>
            </motion.div>
            <motion.div
              className="relative mx-auto lg:mx-0"
              transition={{ staggerChildren: 0.2 }}
            >
              <motion.div
                variants={imageAnimation}
                whileInView="active"
                initial="inactive"
                custom={2}
              >
                <Image
                  src="/images/add.png"
                  height={540}
                  width={540}
                  alt="540x330"
                  className="max-w-screen lg:max-w-none "
                />
              </motion.div>
              <motion.div
                className="py-5 bg-yellow-400 text-center w-7/12 flex flex-row
                place-content-center absolute -bottom-9 lg:-right-10 -right-0"
                variants={yellowCardAnimation}
                initial="inactive"
                whileInView="active"
              >
                <YellowCard key={item.site.content} data={item.site} />;
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </div>
    );
  });
  return (
    <div>
      <div
        className="container mx-auto flex flex-col gap-14 pt-28"
        id="no-clue-what-this-section-represents"
      >
        {res}
      </div>
    </div>
  );
};

export default SectionSix;
