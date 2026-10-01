import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaAngleDoubleDown } from 'react-icons/fa';
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
              <a
                href={`#${item}`}
                className="text-lg font-light transition-colors md:text-xl text-neutral-400 hover:text-cyan-400"
              >
                {item === 'about-me' ? 'aboutme' : item}
              </a>
            </div>
          ))}
          <div className="transition-all duration-300 hover:text-cyan-400 hover:translate-x-1">
            <Link
              target="_blank"
              href={'files/aRami_2026___present.pdf'}
              className="text-lg font-light transition-colors md:text-xl text-neutral-400 hover:text-cyan-400"
            >
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
          className="mb-2 text-5xl font-bold tracking-tight text-transparent uppercase md:text-8xl md:text-center md:mb-2 bg-gradient-to-r from-white via-neutral-200 to-cyan-400 bg-clip-text"
        >
          Rami S. Zaki
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="text-lg tracking-[0.3em] uppercase md:text-2xl text-cyan-400"
        >
          Full-stack engineer
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-3xl mt-4 text-base leading-relaxed tracking-wide md:text-xl text-neutral-400"
        >
          Builds and ships production web systems, from API and data through to the UI. Currently at LimeSurvey.
          Previously end-to-end product work across NestJS, Angular, React, and Next.js.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="flex flex-col items-center justify-center gap-3 mt-8 text-sm tracking-widest uppercase sm:flex-row sm:gap-5 md:text-base text-neutral-400"
        >
          <span>Hamburg, Germany</span>
          <span className="hidden w-px h-4 sm:inline bg-white/10"></span>
          <span>LimeSurvey GmbH</span>
        </motion.div>
      </section>
      <motion.a
        href="#about-me"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="pb-3 transition-colors duration-300 text-cyan-400/60 hover:text-cyan-400"
      >
        <FaAngleDoubleDown className="h-8 animate-bounce" />
      </motion.a>
    </div>
  );
}
