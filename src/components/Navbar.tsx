import { useEffect, useState } from "react";
import ContactModal from "./Modal";



export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Ajuste para el navbar fijo
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };




  return (
    <>
      <nav className={`bg-gradient-cover text-foreground p-6 ${scrolled ? 'fixed top-0 left-0 w-full shadow-lg backdrop-blur-md bg-white/30 z-50 transition-all' : 'relative'}`}>
        <div className="flex items-center justify-between">
          <div className="logo font-bold text-[30px] ml-25 md:text-center ">
            Cesar <span className="text-primary">Ulloa</span>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col space-y-1"
          >
            {isOpen ? (
              "X"
            ) : (

              <>
                <span className="w-6 h-0.5 bg-foreground"></span>
                <span className="w-6 h-0.5 bg-foreground"></span>
                <span className="w-6 h-0.5 bg-foreground"></span>
              </>

            )}


          </button>

          <div className="hidden md:flex space-x-6">
            <ul className="flex gap-8 mr-30">
              <li className="relative group inline-block px-3">
                <a className="text-foreground text-[18px] hover:text-secondary transition"
                  href={encodeURI('/Cesar Ulloa Socorro CV.pdf')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mi CV
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>

              </li>
              <li className="relative group inline-block px-3">
                <button onClick={() => scrollToSection('education')} className="text-foreground text-[18px] hover:text-secondary transition">
                  Educación
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
              <li className="relative group inline-block px-3 ">
                <button onClick={() => scrollToSection('projects')} className="text-foreground text-[18px] hover:text-secondary transition">
                  Proyectos
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>

              <li className="relative group inline-block px-3 ">
                <button onClick={() => scrollToSection('technologies')} className="text-foreground text-[18px] hover:text-secondary transition">
                  Tecnologías
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
              <li className="relative group bg-primary-300 border-4 border-secondary rounded-full inline-block px-3">
                <button onClick={() => setIsContactModalOpen(true)} className="text-foreground text-[18px] hover:text-secondary transition">
                  Contact

                </button>
              </li>
            </ul>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4 bg-white/90 backdrop-blur-md rounded-lg p-4 shadow-lg">
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-foreground text-[18px] hover:text-secondary transition w-full text-left py-2"
                >
                  Mi CV
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('education')}
                  className="text-foreground text-[18px] hover:text-secondary transition w-full text-left py-2"
                >
                  Educación
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-foreground text-[18px] hover:text-secondary transition w-full text-left py-2"
                >
                  Proyoectos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('technologies')}
                  className="text-foreground text-[18px] hover:text-secondary transition w-full text-left py-2"
                >
                  Tecnologías
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setIsContactModalOpen(true);
                    setIsOpen(false);
                  }}
                  className="bg-primary-300 border-2 border-secondary rounded-full p-6 py-2 text-foreground text-[18px] hover:text-secondary transition w-30 text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}

      />
    </>

  )
}
