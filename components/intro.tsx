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
          <div className="nav-item text-2xl">
            <a href="#expertise">expertise</a>
          </div>
          <div className="nav-item text-2xl">
            <a href="#experience">experience</a>
          </div>
          <div className="nav-item text-2xl">
            <a href="#projects">projects</a>
          </div>
          <div className="nav-item text-2xl">
            <a href="#testimonials">testimonials</a>
          </div>
          <div className="nav-item text-2xl">
            <a href="#contact">contact</a>
          </div>
          <div className="nav-item text-2xl">
            <a href="#resume">resume</a>
          </div>
        </div>
        <div className="flex gap-8 md:gap-4 uppercase flex-col md:flex-row">
          <BsLinkedin color="white" size={32} />
          <BsGithub color="white" size={32} />
        </div>
      </section>
      <section className="flex-1 flex justify-center items-center flex-col h-[50vh] text-center">
        <p className="md:text-8xl text-4xl font-medium uppercase tracking-widest md:mb-0 mb-2">Rami Shenouda</p>
        <p className="text-sm md:text-2xl uppercase tracking-widest font-medium">
          A programmer who is constantly seeking new learning opportunities.
        </p>
      </section>
      <section className="w-max gap-4 justify-center hidden pb-8 items-end h-[25vh] md:flex flex-row">
        <p className="flex flex-row gap-2 justify-center items-center">
          <MdLocationOn color="white" size={32} />
          <p className="text-2xl text-neutral-200 font-medium"> Cairo, Egypt</p>
        </p>
        <p className="w-[1px] border-r-2 border-white h-8"></p>
        <p className="flex flex-row gap-2 justify-center items-center">
          <BsTelephoneFill color="white" size={32} />
          <p className="text-2xl text-neutral-200 font-medium">+ 20 155 187 4208</p>
        </p>
        <p className="w-[1px] border-r-2 border-white h-8"></p>
        <p className="flex flex-row gap-2 justify-center items-center">
          <GrMail color="white" size={32} />
          <p className="text-2xl text-neutral-200 font-medium">ramishenouda@outlook.com</p>
        </p>
      </section>
      <a href="#expertise" className="pb-2 arrow-down">
        <FaAngleDoubleDown className="h-10 " />
      </a>
    </div>
  );
}
