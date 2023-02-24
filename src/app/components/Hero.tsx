"use client";
import Image from "next/image";
import { FunctionComponent, useRef } from "react";
import YellowCard from "./yellowCard";
import { motion, useInView } from "framer-motion";
interface HeroProps {}

const Hero: FunctionComponent<HeroProps> = () => {
  let container = useRef<HTMLDivElement>(null);
  let inView = useInView(container);
  let yellowCardsData = [
    {
      image: "/images/call-icon.svg",
      content: "(000) 123-4567",
    },
    {
      image: "/images/point-icon.svg",
      content: "Melbourne,Australia",
    },
  ];
  let headerAnimation = {
    active: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
      },
    },
    inactive: {
      y: -200,
      opacity: 0,
    },
  };
  let inputAnimation = {
    active: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: 0.4,
      },
    },
    inactive: {
      x: -250,
      opacity: 0,
    },
  };
  let yellowCardsAnimation = {
    active: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: 0.9,
      },
    },
    inactive: {
      x: 250,
      opacity: 0,
    },
  };
  let yellowCards = yellowCardsData.map((card) => {
    return <YellowCard data={card} key={card.content} />;
  });
  return (
    <div
      className="mt-36 relative h-heightHero sm:container mx-auto"
      ref={container}
    >
      <motion.div
        className="w-11/12 mx-auto lg:mx-0 lg:w-6/12 mt-44 md:mt-0"
        transition={{ staggerChildren: 1 }}
      >
        <motion.h2
          className="text-4xl lg:text-mainHeader text-center lg:text-start 
        font-bold leading-tight tracking-wide "
          variants={headerAnimation}
          animate={inView ? "active" : "inactive"}
          initial="inactive"
        >
          Find Your New Modern Apartment
        </motion.h2>
        <motion.div
          className="mt-12 flex flex-row items-center justify-center shadow-md
         bg-white w-11/12 rounded-r-md mx-auto lg:mx-0"
          variants={inputAnimation}
          animate={inView ? "active" : "inactive"}
          initial="inactive"
        >
          <span
            className="mr-2 w-1/12 self-center text-center flex 
          flex-row justify-center pl-2"
          >
            <Image
              src="images/search.svg"
              height={16}
              width={16}
              alt="search icon"
            />
          </span>
          <input
            placeholder="Search Location"
            className="outline-none w-8/12 py-6 "
          />
          <button className="bg-yellow-400 py-6 w-3/12 rounded-r-md">
            Search
          </button>
        </motion.div>
      </motion.div>
      <div
        className="absolute -top-32 lg:-top-10 left-5 lg:left-72 -z-10  h-heightHero
      w-11/12 lg:w-heroWidth lg:mx-0"
      >
        <Image
          src="/images/hero.png"
          fill
          alt="hero image "
          className="h-heightHero mx-w-lg mx-auto lg:max-w-none max-h-none"
        />
        <motion.div
          className="z-50 text-xl absolute right-0 bottom-0 flex flex-col md:flex-row 
          items-start md:items-center justify-center  gap-10 md:gap-24 
          bg-yellow-400 text-center py-4 md:p-7 px-4 lg:px-12 "
          variants={yellowCardsAnimation}
          animate={inView ? "active" : "inactive"}
          initial="inactive"
        >
          {yellowCards}
        </motion.div>
      </div>
      <div
        className="absolute bottom-14 cursor-pointer
       w-3  hover:translate-y-4 duration-500 opacity-0 md:opacity-100 "
      >
        <a
          className="text-tiny text-primary text-center 
        -rotate-90 whitespace-nowrap block "
          href="#about"
        >
          Scroll Down{" "}
        </a>
        <a href="#about">
          <Image
            src="/images/scroll.svg"
            height={15}
            width={12}
            alt="arrow down"
            className=" text-center mt-4"
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
