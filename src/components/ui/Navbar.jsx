"use client";

import { useState } from "react";
import {
  Home,
  User,
  FolderKanban,
  Mail,
  Menu,
  X,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "#", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Projects", href: "#projects", icon: FolderKanban },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-1/2 top-5 z-50 w-[92%] max-w-4xl -translate-x-1/2">
      {/* Navbar */}
      <div className="relative flex items-center justify-between overflow-hidden rounded-full border border-blue-300/10 bg-[#08172B]/85 px-5 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
        {/* Top Glow */}
        <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

        {/* Logo */}
        <a
          href="#"
          onClick={() => setActive("Home")}
          className="text-xl font-bold tracking-tight text-white"
        >
          My
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Portfolio.
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = active === link.name;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActive(link.name)}
                className={`flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "border-blue-400/20 bg-blue-500/15 text-blue-300 shadow-[0_0_20px_rgba(59,130,246,0.12)]"
                    : "border-transparent text-slate-400 hover:border-blue-300/10 hover:bg-blue-400/10 hover:text-blue-200"
                }`}
              >
                <Icon
                  size={16}
                  className={isActive ? "text-blue-400" : ""}
                />
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full border border-blue-300/10 bg-blue-400/10 p-2 text-blue-200 transition hover:bg-blue-400/20 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`grid transition-all duration-300 md:hidden ${
          isOpen
            ? "mt-3 grid-rows-[1fr] opacity-100"
            : "mt-0 grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="rounded-2xl border border-blue-300/10 bg-[#08172B]/95 p-3 shadow-xl shadow-black/30 backdrop-blur-2xl">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = active === link.name;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActive(link.name);
                    setIsOpen(false);
                  }}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${
                    isActive
                      ? "bg-blue-500/15 text-blue-300"
                      : "text-slate-400 hover:bg-blue-400/10 hover:text-blue-200"
                  }`}
                >
                  <Icon size={18} />
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
