import Image from 'next/image';
import softwareDevIcon from '../public/computer.png';
import react from '../public/react.png';

export default function Expertise() {
  return (
    <section id="expertise" className="min-h-[100vh] text-white gap-3 flex flex-col items-center justify-center">
      <div className="text-center rounded-3xl">
        <h1 className="md:text-[5vw] uppercase tracking-widest mb-3">My Expertise</h1>
        <hr className="hr-text" data-content={'<CoffeScript ☕  /> '} />
        <p className="text-xl tracking-widest font-medium mt-8">
          I'm always seeking new opportunities to learn, especially the opportunities that can push your projects
          towards the outer galaxy..
        </p>
        <div className="flex md:flex-row flex-col align-middle justify-center gap-4 mt-8">
          {softwareDev()}
          {frontendDev()}
          {gameDev()}
        </div>
      </div>
    </section>
  );
}

const softwareDev = () => {
  return (
    <div className="border-white border-2 max-w-[400px] px-8 py-4">
      <div className="flex flex-grow flex-row items-center">
        <Image src={softwareDevIcon} alt="software dev icon" />
        <h1 className="ml-2 text-3xl w-full">
          {' '}
          Software <br /> Development{' '}
        </h1>
      </div>
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col pointer-events-none items-center justify-center ">
          <div className="text-sm mb-1 text-neutral-200">{'<h3>'}</div>
          <hr className="vertical-bar border-r-neutral-400 h-60 border-r-2" />
          <div className="text-sm mt-1 text-neutral-200">{'</h3>'}</div>
          <div className="absolute vertical-bar-data">{'<🧠>'}</div>
        </div>
        <div>
          <p className="text-xl">
            It's my way to express my creativity. Some people create music, movies, paintings or pottery. I create
            software.
          </p>
          <p className="text-xl mt-2">
            Experienced in functional & OOP: <br /> C#, JavaScript, TypeScript.
          </p>
        </div>
      </div>
    </div>
  );
};

const frontendDev = () => {
  return (
    <div className="border-white border-2 max-w-[400px] px-8 py-4">
      <div className="flex flex-grow flex-row items-center">
        <Image src={react} alt="software dev icon" />
        <h1 className="ml-2 text-3xl w-full">
          {' '}
          Frontend <br /> Development{' '}
        </h1>
      </div>
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col pointer-events-none items-center justify-center ">
          <div className="text-sm mb-1 text-neutral-200">{'<h3>'}</div>
          <hr className="vertical-bar border-r-neutral-400 h-60 border-r-2" />
          <div className="text-sm mt-1 text-neutral-200">{'</h3>'}</div>
          <div className="absolute vertical-bar-data"> {'<🎨>'} </div>
        </div>
        <div>
          <p className="text-xl">
            Frontend development satisfies my need for creativity. I still remember my first "Hello, World!" HTML page.
            A whole new world of possibilities appeared before my eyes. <br />
          </p>
          <p className="text-xl">Experienced in Angular, React, & NextJS</p>
        </div>
      </div>
    </div>
  );
};

const gameDev = () => {
  return (
    <div className="border-white border-2 max-w-[400px] px-8 py-4">
      <div className="flex flex-grow flex-row items-center">
        <Image src={softwareDevIcon} alt="software dev icon" />
        <h1 className="ml-2 text-3xl  w-full">
          Game <br /> Development
        </h1>
      </div>
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col items-center justify-center ">
          <div className="text-sm mb-1 text-neutral-200">{'<h3>'}</div>
          <hr className="vertical-bar border-r-neutral-400 h-60 border-r-2" />
          <div className="text-sm mt-1 text-neutral-200">{'</h3>'}</div>
        </div>
        <div>
          <p>Experienced in both functional and OOP: C#, JavaScript, TypeScript.</p>
        </div>
      </div>
    </div>
  );
};