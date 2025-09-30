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




  return (
    <>
      <nav className={`bg-gradient-cover text-foreground p-6 ${scrolled ? 'fixed top-0 left-0 w-full shadow-lg backdrop-blur-md bg-white/30 z-50 transition-all' : 'relative'}`}>
        <div className="flex items-center justify-between">
          <div className="logo font-bold text-[30px] ml-25 md:text-center">
            Cesar <span className="text-primary">Ulloa</span>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col space-y-1"
          >
            <span className="w-6 h-0.5 bg-foreground"></span>
            <span className="w-6 h-0.5 bg-foreground"></span>
            <span className="w-6 h-0.5 bg-foreground"></span>

          </button>

          <div className="hidden md:flex space-x-6">
            <ul className="flex gap-8 mr-30">
              <li className="relative group inline-block px-3">
                <a href="" className="text-foreground text-[18px] hover:text-secondary transition">
                  About me
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li className="relative group inline-block px-3">
                <a href="#education" className="text-foreground text-[18px] hover:text-secondary transition">
                  Education
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li className="relative group inline-block px-3 ">
                <a href="#projects" className="text-foreground text-[18px] hover:text-secondary transition">
                  Projects
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li className="relative group bg-primary-300 border-4 border-secondary rounded-full inline-block px-3">
                <button onClick={() => setIsContactModalOpen(true)} className="text-foreground text-[18px] hover:text-secondary transition">
                  Contact

                </button>
              </li>
            </ul>
          </div>

        </div>
      </nav>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      
      />
    </>

  )
}
