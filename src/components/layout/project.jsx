
import {
  ExternalLink,
  ArrowUpRight,
  Code2,
} from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const projects = [
  {
    title: "Personal Portfolio",
    category: "Web Development",
    description:
      "A modern personal portfolio website to showcase my profile, skills, and projects.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    icon: Code2,
    gradient: "from-blue-600/30 via-cyan-500/20 to-slate-900",
    github: "https://github.com/akanaakira",
    demo: "https://example.com",
  },
  {
    title: "E-Commerce Website",
    category: "Frontend Development",
    description:
      "A responsive online shopping interface with a clean design and intuitive user experience.",
    technologies: ["React", "JavaScript", "CSS"],
    icon: Code2,
    gradient: "from-violet-600/30 via-blue-500/20 to-slate-900",
    github: "https://github.com/username",
    demo: "https://example.com",
  },
  {
    title: "Task Management App",
    category: "Web Application",
    description:
      "A simple task management application to organize daily activities and improve productivity.",
    technologies: ["Next.js", "Tailwind CSS", "JavaScript"],
    icon: Code2,
    gradient: "from-cyan-600/30 via-blue-500/20 to-slate-900",
    github: "https://github.com/username",
    demo: "https://example.com",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-background px-6 py-28 text-foreground"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
            <Code2 size={16} />
            My Portfolio
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-muted-foreground">
            Some of the projects I've worked on, showcasing my
            skills, creativity, and passion for web development.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.title}
                className="group overflow-hidden rounded-2xl border border-blue-400/10 bg-[#0B1B32]/70 transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/30 hover:shadow-xl hover:shadow-blue-950/30"
              >
                {/* Project Preview */}
                <div
                  className={`relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br ${project.gradient}`}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(96,165,250,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,0.08)_1px,transparent_1px)] bg-[size:30px_30px]" />

                  <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-cyan-300 shadow-xl backdrop-blur-md transition duration-500 group-hover:scale-110">
                    <Icon size={38} />
                  </div>

                  <span className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-slate-950/50 px-3 py-1 text-xs text-blue-200 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-bold transition-colors group-hover:text-blue-400">
                      {project.title}
                    </h3>

                    <ArrowUpRight
                      size={20}
                      className="shrink-0 text-blue-400 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>

                  <p className="mt-3 min-h-20 text-sm leading-7 text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-blue-400/15 bg-blue-500/[0.07] px-3 py-1.5 text-xs font-medium text-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="mt-7 flex items-center gap-5 border-t border-blue-400/10 pt-5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`GitHub ${project.title}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-white"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="text-lg"
                      />
                      GitHub
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Live Demo ${project.title}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition hover:text-cyan-300"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
