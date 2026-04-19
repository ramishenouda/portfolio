import { ProjectCard } from './project-item';
import {
  SiAngularjs,
  SiCypress,
  SiNestjs,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { FaStripe } from 'react-icons/fa';
import { FadeIn, StaggerContainer, staggerItem } from '../shared/motion';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section id="projects" className="pt-10 text-white flex flex-col">
      <FadeIn>
        <h1 className="section-title">
          <span className="section-number">04.</span>PROJECTS
        </h1>
      </FadeIn>

      <StaggerContainer stagger={0.2} className="mt-10 flex flex-col gap-8">
        <motion.div variants={staggerItem}>
          <ProjectCard
            title="Overnights"
            description="The UK's leading provider of BARB TV & entertainment Ratings. Trusted by 10,000+ media executives. Covering Amazon, Netflix, Disney+, YouTube & TikTok with AI-powered reports, SMS alerts, and Video on Demand data. The fastest overnight reports available — delivered every morning at 9:30am."
            projectLink="https://overnights.tv/"
            imagePath="/images/overnights.gif"
            techIcons={[SiNestjs, SiNextdotjs, SiTypescript, SiTailwindcss]}
          />
        </motion.div>

        <motion.div variants={staggerItem}>
          <ProjectCard
            title="Miami Motorcycle Rentals"
            description="Book a motorcycle rental in Miami under 5 minutes. Built with Stripe integration and intelligent timezone handling so customers worldwide can book accurately. Full payment flow for a smooth, secure checkout experience."
            projectLink="https://miamimotorcyclerentals.com/"
            imagePath="/images/miamimotorcyclerentals.png"
            imageContain={true}
            techIcons={[SiNestjs, SiAngularjs, SiTypescript, SiTailwindcss, FaStripe]}
          />
        </motion.div>

        <motion.div variants={staggerItem}>
          <ProjectCard
            title="Foodeli"
            description="Build your own restaurant order website and receive new orders online. Manage orders in a few simple steps — accept or cancel with a single press. Full overview of all orders and related information."
            projectLink="https://foodeli.nl/home"
            imagePath="/backgrounds/foodeli.svg"
            techIcons={[SiNestjs, SiAngularjs, SiTypescript, SiCypress, SiTailwindcss, FaStripe]}
          />
        </motion.div>
      </StaggerContainer>
    </section>
  );
}
