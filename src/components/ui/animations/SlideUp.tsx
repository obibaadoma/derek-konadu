import { motion } from "framer-motion";

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
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

export default SlideUp;