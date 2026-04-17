import { FadeIn } from '../shared/motion';

export default function AboutMe() {
  return (
    <section
      id="about-me"
      className="min-h-[20vh] pt-10 text-white flex flex-col"
    >
      <FadeIn>
        <h1 className="section-title">
          <span className="section-number">01.</span>ABOUT ME
        </h1>
      </FadeIn>
      <FadeIn delay={0.15}>
        <p
          className="text-xl md:text-2xl mt-6 tracking-wide leading-relaxed lg:w-[80vw] text-neutral-300"
        >
          I discovered my passion for programming as a self-taught game developer in secondary school, using my favorite
          game engine, Unity. After honing my skills for three years, I decided to expand my expertise by transitioning to
          web development. I am now a full-stack developer for a Netherlands-based company, working remotely. I hold a
          computer science degree from Ain Shams University, and constantly strive to improve my skills. My experience
          includes creating websites using a variety of technologies, such as ASP.NET, Nest.Js, and front-end frameworks
          like Angular, React, and Next.js.
        </p>
      </FadeIn>
    </section>
  );
}
