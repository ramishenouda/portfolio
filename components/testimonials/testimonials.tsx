import Link from 'next/link';
import { FadeIn } from '../shared/motion';

export default function Testimonials() {
  return (
    <section id="testimonials" className="min-h-[50vh] md:min-h-[40vh] justify-center flex flex-col">
      <FadeIn>
        <h1 className="section-title">
          <span className="section-number">05.</span>TESTIMONIALS
        </h1>
      </FadeIn>
      <FadeIn delay={0.15}>
        <div className="max-w-3xl mx-auto mt-12 md:mt-16 text-center">
          <span className="text-5xl text-cyan-400/20 font-serif leading-none block mb-4">&ldquo;</span>
          <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed italic">
            Rami have shown commitment, well-organized work, and support to his colleagues. Rami is a great asset to
            our team, he is encouraged to speak up to share his thoughts, to involve in the planned tasks.
          </p>
          <div className="mt-8">
            <Link
              target="_blank"
              className="text-lg text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
              href="https://www.linkedin.com/in/ihamdeen/"
            >
              ~Mohamed Hamdeen - founder of DrugCatcher
            </Link>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
