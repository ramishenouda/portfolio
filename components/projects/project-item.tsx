import Image from 'next/image';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { BsArrowUpRight } from 'react-icons/bs';

type ProjectCardProps = {
  title: string;
  projectLink: string;
  imagePath?: string;
  techIcons: Array<IconType>;
  imageContain?: boolean;
  badge?: string;
  problem: string;
  owned: string;
  stack: string;
  outcome: string;
};

export const ProjectCard = ({
  title,
  projectLink,
  imagePath,
  techIcons,
  imageContain,
  badge,
  problem,
  owned,
  stack,
  outcome,
}: ProjectCardProps) => {
  return (
    <div className="group rounded-2xl overflow-hidden bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 flex flex-col md:flex-row">
      <div
        className={`relative md:w-1/2 overflow-hidden ${
          imagePath
            ? imageContain
              ? 'bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-8'
              : 'flex items-center'
            : 'min-h-[220px] md:min-h-full bg-gradient-to-br from-cyan-950/40 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-8 border-b md:border-b-0 md:border-r border-white/[0.06]'
        }`}
      >
        {imagePath ? (
          <Image
            src={imagePath}
            width={1200}
            height={675}
            className={`w-full h-auto transition-transform duration-700 group-hover:scale-[1.03] ${
              imageContain ? 'max-w-[350px] mx-auto object-contain' : ''
            }`}
            alt={title}
          />
        ) : (
          <div className="text-center" aria-hidden="true">
            {badge && (
              <p className="text-xs tracking-[0.25em] uppercase text-cyan-400 mb-3">{badge}</p>
            )}
            <p className="text-sm tracking-[0.3em] uppercase text-neutral-500">Production product</p>
          </div>
        )}
      </div>

      <div className="flex flex-col justify-center p-6 md:p-10 md:w-1/2">
        <div className="flex flex-wrap items-center gap-3">
          {badge && (
            <span className="text-xs tracking-[0.2em] uppercase text-cyan-400 border border-cyan-400/30 rounded-full px-3 py-1">
              {badge}
            </span>
          )}
          <Link target="_blank" href={projectLink} className="group/link inline-flex items-center gap-3 w-fit">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white group-hover/link:text-cyan-400 transition-colors duration-300">
              {title}
            </h2>
            <BsArrowUpRight className="text-neutral-500 group-hover/link:text-cyan-400 transition-all duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" size={18} />
          </Link>
        </div>

        <dl className="mt-5 space-y-3 text-base md:text-lg leading-relaxed">
          <div>
            <dt className="text-xs tracking-[0.2em] uppercase text-cyan-400/80 mb-1">Problem</dt>
            <dd className="text-neutral-400">{problem}</dd>
          </div>
          <div>
            <dt className="text-xs tracking-[0.2em] uppercase text-cyan-400/80 mb-1">What I owned</dt>
            <dd className="text-neutral-400">{owned}</dd>
          </div>
          <div>
            <dt className="text-xs tracking-[0.2em] uppercase text-cyan-400/80 mb-1">Stack</dt>
            <dd className="text-neutral-300">{stack}</dd>
          </div>
          <div>
            <dt className="text-xs tracking-[0.2em] uppercase text-cyan-400/80 mb-1">Outcome</dt>
            <dd className="text-neutral-400">{outcome}</dd>
          </div>
        </dl>

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
