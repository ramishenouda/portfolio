import Link from 'next/link';

export default function Experience() {
  const doItBigPoints = [
    `Write modern, performant, maintainable code for a diverse array of client and internal projects.`,
    `Work with a variety of different languages, 
    platforms, and frameworks such as JavaScript, TypeScript, JQuery, Nest.js, Angular, and Stripe.`,
    `Communicate with multi-disciplinary teams of
    engineers, designers, producers, and clients on a daily basis.`,
  ];

  return (
    <div id="experience" className="min-h-[100vh] text-white pt-20  flex flex-col items-center">
      <div className="text-center rounded-3xl">
        <h1 className="text-[5vw] !uppercase tracking-widest my-5">
          <span className="text-2xl">02.</span> Experience
        </h1>
        <hr className="hr-text mt-2" data-content={'<CoffeScript ☕  /> '} />
        {experience(
          'Do IT Big!',
          'Full-stack developer',
          'Jul 29, 2021 - Present',
          '🌍 Netherlands',
          'http://doitbig.nl/',
          doItBigPoints,
          1,
        )}
        {experience(
          'Roczniewski & Schwede GbR (Contract)',
          'Game Developer',
          'Dec 11, 2020 - Mar 22, 2021',
          '🌍 Germany',
          'https://codekiste.com/',
          doItBigPoints,
          2,
        )}
        {experience(
          'DrugCatcher (Internship)',
          'Software engineer',
          '27 Sep 2020 - 27 Nov 2020',
          '🌍 Alexandria, Egypt',
          'https://codekiste.com/',
          doItBigPoints,
          3,
        )}
      </div>
    </div>
  );
}

const experience = (
  companyName: string,
  jobTitle: string,
  date: string,
  location: string,
  companyLink: string,
  bulletPoints: Array<string>,
  index: number,
) => {
  return (
    <div className="flex flex-col ml-10 justify-start items-start mb-14 mt-5">
      <p>
        <span className="text-md mr-4 text-neutral-200 font-bold">
          {'<'} {index} {'>'}
        </span>
        <Link className="text-3xl" target={'_blank'} href={companyLink}>
          {jobTitle}, {companyName}
        </Link>
      </p>
      <p className="ml-10 mt-2">
        <span>{date}</span>
        <span className="ml-4">{location}</span>
      </p>
      <div className="flex flex-col justify-start items-start  gap-4 ml-10 mt-8">
        {bulletPoints.map((point, index) => {
          return (
            <p className="font-medium" key={point + index}>
              <span className="text-neutral-200 text-sm font-bold mr-2">{'<h6>'}</span>
              {point}
              <span className="text-neutral-200 text-sm font-bold ml-2"> {'</h6>'}</span>
            </p>
          );
        })}
      </div>
    </div>
  );
};
