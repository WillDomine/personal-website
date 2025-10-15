import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  let projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce platform built with React, Node.js, and MongoDB.",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/yourusername/e-commerce-platform",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website built with React and Tailwind CSS.",
      technologies: ["React", "Tailwind CSS"],
      link: "https://github.com/yourusername/portfolio-website",
    },
    {
      title: "Blog Application",
      description: "A blog application built with React, Node.js, and MongoDB.",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/yourusername/blog-application",
    },
  ];

  return (
    <section id="projects" class="py-20">
      <h2 class="text-4xl font-bold text-white text-center mb-12">
        My Projects
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {projects.map((project) => (
          <ProjectCard
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}
