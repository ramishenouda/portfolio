import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      id="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: scrolled ? 0 : -100, opacity: scrolled ? 1 : 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed z-40 w-full flex justify-center px-4 pt-3"
    >
      <div className="hidden md:block w-full max-w-4xl">{DesktopNavbar()}</div>
      <div className="md:hidden w-full">{MobileNavbar()}</div>
    </motion.div>
  );
}

const DesktopNavbar = () => {
  return (
    <div
      className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-full py-3 px-8
      text-white items-center flex flex-row justify-center gap-6 shadow-lg shadow-black/20"
    >
      <div className="absolute left-8">
        <a href="#intro" className="text-lg font-semibold tracking-wide hover:text-cyan-400 transition-colors duration-300">
          aRamy<span className="text-sm font-normal text-neutral-400">.me</span>
        </a>
      </div>
      <NavLink href="#about-me" label="aboutMe" />
      <NavLink href="#expertise" label="expertise" />
      <NavLink href="#experience" label="experience" />
      <NavLink href="#projects" label="projects" />
      <NavLink href="#testimonials" label="testimonials" />
      <NavLink href="#contact" label="contact" />
      <Link
        target="_blank"
        href={'files/aRami_2026___present.pdf'}
        className="text-sm font-medium text-neutral-400 hover:text-cyan-400 transition-colors duration-300"
      >
        resume
      </Link>
    </div>
  );
};

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <a
    href={href}
    className="text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-300"
  >
    {label}
  </a>
);

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    setTimeout(() => {
      navigateToElement(id);
    }, 500);
  };

  return (
    <div>
      <div
        onClick={() => setIsOpen(true)}
        className={`bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-full p-3 w-max transition-all duration-500 ${
          isOpen && 'opacity-0 pointer-events-none'
        }`}
      >
        <AiOutlineMenu color="white" size={24} />
      </div>
      <div
        className={`p-6 gap-6 fixed right-0 top-0 flex z-51 flex-col h-screen bg-[#0a0a0f]/95 backdrop-blur-2xl text-white transition-all w-full duration-500 ${
          !isOpen && '!right-full'
        }`}
      >
        <div className="flex flex-row justify-between items-center">
          <div
            onClick={() => scrollToSection('intro')}
            className="cursor-pointer"
          >
            <span className="text-xl font-semibold">aRamy</span>
            <span className="text-sm text-neutral-400">.me</span>
          </div>
          <div onClick={() => setIsOpen(false)} className="text-2xl cursor-pointer text-neutral-400 hover:text-white transition-colors">
            ✕
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-8">
          {[
            { id: 'about-me', label: 'aboutMe' },
            { id: 'expertise', label: 'expertise' },
            { id: 'experience', label: 'experience' },
            { id: 'projects', label: 'projects' },
            { id: 'testimonials', label: 'testimonials' },
            { id: 'contact', label: 'contact' },
          ].map((item) => (
            <div
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-xl font-medium text-neutral-300 hover:text-cyan-400 transition-colors duration-300 cursor-pointer py-2 border-b border-white/[0.05]"
            >
              {item.label}
            </div>
          ))}
          <div className="text-xl font-medium text-neutral-300 hover:text-cyan-400 transition-colors duration-300 py-2">
            <Link target="_blank" href={'files/aRami_2026___present.pdf'}>
              resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const navigateToElement = (id: string) => {
  const element = document.getElementById(id);
  if (!element) {
    return;
  }
  element.scrollIntoView({ behavior: 'smooth' });
};
