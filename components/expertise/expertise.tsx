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
  SiStorybook,
  SiJest,
  SiVuedotjs,
  SiPython,
  SiMysql,
  SiSwagger,
  SiJira,
} from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';
import { DiDotnet } from 'react-icons/di';
import { MdDesignServices } from 'react-icons/md';
import { ExpertCard } from './expert-card';
import { FadeIn, StaggerContainer, staggerItem } from '../shared/motion';
import { motion } from 'framer-motion';

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
      <FadeIn direction="right">
        <h1 className="section-title">
          <span className="section-number">02.</span>EXPERTISE
        </h1>
      </FadeIn>
      <FadeIn direction="right" delay={0.1}>
        <p className="mt-4 tracking-wide text-xl md:text-2xl text-neutral-300">
          I am constantly seeking to improve my skills and stay up-to-date with the latest technologies. I am eager to
          take on new challenges and use my expertise to contribute to successful projects.
        </p>
      </FadeIn>
      <StaggerContainer stagger={0.15} delay={0.2} className="flex flex-col md:flex-row gap-5 w-full mt-8">
        <motion.div variants={staggerItem} className="flex-1">
          <ExpertCard icon={softwareDevLogo} title={softwareDev.title} description={softwareDev.description} />
        </motion.div>
        <motion.div variants={staggerItem} className="flex-1">
          <ExpertCard icon={frontendDevelopmentLogo} title={frontendDev.title} description={frontendDev.description} />
        </motion.div>
        <motion.div variants={staggerItem} className="flex-1">
          <ExpertCard icon={backendDevLogo} title={backendDev.title} description={backendDev.description} />
        </motion.div>
      </StaggerContainer>
      <FadeIn delay={0.2}>
        <div className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-xl p-4 w-full flex align-middle justify-center relative mt-20">
          <h1 className="md:text-4xl mt-10 experiences-title px-4 uppercase tracking-widest text-xl top-[-48px] left-[20px] md:top-[-55px] md:left-[40px] absolute font-semibold text-neutral-200">
            Experienced in
          </h1>
          <div className="text-center w-full md:py-4 md:px-4">
            <div className="w-full mt-2 p-1">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="h-16">{tech(SiTypescript, 'TypeScript')}</div>
                <div className="h-16">{tech(SiJavascript, 'JavaScript')}</div>
                <div className="h-16">{tech(SiCsharp, 'C#')}</div>
                <div className="h-16">{tech(SiPython, 'Python')}</div>
              </div>
            </div>
            <div className="w-full mt-4 p-1">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="h-16">{tech(SiNestjs, 'Nest.js')}</div>
                <div className="h-16">{tech(SiAngular, 'Angular')}</div>
                <div className="h-16">{tech(SiReact, 'React')}</div>
                <div className="h-16">{tech(SiNextdotjs, 'Next.js')}</div>
              </div>
            </div>
            <div className="w-full mt-4 p-1">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="h-16">{tech(SiVuedotjs, 'Vue.js')}</div>
                <div className="h-16">{tech(null, 'ASP.NET')}</div>
                <div className="h-16">{tech(SiHtml5, 'HTML')}</div>
                <div className="h-16">{tech(SiCss3, 'CSS')}</div>
              </div>
            </div>
            <div className="w-full mt-4 p-1">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="h-16">{tech(SiTailwindcss, 'Tailwind')}</div>
                <div className="h-16">{tech(SiBootstrap, 'Bootstrap')}</div>
                <div className="h-16">{tech(FaDatabase, 'TypeORM')}</div>
                <div className="h-16">{tech(DiDotnet, 'Entity Framework')}</div>
              </div>
            </div>
            <div className="w-full mt-4 p-1">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="h-16">{tech(SiCypress, 'Cypress')}</div>
                <div className="h-16">{tech(SiStorybook, 'Storybook')}</div>
                <div className="h-16">{tech(SiJest, 'Jest')}</div>
                <div className="h-16">{tech(SiSwagger, 'Swagger')}</div>
              </div>
            </div>
            <div className="w-full mt-4 p-1">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="h-16">{tech(SiGit, 'Git')}</div>
                <div className="h-16">{tech(SiDocker, 'Docker')}</div>
                <div className="h-16">{tech(SiMysql, 'MySQL')}</div>
                <div className="h-16">{tech(SiJira, 'Jira')}</div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 h-16 w-full gap-3 mt-4">
              <div className="h-16">{tech(SiGithub, 'GitHub Actions')}</div>
              <div className="h-16">{tech(SiGitlab, 'GitLab CI/CD')}</div>
              <div className="h-16">{tech(null, 'Docker Compose')}</div>
            </div>
            <div className="grid grid-cols-1 w-full gap-3 mt-4">
              <div className="h-16">{tech(MdDesignServices, 'Transform PSD / Wireframes into web applications')}</div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

const tech = (Icon: StaticImageData | IconType | null, title: string) => {
  return (
    <div className="group hover:bg-white/[0.06] hover:border-cyan-500/30 select-none transition-all duration-300 flex min-h-full flex-row border border-white/[0.08] rounded-lg w-full p-2 justify-center items-center bg-white/[0.02]">
      <p className="text-base md:text-lg font-medium text-neutral-300 group-hover:text-white transition-colors">{title}</p>
      {Icon && isStaticImageData(Icon) && <Image className="ml-3" src={Icon} alt="tech icon" />}
      {Icon && !isStaticImageData(Icon) && <Icon className="ml-3 text-neutral-400 group-hover:text-cyan-400 transition-colors duration-300" size="24px" />}
    </div>
  );
};

function isStaticImageData(object: any): object is StaticImageData {
  return 'src' in object;
}
