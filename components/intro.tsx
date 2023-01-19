import React from 'react';
import { BsTelephoneFill, BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaAngleDoubleDown } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { GrMail } from 'react-icons/gr';
import Link from 'next/link';

export default function Intro() {
  return (
    <div id="intro" className="flex flex-col intro min-h-[100vh] relative px-8 justify-center items-center">
      <section className="flex gap-2 uppercase w-full justify-between h-[25vh] pt-5 flex-row">
        <div>
          <div className="nav-item child:text-2xl transition-all duration-500 hover:scale-110">
            <a href="#expertise">expertise</a>
          </div>
          <div className="nav-item child:text-2xl transition-all duration-500 hover:scale-110">
            <a href="#experience">experience</a>
          </div>
          <div className="nav-item child:text-2xl transition-all duration-500 hover:scale-110">
            <a href="#projects">projects</a>
          </div>
          <div className="nav-item child:text-2xl transition-all duration-500 hover:scale-110">
            <a href="#testimonials">testimonials</a>
          </div>
          <div className="nav-item child:text-2xl transition-all duration-500 hover:scale-110">
            <a href="#contact">handshake</a>
          </div>
          <div className="nav-item child:text-2xl transition-all duration-500 hover:scale-110">
            <a href="#resume">resume</a>
          </div>
        </div>
        <div className="flex gap-8 md:gap-4 uppercase flex-col md:flex-row">
          <Link target="_blank" href="https://www.linkedin.com/in/ramishenouda/">
            <BsLinkedin
              className="transition-all p-1 duration-500 rounded-sm hover:bg-white hover:fill-blue-500 hover:p-[1px]"
              color="white"
              size={40}
            />
          </Link>
          <Link target="_blank" href="https://github.com/ramishenouda">
            <BsGithub
              className="transition-all rounded-full p-1 duration-500 hover:fill-black hover:bg-white hover:p-[1px]"
              color="white"
              size={40}
            />
          </Link>
        </div>
      </section>
      <section className="flex-1 flex justify-center items-center flex-col h-[50vh] text-center">
        <p className="md:text-8xl md:text-center text-6xl font-bold uppercase tracking-widest md:mb-0 mb-2">
          Rami Shenouda
        </p>
        <p className="text-lg md:text-2xl uppercase tracking-widest font-medium">
          A programmer who is constantly seeking new learning opportunities.
        </p>
      </section>
      <section className="w-max gap-4 justify-center hidden pb-8 items-end h-[25vh] sm:flex flex-row">
        <div className="md:text-xl lg:child:text-2xl  flex flex-row gap-2 justify-center items-center">
          <MdLocationOn color="white" size={32} />
          <div className="text-neutral-200 font-medium"> Cairo, Egypt</div>
        </div>
        <p className="w-[1px] border-r-2 border-white h-8"></p>
        <div className="md:text-xl lg:child:text-2xl  flex flex-row gap-2 justify-center items-center">
          <BsTelephoneFill color="white" size={32} />
          <div className="text-neutral-200 font-medium">+ 20 155 187 4208</div>
        </div>
        <p className="w-[1px] border-r-2 border-white h-8"></p>
        <div className="md:text-xl lg:child:text-2xl">
          <Link
            className="flex flex-row gap-2 justify-center items-center text-neutral-200 font-medium"
            href="mailto:ramishenouda@outlook.com"
          >
            <GrMail color="white" size={32} />
            ramishenouda@outlook.com
          </Link>
        </div>
      </section>
      <a href="#expertise" className="pb-2 arrow-down">
        <FaAngleDoubleDown className="h-10 " />
      </a>
    </div>
  );
}
