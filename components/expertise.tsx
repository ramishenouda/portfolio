import Image, { StaticImageData } from 'next/image';
import frontendDevelopmentLogo from '../public/images/frontend-development.png';
import softwareDevLogo from '../public/backgrounds/software-development.svg';
import backendDevLogo from '../public/backgrounds/backend-development.svg';

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

  return (
    <section id="expertise" className="min-h-[100vh] text-white gap-3 pt-10 flex flex-col justify-center">
      <h1 className="section-title">EXPERTISE</h1>
      <div className="flex items-center justify-center">
        <p className="mt-4  tracking-widest  text-xl md:text-2xl font-medium">
          I am constantly seeking to improve my skills and stay up-to-date with the latest technologies. I am eager to
          take on new challenges and use my expertise to contribute to successful projects.
        </p>
      </div>
      <div className="flex flex-col md:flex-row align-middle justify-center gap-4 flex-1 w-full mt-8">
        {expert(softwareDevLogo, softwareDev.title, softwareDev.description)}
        {expert(frontendDevelopmentLogo, frontendDev.title, frontendDev.description)}
        {expert(backendDevLogo, backendDev.title, backendDev.description)}
      </div>
      <div className="border-2 p-2 border-neutral w-full flex align-middle justify-center relative mt-20">
        <h1 className="md:text-5xl mt-12 experiences-title px-4 uppercase tracking-widest text-2xl top-[-58px] left-[20px] md:top-[-65px] md:left-[40px] absolute">
          Experienced in
        </h1>
        <div className="text-center w-full md:py-4 md:px-4">
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

const expert = (icon: StaticImageData, title: string, description: string) => {
  return (
    <div className="border-b-pop-details-icon-background hover:bg-zinc-300 select-none text-black border-l-pop-details-icon-background  transition duration-500 hover:scale-105 bg-zinc-400 py-2 border-2 border-gray-700 flex-1 shadow-lg shadow-slate-500">
      <div className="flex h-[240px] flex-grow justify-center w-full flex-col items-center">
        <Image height="240" src={icon} alt="frontend development" />
      </div>
      <div className="transition duration-500 hover:scale-105">
        <h3 className="w-full text-4xl md:text-2xl mb-2 lg:text-4xl mt-4 text-center"> {title} </h3>
        <div className="flex flex-row items-center mt-1 px-8 pb-6">
          <div>
            <p className="text-2xl md:text-xl lg:text-2xl h-full text-center">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

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
