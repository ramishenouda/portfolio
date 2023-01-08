import Image, { StaticImageData } from 'next/image';
import softwareIcon from '../public/computer.png';
import reactIcon from '../public/react.png';
import backendIcon from '../public/backend.png';
import javascriptIcon from '../public/javascript.png';
import typescriptIcon from '../public/typescript.png';
import htmlIcon from '../public/html.png';
import cssIcon from '../public/css.png';
import bootstrapIcon from '../public/bootstrap.png';
import tailwindIcon from '../public/tailwind.png';
import angularIcon from '../public/angular.png';
import nextjsIcon from '../public/nextjs.png';
import csharpIcon from '../public/csharp.png';
import gitIcon from '../public/git.png';
import dockerIcon from '../public/docker.png';
import problemsolverIcon from '../public/problemsolver.png';
import designIcon from '../public/design.png';
import stars from '../public/stars.png';

import { IconType } from 'react-icons';
import { SiCypress, SiNestjs } from 'react-icons/si';

export default function Expertise() {
  const softwareDev = {
    title: 'Software Development',
    description:
      "I'm interested in software engineering in general, I love learning about algorthims, data structures, and design patterns. It's my way to express my creativity. Some people create music, movies, paintings or pottery. I create software.",
  };

  const frontendDev = {
    title: 'Frontend Development',
    description: `Proficient in developing modern frontend applications using Angular, React, and Next.js. Skilled in HTML, CSS, and Typescript for building responsive user interfaces. Experienced in using Bootstrap and Tailwind for creating stylish layouts and components. Committed to delivering high-quality and user-friendly web experiences.`,
  };

  const backendDev = {
    title: 'Backend Development',
    description:
      '"Experienced in building and maintaining efficient backend systems using a variety of technologies such as NestJS, MySQL, Docker, TypeORM, ASP.NET, Entity Framework, TypeScript, and C#. Proficient in designing and implementing RESTful APIs, microservices, and integrating with frontend applications. Skilled in using ORM tools for effective database interaction.',
  };

  return (
    <section id="expertise" className="min-h-[100vh] text-white gap-3 pt-20 flex flex-col items-center justify-center">
      <div className="expertise-intro lg:flex flex-row justify-center items-center">
        <div className="mx-auto">
          <Image src={stars} alt="stars" />
        </div>
        <div className="mt-20">
          <div className="flex flex-row gap-2 items-end">
            <p className="text-2xl mb-4">01.</p>
            <h1 className="text-9xl">EXPERTISE</h1>
          </div>
          <hr className="hr-text my-4" data-content={'<CoffeScript ☕  /> '} />
          <div className="flex flex-row items-center justify-center mt-4">
            <div className="flex flex-col pointer-events-none items-center justify-center ">
              <div className="text-sm mb-1 text-neutral-200">{'<h1>'}</div>
              <hr className="vertical-bar border-r-neutral-400 h-80 border-r-2" />
              <div className="text-sm mt-1 text-neutral-200">{'</h1>'}</div>
              <div className="absolute vertical-bar-data"> {'<🍮>'} </div>
            </div>
            <div>
              <h3 className=" ml-4 p-4 md:w-[480px] tracking-widest font-medium">
                I am constantly seeking to improve my skills and stay up-to-date with the latest technologies. I am
                eager to take on new challenges and use my expertise to contribute to successful projects.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col align-middle justify-center gap-4 flex-1 w-full mt-8">
        {expert(softwareIcon, softwareDev.title, softwareDev.description)}
        {expert(reactIcon, frontendDev.title, frontendDev.description)}
        {expert(backendIcon, backendDev.title, backendDev.description)}
      </div>
      <div className="border-2 p-2 border-neutral w-full flex align-middle justify-center relative mt-20">
        <h1 className="md:text-5xl mt-12 experiences-title px-4 uppercase tracking-widest text-2xl top-[-65px] left-[40px] absolute">
          Experienced in
        </h1>
        <div className="text-center py-16 px-16">
          <div className="grid grid-cols-4 w-[90vw] lg:w-[75vw] gap-4 mt-5">
            <div>{tech(javascriptIcon, 'JavaScript')}</div>
            <div>{tech(typescriptIcon, 'TypeScript')}</div>
            <div>{tech(SiNestjs, 'Nest.js')}</div>
            <div>{tech(SiCypress, 'Cypress')}</div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 w-[90vw] lg:w-[75vw] gap-4 mt-5">
            <div>{tech(htmlIcon, 'HTML')}</div>
            <div>{tech(cssIcon, 'CSS')}</div>
            <div>{tech(bootstrapIcon, 'Bootstrap')}</div>
            <div>{tech(tailwindIcon, 'Tailwind CSS')}</div>
          </div>
          <div className="grid grid-cols-3 w-[90vw] lg:w-[75vw] gap-4 mt-5">
            <div>{tech(angularIcon, 'Angular')}</div>
            <div>{tech(reactIcon, 'React')}</div>
            <div>{tech(nextjsIcon, '')}</div>
          </div>
          <div className="grid grid-cols-3 w-[90vw] lg:w-[75vw] gap-4 mt-5">
            <div>{tech(csharpIcon, '')}</div>
            <div>{tech(null, 'ASP.NET Core')}</div>
            <div>{tech(null, 'Entity Framework')}</div>
          </div>
          <div className="grid grid-cols-3 w-[90vw] lg:w-[75vw] gap-4 mt-5">
            <div>{tech(gitIcon, 'Git')}</div>
            <div>{tech(dockerIcon, 'Docker')}</div>
            <div>{tech(problemsolverIcon, 'Problem Solver')}</div>
          </div>
          <div className="grid grid-cols-2 h-20 w-[90vw] lg:w-[75vw] gap-4 mt-5">
            <div>{tech(null, 'GitHub Actions')}</div>
            <div>{tech(null, 'GitLab CI/CD')}</div>
          </div>
          <div className="grid grid-cols-1 w-[90vw] lg:w-[75vw] gap-4 mt-5">
            <div>{tech(designIcon, 'Transform PSD / Wireframes into web applications')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

const expert = (icon: StaticImageData, title: string, description: string, experienced?: string) => {
  return (
    <div className="border-white border-2 flex-1 px-8 py-4">
      <div className="flex flex-grow flex-row items-center">
        <Image src={icon} alt="expert icon" />
        <h1 className="ml-2 text-3xl w-full"> {title} </h1>
      </div>
      <div className="flex flex-row items-center mt-4">
        <div className="md:flex flex-col hidden pointer-events-none relative items-center justify-center">
          <div className="text-sm mb-1 text-neutral-200">{'<h3>'}</div>
          <hr className="vertical-bar border-r-neutral-400 md:h-40 lg:h-32   border-r-2" />
          <div className="text-sm mt-1 text-neutral-200">{'</h3>'}</div>
          <div className="absolute vertical-bar-data"> {'</>'} </div>
        </div>
        <div>
          <p className="text-2xl">{description}</p>
          <p className="text-xl mt-2">{experienced && experienced}</p>
        </div>
      </div>
    </div>
  );
};

const tech = (Icon: StaticImageData | IconType | null, title: string) => {
  return (
    <div className="flex min-h-full flex-row border-2 w-full p-2 justify-center items-center">
      <p className="text-2xl font-bold uppercase">{title}</p>
      {Icon && isStaticImageData(Icon) && <Image className="ml-4" src={Icon} alt="tech icon" />}
      {Icon && !isStaticImageData(Icon) && <Icon className="ml-4" size="35px" />}
    </div>
  );
};

function isStaticImageData(object: any): object is StaticImageData {
  return 'src' in object;
}
