"use client";
import { useScroll, useSpring, motion } from "framer-motion";

const MainTemplate = ({ children }: { children: React.ReactNode }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  return (
    <div>
      <motion.div
        style={{ scaleX }}
        className="h-2 w-screen z-50 fixed bottom-0 left-0 right-0 bg-red-500  "
      ></motion.div>
      {children}
    </div>
  );
};

export default MainTemplate;
