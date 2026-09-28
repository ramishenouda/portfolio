import { ProjectCard } from './project-item';
import {
  SiAngularjs,
  SiCypress,
  SiGithub,
  SiJest,
  SiNestjs,
  SiNextdotjs,
  SiReact,
  SiStorybook,
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
            title="LimeSurvey"
            badge="Current role"
            imagePath="/images/limesurvey.jpg"
            projectLink="https://www.limesurvey.org/"
            techIcons={[SiReact, SiTypescript, SiJest, SiStorybook, SiGithub]}
            problem="A production survey product still running on jQuery and PHP needed a maintainable React SPA, consistent UI, and a quality bar the team could keep."
            owned="Frontend modernization, React architecture and standards, Jest/Storybook/CI, mentoring and interviews, and production support with clients and operations."
            stack="React, TypeScript, Jest, Storybook, GitHub Actions"
            outcome="A modernized, standards-led frontend with testing and CI in place, plus onboarding and interview support for the team."
          />
        </motion.div>

        <motion.div variants={staggerItem}>
          <ProjectCard
            title="Overnights"
            projectLink="https://overnights.tv/"
            imagePath="/images/overnights.gif"
            techIcons={[SiNestjs, SiNextdotjs, SiTypescript, SiTailwindcss]}
            problem="A BARB TV and entertainment ratings product needed a custom production platform instead of a constrained Shopify or WordPress stack."
            owned="End-to-end delivery across API, data, and UI on a NestJS and Next.js system."
            stack="NestJS, Next.js, TypeScript, Tailwind"
            outcome="A live ratings platform with overnight reports, AI-powered reporting, and SMS alerts — the product is trusted by 10,000+ media executives."
          />
        </motion.div>

        <motion.div variants={staggerItem}>
          <ProjectCard
            title="Miami Motorcycle Rentals"
            projectLink="https://miamimotorcyclerentals.com/"
            imagePath="/images/miamimotorcyclerentals.png"
            imageContain={true}
            techIcons={[SiNestjs, SiAngularjs, SiTypescript, SiTailwindcss, FaStripe]}
            problem="Worldwide customers needed to book motorcycles in Miami without timezone mistakes or a broken checkout."
            owned="The booking platform, Stripe payment flow, and timezone handling across frontend and backend."
            stack="NestJS, Angular, TypeScript, Tailwind, Stripe"
            outcome="A live booking product with accurate worldwide reservations and a full, secure checkout."
          />
        </motion.div>

        <motion.div variants={staggerItem}>
          <ProjectCard
            title="Foodeli"
            projectLink="https://foodeli.nl/home"
            imagePath="/images/foodeli.jpg"
            techIcons={[SiNestjs, SiAngularjs, SiTypescript, SiCypress, SiTailwindcss, FaStripe]}
            problem="Restaurants needed their own order websites plus a way to accept, cancel, and get paid for incoming orders."
            owned="End-to-end platform work: merchant ordering, order actions, Stripe payments, and Cypress coverage."
            stack="NestJS, Angular, TypeScript, Cypress, Tailwind, Stripe"
            outcome="A live merchant ordering product where restaurants manage orders in a few steps and take payment through Stripe."
          />
        </motion.div>
      </StaggerContainer>
    </section>
  );
}
