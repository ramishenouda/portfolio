import { BsTelephoneFill, BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import { GrMail } from 'react-icons/gr';

export default function Intro() {
  return (
    <div
      id="intro"
      className="flex-1 text-white flex flex-col md:flex-row intro min-h-[100vh] relative px-8 justify-center md:justify-start items-center"
    >
      <div className="md:flex gap-2 hidden mb-auto uppercase mt-5 flex-col">
        <div className="nav-item text-2xl">
          <a href="#intro">home</a>
        </div>
        <div className="nav-item text-2xl">
          <a href="#expertise">expertise</a>
        </div>
        <div className="nav-item text-2xl">
          <a href="#experience">experience</a>
        </div>
        <div className="nav-item text-2xl">
          <a href="#projects">projects</a>
        </div>
        <div className="nav-item text-2xl">
          <a href="#testimonials">testimonials</a>
        </div>
        <div className="nav-item text-2xl">
          <a href="#contact">contact</a>
        </div>
        <div className="nav-item text-2xl">
          <a href="#resume">resume</a>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center flex-col  text-center">
        <p className="md:text-8xl text-4xl font-medium uppercase tracking-widest md:mb-0 mb-2">Rami Shenouda</p>
        <p className="text-sm md:text-2xl uppercase tracking-widest font-medium">
          A programmer who is constantly seeking new learning opportunities.
        </p>
      </div>
      <div className="flex gap-4  max-w-[70px] mb-auto uppercase mt-5 md:mb-0 mb-2 flex-row">
        <BsLinkedin color="white" size={32} />
        <BsGithub color="white" size={32} />
      </div>
      <div className="intro-address md:absolute w-max gap-4 hidden md:flex flex-row">
        <p className="flex flex-row gap-2 justify-center items-center">
          <MdLocationOn color="white" size={32} />{' '}
          <p className="text-2xl text-neutral-200 font-medium"> Cairo, Egypt</p>
        </p>
        <p className="w-[1px] border-r-2 border-white h-8"></p>
        <p className="flex flex-row gap-2 justify-center items-center">
          <BsTelephoneFill color="white" size={32} />{' '}
          <p className="text-2xl text-neutral-200 font-medium">+ 20 155 187 4208</p>
        </p>
        <p className="w-[1px] border-r-2 border-white h-8"></p>
        <p className="flex flex-row gap-2 justify-center items-center">
          <GrMail color="white" size={32} />{' '}
          <p className="text-2xl text-neutral-200 font-medium">ramishenouda@outlook.com</p>
        </p>
      </div>
    </div>
  );
}
