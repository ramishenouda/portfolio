import Link from 'next/link';
import React from 'react';

const testimoinals = [
  {
    description:
      'Thank you Rami for your good work! Rami does his best to complete the projects successfully and on time, even if the requirements are not well explained! Will hire Rami for my next projects again!',
    link: 'https://codekiste.com/',
    linkTitle: '~Arek Roczniewski - Roczniewski & Schwede GbR',
  },
  {
    description:
      'Rami have shown commitment, well-organized work, and support to his colleagues. Rami is a great asset to our team, he is encouraged to speak up to share his thoughts, to involve in the planned tasks.',
    link: 'https://www.linkedin.com/in/ihamdeen/',
    linkTitle: '~Mohamed Hamdeen - founder of DrugCatcher',
  },
  {
    description:
      'Rami helped me with everything, including explaining the differences between my options and he helped me publish my website. He also helped me choose a good server provider. He is really experienced and knows what he is doing. He is respectful and qualified.',
    link: 'https://www.deryadinc.com/',
    linkTitle: '~Derya Dinc',
  },
];

export default function Testimonials() {
  let [currentTestimonial, setCurrentTestimonial] = React.useState(0);

  return (
    <div id="testimonials" className="min-h-[100vh] flex flex-col items-center justify-center">
      <div className="text-center rounded-3xl">
        <h1 className="text-4xl md:text-8xl !uppercase tracking-widest">
          <span className="text-lg md:text-2xl">04.</span>Testimonials
        </h1>
        <hr className="mt-3 hr-text" data-content={'<My babies 👶 /> '} />
      </div>
      <p className="mt-16 text-4xl">Feedback from clients on great experiences</p>
      <div className="">
        <div className="flex flex-col gap-8">
          <div className="w-[95vw] items-center overflow-x-hidden">
            <div id="testimonials-container" className="flex flex-row transition duration-1000">
              {testimonial(testimoinals[0].description, testimoinals[0].linkTitle, testimoinals[0].link)}
              {testimonial(testimoinals[1].description, testimoinals[1].linkTitle, testimoinals[1].link)}
              {testimonial(testimoinals[2].description, testimoinals[2].linkTitle, testimoinals[2].link)}
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-8">
            <div
              onClick={() => {
                getTestimonial(0);
                setCurrentTestimonial(0);
              }}
            >
              <div
                className={`${
                  currentTestimonial !== 0 && 'text-background'
                } transition duration-1000 cursor-pointer text-2xl `}
              >
                {'<'}
                <span className={`${currentTestimonial !== 0 ? 'opacity-50' : 'opacity-100'} transition duration-1000`}>
                  🙂
                </span>
                <span
                  className={`${currentTestimonial !== 0 ? 'text-background' : 'text-white '} transition duration-1000`}
                >
                  {'/>'}
                </span>
              </div>
            </div>
            <div
              onClick={() => {
                getTestimonial(1);
                setCurrentTestimonial(1);
              }}
            >
              <div
                className={`${
                  currentTestimonial === 1 && 'text-black'
                } transition duration-1000 cursor-pointer text-2xl `}
              >
                <span
                  className={`${currentTestimonial !== 1 ? 'text-background' : 'text-white '} transition duration-1000`}
                >
                  {'<'}
                </span>
                <span className={`${currentTestimonial !== 1 ? 'opacity-50' : 'opacity-100'} transition duration-1000`}>
                  🙂
                </span>
                <span
                  className={`${currentTestimonial !== 1 ? 'text-background' : 'text-white '} transition duration-1000`}
                >
                  {'/>'}
                </span>
              </div>
            </div>
            <div
              onClick={() => {
                getTestimonial(2);
                setCurrentTestimonial(2);
              }}
            >
              <div
                className={`${
                  currentTestimonial === 2 && 'text-black'
                } transition duration-1000 cursor-pointer text-2xl `}
              >
                <span
                  className={`${currentTestimonial !== 2 ? 'text-background' : 'text-white '} transition duration-1000`}
                >
                  {'<'}
                </span>
                <span className={`${currentTestimonial !== 2 ? 'opacity-50' : 'opacity-100'} transition duration-1000`}>
                  🙂
                </span>
                <span
                  className={`${currentTestimonial !== 2 ? 'text-background' : 'text-white '} transition duration-1000`}
                >
                  {'/>'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const testimonial = (description: string, linkTitle: string, link: string) => {
  return (
    <div className="min-w-[95vw] mt-12">
      <p className="text-2xl tracking-widest text-center max-w-8xl">{description}</p>
      <p className="mt-12 text-center">
        <Link className="text-xl text-teal-400" href={link}>
          {linkTitle}
        </Link>
      </p>
    </div>
  );
};

const getTestimonial = (id: number) => {
  const testimonialsContainer = document.getElementById('testimonials-container');
  const position = id * -95;

  if (!testimonialsContainer) {
    return;
  }

  testimonialsContainer.style.transform = `translateX(${position}vw)`;
};
