import { motion } from "framer-motion";
import { motionConfig } from "../../../utils/animations";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

const FadeIn = ({ children, className = "", delay = 0 }: FadeInProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={motionConfig.viewport}
      transition={{ duration: motionConfig.duration, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
