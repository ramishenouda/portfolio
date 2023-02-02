import Link from 'next/link';
import { MdLocationOn } from 'react-icons/md';

type props = {
  companyName: string;
  jobTitle: string;
  date: string;
  location: string;
  bulletPoints: Array<string>;
  currentCompany: boolean;
  setCompany: () => void;
  classes?: string;
  companyLink?: string;
};

export const ExperienceItem = ({
  companyName,
  jobTitle,
  date,
  location,
  bulletPoints,
  currentCompany,
  setCompany,
  classes,
  companyLink,
}: props) => {
  return (
    <div className={`w-full company-experience mb-4 ${classes}`}>
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
