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

export default function Expertise() {
  const softwareDev = {
    title: 'Software Development',
    description:
      "I'm interested in software engineering in general, I love learning about algorthims, data structures, and design patterns.",
    experienced:
      "It's my way to express my creativity. Some people create music, movies, paintings or pottery. I create software.",
  };

  const frontendDev = {
    title: 'Frontend Development',
    description:
      'Frontend development satisfies my need for creativity. I still remember my first "Hello, World!" HTML page. A whole new world of possibilities appeared before my eyes. ',
    experienced: 'Experienced in Angular, React, & NextJS',
  };

  const backendDev = {
    title: 'Backend Development',
    description:
      'Backend development satisfies my need for creativity. I still remember my first "Hello, World!" HTML page. A whole new world of possibilities appeared before my eyes.',
    experienced: 'Experienced in Database management and API design and development.',
  };

  return (
    <section id="expertise" className="min-h-[100vh] text-white gap-3 pt-20 flex flex-col items-center justify-center">
      <div className="expertise-intro lg:flex flex-row justify-center items-center">
        <div className="mx-auto">
          <Image src={stars} alt="stars" />
        </div>
        <div className="mt-20">
          <h1 className="text-9xl">
            <span className="text-2xl">01.</span> EXPERTISE
            <hr className="hr-text my-4" data-content={'<CoffeScript ☕  /> '} />
          </h1>
          <div className="flex flex-row items-center justify-center mt-4">
            <div className="flex flex-col pointer-events-none items-center justify-center ">
              <div className="text-sm mb-1 text-neutral-200">{'<h3>'}</div>
              <hr className="vertical-bar border-r-neutral-400 h-80 border-r-2" />
              <div className="text-sm mt-1 text-neutral-200">{'</h3>'}</div>
              <div className="absolute vertical-bar-data"> {'<🍮>'} </div>
            </div>
            <div>
              <p className="text-4xl ml-4 p-4 md:w-[480px] tracking-widest font-medium">
                I'm always seeking new opportunities to learn, especially the opportunities that can push your projects
                towards the outer galaxy..
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col align-middle justify-center gap-2 flex-1 w-full mt-8">
        {expert(softwareIcon, softwareDev.title, softwareDev.description, softwareDev.experienced)}
        {expert(reactIcon, frontendDev.title, frontendDev.description, frontendDev.experienced)}
        {expert(backendIcon, backendDev.title, backendDev.description, backendDev.experienced)}
      </div>
      <div className="text-center">
        <h1 className="md:text-5xl uppercase tracking-widest text-2xl">Things I enjoy working</h1>
        <hr className="hr-text mt-2" data-content={'<CoffeScript ☕  /> '} />
        <div className="grid grid-cols-3 w-[90vw] lg:w-[75vw] gap-4 mt-5">
          <div>{tech(javascriptIcon, 'JavaScript')}</div>
          <div>{tech(typescriptIcon, 'TypeScript')}</div>
          <div>{tech(null, 'Nest.js')}</div>
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
        <div className="grid grid-cols-1 w-[90vw] lg:w-[75vw] gap-4 mt-5">
          <div>{tech(designIcon, 'Transform PSD / Wireframes into web applications')}</div>
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
      <div className="flex flex-row items-center justify-center mt-4">
        <div className="flex flex-col pointer-events-none items-center justify-center ">
          <div className="text-sm mb-1 text-neutral-200">{'<h3>'}</div>
          <hr className="vertical-bar border-r-neutral-400 h-44 border-r-2" />
          <div className="text-sm mt-1 text-neutral-200">{'</h3>'}</div>
          <div className="absolute vertical-bar-data"> {'<🖥>'} </div>
        </div>
        <div>
          <p className="text-xl">{description}</p>
          <p className="text-xl mt-2">{experienced && experienced}</p>
        </div>
      </div>
    </div>
  );
};

const tech = (icon: StaticImageData | null, title: string) => {
  return (
    <div className="flex min-h-full flex-row border-2 w-full p-2 justify-center items-center">
      <p className="text-2xl font-bold uppercase">{title}</p>
      {icon && <Image className="ml-4" src={icon} alt="tech icon" />}
    </div>
  );
};
