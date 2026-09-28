import Image from 'next/image';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { BsArrowUpRight } from 'react-icons/bs';

type ProjectCardProps = {
  title: string;
  projectLink: string;
  imagePath: string;
  techIcons: Array<IconType>;
  imageContain?: boolean;
  badge?: string;
  reverse?: boolean;
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
  reverse,
  problem,
  owned,
  stack,
  outcome,
}: ProjectCardProps) => {
  const facts = [
    { label: 'Problem', value: problem },
    { label: 'What I owned', value: owned },
    { label: 'Outcome', value: outcome },
  ];

  const stackItems = stack.split(',').map((item) => item.trim());

  return (
    <article
      className={`group rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-400/20 hover:shadow-glow transition-all duration-500 flex flex-col ${
        reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      }`}
    >
      <div className="md:w-[48%] p-4 md:p-5 flex">
        <div
          className={`relative w-full overflow-hidden rounded-xl ring-1 ring-white/10 shadow-2xl shadow-black/40 ${
            imageContain
              ? 'min-h-[260px] bg-gradient-to-br from-slate-900 via-slate-800 to-black flex items-center justify-center p-10'
              : 'aspect-[16/10] bg-[#111827]'
          }`}
        >
          {imageContain ? (
            <Image
              src={imagePath}
              alt={`${title} product`}
              width={1200}
              height={675}
              className="max-h-[220px] w-auto object-contain transition-transform duration-700 group-hover:scale-[1.03]"
            />
          ) : (
            <Image
              src={imagePath}
              alt={`${title} product`}
              fill
              sizes="(min-width: 768px) 48vw, 100vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
            />
          )}
        </div>
      </div>

      <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10 md:w-[52%]">
        <div className="flex flex-wrap items-center gap-3">
          {badge && (
            <span className="text-[11px] tracking-[0.2em] uppercase text-cyan-400 border border-cyan-400/30 rounded-full px-3 py-1">
              {badge}
            </span>
          )}
          <Link target="_blank" href={projectLink} className="group/link inline-flex items-center gap-2.5 w-fit">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white group-hover/link:text-cyan-400 transition-colors duration-300">
              {title}
            </h2>
            <BsArrowUpRight
              className="text-neutral-500 group-hover/link:text-cyan-400 transition-all duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
              size={18}
            />
          </Link>
        </div>

        <dl className="mt-6 space-y-4">
          {facts.map((fact) => (
            <div key={fact.label} className="pl-4 border-l border-cyan-400/25">
              <dt className="text-[11px] tracking-[0.22em] uppercase text-cyan-400/90 mb-1">{fact.label}</dt>
              <dd className="text-neutral-400 leading-relaxed text-[15px] md:text-base">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <div className="flex flex-row flex-wrap gap-2 mt-6">
          {stackItems.map((item, index) => {
            const Icon = techIcons[index];
            return (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs md:text-sm text-neutral-300"
              >
                {Icon && <Icon size={14} className="text-cyan-400/80" />}
                {item}
              </span>
            );
          })}
        </div>

        <Link
          target="_blank"
          href={projectLink}
          className="mt-6 inline-flex items-center gap-2 w-fit rounded-full border border-cyan-400/30 px-4 py-2 text-sm font-medium text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400/60 transition-colors duration-300"
        >
          View project <BsArrowUpRight size={13} />
        </Link>
      </div>
    </article>
  );
};
