// Lucide React untuk UI
import {
  Mail,
  MapPin,
  Send,
  ArrowUpRight,
} from "lucide-react";

// Font Awesome khusus sosial media
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Me",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Indonesia",
    href: null,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-background px-6 py-28 text-foreground"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
            <Send size={16} />
            Get In Touch
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Let's Work{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Together
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-8 text-muted-foreground">
            Have a project in mind, a question, or just want to say
            hello? I'd love to hear from you. Let's create something
            amazing together!
          </p>
        </div>

        {/* Contact Card */}
        <div className="relative overflow-hidden rounded-3xl border border-blue-400/20 bg-[#0B1B32]/80 p-8 shadow-2xl shadow-blue-950/20 backdrop-blur-xl sm:p-12">

          {/* Decorative Circle */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-blue-400/10" />
          <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-cyan-400/10" />

          <div className="relative z-10 grid gap-12 md:grid-cols-2">

            {/* Left Content */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Contact Information
              </span>

              <h3 className="mt-4 text-3xl font-bold leading-tight">
                Let's start a conversation.
              </h3>

              <p className="mt-5 leading-8 text-muted-foreground">
                I'm always open to discussing new projects,
                creative ideas, or opportunities to be part of
                your vision.
              </p>

              {/* Contact Information */}
              <div className="mt-9 space-y-5">
                {contactInfo.map((item) => {
                  const Icon = item.icon;

                  const content = (
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-400">
                        <Icon size={21} />
                      </div>

                      <div>
                        <p className="text-sm text-muted-foreground">
                          {item.title}
                        </p>
                        <p className="mt-1 font-medium text-foreground">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a
                      key={item.title}
                      href={item.href}
                      className="block transition hover:translate-x-1"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.title}>{content}</div>
                  );
                })}
              </div>
            </div>

            {/* Right Content */}
            <div className="flex flex-col justify-center">
              <div className="rounded-2xl border border-blue-400/10 bg-blue-500/[0.05] p-7 sm:p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/20">
                  <Mail size={27} />
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  Send Me a Message
                </h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  Interested in working together? Send me an email
                  and let's discuss your ideas.
                </p>

                <a
                  href="mailto:your.email@example.com?subject=Portfolio%20Inquiry"
                  className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 font-semibold text-primary-foreground shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/30"
                >
                  <Mail size={18} />
                  Say Hello

                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <p className="text-sm text-muted-foreground">
                  Connect with me
                </p>

                <div className="mt-4 flex items-center gap-4">
                  <a
                    href="https://github.com/username"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/[0.06] text-muted-foreground transition hover:-translate-y-1 hover:border-blue-400/50 hover:text-white"
                  >
                    <FontAwesomeIcon icon={faGithub} className="text-lg" />
                  </a>

                  <a
                    href="https://linkedin.com/in/username"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/[0.06] text-muted-foreground transition hover:-translate-y-1 hover:border-blue-400/50 hover:text-blue-400"
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
                  </a>

                  <a
                    href="https://instagram.com/username"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/[0.06] text-muted-foreground transition hover:-translate-y-1 hover:border-pink-400/50 hover:text-pink-400"
                  >
                    <FontAwesomeIcon icon={faInstagram} className="text-lg" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
