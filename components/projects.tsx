import Image, { StaticImageData } from 'next/image';

import pixelArtMaker from '../public/images/pixelArtMaker.png';
import cardsbench from '../public/images/cardsbench.png';
import Ecommerce from '../public/images/e-commerce.png';
import mysoul from '../public/images/mysoul.gif';
import netmenu from '../public/images/netmenu.png';
import attackonwords from '../public/images/attackonwords.gif';

import eyeIcon from '../public/eye.png';
import githubIcon from '../public/github.png';

export default function Projects() {
  return (
    <div id="projects" className="min-h-[100vh] text-white pt-20  flex flex-col items-center">
      <div className="text-center rounded-3xl">
        <h1 className="text-[5vw] !uppercase tracking-widest my-5">
          <span className="text-2xl">03.</span>Projects
        </h1>
        <hr className="hr-text mt-2" data-content={'<My babies 👶 /> '} />
      </div>

      <div className="projects grid w-full text-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 mt-12">
        {project('Pixel Art Maker', 'An application for creative minds who want to draw pixel arts.', pixelArtMaker)}
        {project('My Soul', 'A dating platform where you can chat with like-minded people.', mysoul)}
        {project('Cards Bench', 'A web application to share notes and track issues based on Trello..', cardsbench)}
        {project(
          'Attack On Words',
          'A browser game where you shoot invading words by typing specific phrases..',
          attackonwords,
        )}
        {project(
          'Ezona',
          'An e-commerce website with authorization, authentication, and notifications system..',
          Ecommerce,
        )}
        {project('NETMenu', 'A DOTNet tool to create a menu for console projects with various options..', netmenu)}
      </div>
    </div>
  );
}

const project = (title: string, description: string, image: StaticImageData) => {
  return (
    <div className="p-6 flex w-full flex-col justify-center items-center bg-white rounded shadow-lg shadow-black h-[380px]">
      <div className="relative project-image">
        <div className="project-options bg-neutral-800/70 h-fit p-2 rounded-full">
          <Image className="bg-black rounded-full shadow-black shadow-lg" src={githubIcon} alt="github icon" />
          <Image
            width={60}
            className="bg-black p-3 rounded-full shadow-black shadow-lg"
            src={eyeIcon}
            alt="view project"
          />
        </div>
        <Image className="w-[480px] h-[240px]" src={image} alt="pixel art maker" />
      </div>
      <div className="my-4">
        <p className="text-black text-3xl font-bold text-left">{title}</p>
        <p className="text-black text-xl text-left">{description}</p>
      </div>
    </div>
  );
};
