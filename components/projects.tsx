import Image, { StaticImageData } from 'next/image';

import pixelArtMaker from '../public/images/pixelArtMaker.png';
import cardsbench from '../public/images/cardsbench.png';
import Ecommerce from '../public/images/e-commerce.png';
import mysoul from '../public/images/mysoul.gif';
import netmenu from '../public/images/netmenu.png';
import attackonwords from '../public/images/attackonwords.gif';

import eyeIcon from '../public/eye.png';
import githubIcon from '../public/github.png';
import Link from 'next/link';

export default function Projects() {
  return (
    <div id="projects" className="min-h-[100vh] text-white pt-20  flex flex-col items-center">
      <div className="text-center rounded-3xl">
        <h1 className="text-[5vw] !uppercase tracking-widest my-5">
          <span className="text-2xl">03.</span>Projects
        </h1>
        <hr className="mt-2 hr-text" data-content={'<My babies 👶 /> '} />
      </div>

      <div className="grid w-full grid-cols-1 mt-12 text-center projects md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
        {project(
          'Pixel Art Maker',
          'An application for creative minds who want to draw pixel arts.',
          pixelArtMaker,
          'https://github.com/ramishenouda/pixelartmaker',
          'https://ramishenouda.github.io/pixelartmaker/',
        )}
        {project(
          'My Soul',
          'A dating platform where you can chat with like-minded people.',
          mysoul,
          'https://github.com/ramishenouda/MySoul',
        )}
        {project(
          'Cards Bench',
          'A web application to share notes and track issues based on Trello..',
          cardsbench,
          'https://github.com/ramishenouda/cardsbench',
        )}
        {project(
          'Attack On Words',
          'A browser game where you shoot invading words by typing specific phrases..',
          attackonwords,
          'https://github.com/ramishenouda/AttackOnWords',
          '#',
        )}
        {project(
          'Ezona',
          'An e-commerce website with authorization, authentication, and notifications system..',
          Ecommerce,
          'https://github.com/ramishenouda/Online-Shopping-Store',
        )}
        {project(
          'NETMenu',
          'A DOTNet tool to create a menu for console projects with various options..',
          netmenu,
          'https://github.com/ramishenouda/NETMenu',
        )}
      </div>
    </div>
  );
}

const project = (
  title: string,
  description: string,
  image: StaticImageData,
  githubLink: string,
  projectLink?: string,
) => {
  return (
    <div className="p-6 flex w-full flex-col justify-center items-center bg-white rounded shadow-lg shadow-black h-[380px]">
      <div className="relative project-image">
        <div className="absolute flex flex-row items-center justify-center p-2 rounded-full project-options bg-neutral-800/70 h-fit">
          <Link href={githubLink} target="_blank">
            <Image
              className="rounded-full shadow-lg icon hover:bg-black bg-black/50 shadow-black"
              src={githubIcon}
              alt="github icon"
            />
          </Link>
          {projectLink && (
            <Link href={projectLink} target="_blank">
              <Image
                width={60}
                className="p-3 rounded-full shadow-lg icon hover:bg-black bg-black/50 shadow-black"
                src={eyeIcon}
                alt="view project"
              />
            </Link>
          )}
        </div>
        <Image className="w-[480px] h-[240px]" src={image} alt="pixel art maker" />
      </div>
      <div className="my-4">
        <p className="text-3xl font-bold text-left text-black">{title}</p>
        <p className="text-xl text-left text-black">{description}</p>
      </div>
    </div>
  );
};
