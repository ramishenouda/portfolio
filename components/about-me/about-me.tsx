import { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView, useReducedMotion } from 'framer-motion';
import { IconType } from 'react-icons';
import { FiLayers, FiTrendingUp, FiUsers } from 'react-icons/fi';
import { MdLocationOn, MdSchool } from 'react-icons/md';
import { BiWorld } from 'react-icons/bi';
import { FadeIn, StaggerContainer, staggerItem } from '../shared/motion';

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];
const bodyText = 'text-lg md:text-xl';
const highlight = `${bodyText} font-medium text-white`;

const lead: { text: string; accent?: boolean }[] = [
  { text: 'I build web products' },
  { text: 'end to end', accent: true },
  { text: 'and leave the codebase' },
  { text: 'better', accent: true },
  { text: 'for whoever touches it next.' },
];

const pillars: { icon: IconType; title: string; description: string }[] = [
  {
    icon: FiLayers,
    title: 'Own it end to end',
    description:
      'From schema and API to the UI, and the production issue after launch. I stay with a feature until it works for real users.',
  },
  {
    icon: FiTrendingUp,
    title: 'Leave it better',
    description:
      'Modernization, TypeScript, frontend standards, and tests, so the next change is cheaper than the last one.',
  },
  {
    icon: FiUsers,
    title: 'Raise the team',
    description: 'Mentoring, onboarding, shared standards, and frontend technical interviews.',
  },
];

const facts: { icon: IconType; label: string }[] = [
  { icon: MdLocationOn, label: 'Hamburg, Germany' },
  { icon: BiWorld, label: 'Originally from Egypt' },
  { icon: MdSchool, label: 'B.S. Computer Science & Engineering' },
];

const stats = [
  { value: new Date().getFullYear() - 2020, suffix: '+', label: 'Years shipping production software' },
  { value: 8, suffix: '+', label: 'Production platforms delivered with international teams' },
  { value: 10, suffix: '+', label: 'Teams, from agency client work to an open-source product company' },
];

const pillarItem = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

const word = {
  hidden: { opacity: 0, y: '0.6em', filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease } },
};

function Counter({ to, suffix, className }: { to: number; suffix: string; className: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setValue(to);
      return;
    }
    const controls = animate(0, to, {
      duration: 1.4,
      ease,
      onUpdate: (latest) => setValue(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, reduceMotion, to]);

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  );
}

export default function AboutMe() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about-me" className="relative pt-10 text-white isolate">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-16 right-[-12%] -z-10 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, -50, 0], y: [0, 40, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-[-10%] -z-10 h-[320px] w-[320px] rounded-full bg-sky-500/[0.07] blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      <FadeIn>
        <h1 className="section-title">
          <span className="section-number">01.</span>ABOUT ME
        </h1>
      </FadeIn>
      <motion.div
        className="h-px mt-4 origin-left w-28 bg-gradient-to-r from-cyan-400 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, delay: 0.2, ease }}
      />

      <div className="mt-10 grid items-start gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
        <div>
          <motion.h2
            className="max-w-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } } }}
          >
            {lead.flatMap((part, partIndex) =>
              part.text.split(' ').map((w, i) => (
                <motion.span
                  key={`${partIndex}-${i}`}
                  variants={word}
                  className={`inline-block mr-[0.25em] text-3xl md:text-5xl font-semibold tracking-tight leading-tight ${
                    part.accent
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-500'
                      : 'text-white'
                  }`}
                >
                  {w}
                </motion.span>
              )),
            )}
          </motion.h2>

          <div className={`mt-8 flex max-w-3xl flex-col gap-5 leading-relaxed text-neutral-200 ${bodyText}`}>
            <FadeIn delay={0.2}>
              <p className={`${bodyText} leading-relaxed text-neutral-200`}>
                I&apos;m Rami, a software engineer in Hamburg with{' '}
                <span className={highlight}>6+ years of building and modernizing production software</span>. I work
                across the full stack and don&apos;t define myself by one framework or language. What I care about is
                understanding complex systems and making technical decisions that hold up.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className={`${bodyText} leading-relaxed text-neutral-200`}>
                Today I&apos;m at <span className={highlight}>LimeSurvey</span>, helping modernize a mature, large-scale
                product: <span className={highlight}>designing APIs around an established PHP backend</span> and moving
                the frontend from legacy jQuery to <span className={highlight}>React</span>.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className={`${bodyText} leading-relaxed text-neutral-200`}>
                Before that, I worked with international teams in Germany and the Netherlands on SaaS platforms,
                marketplaces, and complex web apps, including <span className={highlight}>Overnights</span>,{' '}
                <span className={highlight}>Foodeli</span>, and <span className={highlight}>PeopleOverPaper</span>. I
                owned core parts of those systems, not just features: architecture, APIs, authentication and
                authorization, analytics, and frontend.
              </p>
            </FadeIn>
            <FadeIn delay={0.5}>
              <p className={`${bodyText} leading-relaxed text-neutral-300`}>
                I started out building games, more than 30 of them educational games that teach programming, and I hold
                a B.S. in Computer Science from Ain Shams University.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer stagger={0.08} delay={0.4} className="flex flex-wrap gap-3 mt-8">
            {facts.map(({ icon: Icon, label }) => (
              <motion.span
                key={label}
                variants={staggerItem}
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm text-neutral-200"
              >
                <Icon className="text-cyan-400" size={16} />
                {label}
              </motion.span>
            ))}
          </StaggerContainer>
        </div>

        <StaggerContainer stagger={0.15} delay={0.2} className="flex flex-col gap-4">
          <FadeIn delay={0.1}>
            <p className="mb-1 text-xs uppercase tracking-[0.25em] text-cyan-400">How I work</p>
          </FadeIn>
          {pillars.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={pillarItem}
              whileHover={reduceMotion ? undefined : { y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05]"
            >
              <span className="absolute inset-y-0 left-0 w-px transition-opacity duration-500 opacity-0 bg-gradient-to-b from-transparent via-cyan-400/70 to-transparent group-hover:opacity-100" />
              <div className="flex items-start gap-4">
                <span className="flex items-center justify-center transition-transform duration-300 h-11 w-11 shrink-0 rounded-xl bg-cyan-400/10 text-cyan-400 ring-1 ring-cyan-400/20 group-hover:scale-110">
                  <Icon size={20} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white md:text-xl">{title}</h3>
                  <p className="mt-1.5 text-base leading-relaxed text-neutral-200">{description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>

      <StaggerContainer
        stagger={0.12}
        className="mt-16 grid grid-cols-1 divide-y divide-white/[0.08] overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] sm:grid-cols-3 sm:divide-x sm:divide-y-0"
      >
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={staggerItem} className="p-6 md:p-8">
            <Counter
              to={stat.value}
              suffix={stat.suffix}
              className="block text-4xl font-bold tracking-tight text-transparent md:text-5xl bg-clip-text bg-gradient-to-r from-white to-cyan-300"
            />
            <p className="mt-2 text-sm leading-relaxed md:text-base text-neutral-300">{stat.label}</p>
          </motion.div>
        ))}
      </StaggerContainer>
    </section>
  );
}
