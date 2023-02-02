import Image, { StaticImageData } from 'next/image';

type Props = {
  icon: StaticImageData;
  title: string;
  description: string;
};

export const ExpertCard = ({ icon, title, description }: Props) => {
  return (
    <div className="border-b-pop-details-icon-background hover:bg-zinc-300 select-none text-black border-l-pop-details-icon-background  transition duration-500 hover:scale-105 bg-zinc-400 py-2 border-2 border-gray-700 flex-1 shadow-lg shadow-slate-500">
      <div className="flex h-[240px] flex-grow justify-center w-full flex-col items-center">
        <Image height="240" src={icon} alt="frontend development" />
      </div>
      <div className="transition duration-500 hover:scale-105">
        <h3 className="w-full text-4xl md:text-2xl mb-2 lg:text-4xl mt-4 text-center"> {title} </h3>
        <div className="flex flex-row items-center mt-1 px-8 pb-6">
          <div>
            <p className="text-2xl md:text-xl lg:text-2xl h-full text-center">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
