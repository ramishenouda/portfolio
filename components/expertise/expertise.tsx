import Image, { StaticImageData } from 'next/image';
import frontendDevelopmentLogo from '/public/images/frontend-development.png';
import softwareDevLogo from '/public/backgrounds/software-development.svg';
import backendDevLogo from '/public/backgrounds/backend-development.svg';

import { IconType } from 'react-icons';
import {
  SiCypress,
  SiNestjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiAngular,
  SiReact,
  SiNextdotjs,
  SiCsharp,
  SiGit,
  SiDocker,
  SiGithub,
  SiGitlab,
} from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';
import { DiDotnet } from 'react-icons/di';
import { MdDesignServices } from 'react-icons/md';
import { useEffect } from 'react';
import { expertiseAnimations } from './expertise-animation';
import { ExpertCard } from './expert-card';

export default function Expertise() {
  const softwareDev = {
    title: 'Software Development',
    description:
      "I'm interested in software engineering in general, I love learning about algorthims, data structures, and design patterns. It's my way to express my creativity. Some people create music, movies, paintings or pottery. I create software.",
  };

  const frontendDev = {
    title: 'Frontend Development',
    description: `Proficient in developing modern frontend applications using Angular, React, and Next.js. Skilled in HTML, CSS, and Tailwind for building responsive user interfaces. Committed to delivering high-quality and user-friendly web experiences.`,
  };

  const backendDev = {
    title: 'Backend Development',
    description:
      'Experienced in building and maintaining efficient backend systems using a variety of technologies such as NestJS, MySQL, Docker, TypeORM, ASP.NET, Entity Framework, TypeScript, and C#. Proficient in designing and implementing RESTful APIs and integrating with frontend applications.',
  };

  useEffect(() => {
    expertiseAnimations();
  }, []);

  return (
    <section id="expertise" className="min-h-[100vh]  text-white gap-3 pt-10 flex flex-col justify-center">
      <h1 id="expertise-title" className="section-title !duration-1000 basic-animation-values translate-x-[200px]">
        <span className="section-number">02.</span>EXPERTISE
      </h1>
      <p
        id="expertise-paragraph"
        className="mt-4 tracking-widest basic-animation-values translate-x-[210px] !duration-[1.3s] text-xl md:text-2xl font-medium"
      >
        I am constantly seeking to improve my skills and stay up-to-date with the latest technologies. I am eager to
        take on new challenges and use my expertise to contribute to successful projects.
      </p>
      <div
        id="expert-cards"
        className="flex flex-col basic-animation-values translate-x-[-250px] !duration-[1.5s] md:flex-row align-middle justify-center gap-4 flex-1 w-full mt-8"
      >
        <ExpertCard icon={softwareDevLogo} title={softwareDev.title} description={softwareDev.description} />
        <ExpertCard icon={frontendDevelopmentLogo} title={frontendDev.title} description={frontendDev.description} />
        <ExpertCard icon={backendDevLogo} title={backendDev.title} description={backendDev.description} />
      </div>
      <div
        id="experienced-in-section"
        className="border-2 p-2 border-neutral w-full flex align-middle justify-center relative mt-20 !duration-1000 basic-animation-values translate-x-[-200px]"
      >
        <h1 className="md:text-5xl mt-12 experiences-title px-4 uppercase tracking-widest text-2xl top-[-58px] left-[20px] md:top-[-65px] md:left-[40px] absolute">
          Experienced in
        </h1>
        <div
          id="experienced-in-techs"
          className="text-center w-full md:py-4 md:px-4 basic-animation-values translate-x-[210px] !duration-[1.1s]"
        >
          <div className="w-full mt-2 md:border-0 border-2 p-1">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="h-20">{tech(SiJavascript, 'JavaScript')}</div>
              <div className="h-20">{tech(SiTypescript, 'TypeScript')}</div>
              <div className="h-20">{tech(SiNestjs, 'Nest.js')}</div>
              <div className="h-20">{tech(FaDatabase, 'TypeORM')}</div>
            </div>
          </div>
          <div className="w-full mt-5 md:border-0 border-2 p-1">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="h-20">{tech(SiHtml5, 'HTML')}</div>
              <div className="h-20">{tech(SiCss3, 'CSS')}</div>
              <div className="h-20">{tech(SiBootstrap, 'Bootstrap')}</div>
              <div className="h-20">{tech(SiTailwindcss, 'Tailwind CSS')}</div>
            </div>
          </div>
          <div className="w-full mt-5 md:border-0 border-2 p-1">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="h-20">{tech(SiAngular, 'Angular')}</div>
              <div className="h-20">{tech(SiReact, 'React')}</div>
              <div className="h-20">{tech(SiNextdotjs, 'Next.js')}</div>
              <div className="h-20">{tech(SiCypress, 'Cypress')}</div>
            </div>
          </div>
          <div className="w-full mt-5 md:border-0 border-2 p-1">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="h-20">{tech(SiCsharp, '')}</div>
              <div className="h-20">{tech(null, 'ASP.NET Core')}</div>
              <div className="col-span-2 h-20 md:col-span-1">{tech(DiDotnet, 'Entity Framework')}</div>
            </div>
          </div>
          <div className="w-full mt-5 md:border-0 border-2 p-1">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="h-20">{tech(SiGit, 'Git')}</div>
              <div className="h-20">{tech(SiDocker, 'Docker')}</div>
              <div className="col-span-2 h-20 md:col-span-1">{tech(null, 'Docker Compose')}</div>
            </div>
          </div>
          <div className="grid grid-cols-2 h-20 w-full gap-4 mt-5">
            <div className="h-20">{tech(SiGithub, 'GitHub Actions')}</div>
            <div className="h-20">{tech(SiGitlab, 'GitLab CI/CD')}</div>
          </div>
          <div className="grid grid-cols-1 w-full gap-4 mt-5">
            <div className="h-20">{tech(MdDesignServices, 'Transform PSD / Wireframes into web applications')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

const tech = (Icon: StaticImageData | IconType | null, title: string) => {
  return (
    <div className="hover:!text-black hover:bg-zinc-200 select-none transition-all duration-500 flex min-h-full flex-row border-2 w-full p-2 justify-center items-center">
      <p className="text-lg md:text-2xl font-medium">{title}</p>
      {Icon && isStaticImageData(Icon) && <Image className="ml-4" src={Icon} alt="tech icon" />}
      {Icon && !isStaticImageData(Icon) && <Icon className="ml-4" size="35px" />}
    </div>
  );
};

function isStaticImageData(object: any): object is StaticImageData {
  return 'src' in object;
}
