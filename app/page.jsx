"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedParagraph from "../components/AnimatedParagraph";

const starVariants = {
  animate: {
    x: [-10, 10, -10],
    rotate: [0, 45, 0],
    transition: {
      repeat: Infinity,
      duration: 8,
      ease: "easeInOut",
    },
  },
};

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center text-center overflow-hidden p-6 sm:p-8">
      <Image src="/wave-bg.svg" alt="" fill className="absolute inset-0 object-cover" />
      <motion.div
        variants={starVariants}
        animate="animate"
        className="fixed top-10 right-10 w-16 h-16 pointer-events-none"
      >
        <Image src="/star.svg" alt="Decorative star" fill />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative space-y-6 glass p-8 sm:p-10 max-w-2xl"
      >
        <Image
          src="/nut-logo.svg"
          alt="NUT"
          width={150}
          height={150}
          className="mx-auto w-24 h-24 md:w-40 md:h-40"
        />
        <h1 className="text-4xl sm:text-6xl font-bold text-zetaGreen break-words">
          Bienvenido a NUT
        </h1>
        <AnimatedParagraph>
          Explora nuestra evolución y descubre cómo usamos la tecnología
          para mejorar la educación alimentaria.
        </AnimatedParagraph>
        <Link
          href="/monitor/1"
          className="inline-block px-6 py-3 bg-zetaGreen text-white rounded-lg hover:bg-zetaBlue transition-colors text-base"
        >
          Ingresar al recorrido
        </Link>
      </motion.div>
    </main>
  );
}

