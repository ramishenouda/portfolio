import Image from 'next/image';
import Link from 'next/link';

import { BsArrowUpRight } from 'react-icons/bs';
import { FaStripe } from 'react-icons/fa';
import { SiAngularjs, SiCypress, SiNestjs, SiStripe, SiTailwindcss, SiTypescript } from 'react-icons/si';

type props = {
  title: string;
  descriptionHeader: string;
  descriptionInfo: string;
  projectLink: string;
  imagePath: string;
  reverseOrder?: boolean;
};

export const ProjectItem = ({
  title,
  descriptionHeader,
  descriptionInfo,
  projectLink,
  imagePath,
  reverseOrder,
}: props) => {
  return (
    <div className="min-h-[85vh] md:min-h-screen">
      <Link
        target={'_blank'}
        href={projectLink}
        className={`hover:text-blue-300 ${reverseOrder ? '' : 'md:text-right'} transition-colors duration-500`}
      >
        <h1 className="md:bg-transparent mb-5 md:text-6xl text-4xl">{title}</h1>
      </Link>
      <div className={`flex ${reverseOrder ? 'flex-row-reverse' : 'flex-row'} relative`}>
        <div className="md:w-3/4 absolute md:sticky top-3/4">
          <Image src={imagePath} height={500} width={500} className="h-full w-full" alt="foodeli" />
        </div>
        <div className="md:w-1/4 md:z-1 z-50 w-full">
          <div
            className={`absolute left-0 md:left-[unset] top-0 right-0 max-w-[400px] z-50 justify-center items-center  ${
              reverseOrder ? '!left-0' : ''
            }`}
          >
            <div className=" bg-black/70 p-8 flex flex-col">
              <p className="text-2xl md:text-3xl">
                {descriptionHeader}
                <br />
                {descriptionInfo}
              </p>
            </div>
            <div className={`bg-black/70 mt-3 p-3 text-xl font-bold rounded-sm`}>
              Technologies used:
              <div className="gap-8 z-50 flex mt-4 flex-row justify-center items-center w-full">
                <SiNestjs className="hover:text-neutral-400 transition-colors duration-500" size={32} />
                <SiAngularjs className="hover:text-neutral-400 transition-colors duration-500" size={32} />
                <SiTypescript className="hover:text-neutral-400 transition-colors duration-500" size={32} />
                <SiCypress className="hover:text-neutral-400 transition-colors duration-500" size={32} />
                <SiTailwindcss className="hover:text-neutral-400 transition-colors duration-500" size={32} />
                <FaStripe className="hover:text-neutral-400 transition-colors duration-500" size={32} />
              </div>
              <div className="gap-4 hover:text-blue-300 transition-colors duration-500 z-50 mt-4 flex flex-row justify-center items-center w-full">
                <Link href={projectLink}>
                  <span className="text-xl uppercase">View Project</span>
                  <BsArrowUpRight className="inline ml-2" size={28} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
