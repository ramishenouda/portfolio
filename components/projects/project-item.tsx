import Image from 'next/image';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { BsArrowUpRight } from 'react-icons/bs';

type ProjectCardProps = {
  title: string;
  description: string;
  projectLink: string;
  imagePath: string;
  techIcons: Array<IconType>;
  imageContain?: boolean;
};

export const ProjectCard = ({
  title,
  description,
  projectLink,
  imagePath,
  techIcons,
  imageContain,
}: ProjectCardProps) => {
  return (
    <div className="group rounded-2xl overflow-hidden bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 flex flex-col md:flex-row">
      {/* Image - left side, full height, no cropping */}
      <div className={`relative md:w-1/2 overflow-hidden ${imageContain ? 'bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-8' : 'flex items-center'}`}>
        <Image
          src={imagePath}
          width={1200}
          height={675}
          className={`w-full h-auto transition-transform duration-700 group-hover:scale-[1.03] ${
            imageContain ? 'max-w-[350px] mx-auto object-contain' : ''
          }`}
          alt={title}
        />
      </div>

      {/* Content - right side */}
      <div className="flex flex-col justify-center p-6 md:p-10 md:w-1/2">
        <Link target="_blank" href={projectLink} className="group/link inline-flex items-center gap-3 w-fit">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white group-hover/link:text-cyan-400 transition-colors duration-300">
            {title}
          </h2>
          <BsArrowUpRight className="text-neutral-500 group-hover/link:text-cyan-400 transition-all duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" size={18} />
        </Link>

        <p className="mt-4 text-neutral-400 leading-relaxed text-base md:text-lg">
          {description}
        </p>

        <div className="flex flex-row flex-wrap gap-3 mt-6 pt-5 border-t border-white/[0.06]">
          {techIcons.map((Icon, index) => (
            <Icon
              key={index}
              className="text-neutral-500 group-hover:text-neutral-400 transition-colors duration-300"
              size={20}
            />
          ))}
        </div>

        <Link
          target="_blank"
          href={projectLink}
          className="mt-5 inline-flex items-center gap-2 text-base font-medium text-cyan-400/70 hover:text-cyan-400 transition-colors duration-300 w-fit"
        >
          View Project <BsArrowUpRight size={14} />
        </Link>
      </div>
    </div>
  );
};
