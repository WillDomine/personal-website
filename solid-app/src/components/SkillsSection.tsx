export default function SkillsSection() {
  let skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Git",
  ];
  return (
    <>
      <section id="skills" class="py-20 section-fade-in">
        <h2 class="text-4xl font-bold text-white text-center mb-12">
          Technical Skills
        </h2>
        <div class="max-w-4xl mx-auto">
          <div class="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <span class="bg-slate-800 text-slate-300 text-lg font-medium px-5 py-3 rounded-lg">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
