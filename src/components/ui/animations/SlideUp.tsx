import { motion } from "framer-motion";
import { motionConfig } from "../../../utils/animations";

type SlideUpProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

const SlideUp = ({ children, className = "", delay = 0 }: SlideUpProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={motionConfig.viewport}
      transition={{ duration: motionConfig.duration, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

export default SlideUp;