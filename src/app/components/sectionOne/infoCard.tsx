import { FunctionComponent } from "react";
import { motion } from "framer-motion";
interface InfoCardProps {
  element: { name: string; number: number };
  index: number;
  inView: boolean;
}

const InfoCard: FunctionComponent<InfoCardProps> = ({
  element,
  index,
  inView,
}) => {
  let cardsAnimation = {
    active: (index: number) => {
      return {
        x: 0,
        opacity: 0.85,
        transition: {
          duration: 1,
          delay: index * 0.2,
        },
      };
    },
    inactive: {
      x: 300,
      opacity: 0,
    },
  };
  return (
    <motion.div
      className="flex flex-col gap-2 py-16 px-6 bg-secondary
      text-center items-center justify-center "
      variants={cardsAnimation}
      initial="inactive"
      animate={inView ? "active" : "inactive"}
      custom={index}
    >
      <p className="text-4xl text-yellow-400 font-bold tracking-wider">
        {element.number}
      </p>
      <h4>{element.name}</h4>
    </motion.div>
  );
};

export default InfoCard;
