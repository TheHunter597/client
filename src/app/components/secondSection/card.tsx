"use client";

import Image from "next/image";
import { FunctionComponent } from "react";
import { motion } from "framer-motion";
interface CardProps {
  card: { info: string; price: string; bathrooms: number; bedrooms: number };
  index: number;
  inView: boolean;
}

const Card: FunctionComponent<CardProps> = ({ card, index, inView }) => {
  let variants = {
    active: (index: number) => {
      return {
        y: 0,
        transition: {
          delay: index * 0.25,
          duration: 1.1,
          zIndex: -100,
          type: "spring",
          bounce: 0.3,
        },
        opacity: 1,
        zIndex: 1,
      };
    },
    inactive: {
      y: 400,
      opacity: 0,
      zIndex: -1,
      transition: {
        duration: 0,
      },
    },
  };
  return (
    <motion.div
      className="flex flex-col w-full shadow-lg max-w-md "
      variants={variants}
      animate={inView ? "active" : "inactive"}
      initial="inactive"
      custom={index}
    >
      <Image
        src="/images/appartment.png"
        height={200}
        width={350}
        // fill
        alt="shape image"
        className="w-full max-w-md "
      />
      <div className="bg-white p-6">
        <h5>{card.info}</h5>
        <div className="flex flex-row justify-between mt-4">
          <p className="text-yellow-400 text-lg text-semibold">{card.price}</p>

          <div className="flex flex-row gap-8 text-tiny">
            <span className="flex flex-row gap-3 items-center">
              <Image
                src="/images/shower.svg"
                height={10}
                width={10}
                alt="shower"
              />
              {card.bathrooms}
              {" BA"}
            </span>
            <span className="flex flex-row gap-2 items-center">
              <Image src="/images/bed.svg" height={16} width={16} alt="bed" />
              {card.bedrooms}
              {" BD"}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
