import { useState } from 'react';
import { ExperienceItem } from './experience-item';
import { FadeIn, StaggerContainer, staggerItem } from '../shared/motion';
import { motion } from 'framer-motion';

export default function Experience() {
  const [company, setCompany] = useState(0);

  const limeSurveyPoints = [
    "Led the frontend modernization effort, migrating the application from jQuery/PHP to a React-based Single Page Application (SPA).",
    "Implemented a modernized UI/UX from Figma designs, focusing on consistency, performance, and responsiveness.",
    "Designed and enforced a scalable React architecture and frontend standards, improving performance, maintainability, and developer experience.",
    "Established testing and quality foundations using Jest, Storybook, pre-commit hooks, and GitHub Actions CI pipelines.",
    "Mentored developers, supported onboarding, and contributed to frontend technical interviews.",
    "Worked closely with clients and support teams, handling production issues, deployments, server setups, and plugin installations.",
  ];

  const doItBigPoints = [
    `Developed and maintained multiple production-grade platforms using NestJS, Angular, Next.js, TypeScript, Tailwind, and Bootstrap.`,
    {
      text: `Delivered real-world products including Overnights, Foodeli, Miami Motorcycle Rentals, and CodingLab.`,
      subPoints: [
        { text: `Overnights — The UK's leading BARB TV & entertainment ratings platform, trusted by 10,000+ media executives. Covers Amazon, Netflix, Disney+, YouTube & TikTok with AI-powered reports and SMS alerts.`, link: 'https://www.overnights.tv/' },
        { text: `Foodeli — A restaurant ordering platform where businesses can build their own order website, manage incoming orders, and handle payments via Stripe.`, link: 'http://foodeli.nl/home' },
        { text: `Miami Motorcycle Rentals — A motorcycle booking platform with Stripe integration and intelligent timezone handling for accurate worldwide bookings.`, link: 'https://www.miamimotorcyclerentals.com/' },
      ],
    },
    `Built end-to-end features across frontend, backend, and database layers, from UI implementation to API design and integration.`,
    `Led the migration of Shopify and WordPress solutions to custom NestJS + Angular/Next.js/React architectures, improving flexibility and scalability.`,
    `Converted multiple applications from JavaScript to TypeScript, increasing type safety, maintainability, and long-term stability.`,
    `Designed and implemented RESTful APIs and integrated third-party services such as Stripe and Google APIs.`,
    `Worked closely with designers, developers, and stakeholders, translating business requirements into production-ready solutions.`,
  ];

  const codeKistePoints = [
    `Extended and stabilized an existing JavaScript-based educational game API built on Phaser.js for teaching programming fundamentals.`,
    `Implemented high-level abstraction APIs (e.g. setBackground(), addJoystick(), onKeyClick()) focused on API design, usability, and readability.`,
    `Designed features with a strong emphasis on accessibility, enabling kids and non-technical users to build interactive games with minimal code.`,
    `Developed 30+ educational games demonstrating event handling, game loops, state management, and control flow.`,
    `Wrote automated unit tests (JavaScript testing frameworks) to ensure API stability, regression safety, and predictable behavior.`,
  ];

  return (
    <div id="experience" className="flex flex-col justify-center pt-10 text-white">
      <div className="mb-4">
        <FadeIn>
          <h1 className="section-title">
            <span className="section-number">03.</span>Experience
          </h1>
        </FadeIn>
      </div>
      <StaggerContainer stagger={0.15} className="flex flex-col items-center justify-center p-1 mt-5 md:ml-10 lg:flex-row md:gap-20">
        <div className="flex-1 max-w-[1000px]">
          <motion.div variants={staggerItem}>
            <ExperienceItem
              companyName="LimeSurvey GmbH"
              jobTitle="Software Developer"
              date="April 2023 - Present"
              location="Hamburg, Germany"
              bulletPoints={limeSurveyPoints}
              currentCompany={company === 0}
              setCompany={() => setCompany(company === 0 ? -1 : 0)}
              companyLink="limesurvey.org"
            />
          </motion.div>
          <motion.div variants={staggerItem}>
            <ExperienceItem
              companyName="DoItBig"
              jobTitle="Full-Stack Developer"
              date="Jan 2021 - Aug 2023"
              location="Utrecht, Netherlands"
              bulletPoints={doItBigPoints}
              currentCompany={company === 1}
              setCompany={() => setCompany(company === 1 ? -1 : 1)}
              companyLink="trydoitbig.com"
            />
          </motion.div>
          <motion.div variants={staggerItem}>
            <ExperienceItem
              companyName="CodeKiste"
              jobTitle="Game Developer"
              date="Feb 2020 - March 2021"
              location="North Rhine-Westphalia, Germany"
              bulletPoints={codeKistePoints}
              currentCompany={company === 2}
              setCompany={() => setCompany(company === 2 ? -1 : 2)}
              companyLink="codekiste.com"
            />
          </motion.div>
        </div>
      </StaggerContainer>
    </div>
  );
}
