"use client";
import Image from "next/image";
import { FunctionComponent, useEffect, useState } from "react";
import { motion } from "framer-motion";
interface NavbarProps {}
const Navbar: FunctionComponent<NavbarProps> = () => {
  let [isPhoneUser, setIsPhoneUser] = useState(false);
  let [phoneNavActive, setPhoneNavActive] = useState(true);

  let sections = [
    "Home",
    "About",
    "Appartments",
    "How it works",
    "Agents",
    "Contact us",
  ];

  let navAnimations = {
    active: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    inactive: {
      x: -600,
      y: -100,
      opacity: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  let headers = sections.map((section) => {
    return (
      <a
        key={section}
        className="list-none hover:text-yellow-500 cursor-pointer duration-300 tracking-wider"
        href={`#${section.toLowerCase().replaceAll(" ", "-")}`}
        onClick={() => {
          section === "Home" && typeof window ? window.scrollTo(0, 0) : "";
          isPhoneUser ? setPhoneNavActive(false) : "";
        }}
      >
        {section}
      </a>
    );
  });

  useEffect(() => {
    let width = window.innerWidth;
    addEventListener("resize", () => {
      console.log(isPhoneUser);
      console.log(width);

      width = window.innerWidth;
      width > 1020 ? setIsPhoneUser(false) : setIsPhoneUser(true);
      isPhoneUser ? setPhoneNavActive(true) : setPhoneNavActive(false);
    });
    width > 1020 ? setIsPhoneUser(false) : setIsPhoneUser(true);
    return addEventListener("resize", () => {
      width = window.innerWidth;
    });
  });
  console.log(isPhoneUser);

  return (
    <nav className=" bg-white text-primary fixed top-0 w-full z-50 px-4 lg:px-0">
      <div
        className="container mx-auto flex flex-row justify-between place-content-center 
        gap-4 py-4 items-center relative"
      >
        <div className="col-span-2 text-logo font-lg cursor-pointer hover:text-yellow-400 duration-300 ">
          luxestate
        </div>
        <motion.div
          className={`flex flex-col lg:flex-row lg:justify-between 
          pt-12 lg:py-0 items-center absolute 
          lg:relative top-16 gap-10 lg:gap-0
          w-full lg:w-3/4 lg:ml-auto lg:top-0 bg-white h-screen lg:h-auto 
          lg:bg-transparent`}
          variants={navAnimations}
          initial="inactive"
          animate={phoneNavActive ? "active" : "inactive"}
        >
          <ul
            className="flex flex-col lg:flex-row items-center justify-center 
            gap-6 col-span-5 place-content-center font-thin 
            text-xl lg:text-tiny  "
          >
            {headers}
          </ul>
          <ul
            className="[&>li]:list-none flex flex-col lg:flex-row 
            gap-4 lg:gap-8 font-thin items-center justify-center col-span-3
            lg:self-end text-tiny  w-full lg:w-auto
      "
          >
            <li className="text-md hover:text-yellow-500 cursor-pointer text-center">
              Join Us
            </li>
            <li
              className="bg-yellow-400 rounded-md hover:bg-white border
         border-yellow-400 duration-300 w-8/12 lg:w-auto text-center  "
            >
              <a
                href="#no-clue-what-this-section-represents"
                className="bg-yellow py-3 px-10 block z-10"
              >
                Get started
              </a>
            </li>
          </ul>
        </motion.div>
        <div
          className="absolute right-0 lg:opacity-0"
          onClick={() => {
            isPhoneUser ? setPhoneNavActive((prev) => !prev) : "";
          }}
        >
          {!phoneNavActive ? (
            <Image
              src="/images/nav/menu-icon.svg"
              height={30}
              width={30}
              alt="menu"
              className="cursor-pointer"
            />
          ) : (
            <Image
              src="/images/nav/close.svg"
              height={30}
              width={30}
              alt="menu"
              className="cursor-pointer"
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
