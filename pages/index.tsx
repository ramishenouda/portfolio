import Head from 'next/head';
import Contact from '../components/contact';
import Experience from '../components/experience';
import Expertise from '../components/expertise';
import Intro from '../components/intro';
import Navbar from '../components/navbar';
import Projects from '../components/projects';
import Testimonials from '../components/testimonials';
import AboutMe from '../components/about-me';

export default function Home() {
  return (
    <div>
      <Head>
        <title>aRamy | Software engineer | Full stack developer </title>
        <meta
          name="description"
          content="Rami Shenouda, a software engineer and a full stack developer. I started programming as a self-taught game developer in the secondary school, when I discovered my favorite game engine, Unity. After three years I decided to move to web development. I'm currently a student in Ain Shams University, studying mathematics and computer science. Aside from my courses at university, I also like doing extra studying at home to help improve myself more. I used to make websites using PHP & Wordpress, but now I'm using ASP.NET & ANGULAR/REACT."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Intro />
        <div className="flex mt-16 flex-col w-full gap-16 px-[5vw]">
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
