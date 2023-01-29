import Image, { StaticImageData } from 'next/image';

import pixelArtMaker from '../public/images/pixelArtMaker.png';
import cardsbench from '../public/images/cardsbench.png';
import Ecommerce from '../public/images/e-commerce.png';
import mysoul from '../public/images/mysoul.gif';
import netmenu from '../public/images/netmenu.png';
import attackonwords from '../public/images/attackonwords.gif';

import eyeIcon from '../public/eye.png';
import { SiGithub } from 'react-icons/si';
import Link from 'next/link';

export default function Projects() {
  return (
    <section id="projects" className="min-h-[70vh] pt-10 text-white flex flex-col">
      <div>
        <h1 className="section-title">PROJECTS</h1>
      </div>
      <div className="grid w-full grid-cols-1 mt-4 text-center projects md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
        {project(
          'Pixel Art Maker',
          'An application for creative minds who want to draw pixel arts.',
          pixelArtMaker,
          'bg-blue-600',
          'hover:bg-blue-600',
          'https://github.com/ramishenouda/pixelartmaker',
          'https://ramishenouda.github.io/pixelartmaker/',
        )}
        {project(
          'My Soul',
          'A dating platform where you can chat with like-minded people.',
          mysoul,
          'bg-white',
          'hover:bg-white',
          'https://github.com/ramishenouda/MySoul',
        )}
        {project(
          'Cards Bench',
          'A web application to share notes and track issues based on Trello.',
          cardsbench,
          'bg-cyan-300',
          'hover:bg-cyan-300',
          'https://github.com/ramishenouda/cardsbench-old',
        )}
        {project(
          'Attack On Words',
          'A browser game where you shoot invading words by typing specific phrases.',
          attackonwords,
          'bg-purple-800',
          'hover:bg-purple-800',
          'https://github.com/ramishenouda/AttackOnWords',
        )}
        {project(
          'Ezona',
          'An e-commerce website with authorization, authentication, and notifications system.',
          Ecommerce,
          'bg-orange-300',
          'hover:bg-orange-300',
          'https://github.com/ramishenouda/Online-Shopping-Store',
        )}
        {project(
          'NETMenu',
          'A DOTNet tool to create a menu for console projects with various options.',
          netmenu,
          'bg-red-200',
          'hover:bg-red-200',
          'https://github.com/ramishenouda/NETMenu',
        )}
      </div>
    </section>
  );
}

const project = (
  title: string,
  description: string,
  image: StaticImageData,
  colorClass: string,
  hoverBgClass: string,
  githubLink: string,
  projectLink?: string,
) => {
  return (
    <div className="p-2 flex w-full flex-col justify-center items-center bg-white rounded shadow-lg relative shadow-black">
      <div className="relative project-image">
        <div className="absolute flex flex-row items-center justify-center p-2 rounded-full project-options bg-neutral-800/70 h-fit">
          <Link href={githubLink} target="_blank">
            <SiGithub className="rounded-full w-14 shadow-lg icon hover:bg-black bg-black/50 shadow-black" />
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
      <div className={`absolute ${hoverBgClass} project-mask w-full h-full flex justify-center items-center`}>
        <div className="child:text-4xl project-description text-left text-black">
          <p className="mt-4">{description}</p>
          <div className="mt-4">
            <Link
              className="text-lg mr-4 text-white bg-gray-800 hover:bg-black transition-all duration-500 rounded-lg p-2"
              target="_blank"
              href={githubLink}
            >
              Github
            </Link>
            {projectLink && (
              <Link
                className="text-lg text-white bg-gray-800 hover:bg-black transition-all duration-500 rounded-lg p-2"
                target="_blank"
                href={projectLink}
              >
                View Project
              </Link>
            )}
          </div>
        </div>
        <p
          className={`text-4xl opacity-60 ${colorClass} p-1 rounded-md project-title absolute text-center uppercase text-black`}
        >
          {title}
        </p>
      </div>
    </div>
  );
};
