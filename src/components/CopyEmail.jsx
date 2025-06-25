import React, { useState } from "react";
import { AnimatePresence, easeInOut, motion } from "motion/react";

const CopyEmail = () => {
  const [email, setEmail] = useState(false);
  const myEmail = "shravanrajput@gmail.com";

  function copyEmail() {
    if (
      navigator.clipboard &&
      typeof navigator.clipboard.writeText === "function"
    ) {
      navigator.clipboard.writeText(myEmail);
      setEmail(true);
      setTimeout(() => {
        setEmail(false);
      }, 2000);
    }
  }
  return (
    <motion.button
      className="relative px-1 py-5 text-sm text-center font-extralight rounded-full bg-primary w-[12rem] cursor-pointer overflow-hidden"
      onClick={copyEmail}
      whileHover={{y:-5}}
      whileTap={{scale:1.05}}
    >
      <AnimatePresence mode="wait">
        {email ? (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="copied"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <img src="assets/copy-done.svg" className="w-5" alt="copy-image" />
            Copied Email
          </motion.p>
        ) : (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="copY"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <img src="assets/copy.svg" className="w-5" alt="copy-image" />
            Copy Email Address
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default CopyEmail;
