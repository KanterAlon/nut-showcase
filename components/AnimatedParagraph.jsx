"use client";
import { motion } from "framer-motion";

export default function AnimatedParagraph({ children }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className="whitespace-pre-line text-base sm:text-lg leading-relaxed break-words"
    >
      {children}
    </motion.p>
  );
}
