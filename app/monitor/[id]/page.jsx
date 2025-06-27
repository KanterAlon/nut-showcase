
"use client";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-10 bg-zetaCream text-zetaGray">
      <motion.div
        initial={ opacity: 0, y: 50 }
        animate={ opacity: 1, y: 0 }
        transition={ duration: 0.6 }
        className="max-w-4xl text-left space-y-6"
      >
        <h1 className="text-4xl font-bold text-zetaGreen mb-6">Monitor 3</h1>
        <p className="text-lg leading-relaxed whitespace-pre-line">
          Este año dimos el paso más importante: transformamos NUT en un proyecto final integral con visión empresarial. Consolidamos la tecnología, expandimos las funcionalidades y nos enfocamos en experiencia de usuario, accesibilidad y diseño profesional.

Stack actualizado:
- React con hooks y componentes inteligentes
- Node.js + Express
- PostgreSQL alojado en Supabase
- Tailwind CSS
- Librerías: React Icons, Framer Motion

La IA del escáner se perfeccionó con modelos para reconocimiento de texto conectados a nuestra base nutricional.

NUT es hoy una empresa educativa en crecimiento. Nuestra misión: mejorar la salud pública mediante educación alimenticia clara, visual y confiable. Trabajamos con visión empresarial, analizando rentabilidad y expansión a través de ferias, escuelas y plataformas digitales.

¿Por qué invertir en NUT?
- Impacto social y educativo real.
- Modelo escalable.
- Tecnología moderna.
- Sinergia interdisciplinaria.
- Motivación y liderazgo joven.
        </p>
      </motion.div>
    </main>
  );
}
