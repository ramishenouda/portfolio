import { useEffect, useState } from 'react';
import { ExperienceItem } from './experience-item';
import { experienceAnimations } from './experience-animation';

export default function Experience() {
  const [company, setCompany] = useState(0);

  const doItBigPoints = [
    `Developed and maintained multiple web applications using technologies such as Angular, Nest.JS, TypeScript, Tailwind, and Bootstrap.`,
    `Participated in code reviews and provided constructive feedback to improve the quality of the codebase.`,
    `Collaborated with a cross-functional team of designers, developers, and product managers to deliver high-quality software on time.`,
    `Implemented responsive design and optimized the performance of web applications for different devices and browsers.`,
    `Implemented REST APIs for data manipulation and integration with third-party services.`,
    `Write modern, performant, maintainable code for a diverse array of client and internal projects.`,
    `Work with a variety of different languages, 
    platforms, and frameworks such as JavaScript, TypeScript, JQuery, Nest.js, Angular, and Stripe.`,
    `Communicate with multi-disciplinary teams of
    engineers, designers, producers, and clients on a daily basis.`,
  ];

  const RoczniewskiSchwedeGbRPoints = [
    `Helped the company on expanding an API for creating games using phaser, and testing it to ensure it is functioning correctly.`,
    `Responsible for creating simple games for new programmers to teach them how to code.`,
    `Developed more than 30 games. which are being used to teach kids and new developers how to code.`,
  ];

  const drugCatcherPoints = [
    `Responsible for developing custom React front-ends for client projects from scratch, and helping managing database schema and implementing models.`,
  ];

  useEffect(() => {
    experienceAnimations();
  }, []);
  return (
    <div id="experience" className="text-white pt-10 justify-center flex flex-col">
      <div className="mb-4">
        <h1 id="experience-title" className="section-title basic-animation-values translate-x-[-250px] !duration-[1s]">
          Experience
        </h1>
      </div>
      <div className="md:ml-10 mt-5 flex  p-1 justify-center items-center flex-col lg:flex-row md:gap-20">
        <div className="flex-1 max-w-[1000px]">
          <ExperienceItem
            companyName="Do IT Big!"
            jobTitle="Full-stack developer (Contract)"
            date="2021 - Present"
            location="Netherlands"
            bulletPoints={doItBigPoints}
            currentCompany={company === 0}
            setCompany={() => setCompany(company === 0 ? -1 : 0)}
            companyLink="doitbig.nl"
            classes="section-title basic-animation-values translate-x-[-250px] !duration-[1.2s]"
          />
          <ExperienceItem
            companyName="Roczniewski & Schwede GbR"
            jobTitle="Game Developer (Contract)"
            date="2020 - 2021"
            location="Germany"
            bulletPoints={RoczniewskiSchwedeGbRPoints}
            currentCompany={company === 1}
            setCompany={() => setCompany(company === 1 ? -1 : 1)}
            companyLink="codekiste.com"
            classes="section-title basic-animation-values translate-x-[-250px] !duration-[1.4s]"
          />
          <ExperienceItem
            companyName="DrugCatcher"
            jobTitle="Full-stack developer (Internship)"
            date="Jul 2020 - Nov 2020"
            location="Alexandria, Egypt"
            bulletPoints={drugCatcherPoints}
            currentCompany={company === 2}
            classes="section-title basic-animation-values translate-x-[-250px] !duration-[1.6s]"
            setCompany={() => setCompany(company === 2 ? -1 : 2)}
          />
        </div>
      </div>
    </div>
  );
}
