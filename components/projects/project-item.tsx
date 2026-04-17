import Image from 'next/image';
import Link from 'next/link';
import { IconType } from 'react-icons';

import { BsArrowUpRight } from 'react-icons/bs';

type props = {
  title: string;
  descriptionHeader: string;
  descriptionInfo: string;
  projectLink: string;
  imagePath: string;
  techIcons: Array<IconType>;
  reverseOrder?: boolean;
};

export const ProjectItem = ({
  title,
  descriptionHeader,
  descriptionInfo,
  projectLink,
  imagePath,
  techIcons,
  reverseOrder,
}: props) => {
  return (
    <div className="min-h-[85vh]">
      <div className={` ${reverseOrder ? '' : 'flex justify-end'}`}>
        <Link
          target={'_blank'}
          href={projectLink}
          className={`hover:text-cyan-400 ${
            reverseOrder ? '' : 'md:text-right'
          } text-right ml-auto transition-colors duration-300`}
        >
          <h1 className="md:bg-transparent w-max mb-5 inline-block md:text-5xl text-4xl font-bold tracking-tight">{title}</h1>
        </Link>
      </div>
      <div className={`flex ${reverseOrder ? 'flex-row-reverse' : 'flex-row'} relative`}>
        <div className="hover:scale-[1.02] transition-all duration-500 md:w-3/4 absolute md:sticky top-3/4 rounded-xl overflow-hidden">
          <Image src={imagePath} height={500} width={500} className="h-full w-full" alt={title} />
        </div>
        <div className="md:w-1/4 md:z-1 z-50 w-full">
          <div
            className={`absolute left-0 md:left-[unset] top-0 right-0 max-w-[500px] z-50 justify-center items-center ${
              reverseOrder ? '!left-0' : ''
            }`}
          >
            <div className="hover:scale-[1.01] transition-all duration-300 bg-white/[0.04] backdrop-blur-md border border-white/[0.08] rounded-xl p-8 flex flex-col">
              <p className="text-lg md:text-xl text-neutral-300 font-light leading-relaxed">
                {descriptionHeader}
                <br />
                {descriptionInfo}
              </p>
            </div>
            <div className="hover:scale-[1.01] transition-all duration-300 bg-white/[0.04] backdrop-blur-md border border-white/[0.08] rounded-xl mt-3 p-4 text-base font-medium">
              <span className="text-neutral-400 text-sm uppercase tracking-wider">Technologies used</span>
              {TechIcons(techIcons)}
              <div className="gap-4 hover:text-cyan-400 transition-colors duration-300 z-50 mt-5 flex flex-row justify-center items-center w-full">
                <Link target={'_blank'} href={projectLink}>
                  <span className="text-sm uppercase tracking-wider font-medium">View Project</span>
                  <BsArrowUpRight className="inline ml-2" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TechIcons = (techIcons: Array<IconType>) => {
  return (
    <div className="gap-6 z-50 flex mt-4 flex-row justify-center items-center w-full">
      {techIcons.map((Icon, index) => {
        return (
          <Icon
            key={`${new Date()} + ${index}`}
            className="text-neutral-400 hover:text-cyan-400 transition-colors duration-300"
            size={24}
          />
        );
      })}
    </div>
  );
};
