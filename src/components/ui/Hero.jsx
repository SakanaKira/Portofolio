import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 py-32 text-foreground"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[450px] w-[450px] rounded-full bg-blue-600/15 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />

      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(96,165,250,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.4) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 90%)",
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Badge */}
        <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-5 py-2.5 text-sm font-medium text-blue-300 shadow-lg shadow-blue-500/5 backdrop-blur-xl">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
          </span>
          Welcome to my portfolio
        </span>

        {/* Heading */}
        <h1 className="text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
          Hello, I'm
          <span className="mt-3 block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
            Aqna Akhila Beniswita Putra.
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
          I'm a{" "}
          <span className="font-semibold text-blue-300">
            Frontend Developer
          </span>{" "}
          passionate about building beautiful, modern and interactive
          digital experiences.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/30"
          >
            Explore My Work
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/[0.06] px-7 py-3.5 font-semibold text-blue-100 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-300/40 hover:bg-blue-400/10"
          >
            Contact Me
          </a>
        </div>

        {/* Social Media */}
        <div className="mt-12 flex items-center justify-center gap-6">
          <span className="text-sm text-muted-foreground">
            Find me on
          </span>

          <FontAwesomeIcon
            icon={faGithub}
            style={{
              width: "24px",
              height: "24px",
              color: "white",
              display: "inline-block",
            }}
          />

          <FontAwesomeIcon
            icon={faLinkedin}
            style={{
              width: "24px",
              height: "24px",
              color: "#0A66C2",
              display: "inline-block",
            }}
          />
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
