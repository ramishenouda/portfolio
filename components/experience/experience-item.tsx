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
  companyLink,
}: props) => {
  return (
    <div className="w-full mb-4">
      <div
        onClick={() => setCompany()}
        className={`bg-white/[0.04] border border-white/[0.08] transition-all duration-300 cursor-pointer p-4 rounded-xl font-medium flex flex-col md:flex-row hover:bg-white/[0.06] ${
          currentCompany && 'bg-white/[0.08] border-cyan-500/20 shadow-glow'
        }`}
      >
        <div className="flex-1 md:block flex flex-row justify-between">
          <div>
            <span className="text-lg md:text-xl text-white">{companyName}</span>
            <span className="md:inline hidden text-neutral-400"> — {jobTitle}</span>
            <div className="md:hidden block text-base text-neutral-400">{jobTitle}</div>
          </div>
          <div className="md:hidden block text-neutral-500">{currentCompany ? '−' : '+'}</div>
        </div>
        <div className="mr-2 text-base md:text-lg text-neutral-400">
          <span className="mr-8">{date}</span>
          <span className="md:inline hidden text-neutral-500">{currentCompany ? '−' : '+'}</span>
        </div>
      </div>
      <div
        className={`rounded-xl max-h-0 bg-white/[0.02] border border-transparent overflow-y-hidden transition-all duration-500 ${
          currentCompany && 'p-4 px-8 mt-3 max-h-[1000px] border-white/[0.05]'
        }`}
      >
        <div className="mt-1 flex flex-row gap-8 text-base md:text-lg">
          <div className="flex flex-row gap-2 items-center text-neutral-400">
            <MdLocationOn className="text-cyan-400" size={18} /> {location}
          </div>
          {companyLink && (
            <Link className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300" target="_blank" href={`https://` + companyLink}>
              <span className="mr-1">↗</span> {companyLink}
            </Link>
          )}
        </div>
        <ul className="mt-4 space-y-2">
          {bulletPoints.map((point, index) => {
            return (
              <p key={point + index} className="text-base md:text-lg text-neutral-300 leading-relaxed">
                <span className="text-cyan-400/60 mr-2">—</span>{point}
              </p>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
