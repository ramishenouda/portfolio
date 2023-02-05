import Image from 'next/image';
import Link from 'next/link';

import { BsArrowUpRight } from 'react-icons/bs';
import { SiAngularjs, SiCypress, SiNestjs, SiTailwindcss, SiTypescript } from 'react-icons/si';

export const ProjectItem = () => {
  return (
    <div className="flex flex-row justify-center relative">
      <div className="w-2/3">
        <Image
          src="backgrounds/foodeli.svg"
          alt="foodeli"
          width={500}
          height={500}
          className="opacity-80 hover:opacity-100 transition-opacity duration-500 w-full h-[500px]"
        />
      </div>
      <div className="w-1/3 text-right relative">
        <Link href={'https://foodeli.nl/home'} className="hover:text-blue-300 transition-colors duration-500">
          <h1 className="inline">Foodeli</h1>
        </Link>
        <div className="absolute -left-[80px] w-full ">
          <p className="bg-black/90 z-50 p-8 mt-4 flex justify-center items-center rounded-sm text-left text-3xl">
            Build your own restaurant order website and receive new orders online.
            <br />
            Manage your orders in a few simple steps. With a single press on the button you can accept or cancel an
            order. Get an overview of all orders and related information
          </p>
          <div className="gap-8 z-50 p-8 flex ml-[80px] mt-4 flex-row justify-center items-center rounded-sm text-left w-full text-3xl">
            <SiNestjs className="hover:text-black transition-colors duration-500" size={40} />
            <SiAngularjs className="hover:text-black transition-colors duration-500" size={40} />
            <SiTypescript className="hover:text-black transition-colors duration-500" size={40} />
            <SiCypress className="hover:text-black transition-colors duration-500" size={40} />
            <SiTailwindcss className="hover:text-black transition-colors duration-500" size={40} />
          </div>
          <div className="gap-4 hover:text-blue-300 transition-colors duration-500 z-50 mt-4 flex ml-[80px] flex-row justify-center items-center rounded-sm text-left w-full text-3xl">
            <Link href={'https://foodeli.nl/home'}>
              <BsArrowUpRight size={40} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
