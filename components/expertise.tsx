import Image, { StaticImageData } from 'next/image';
import softwareIcon from '../public/computer.png';
import reactIcon from '../public/react.png';
import backendIcon from '../public/backend.png';

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
    <section id="expertise" className="min-h-[100vh] text-white gap-3 flex flex-col items-center justify-center">
      <div className="text-center rounded-3xl">
        <h1 className="md:text-[5vw] uppercase tracking-widest mb-4">My Expertise</h1>
        <hr className="hr-text mt-1" data-content={'<CoffeScript ☕  /> '} />
        <p className="text-xl tracking-widest font-medium mt-8">
          {"I'm"} always seeking new opportunities to learn, especially the opportunities that can push your projects
          towards the outer galaxy..
        </p>
        <div className="flex md:flex-row flex-col align-middle justify-center gap-4 mt-8">
          {expert(softwareIcon, softwareDev.title, softwareDev.description, softwareDev.experienced)}
          {expert(reactIcon, frontendDev.title, frontendDev.description, frontendDev.experienced)}
          {expert(backendIcon, backendDev.title, backendDev.description, backendDev.experienced)}
        </div>
      </div>
      <div className="text-center">
        <h1 className="md:text-[2vw] uppercase tracking-widest ">My favourite tech</h1>
        <hr className="hr-text mt-1" data-content={'<CoffeScript ☕  /> '} />
      </div>
    </section>
  );
}

const expert = (icon: StaticImageData, title: string, description: string, experienced?: string) => {
  return (
    <div className="border-white border-2 max-w-[500px] px-8 py-4">
      <div className="flex flex-grow flex-row items-center">
        <Image src={icon} alt="software dev icon" />
        <h1 className="ml-2 text-3xl w-full"> {title} </h1>
      </div>
      <div className="flex flex-row items-center justify-center mt-4">
        <div className="flex flex-col pointer-events-none items-center justify-center ">
          <div className="text-sm mb-1 text-neutral-200">{'<h3>'}</div>
          <hr className="vertical-bar border-r-neutral-400 h-40 border-r-2" />
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
