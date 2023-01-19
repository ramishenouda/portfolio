import Link from 'next/link';
import { MdLocationOn } from 'react-icons/md';
import { useState } from 'react';

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

  return (
    <div id="experience" className="text-white justify-center flex flex-col">
      <div className="mb-4">
        <div className="flex flex-row items-end w-full">
          <div className="text-lg md:text-2xl text-neutral-200 pb-1 md:pb-2">02.</div>
          <h1 className="text-6xl md:text-8xl text-slate-300">Experience</h1>
        </div>
      </div>
      <div className="md:ml-10 mt-5 flex  p-1 justify-center items-center flex-col lg:flex-row md:gap-20">
        <div className="flex-1 max-w-[1000px]">
          {experience(
            'Do IT Big!',
            'Full-stack developer (Contract)',
            '2021 - Present',
            'Netherlands',
            doItBigPoints,
            company === 0,
            () => setCompany(company === 0 ? -1 : 0),
            'doitbig.nl',
          )}
          {experience(
            'Roczniewski & Schwede GbR ',
            'Game Developer (Contract)',
            '2020 - 2021',
            'Germany',
            RoczniewskiSchwedeGbRPoints,
            company === 1,
            () => setCompany(company === 1 ? -1 : 1),
            'codekiste.com',
          )}
          {experience(
            'DrugCatcher',
            'Full-stack developer (Internship)',
            'Jul 2020 - Nov 2020',
            'Alexandria, Egypt',
            drugCatcherPoints,
            company === 2,
            () => setCompany(company === 2 ? -1 : 2),
          )}
        </div>
      </div>
    </div>
  );
}

const experience = (
  companyName: string,
  jobTitle: string,
  date: string,
  location: string,
  bulletPoints: Array<string>,
  currentCompany: boolean,
  setCompany: () => void,
  companyLink?: string,
) => {
  return (
    <div className={`w-full company-experience mb-4 `}>
      <div
        onClick={() => setCompany()}
        className={`bg-info transition-all duration-500 cursor-pointer  p-4 rounded-md font-semibold flex flex-col md:flex-row ${
          currentCompany && `!bg-info-50`
        }`}
      >
        <div className="flex-1 md:block flex flex-row justify-between child:text-md md:child:text-2xl">
          <div>
            <span>{companyName}</span>
            <span className="md:inline hidden"> - {jobTitle}</span>
            <div className="md:hidden block">{jobTitle}</div>
          </div>
          <div className="md:hidden block">{currentCompany ? '-' : '+'}</div>
        </div>
        <div className="mr-2 child:text-md md:child:text-2xl">
          <span className="mr-10">{date}</span>
          <span className="md:inline hidden">{currentCompany ? '-' : '+'}</span>
        </div>
      </div>
      <div
        className={`rounded-md max-h-0 bg-blue-900/20  overflow-y-hidden transition-all duration-500 ${
          currentCompany && `p-2  px-8 mt-4 max-h-[1000px]`
        }`}
      >
        <div className="mt-2 child:text-lg md:child:text-xl flex flex-row gap-8">
          <div className="flex flex-row gap-2 items-center justify-center">
            <MdLocationOn color="2e5cda" size={20} /> {location}
          </div>
          {companyLink && (
            <div className="hover:text-purple-400">
              <Link className="text-blue-400 hover:text-blue-200" target="_blank" href={`https://` + companyLink}>
                <span className="text-xl mr-2">↗</span> {companyLink}
              </Link>
            </div>
          )}
        </div>
        <ul className=" mt-4">
          {bulletPoints.map((point, index) => {
            return (
              <p key={point + index} className="text-lg md:text-xl mb-2">
                - {point}
              </p>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
