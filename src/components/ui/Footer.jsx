"use client";

import { ArrowUp, Heart } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/yourusername",
    icon: faGithub,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    icon: faLinkedin,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/yourusername",
    icon: faInstagram,
  },
];

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="relative overflow-hidden border-t border-blue-400/10 bg-[#08172B] px-6">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl py-12">
        {/* Main Footer */}
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo / Description */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="text-2xl font-bold tracking-tight text-white"
            >
              Your<span className="text-blue-400">Name.</span>
            </a>

            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
              Building modern, creative, and meaningful digital experiences.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-slate-400 transition-colors duration-300 hover:text-cyan-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Media */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-400/15 bg-[#102440] text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-500/15 hover:text-cyan-300"
              >
                <FontAwesomeIcon
                  icon={social.icon}
                  style={{
                    width: "17px",
                    height: "17px",
                    display: "inline-block",
                  }}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row">
          <p className="flex flex-wrap items-center justify-center gap-1 text-sm text-slate-500">
            © {currentYear} Your Name. Made with
            <Heart
              size={14}
              className="mx-1 fill-red-400 text-red-400"
            />
            and passion.
          </p>

          <a
            href="#home"
            className="group flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-cyan-300"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-400/20 bg-[#102440] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-blue-400/50 group-hover:text-cyan-300">
              <ArrowUp size={16} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}