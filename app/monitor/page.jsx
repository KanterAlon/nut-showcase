"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function MonitorIndex() {
  return (
    <main className="min-h-screen flex items-center justify-center p-10 relative overflow-hidden">
      <Image src="/wave-bg.svg" alt="" fill className="absolute inset-0 object-cover" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative text-center space-y-6 glass p-10"
      >
        <Image src="/nut-logo.svg" alt="NUT" width={140} height={140} className="mx-auto" />
        <p className="text-xl">Por favor, accede mediante el c\u00f3digo QR asignado a cada monitor.</p>
        <Link href="/monitor/1" className="inline-block px-6 py-3 bg-zetaGreen text-white rounded-lg hover:bg-zetaBlue transition-colors">Comenzar</Link>
      </motion.div>
    </main>
  );
}
