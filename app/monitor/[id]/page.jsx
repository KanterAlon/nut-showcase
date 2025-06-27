"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { motion } from "framer-motion";

const monitors = {
  1: {
    title: "Monitor 1",
    content: `En 2022 comenzamos con la idea de digitalizar el aprendizaje de la
alimentación saludable. Creamos los primeros prototipos de nuestra app
Nut y recopilamos la información nutricional de los alimentos locales.`,
  },
  2: {
    title: "Monitor 2",
    content: `A inicios de 2023 lanzamos una versión beta e iniciamos pruebas
con estudiantes. Mejoramos la interfaz e incorporamos un pequeño scanner
para reconocer productos mediante código de barras.`,
  },
  3: {
    title: "Monitor 3",
    content: `Este año dimos el paso más importante: transformamos NUT en un
proyecto final integral con visión empresarial. Consolidamos la
tecnología, expandimos las funcionalidades y nos enfocamos en
experiencia de usuario, accesibilidad y diseño profesional.

Stack actualizado:
- React con hooks y componentes inteligentes
- Node.js + Express
- PostgreSQL alojado en Supabase
- Tailwind CSS
- Librerías: React Icons, Framer Motion

La IA del escáner se perfeccionó con modelos para reconocimiento de
texto conectados a nuestra base nutricional.

NUT es hoy una empresa educativa en crecimiento. Nuestra misión: mejorar
la salud pública mediante educación alimenticia clara, visual y
confiable. Trabajamos con visión empresarial, analizando rentabilidad y
expansión a través de ferias, escuelas y plataformas digitales.

¿Por qué invertir en NUT?
- Impacto social y educativo real.
- Modelo escalable.
- Tecnología moderna.
- Sinergia interdisciplinaria.
- Motivación y liderazgo joven.`,
  },
};

export default function Page({ params }) {
  const router = useRouter();
  const id = parseInt(params.id, 10);
  const monitor = monitors[id] || monitors[1];

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", "/monitor");
    }
  }, [id]);

  const nextId = id >= 3 ? 1 : id + 1;
  const prevId = id <= 1 ? 3 : id - 1;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-10 bg-zetaCream text-zetaGray">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl text-left space-y-6"
      >
        <h1 className="text-4xl font-bold text-zetaGreen mb-6">{monitor.title}</h1>
        <p className="whitespace-pre-line text-lg leading-relaxed">{monitor.content}</p>
        <div className="flex justify-between mt-8 text-zetaGreen font-semibold">
          <button onClick={() => router.push(`/monitor/${prevId}`)}>Anterior</button>
          <button onClick={() => router.push(`/monitor/${nextId}`)}>Siguiente</button>
        </div>
      </motion.div>
    </main>
  );
}
