export default function AboutMe() {
  return (
    <div id="about-me" className="min-h-[40vh] pt-10 text-white flex flex-col">
      <div>
        <div className="flex flex-row items-end w-full">
          <div className="text-lg md:text-2xl text-neutral-200 pb-1 md:pb-2">01.</div>
          <h1 className="text-6xl md:text-8xl text-slate-300">ABOUT ME</h1>
        </div>
      </div>
      <p className="text-xl md:text-4xl line-he mt-4 tracking-wide leading-[140%]">
        I discovered my passion for programming as a self-taught game developer in secondary school, using my favorite
        game engine, Unity. After honing my skills for three years, I decided to expand my expertise by transitioning to
        web development. I am now a full-stack developer for a Netherlands-based company, working remotely. I hold a
        computer science degree from Ain Shams University, and constantly strive to improve my skills. My experience
        includes creating websites using a variety of technologies, such as ASP.NET, Nest.Js, and front-end frameworks
        like Angular, React, and Next.js.
      </p>
    </div>
  );
}
