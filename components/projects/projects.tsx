import { useEffect } from 'react';

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
        className="mt-4 min-h-screen projects basic-animation-values translate-x-[-210px] !duration-[1.5s]"
      >
        <ProjectItem
          title="Foodeli"
          descriptionHeader="Build your own restaurant order website and receive new orders online."
          descriptionInfo="Manage your orders in a few simple steps. With a single press on the button you can accept or cancel an
                order. Get an overview of all orders and related information."
          projectLink="https://foodeli.nl/home"
          imagePath="/backgrounds/foodeli.svg"
          key={'https://foodeli.nl/home'}
        />
        <ProjectItem
          title="POPs"
          descriptionHeader="PeopleOverPapers is a website that helps job seekers find job opportunities, by displaying a wide range of job listings,"
          descriptionInfo="including company reviews and salaries. Employers can also post new job listings, for free or as sponsored posts, making it a one-stop solution for both job seekers and employers."
          projectLink="https://demo.overpaper.com/"
          key={'https://demo.overpaper.com/'}
          reverseOrder={true}
          imagePath="/backgrounds/pops.svg"
        />
      </div>
    </section>
  );
}
