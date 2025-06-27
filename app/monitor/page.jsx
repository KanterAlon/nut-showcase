"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MonitorIndex() {
  return (
    <main className="min-h-screen flex items-center justify-center p-10 relative overflow-hidden">
      <Image src="/wave-bg.svg" alt="" fill className="absolute inset-0 object-cover" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative text-center space-y-4 glass p-8"
      >
        <Image src="/nut-logo.svg" alt="NUT" width={120} height={120} />
        <p className="text-xl">Por favor, accede mediante el c\u00f3digo QR asignado a cada monitor.</p>
      </motion.div>
    </main>
  );
}
