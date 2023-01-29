import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

import gsap from 'gsap';

export default function Navbar() {
  const enterScreen = 'restart';
  const forwardPastTheEndPoint = 'resume';
  const backToTheEndPoint = 'none';
  const whenScrollBackToStart = 'reset';

  useEffect(() => {
    gsap.to('#navbar', {
      scrollTrigger: {
        trigger: '#about-me',
        toggleActions: `${enterScreen} ${forwardPastTheEndPoint} ${backToTheEndPoint} ${whenScrollBackToStart}`,
        start: '100px 40%',
      },
      top: 0,
      duration: 0.5,
    });
  }, []);

  return (
    <div id="navbar" className="top-[-50px] fixed z-40 w-full transition-all duration-1000">
      <div className="md:block hidden">{DesktopNavbar()}</div>
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
      <div className="nav-logo z-50 fixed left-8 text-left">
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
        <Link target="_blank" href={'files/aRami_2023___present.pdf'}>
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
          className="nav-item text-xl"
        >
          aboutMe
        </div>
        <div
          onClick={() => {
            scrollToSection('expertise');
          }}
          className="nav-item text-xl"
        >
          expertise
        </div>
        <div
          onClick={() => {
            scrollToSection('experience');
          }}
          className="nav-item text-xl"
        >
          experience
        </div>
        <div
          onClick={() => {
            scrollToSection('projects');
          }}
          className="nav-item text-xl"
        >
          projects
        </div>
        <div
          onClick={() => {
            scrollToSection('testimonials');
          }}
          className="nav-item text-xl"
        >
          testimonials
        </div>
        <div
          onClick={() => {
            scrollToSection('contact');
          }}
          className="nav-item text-xl"
        >
          contact
        </div>
        <div className="nav-item text-xl">
          <Link target="_blank" href={'files/aRami_2023___present.pdf'}>
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
