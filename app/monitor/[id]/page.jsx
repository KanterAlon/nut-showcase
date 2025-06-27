"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
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

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", "/");
    }
  }, [id]);

  const nextId = id + 1;
  const prevId = id - 1;
  const hasNext = id < 3;
  const hasPrev = id > 1;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-10 bg-zetaCream text-zetaGray">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl text-left space-y-6"
      >
        <h1 className="text-4xl font-bold text-zetaGreen mb-6">{monitor.title}</h1>
        {monitor.image && (
          <div className="flex justify-center">
            <Image src={monitor.image} alt="logo" width={120} height={120} />
          </div>
        )}
        <p className="whitespace-pre-line text-lg leading-relaxed">{monitor.content}</p>
        {monitor.icons && <div className="mt-4">{monitor.icons}</div>}
        <div className="flex justify-between mt-8 text-zetaGreen font-semibold w-full">
          {hasPrev ? (
            <button onClick={() => router.push(`/monitor/${prevId}`)}>Anterior</button>
          ) : (
            <span />
          )}
          {hasNext ? (
            <button onClick={() => router.push(`/monitor/${nextId}`)}>Siguiente</button>
          ) : (
            <span />
          )}
        </div>
      </motion.div>
    </main>
  );
}
