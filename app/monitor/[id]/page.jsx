"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedParagraph from "../../../components/AnimatedParagraph";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import {
  SiExpress,
  SiJavascript,
  SiMicrosoftsqlserver,
  SiPostgresql,
  SiSupabase,
  SiGoogle,
  SiOpenai,
  SiTailwindcss,
  SiFramer,
} from "react-icons/si";

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

const monitors = {
  1: {
    title: "Proyecto Zeta \u2013 Info360 (4\u00ba A\u00f1o \u2013 EFSI)",
    image: "/zeta-logo.svg",
    content: `El punto de partida fue comprender un problema real: la mayor\u00eda de las personas no interpreta las etiquetas nutricionales.\n\nTras encuestas, entrevistas y revisi\u00f3n de art\u00edculos comprobamos una gran desinformaci\u00f3n. En el tercer trimestre desarrollamos la Web Zeta para traducir esos datos en informaci\u00f3n clara.\n\nTecnolog\u00eda utilizada:\n- Arquitectura MVC\n- JavaScript + Express.js\n- HTML, CSS y EJS\n- SQL Server\n\nLa plataforma qued\u00f3 terminada ese mismo a\u00f1o y sent\u00f3 las bases de todo lo que vino despu\u00e9s.`,
    icons: (
      <div className="flex space-x-3 text-3xl text-zetaGreen">
        <SiJavascript />
        <SiExpress />
        <SiMicrosoftsqlserver />
      </div>
    ),
  },
  2: {
    title: "Inteligencia Artificial y App de C\u00e1mara (Inicio de 5\u00ba A\u00f1o)",
    image: "/camera-app.svg",
    content: `Buscamos integrar IA a nuestra primera versi\u00f3n. Desarrollamos una aplicaci\u00f3n que usa la c\u00e1mara del celular para escanear productos y ofrecer al instante un an\u00e1lisis nutricional.\n\nFuncionamiento:\n1. El usuario escanea el producto.\n2. Google Vision reconoce la imagen.\n3. GPT genera el par\u00e1metro de b\u00fasqueda.\n4. Consultamos la base de datos y mostramos la informaci\u00f3n clara.\n\nTecnolog\u00eda:\n- React en el frontend\n- Node.js en el backend\n- PostgreSQL en Supabase\n- Google Vision + GPT\n- Estilos CSS puro`,
    icons: (
      <div className="flex space-x-3 text-3xl text-zetaGreen">
        <FaReact />
        <FaNodeJs />
        <SiPostgresql />
        <SiSupabase />
        <SiGoogle />
        <SiOpenai />
      </div>
    ),
  },
  3: {
    title: "Proyecto Final \u2013 NUT y Sinergia (5\u00ba A\u00f1o)",
    image: "/nut-logo.svg",
    content: `En el segundo trimestre renombramos el proyecto como NUT y participamos en Sinergia, trabajando junto a otras orientaciones.\n\n- Construcciones: dise\u00f1o de stands y ferias.\n- Gesti\u00f3n de las Organizaciones: modelo de negocio y financiaci\u00f3n.\n- Inform\u00e1tica: plataforma web, IA y experiencia de usuario.\n\nStack actualizado:\n- React con componentes avanzados\n- Node.js + Express\n- PostgreSQL en Supabase\n- Tailwind CSS\n- Librer\u00edas: React Icons y Framer Motion\n\nIntegramos el m\u00f3dulo de c\u00e1mara en la web y definimos una visi\u00f3n a futuro:\n- Ferias educativas en todo el pa\u00eds\n- Integraci\u00f3n con sistemas de salud y educaci\u00f3n\n- Versiones m\u00f3viles y expansi\u00f3n regional\n- Colaboraci\u00f3n con ONGs, escuelas y municipios`,
    icons: (
      <div className="flex space-x-3 text-3xl text-zetaGreen">
        <FaReact />
        <FaNodeJs />
        <SiExpress />
        <SiPostgresql />
        <SiSupabase />
        <SiTailwindcss />
        <SiFramer />
      </div>
    ),
  },
};

export default function Page({ params }) {
  const router = useRouter();
  const id = parseInt(params.id, 10);
  const monitor = monitors[id] || monitors[1];
  const paragraphs = monitor.content.split("\n\n");

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", "/");
    }
  }, [id]);


  const positionClasses = {
    1: "top-8 left-8",
    2: "bottom-8 left-8",
    3: "bottom-8 right-8",
  };
  const starClass = positionClasses[id] || "top-8 left-8";

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 sm:p-10 relative overflow-hidden">
      <Image src="/wave-bg.svg" alt="" fill className="absolute inset-0 object-cover" />
      <motion.div
        variants={starVariants}
        animate="animate"
        className={`fixed ${starClass} w-14 h-14 pointer-events-none`}
      >
        <Image src="/star.svg" alt="Decorative star" fill />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-5xl w-full space-y-8 sm:space-y-10 glass p-6 sm:p-8"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-bold text-zetaGreen text-center md:text-left break-words"
        >
          {monitor.title}
        </motion.h1>
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-start md:space-x-8 space-y-6 md:space-y-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {monitor.image && (
            <motion.div
              variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
            >
              <Image
                src={monitor.image}
                alt="logo"
                width={180}
                height={180}
                className="w-32 h-32 md:w-56 md:h-56 md:shrink-0"
              />
            </motion.div>
          )}
          <motion.div
            variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}
            className="space-y-4"
          >
            {paragraphs.map((text, idx) => (
              <AnimatedParagraph key={idx}>{text}</AnimatedParagraph>
            ))}
            {monitor.icons && <div>{monitor.icons}</div>}
          </motion.div>
        </motion.div>
        <div className="mt-8 space-y-4 w-full">
          <div className="relative h-2 bg-zetaGray/20 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(id / 3) * 100}%` }}
              transition={{ duration: 0.6 }}
              className="h-full bg-zetaBlue"
            />
          </div>
          <div className="flex justify-center space-x-6">
            {[1, 2, 3].map((step) => (
              <button
                key={step}
                onClick={() => router.push(`/monitor/${step}`)}
                className={`relative text-3xl sm:text-4xl transition-all ${
                  step === id
                    ? "text-zetaBlue scale-110"
                    : "text-zetaGray hover:text-zetaGreen hover:scale-105"
                }`}
                aria-label={`Monitor ${step}`}
              >
                <FiMonitor />
                <span className="absolute inset-0 flex items-center justify-center text-sm font-bold">
                  {step}
                </span>
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </main>
  );
}

