import { FadeIn } from '../shared/motion';

export default function AboutMe() {
  return (
    <section
      id="about-me"
      className="min-h-[20vh] pt-10 text-white flex flex-col"
    >
      <FadeIn>
        <h1 className="section-title">
          <span className="section-number">01.</span>ABOUT ME
        </h1>
      </FadeIn>
      <FadeIn delay={0.15}>
        <div className="text-xl md:text-2xl mt-6 tracking-wide leading-relaxed lg:w-[80vw] text-neutral-300 flex flex-col gap-5">
          <p>
            I work as a full-stack engineer at LimeSurvey GmbH in Hamburg. I own frontend architecture and the
            modernization of a production survey product: a React SPA, UI standards, testing, CI, and production support.
          </p>
          <p>
            Before that, at DoItBig I delivered platforms end to end — REST APIs, Stripe payments, migrations off Shopify
            and WordPress onto custom NestJS and Angular/Next.js systems, and JavaScript-to-TypeScript conversions.
          </p>
          <p>
            I started as a self-taught programmer and hold a computer science degree from Ain Shams University.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
