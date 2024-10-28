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
          <div className="transition-all duration-500 nav-item child:text-2xl hover:scale-110">
            <a href="#about-me">aboutme</a>
          </div>
          <div className="transition-all duration-500 nav-item child:text-2xl hover:scale-110">
            <a href="#expertise">expertise</a>
          </div>
          <div className="transition-all duration-500 nav-item child:text-2xl hover:scale-110">
            <a href="#experience">experience</a>
          </div>
          <div className="transition-all duration-500 nav-item child:text-2xl hover:scale-110">
            <a href="#projects">projects</a>
          </div>
          <div className="transition-all duration-500 nav-item child:text-2xl hover:scale-110">
            <a href="#testimonials">testimonials</a>
          </div>
          <div className="transition-all duration-500 nav-item child:text-2xl hover:scale-110">
            <a href="#contact">contact</a>
          </div>
          <div className="transition-all duration-500 nav-item child:text-2xl hover:scale-110">
            <Link target="_blank" href={'files/aRami_2024___present.pdf'}>
              resume
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-8 uppercase md:gap-4 md:flex-row">
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
        <p className="mb-2 text-6xl font-bold tracking-widest uppercase md:text-8xl md:text-center md:mb-0">
          Rami Shenouda
        </p>
        <p className="text-lg font-medium tracking-widest uppercase md:text-2xl">
          A programmer who is constantly seeking new learning opportunities.
        </p>
      </section>
      <section className="w-max gap-4 justify-center hidden pb-8 items-end h-[25vh] sm:flex flex-row">
        <div className="flex flex-row items-center justify-center gap-2 md:text-xl lg:child:text-2xl">
          <MdLocationOn color="white" size={32} />
          <div className="font-medium text-neutral-200"> Hamburg, Germany</div>
        </div>
        <p className="w-[1px] border-r-2 border-white h-8"></p>
        <div className="flex flex-row items-center justify-center gap-2 md:text-xl lg:child:text-2xl">
          <BsTelephoneFill color="white" size={32} />
          <div className="font-medium text-neutral-200">+49 1515 8863801</div>
        </div>
        <p className="w-[1px] border-r-2 border-white h-8"></p>
        <div className="md:text-xl lg:child:text-2xl">
          <Link
            className="flex flex-row items-center justify-center gap-2 font-medium text-neutral-200"
            href="mailto:ramishenouda@outlook.com"
          >
            <GrMail color="white" size={32} />
            ramishenouda@outlook.com
          </Link>
        </div>
      </section>
      <a href="#about-me" className="pb-3 arrow-down">
        <FaAngleDoubleDown className="h-10 " />
      </a>
    </div>
  );
}
