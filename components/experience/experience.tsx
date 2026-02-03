import { useEffect, useState } from 'react';
import { ExperienceItem } from './experience-item';
import { experienceAnimations } from './experience-animation';

export default function Experience() {
  const [company, setCompany] = useState(0);

  const doItBigPoints = [
    `Developed and maintained multiple production-grade platforms using NestJS, Angular, Next.js, TypeScript, Tailwind, and Bootstrap.`,
    `Delivered real-world products including Overnights, Foodeli, Miami Motorcycle Rentals, and CodingLab.`,
    `Built end-to-end features across frontend, backend, and database layers, from UI implementation to API design and integration.`,
    `Led the migration of Shopify and WordPress solutions to custom NestJS + Angular/Next.js/React architectures, improving flexibility and scalability.`,
    `Converted multiple applications from JavaScript to TypeScript, increasing type safety, maintainability, and long-term stability.`,
    `Designed and implemented RESTful APIs and integrated third-party services such as Stripe and Google APIs.`,
    `Worked closely with designers, developers, and stakeholders, translating business requirements into production-ready solutions.`,
  ];

  const RoczniewskiSchwedeGbRPoints = [
    `Extended and stabilized an existing JavaScript-based educational game API built on Phaser.js for teaching programming fundamentals.`,
    `Implemented high-level abstraction APIs (e.g. setBackground(), addJoystick(), onKeyClick()) focused on API design, usability, and readability.`,
    `Designed features with a strong emphasis on accessibility, enabling kids and non-technical users to build interactive games with minimal code.`,
    `Developed 30+ educational games demonstrating event handling, game loops, state management, and control flow.`,
    `Wrote automated unit tests (JavaScript testing frameworks) to ensure API stability, regression safety, and predictable behavior.`,
  ];

  const limeSurveyPoints = [
    "Led the frontend modernization effort, migrating the application from jQuery/PHP to a React-based Single Page Application (SPA).",
    "Implemented a modernized UI/UX from Figma designs, focusing on consistency, performance, and responsiveness.",
    "Designed and enforced a scalable React architecture and frontend standards, improving performance, maintainability, and developer experience.",
    "Established testing and quality foundations using Jest, Storybook, pre-commit hooks, and GitHub Actions CI pipelines.",
    "Mentored developers, supported onboarding, and contributed to frontend technical interviews.",
    "Worked closely with clients and support teams, handling production issues, deployments, server setups, and plugin installations."
  ];

  useEffect(() => {
    experienceAnimations();
  }, []);

  return (
    <div id="experience" className="flex flex-col justify-center pt-10 text-white">
      <div className="mb-4">
        <h1 id="experience-title" className="section-title fade-animation translate-x-[-250px] !duration-[1s]">
          <span className="section-number">03.</span>Experience
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center p-1 mt-5 md:ml-10 lg:flex-row md:gap-20">
        <div className="flex-1 max-w-[1000px]">
          <ExperienceItem
            companyName="LimeSurvey GmbH"
            jobTitle="Software engineer"
            date="April 2023 - Present"
            location="Hamburg, Germany"
            bulletPoints={limeSurveyPoints}
            currentCompany={company === 0}
            classes="section-title basic-animation-values translate-x-[-250px] !duration-[1.6s]"
            setCompany={() => setCompany(company === 0 ? -1 : 0)}
            companyLink="limesurvey.org"

          />
          <ExperienceItem
            companyName="Do IT Big!"
            jobTitle="Full-stack developer (Contract)"
            date="JUL 2021 - April 2023"
            location="Netherlands"
            bulletPoints={doItBigPoints}
            currentCompany={company === 1}
            setCompany={() => setCompany(company === 1 ? -1 : 1)}
            companyLink="trydoitbig.com"
            classes="section-title fade-animation translate-x-[-250px] !duration-[1.2s]"
          />
          <ExperienceItem
            companyName="Roczniewski & Schwede GbR"
            jobTitle="Game Developer (Contract)"
            date="NOV 2020 - MAY 2021"
            location="Germany"
            bulletPoints={RoczniewskiSchwedeGbRPoints}
            currentCompany={company === 2}
            setCompany={() => setCompany(company === 2 ? -1 : 2)}
            companyLink="codekiste.com"
            classes="section-title fade-animation translate-x-[-250px] !duration-[1.4s]"
          />
        </div>
      </div>
    </div>
  );
}
