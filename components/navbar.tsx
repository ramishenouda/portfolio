export default function Navbar() {
  return (
    <div>
      <div className="navbar top-8 z-40 fixed gap-5 flex flex-row w-full text-white items-center justify-center">
        <div className="nav-logo z-50 fixed left-8 text-left">
          <span className="text-4xl ">aRami</span>.me
        </div>
        <div className="nav-item">home</div>
        <div className="nav-item">expertise</div>
        <div className="nav-item">experience</div>
        <div className="nav-item">projects</div>
        <div className="nav-item">testimonials</div>
        <div className="nav-item">contact</div>
        <div className="nav-item">resume</div>
      </div>
    </div>
  );
}
