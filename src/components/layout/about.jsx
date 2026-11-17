import {
  Code2,
  Palette,
  Monitor,
  Rocket,
  UserRound,
  Layers3,
} from "lucide-react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Python",
  "Pandas",
  "SQL",
  "Excel",
  "Google BigQuery",
  "Matplotlib",
  "Seaborn", 
  "Google Looker Studio"
];

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing clean, maintainable, and reusable code.",
  },
  {
    icon: Palette,
    title: "Modern Design",
    description: "Creating beautiful and user-friendly interfaces.",
  },
  {
    icon: Monitor,
    title: "Responsive",
    description: "Building websites that work on every device.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-background px-6 py-28 text-foreground"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
            <UserRound size={16} />
            Get To Know Me
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            A little introduction about who I am and what I love to
            do.
          </p>
        </div>

        {/* About Content */}
        <div className="grid items-center gap-14 md:grid-cols-2">
          {/* Left: Profile Card */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-blue-500/20 to-cyan-400/10 blur-xl" />

            <div className="relative overflow-hidden rounded-3xl border border-blue-400/20 bg-[#0B1B32] p-8 shadow-2xl shadow-blue-950/30">
              {/* Decorative Circle */}
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-blue-400/10" />
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full border border-cyan-400/10" />

              <div className="relative flex flex-col items-center py-8 text-center">
                {/* Profile Avatar */}
                <div className="flex h-36 w-36 items-center justify-center rounded-full border-4 border-blue-400/20 bg-gradient-to-br from-blue-500 to-cyan-400 shadow-xl shadow-blue-500/20">
                  <UserRound size={72} className="text-white" />
                </div>

                <h3 className="mt-7 text-2xl font-bold text-white">
                  Aqna Akhila Beniswita Putra
                </h3>

                <p className="mt-2 text-blue-300">
                  Frontend Developer
                </p>

                <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
                  Passionate about technology, web development, and
                  creating meaningful digital experiences.
                </p>

                <div className="mt-7 flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm text-cyan-300">
                  <Rocket size={16} />
                  Always Learning & Growing
                </div>
              </div>
            </div>
          </div>

          {/* Right: About Description */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Who I Am
            </span>

            <h3 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Building Digital Experiences
              <span className="block text-blue-400">
                With Passion.
              </span>
            </h3>

            <p className="mt-6 leading-8 text-muted-foreground">
              I am a Computer Science graduate from Sriwijaya
              University with a Cum Laude distinction and a GPA of
              3.94/4.00. I have a strong interest in Data Analytics,
              Data Science, and Software Development, with internship
              experience in IT infrastructure, application
              development, and database management.
            </p>

            <p className="mt-4 leading-8 text-muted-foreground">
              Skilled in Python, Pandas, SQL, Excel, Google BigQuery,
              and data visualization using Matplotlib, Seaborn, and
              Google Looker Studio. I also have knowledge of Machine
              Learning, Predictive Modeling, and software development,
              with a strong commitment to continuous learning and
              building effective technology-driven solutions.
            </p>

            {/* Skills */}
            <div className="mt-8">
              <h4 className="mb-4 flex items-center gap-2 font-semibold">
                <Layers3 size={18} className="text-blue-400" />
                My Technologies
              </h4>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-blue-400/20 bg-blue-500/[0.07] px-4 py-2 text-sm font-medium text-blue-200 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-500/15"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-blue-400/10 bg-[#0B1B32]/70 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/30 hover:bg-blue-500/[0.07]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-colors group-hover:bg-blue-500/20">
                  <Icon size={24} />
                </div>

                <h4 className="text-lg font-bold">{item.title}</h4>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
