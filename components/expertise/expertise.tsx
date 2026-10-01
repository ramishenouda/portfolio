import Image, { StaticImageData } from 'next/image';
import frontendDevelopmentLogo from '/public/images/frontend-development.png';
import softwareDevLogo from '/public/backgrounds/software-development.svg';
import backendDevLogo from '/public/backgrounds/backend-development.svg';

import { IconType } from 'react-icons';
import {
  SiCypress,
  SiNestjs,
  SiTypescript,
  SiAngular,
  SiReact,
  SiNextdotjs,
  SiCsharp,
  SiDocker,
  SiGithub,
  SiGitlab,
  SiStorybook,
  SiJest,
  SiVuedotjs,
  SiMysql,
  SiPhp,
} from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';
import { DiDotnet } from 'react-icons/di';
import { ExpertCard } from './expert-card';
import { FadeIn, StaggerContainer, staggerItem } from '../shared/motion';
import { motion } from 'framer-motion';

export default function Expertise() {
  const softwareDev = {
    title: 'Software Development',
    description:
      'I design and ship production systems — architecture, quality gates, and the standards that keep a codebase maintainable as it grows.',
  };

  const frontendDev = {
    title: 'Frontend Development',
    description:
      'I have shipped production UIs in React, Angular, and Next.js, including a jQuery-to-React modernization and component work in Storybook.',
  };

  const backendDev = {
    title: 'Backend Development',
    description:
      'I have built and maintained APIs and data layers in NestJS, ASP.NET, and PHP — REST, authentication and authorization, MySQL, TypeORM, Entity Framework, and integrations such as Stripe.',
  };

  const groups: { title: string; items: { icon: IconType | null; title: string }[] }[] = [
    {
      title: 'Frontend',
      items: [
        { icon: SiTypescript, title: 'TypeScript' },
        { icon: SiReact, title: 'React' },
        { icon: SiNextdotjs, title: 'Next.js' },
        { icon: SiAngular, title: 'Angular' },
        { icon: SiVuedotjs, title: 'Vue.js' },
      ],
    },
    {
      title: 'Backend and data',
      items: [
        { icon: SiNestjs, title: 'Nest.js' },
        { icon: SiPhp, title: 'PHP' },
        { icon: null, title: 'ASP.NET' },
        { icon: SiCsharp, title: 'C#' },
        { icon: SiMysql, title: 'MySQL' },
        { icon: FaDatabase, title: 'TypeORM' },
        { icon: DiDotnet, title: 'Entity Framework' },
      ],
    },
    {
      title: 'Delivery',
      items: [
        { icon: SiDocker, title: 'Docker' },
        { icon: SiGithub, title: 'GitHub Actions' },
        { icon: SiGitlab, title: 'GitLab CI/CD' },
        { icon: SiJest, title: 'Jest' },
        { icon: SiCypress, title: 'Cypress' },
        { icon: SiStorybook, title: 'Storybook' },
      ],
    },
  ];

  return (
    <section id="expertise" className="min-h-[100vh] text-white gap-3 pt-10 flex flex-col justify-center">
      <FadeIn direction="right">
        <h1 className="section-title">
          <span className="section-number">02.</span>EXPERTISE
        </h1>
      </FadeIn>
      <FadeIn direction="right" delay={0.1}>
        <p className="mt-4 text-xl tracking-wide md:text-2xl text-neutral-300">
          I ship production systems across frontend, backend, and delivery — the stack below is what I use to do that.
        </p>
      </FadeIn>
      <StaggerContainer stagger={0.15} delay={0.2} className="flex flex-col w-full gap-5 mt-8 md:flex-row">
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
        <div className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-xl p-4 md:p-8 w-full relative mt-20">
          <h1 className="md:text-4xl experiences-title px-4 uppercase tracking-widest text-xl top-[-48px] left-[20px] md:top-[-55px] md:left-[40px] absolute font-semibold text-neutral-200">
            Experienced in
          </h1>
          <div className="flex flex-col gap-10 mt-6">
            {groups.map((group) => (
              <div key={group.title}>
                <h2 className="text-sm tracking-[0.25em] uppercase text-cyan-400 mb-4">{group.title}</h2>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                  {group.items.map((item) => (
                    <div key={item.title} className="h-16">
                      {tech(item.icon, item.title)}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

const tech = (Icon: StaticImageData | IconType | null, title: string) => {
  return (
    <div className="group hover:bg-white/[0.06] hover:border-cyan-500/30 select-none transition-all duration-300 flex min-h-full flex-row border border-white/[0.08] rounded-lg w-full p-2 justify-center items-center bg-white/[0.02]">
      <p className="text-base font-medium transition-colors md:text-lg text-neutral-300 group-hover:text-white">
        {title}
      </p>
      {Icon && isStaticImageData(Icon) && <Image className="ml-3" src={Icon} alt="tech icon" />}
      {Icon && !isStaticImageData(Icon) && (
        <Icon className="ml-3 transition-colors duration-300 text-neutral-400 group-hover:text-cyan-400" size="24px" />
      )}
    </div>
  );
};

function isStaticImageData(object: any): object is StaticImageData {
  return 'src' in object;
}
