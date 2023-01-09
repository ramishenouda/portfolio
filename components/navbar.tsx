export default function Navbar() {
  return (
    <div>
      <div className="navbar top-0 py-4 z-40 fixed gap-5 flex flex-row w-full bg-background h-[50px] text-white items-center justify-center">
        <div className="nav-logo z-50 fixed left-8 text-left">
          <span className="text-4xl ">aRami</span>.me
        </div>
        <div className="nav-item">
          <a href="#intro">home</a>
        </div>
        <div className="nav-item">
          <a href="#expertise">expertise</a>
        </div>
        <div className="nav-item">
          <a href="#experience">experience</a>
        </div>
        <div className="nav-item">
          <a href="#projects">projects</a>
        </div>
        <div className="nav-item">
          <a href="#testimonials">testimonials</a>
        </div>
        <div className="nav-item">
          <a href="#contact">contact</a>
        </div>
        <div className="nav-item">
          <a href="#resume">resume</a>
        </div>
      </div>
    </div>
  );
}
