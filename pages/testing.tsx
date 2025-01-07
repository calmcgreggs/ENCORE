import { motion } from "framer-motion";

export default function testing() {
  return (
    <motion.div
      drag
      dragConstraints={{
        top: -50,
        left: -50,
        right: 50,
        bottom: 50,
      }}
    />
  );
}
