export default function ProjectCard(props: {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}) {
  return (
    <>
      <div class="bg-slate-800 m-5 rounded-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 shadow-lg">
        <img
          src="https://placehold.co/600x400/1e293b/64748b?text=Project+1"
          alt="Project 1 Screenshot"
          class="w-full h-48 object-cover"
        ></img>
        <div class="p-6">
          <h3 class="text-2xl font-bold text-white mb-2">
            {props.title}
          </h3>
          <p class="text-slate-400 mb-4">
            {props.description}
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            {props.technologies.map((tech) => (
                <span class="bg-cyan-900/50 text-cyan-300 text-sm font-medium px-3 py-1 rounded-full">
                  {tech}
                </span>
            ))}
          </div>
          <div class="flex gap-4 mt-4">
            <a href="#" class="text-cyan-400 hover:text-cyan-300 font-medium">
              Live Demo
            </a>
            <a href={props.link} target="_blank" class="text-cyan-400 hover:text-cyan-300 font-medium">
              Source Code
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
