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
            I’m a passionate <span className="font-semibold text-secondary">Full Stack Developer </span>
            who loves building modern, responsive, and user-friendly web applications.
            My focus is on creating <span className="font-semibold"> efficient solutions </span>
            that combine clean design with powerful functionality.
          </p>
          <p className="text-md max-w-2xl text-foreground/70">
            Welcome to my portfolio — here you’ll find my projects, skills, and the
            journey I’ve taken to become a professional developer.
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
