import Image, { StaticImageData } from 'next/image';

type Props = {
  icon: StaticImageData;
  title: string;
  description: string;
};

export const ExpertCard = ({ icon, title, description }: Props) => {
  return (
    <div className="group select-none h-full bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-xl p-6 flex-1 flex flex-col transition-all duration-500 hover:bg-white/[0.06] hover:border-white/[0.15] hover:shadow-glow">
      <div className="flex h-[180px] flex-grow justify-center w-full flex-col items-center opacity-80 group-hover:opacity-100 transition-opacity duration-500">
        <Image height="180" src={icon} alt={title} />
      </div>
      <div>
        <h3 className="w-full text-2xl lg:text-3xl mt-4 text-center font-semibold text-white">{title}</h3>
        <div className="flex flex-row items-center mt-3 px-4 pb-4">
          <p className="text-lg lg:text-xl text-center text-neutral-400 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};
