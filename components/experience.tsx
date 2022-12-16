import Link from 'next/link';
import Projects from './projects';

export default function Experience() {
  return (
    <div id="experience" className="min-h-[100vh] text-white pt-20  flex flex-col items-center">
      <div className="text-center rounded-3xl">
        <h1 className="text-[5vw] tracking-widest my-5">
          <span className="text-2xl">02.</span> Working Experience
        </h1>
        <hr className="hr-text mt-2" data-content={'<Under Construction 🏭 /> '} />
        <div className="flex flex-col ml-10 justify-start items-start mt-5">
          <p>
            <span className="text-md mr-4">0.1</span>
            <Link className="text-3xl" target={'_blank'} href={'https://doitbig.nl/en/'}>
              Do IT Big!
            </Link>
          </p>
          <p className="ml-10 mt-2">Jul 29, 2021 - Present</p>
          <div className="flex flex-col justify-start items-start  gap-4 ml-10 mt-8">
            <p>
              <span className="text-neutral-200 text-sm mr-2">{'<h6>'}</span>Write modern, performant, maintainable code
              for a diverse array of client and internal projects.
              <span className="text-neutral-200 text-sm ml-2"> {'</h6>'}</span>
            </p>
            <p>
              <span className="text-neutral-200 text-sm mr-2">{'<h6>'}</span>Work with a variety of different languages,
              platforms, and frameworks such as JavaScript, TypeScript, JQuery, Nest.js, Angular, and Stripe.
              <span className="text-neutral-200 text-sm ml-2"> {'</h6>'}</span>
            </p>
            <p>
              <span className="text-neutral-200 text-sm mr-2">{'<h6>'}</span>Communicate with multi-disciplinary teams
              of engineers, designers, producers, and clients on a daily basis.
              <span className="text-neutral-200 text-sm ml-2"> {'</h6>'}</span>
            </p>
          </div>
        </div>
      </div>

      <Projects />
    </div>
  );
}
