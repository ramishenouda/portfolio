import { useEffect, useRef } from 'react';
import { aboutMeAnimations } from './about-me-animations';

export default function AboutMe() {
  const aboutMe = useRef(null);
  const aboutMeParagraph = useRef(null);

  useEffect(() => {
    if (aboutMe.current && aboutMeParagraph.current) {
      aboutMeAnimations();
    }
  }, [aboutMe, aboutMeParagraph]);

  return (
    <section
      id="about-me"
      ref={aboutMe}
      className="min-h-[20vh] basic-animation-values !duration-1000 translate-x-[-200px] pt-10 text-white flex flex-col"
    >
      <h1 id="about-me-title" className="section-title">
        <span className="section-number">01.</span>ABOUT ME
      </h1>
      <p
        id="about-me-paragraph"
        ref={aboutMeParagraph}
        className="text-xl md:text-2xl basic-animation-values translate-x-[-210px] !duration-[1.5s] line-he mt-4 tracking-wide leading-[140%] lg:w-[80vw]"
      >
        I discovered my passion for programming as a self-taught game developer in secondary school, using my favorite
        game engine, Unity. After honing my skills for three years, I decided to expand my expertise by transitioning to
        web development. I am now a full-stack developer for a Netherlands-based company, working remotely. I hold a
        computer science degree from Ain Shams University, and constantly strive to improve my skills. My experience
        includes creating websites using a variety of technologies, such as ASP.NET, Nest.Js, and front-end frameworks
        like Angular, React, and Next.js.
      </p>
    </section>
  );
}
