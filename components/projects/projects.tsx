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
        <ProjectItem />
      </div>
    </section>
  );
}
