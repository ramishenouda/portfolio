import { ProjectItem } from './project-item';
import {
  SiAngularjs,
  SiCypress,
  SiNestjs,
  SiPhp,
  SiPhpmyadmin,
  SiTailwindcss,
  SiTypescript,
  SiUnity,
} from 'react-icons/si';
import { FaStripe } from 'react-icons/fa';
import { FadeIn } from '../shared/motion';

export default function Projects() {
  return (
    <section id="projects" className="min-h-[70vh] pt-10 text-white flex flex-col">
      <FadeIn>
        <h1 className="section-title">
          <span className="section-number">04.</span>PROJECTS
        </h1>
      </FadeIn>
      <div className="mt-4 min-h-screen">
        <FadeIn delay={0.1} direction="right">
          <div className="mt-4">
            <ProjectItem
              title="Foodeli"
              descriptionHeader="Build your own restaurant order website and receive new orders online."
              descriptionInfo="Manage your orders in a few simple steps. With a single press on the button you can accept or cancel an
                order. Get an overview of all orders and related information."
              projectLink="https://foodeli.nl/home"
              imagePath="/backgrounds/foodeli.svg"
              key={'https://foodeli.nl/home'}
              techIcons={[SiNestjs, SiAngularjs, SiTypescript, SiCypress, SiTailwindcss, FaStripe]}
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.1} direction="left">
          <div className="mt-4">
            <ProjectItem
              title="POPs"
              descriptionHeader="PeopleOverPapers is a website that helps job seekers find job opportunities, by displaying a wide range of job listings,"
              descriptionInfo="including company reviews and salaries. Employers can also post new job listings, for free or as sponsored posts, making it a one-stop solution for both job seekers and employers."
              projectLink="https://demo.overpaper.com/"
              key={'https://demo.overpaper.com/'}
              reverseOrder={true}
              imagePath="/backgrounds/pops.svg"
              techIcons={[SiNestjs, SiAngularjs, SiTypescript, SiCypress, SiTailwindcss]}
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.1} direction="right">
          <div className="mt-4">
            <ProjectItem
              title="Attack On Words"
              descriptionHeader="Blast away invading ships in this thrilling typing adventure! Type specific phrases to shoot and defend against infinite levels of enemy ships. Perfect for those who love fast-paced action and sharpening their typing skills."
              descriptionInfo="Get ready to be fully immersed in the exciting world of space battles!"
              projectLink="https://github.com/ramishenouda/attackonwords"
              key={'https://github.com/ramishenouda/attackonwords'}
              imagePath="/backgrounds/attackonwords.svg"
              techIcons={[SiUnity, SiPhp, SiPhpmyadmin]}
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
