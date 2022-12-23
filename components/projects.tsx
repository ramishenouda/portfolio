export default function Projects() {
  return (
    <div id="projects" className="min-h-[100vh] text-white pt-20  flex flex-col items-center">
      <div className="text-center rounded-3xl">
        <h1 className="text-[5vw] !uppercase tracking-widest my-5">
          <span className="text-2xl">03.</span>Projects
        </h1>
        <hr className="hr-text mt-2" data-content={'<My babies 👶 /> '} />
      </div>
    </div>
  );
}

const project = () => {
  return (
    <div>
      <p>cool project</p>
    </div>
  );
};
