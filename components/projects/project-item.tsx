import Image from 'next/image';
import Link from 'next/link';

import { BsArrowUpRight } from 'react-icons/bs';
import { SiAngularjs, SiCypress, SiNestjs, SiTailwindcss, SiTypescript } from 'react-icons/si';

export const ProjectItem = () => {
  return (
    <div>
      <div className="flex flex-row relative">
        <div className="md:w-3/4 absolute md:sticky top-3/4">
          <Image src="/backgrounds/foodeli.svg" height={500} width={500} className="h-full w-full" alt="foodeli" />
        </div>
        <div className="md:w-1/4 md:z-1 z-50 w-full">
          <Link
            target={'_blank'}
            href={'https://foodeli.nl/home'}
            className="hover:text-blue-300 w-full md:text-right transition-colors duration-500"
          >
            <h1 className="md:bg-transparent mb-5 md:text-6xl text-4xl">Foodeli</h1>
          </Link>
          <div className=" absolute right-0 max-w-[400px] z-50 justify-center items-center">
            <div className=" bg-black/70 p-8 flex flex-col">
              <p className="text-2xl md:text-3xl">
                Build your own restaurant order website and receive new orders online.
                <br />
                Manage your orders in a few simple steps. With a single press on the button you can accept or cancel an
                order. Get an overview of all orders and related information
              </p>
            </div>
            <div className="bg-black/70 mt-3 p-3 text-xl font-bold rounded-sm">
              Technologies used:
              <div className="gap-8 z-50 flex mt-4 flex-row justify-center items-center w-full">
                <SiNestjs className="hover:text-neutral-400 transition-colors duration-500" size={32} />
                <SiAngularjs className="hover:text-neutral-400 transition-colors duration-500" size={32} />
                <SiTypescript className="hover:text-neutral-400 transition-colors duration-500" size={32} />
                <SiCypress className="hover:text-neutral-400 transition-colors duration-500" size={32} />
                <SiTailwindcss className="hover:text-neutral-400 transition-colors duration-500" size={32} />
              </div>
              <div className="gap-4 hover:text-blue-300 transition-colors duration-500 z-50 mt-4 flex flex-row justify-center items-center w-full">
                <Link href={'https://foodeli.nl/home'}>
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
