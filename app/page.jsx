"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center text-center overflow-hidden p-8">
      <Image src="/wave-bg.svg" alt="" fill className="absolute inset-0 object-cover" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative space-y-6 glass p-10 max-w-2xl"
      >
        <Image src="/nut-logo.svg" alt="NUT" width={150} height={150} className="mx-auto" />
        <h1 className="text-6xl font-bold text-zetaGreen">Bienvenido a NUT</h1>
        <p className="text-lg leading-relaxed">
          Explora nuestra evolución y descubre cómo usamos la tecnología
          para mejorar la educación alimentaria.
        </p>
        <Link
          href="/monitor/1"
          className="inline-block px-6 py-3 bg-zetaGreen text-white rounded-lg hover:bg-zetaBlue transition-colors"
        >
          Ingresar al recorrido
        </Link>
      </motion.div>
    </main>
  );
}
