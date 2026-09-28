import Head from 'next/head';
import Contact from '../components/contact/contact';
import Experience from '../components/experience/experience';
import Expertise from '../components/expertise/expertise';
import Intro from '../components/intro/intro';
import Navbar from '../components/navbar/navbar';
import Projects from '../components/projects/projects';
import Testimonials from '../components/testimonials/testimonials';
import AboutMe from '../components/about-me/about-me';

const title = 'Rami S. Zaki — Full-stack engineer';
const description =
  'Full-stack engineer in Hamburg. At LimeSurvey I own frontend architecture, modernization, and production quality. Previously I shipped production platforms at DoItBig — APIs, payments, and migrations across NestJS, Angular, React, and Next.js.';

export default function Home() {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/me.jpg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="/me.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Intro />
        <div className="flex mt-16 flex-col w-full gap-24 md:gap-32 px-[5vw] lg:px-[8vw] pb-16">
          <AboutMe />
          <Expertise />
          <Experience />
          <Projects />
          <Testimonials />
          <Contact />
        </div>
      </main>
    </div>
  );
}
