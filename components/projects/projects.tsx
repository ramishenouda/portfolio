import Image, { StaticImageData } from 'next/image';

import { SiGithub } from 'react-icons/si';
import Link from 'next/link';
import { useEffect } from 'react';

import pixelArtMaker from '/public/images/pixelArtMaker.png';
import cardsbench from '/public/images/cardsbench.png';
import Ecommerce from '/public/images/e-commerce.png';
import mysoul from '/public/images/mysoul.gif';
import netmenu from '/public/images/netmenu.png';
import attackonwords from '/public/images/attackonwords.gif';

import eyeIcon from '/public/eye.png';

import { projectAnimations } from './projects-animation';
import { ProjectItem } from './project-item';

export default function Projects() {
  useEffect(() => {
    projectAnimations();
  }, []);

  return (
    <section id="projects" className="min-h-[70vh] pt-10 text-white flex flex-col">
      <div>
        <h1
          id="projects-section-title"
          className="section-title basic-animation-values !duration-1000 translate-x-[-200px]"
        >
          PROJECTS
        </h1>
      </div>
      <div
        id="projects-section"
        className="mt-4 text-center projects basic-animation-values translate-x-[-210px] !duration-[1.5s]"
      >
        <ProjectItem />
      </div>
    </section>
  );
}
