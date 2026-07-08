import { motion } from "framer-motion";
import { motionConfig } from "../../../utils/animations";

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
};

const Stagger = ({ children, className = "" }: StaggerProps) => {
  return (
    <motion.ul
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={motionConfig.viewport}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.08,
          },
        },
      }}
    >
      {children}
    </motion.ul>
  );
};

export const StaggerItem = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.li
      className={className}
      variants={{
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{
        duration: motionConfig.duration - 0.2,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.li>
  );
};

export default Stagger;
