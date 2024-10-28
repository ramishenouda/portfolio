import { useEffect, useState } from 'react';
import { ExperienceItem } from './experience-item';
import { experienceAnimations } from './experience-animation';

export default function Experience() {
  const [company, setCompany] = useState(0);

  const doItBigPoints = [
    `Developed and maintained multiple web applications using technologies such as Nest.js, Angular, Next.js, TypeScript, Tailwind, and Bootstrap.`,
    `Worked with a team of three other developers and two designers to build a job seeker service website and an all-in-one platform that allows restaurants to launch their dream business website.`,
    `Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis.`,
    `Converted apps built with Shopify and WordPress to Nest.js and Angular/Next.js.`,
    `Converted JavaScript apps to TypeScript.`,
    `Implemented REST APIs for data manipulation and integrated with third-party services such as Stripe, and Google APIs`,
  ];

  const RoczniewskiSchwedeGbRPoints = [
    `Helped the company on expanding an API for creating games using Phaser and testing it to ensure it is functioning correctly.`,
    `Responsible for creating simple games for new programmers to teach them how to code.`,
    `Created over 100 unit tests to ensure that the API is always working correctly.`,
  ];

  const limeSurveyPoints = [
    "Rewrote the entire frontend of the application from PHP to React, improving performance and maintainability.",
    "Wrote comprehensive Jest tests to ensure application reliability and created Storybook documentation for consistent UI components.",
    "Configured GitHub Actions for automated testing and deployment processes.",
    "Act as the lead on frontend development, responsible for mentoring other developers on React and modern frontend technologies.",
    "Provided customer support by troubleshooting issues, resolving bugs, and implementing solutions based on customer needs and feedback.",
    "Set up servers for customers and assisted in adding plugins to extend application functionality as per their requirements."
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
