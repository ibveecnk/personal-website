import { randomInt } from "crypto";
import { motion, Variants } from "framer-motion";
import { FunctionComponent } from "react";

type ElementProps = { children: React.ReactNode };

export const TypingText: FunctionComponent<ElementProps> = (props) => {
  const letter: Variants = {
    hide: { opacity: 0 },
    show: { opacity: 1 },
  };

  const sentence: Variants = {
    hide: { opacity: 1 },
    show: {
      transition: { opacity: 1, delay: 1, staggerChildren: 0.02 },
    },
  };

  return (
    <motion.div initial="hide" animate="show" variants={sentence}>
      {(props.children as string).split("").map((char, index) => {
        return (
          <motion.span key={"char-" + index} variants={letter}>
            {char}
          </motion.span>
        );
      })}
    </motion.div>
  );
};
