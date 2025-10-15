import { JSX } from "solid-js";

export default function AboutMeSection() {
  return (
    <>
      <section id="about" class="py-20 ">
        <h2 class="text-4xl font-bold text-white text-center mb-12">
          About Me
        </h2>
        <div class="flex flex-col md:flex-row items-center gap-10">
          <div class="md:w-1/3 text-center">
            <img
              src="https://placehold.co/400x400/1e293b/94a3b8?text=Your\nPhoto"
              alt="Portrait of Will Domine"
              class="rounded-full w-64 h-64 mx-auto object-cover border-4 border-slate-700 shadow-lg"
            ></img>
          </div>
          <div class="m-3 md:w-2/3 text-lg text-slate-400 space-y-4">
            <p>
              Hello! I'm Will, a dedicated Computer Science student at University of Wisconsin-Whitewater. My journey into technology began with a fascination
              for how complex problems can be solved with code. I'm
              driven by a desire to learn, innovate, and contribute to impactful
              projects.
            </p>
            <p>
              I have a strong foundation in data structures, algorithms, and
              software design principles. I enjoy turning ideas into reality,
              whether it's a web application, a mobile app, or a data analysis
              model. I'm always eager to learn new technologies and take on
              challenging problems.
            </p>
            <p>
              I have a strong foundation in data structures, algorithms, and
              software design principles. I enjoy turning ideas into reality,
              whether it's a web application, a mobile app, or a data analysis
              model. I'm always eager to learn new technologies and take on
              challenging problems.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
