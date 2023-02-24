"use client";
import Image from "next/image";
import { FunctionComponent } from "react";
import { motion } from "framer-motion";
interface CardProps {
  card: { name: string; title: string };
  inView: boolean;
  index: number;
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
      key={card.name}
      className="flex flex-col w-full shadow-lg max-w-md 
      "
      variants={variants}
      animate={inView ? "active" : "inactive"}
      initial="inactive"
      custom={index}
    >
      <Image
        src="/images/appartment.png"
        height={240}
        width={360}
        alt="shape image"
      />
      <div className="bg-white p-6 w-full">
        <h5>{card.title}</h5>
        <div className="flex flex-row justify-between mt-4 ">
          <p className="text-yellow-400 text-lg text-semibold ">{card.name}</p>

          <div className="flex flex-row gap-8 text-tiny">
            <span className="flex flex-row gap-5 items-center">
              <Image
                src="/images/facebook.svg"
                height={9}
                width={9}
                alt="facebook"
              />
              <Image
                src="/images/twitter.svg"
                height={15}
                width={15}
                alt="twitter"
              />
              <Image
                src="/images/dribble.svg"
                height={15}
                width={15}
                alt="dribble"
              />
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
