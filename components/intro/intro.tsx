import React from 'react';
import { BsTelephoneFill, BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaAngleDoubleDown } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { GrMail } from 'react-icons/gr';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Intro() {
  return (
    <div id="intro" className="flex flex-col min-h-[100vh] relative px-8 justify-center items-center">
      <section className="flex gap-2 uppercase w-full justify-between h-[25vh] pt-5 flex-row">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {['about-me', 'expertise', 'experience', 'projects', 'testimonials', 'contact'].map((item) => (
            <div key={item} className="transition-all duration-300 hover:text-cyan-400 hover:translate-x-1">
              <a href={`#${item}`} className="text-lg md:text-xl font-light text-neutral-400 hover:text-cyan-400 transition-colors">
                {item === 'about-me' ? 'aboutme' : item}
              </a>
            </div>
          ))}
          <div className="transition-all duration-300 hover:text-cyan-400 hover:translate-x-1">
            <Link target="_blank" href={'files/aRami_2026___present.pdf'} className="text-lg md:text-xl font-light text-neutral-400 hover:text-cyan-400 transition-colors">
              resume
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col gap-4 uppercase md:gap-4 md:flex-row"
        >
          <Link target="_blank" href="https://www.linkedin.com/in/ramishenouda/">
            <BsLinkedin
              className="transition-all duration-300 hover:text-cyan-400 hover:scale-110"
              color="white"
              size={28}
            />
          </Link>
          <Link target="_blank" href="https://github.com/ramishenouda">
            <BsGithub
              className="transition-all duration-300 hover:text-cyan-400 hover:scale-110"
              color="white"
              size={28}
            />
          </Link>
        </motion.div>
      </section>
      <section className="flex-1 flex justify-center items-center flex-col h-[50vh] text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-2 text-5xl font-bold tracking-tight uppercase md:text-8xl md:text-center md:mb-2 bg-gradient-to-r from-white via-neutral-200 to-cyan-400 bg-clip-text text-transparent"
        >
          Rami Shenouda
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base font-light tracking-widest uppercase md:text-xl text-neutral-400 max-w-2xl"
        >
          A programmer who is constantly seeking new learning opportunities.
        </motion.p>
      </section>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="w-max gap-6 justify-center hidden pb-8 items-end h-[25vh] sm:flex flex-row"
      >
        <div className="flex flex-row items-center justify-center gap-2 text-neutral-400">
          <MdLocationOn className="text-cyan-400" size={20} />
          <span className="text-sm md:text-base font-light">Hamburg, Germany</span>
        </div>
        <span className="w-px h-5 bg-white/10"></span>
        <div className="flex flex-row items-center justify-center gap-2 text-neutral-400">
          <BsTelephoneFill className="text-cyan-400" size={16} />
          <span className="text-sm md:text-base font-light">+49 1515 8863801</span>
        </div>
        <span className="w-px h-5 bg-white/10"></span>
        <Link
          className="flex flex-row items-center justify-center gap-2 text-neutral-400 hover:text-cyan-400 transition-colors duration-300"
          href="mailto:ramishenouda@outlook.com"
        >
          <GrMail className="text-cyan-400" size={18} />
          <span className="text-sm md:text-base font-light">ramishenouda@outlook.com</span>
        </Link>
      </motion.section>
      <motion.a
        href="#about-me"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="pb-3 text-cyan-400/60 hover:text-cyan-400 transition-colors duration-300"
      >
        <FaAngleDoubleDown className="h-8 animate-bounce" />
      </motion.a>
    </div>
  );
}
