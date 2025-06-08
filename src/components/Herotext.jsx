import React from "react";
import { motion } from "motion/react";
import { FlipWords } from "./Flipword";
import { div } from "motion/react-client";

const Herotext = () => {
  const words = ["Modern", "Scalable", "Secure"];
  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-20 text-left md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* desktopview */}
      <div className="flex-col hidden c-space md:flex justify-start">
        <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hello I'm Shrrvvuu
        </motion.h1>
        <div className="flex-col flex items-start ">
          <motion.p
            className="text-5xl text-neutral-300 font-medium"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.3 }}
          >
            A Devloper <br /> Dedicated to Crafting
          </motion.p>
          {
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.5 }}
            >
              {" "}
              <FlipWords
                words={words}
                className="text-8xl text-white font-black"
              />
            </motion.div>
          }
          <motion.p
            className="text-3xl text-neutral-300 font-medium"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web Solution
          </motion.p>
        </div>
      </div>
      {/* mobile view */}
      <div className="flex flex-col md:hidden  space-y-6">
        <motion.p
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
          className="text-4xl font-medium "
        >
          Hi I'm Shrrvvuu
        </motion.p>
        <motion.p className="text-5xl text-neutral-500 font-black" variants={variants}
          initial="hidden"
          animate="visible"
          transition={{delay:1.3}}>Building</motion.p>
        <motion.div variants={variants}
          initial="hidden"
          animate="visible"
          transition={{delay:1.5}}>
          <FlipWords words={words} className="text-7xl font-bold" />
        </motion.div>
        <motion.p variants={variants}
          initial="hidden"
          animate="visible"
          transition={{delay:1.8}} className="text-3xl text-neutral-400 font-black">Web Application</motion.p>
      </div>
    </div>
  );
};

export default Herotext;
