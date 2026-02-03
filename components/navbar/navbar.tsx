import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { navbarAnimations } from './navbar-animations';

export default function Navbar() {
  useEffect(() => {
    navbarAnimations();
  }, []);

  return (
    <div id="navbar" className="top-[-50px] fixed z-40 w-full transition-all duration-1000">
      <div className="hidden md:block">{DesktopNavbar()}</div>
      <div className="md:hidden">{MobileNavbar()}</div>
    </div>
  );
}

const DesktopNavbar = () => {
  return (
    <div
      className="bg-background/90 py-4 z-50 gap-5 flex flex-row h-[50px] 
      text-white items-center pr-0 md:justify-end md:pr-4 lg:pr-0 lg:justify-center duration-1000 transition-all"
    >
      <div className="fixed z-50 text-left nav-logo left-8">
        <a href="#intro" className="text-4xl">
          aRamy
        </a>
        .me
      </div>
      <div className="nav-item">
        <a href="#about-me">aboutMe</a>
      </div>
      <div className="nav-item">
        <a href="#expertise">expertise</a>
      </div>
      <div className="nav-item">
        <a href="#experience">experience</a>
      </div>
      <div className="nav-item">
        <a href="#projects">projects</a>
      </div>
      <div className="nav-item">
        <a href="#testimonials">testimonials</a>
      </div>
      <div className="nav-item">
        <a href="#contact">contact</a>
      </div>
      <div className="nav-item">
        <Link target="_blank" href={'files/aRami_2026___present.pdf'}>
          resume
        </Link>
      </div>
    </div>
  );
};

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
        className={`bg-black/80 left-0 fixed text-4xl w-full py-2 pl-4 transition-all duration-1000 ${
          isOpen && 'left-full'
        }`}
      >
        <AiOutlineMenu color="white" size={32} />
      </div>
      <div
        className={`p-4 gap-8 fixed right-0 top-0 flex z-51 flex-col h-screen bg-black text-white transition-all w-full duration-1000 ${
          !isOpen && '!right-full'
        }`}
      >
        <div className="flex flex-row justify-between">
          <div
            onClick={() => {
              scrollToSection('intro');
            }}
            className="nav-logo"
          >
            <span className="text-4xl">aRamy</span>
            .me
          </div>
          <div onClick={() => setIsOpen(false)} className="text-4xl">
            ✖
          </div>
        </div>
        <div
          onClick={() => {
            scrollToSection('about-me');
          }}
          className="text-xl nav-item"
        >
          aboutMe
        </div>
        <div
          onClick={() => {
            scrollToSection('expertise');
          }}
          className="text-xl nav-item"
        >
          expertise
        </div>
        <div
          onClick={() => {
            scrollToSection('experience');
          }}
          className="text-xl nav-item"
        >
          experience
        </div>
        <div
          onClick={() => {
            scrollToSection('projects');
          }}
          className="text-xl nav-item"
        >
          projects
        </div>
        <div
          onClick={() => {
            scrollToSection('testimonials');
          }}
          className="text-xl nav-item"
        >
          testimonials
        </div>
        <div
          onClick={() => {
            scrollToSection('contact');
          }}
          className="text-xl nav-item"
        >
          contact
        </div>
        <div className="text-xl nav-item">
          <Link target="_blank" href={'files/aRami_2026___present.pdf'}>
            resume
          </Link>
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
