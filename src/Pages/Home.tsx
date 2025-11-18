import CoverParticles from "../components/cover-particules";
import ProfilePic from "../components/ProfilePic";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-[100vh] h-full bg-no-repeat bg-gradient-cover flex justify-center items-center text-center px-6 relative">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 max-w-5xl z-10">
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
        
        {/* Texto */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4">
            Hi, I’m <span className="text-orange-500">Cesar Ulloa</span>
          </h1>
          <p className="text-[22px] max-w-2xl text-foreground/80 mb-6">
            Soy un <span className="font-semibold text-secondary">desarrollador Full Stack </span>
            que disfruta crear aplicaciones web modernas, responsivas y fáciles de usar. Mi enfoque está en <span className="font-semibold"> desarrollar soluciones eficientes </span>
            que combinen un diseño limpio con una funcionalidad potente.
          </p>
          <p className="text-md max-w-2xl text-foreground/70">
            Bienvenido a mi portafolio — aquí encontrarás mis proyectos, habilidades y el camino que he recorrido para convertirme en un desarrollador profesional.
          </p>
          
         
        </div>
         </motion.div>

        {/* Imagen */}
        <div className="flex-1 flex justify-center md:justify-end">
          {/* Foto */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
          <ProfilePic />

        </motion.div>
      </div>
    </div>

      {/* Fondo animado */ }
  <CoverParticles />
    </div >
  )
}
