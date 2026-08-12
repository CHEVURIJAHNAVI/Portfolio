"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight, Mail, Code2, Terminal, ChevronDown, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { PROFILE_DATA } from "@/data/profile";
import { SOCIALS } from "@/constant/socials";
import HeroVideo from "./HeroVideo";

const roles = [
  "Software Engineer",
  "AI Engineer",
  "Full Stack Developer",
  "Cloud Solutions Architect",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typeSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setText(
          currentRole.substring(0, text.length + (isDeleting ? -1 : 1))
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "Github": return <GithubIcon className="w-5 h-5" />;
      case "Linkedin": return <LinkedinIcon className="w-5 h-5" />;
      case "Mail": return <Mail className="w-5 h-5" />;
      case "Code2": return <Code2 className="w-5 h-5" />;
      case "Terminal": return <Terminal className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern">
      {/* Floating Animated Gradient Blobs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl pointer-events-none animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-pink-500/15 rounded-full blur-3xl pointer-events-none animate-float" style={{ animationDelay: "4s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 text-xs sm:text-sm font-semibold tracking-wide"
            >
              <Sparkles className="w-4 h-4" /> Available for Top Software & AI Roles
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none text-foreground"
            >
              Hi, I&apos;m <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {PROFILE_DATA.name}
              </span>
            </motion.h1>

            {/* Typing Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl lg:text-3xl font-bold text-muted-foreground min-h-[40px] flex items-center justify-center lg:justify-start"
            >
              <span>I engineer&nbsp;</span>
              <span className="text-foreground underline decoration-indigo-500 decoration-wavy decoration-2">
                {text}
              </span>
              <span className="w-0.5 h-6 bg-indigo-500 ml-1 animate-pulse" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              {PROFILE_DATA.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-95 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 transition-all transform hover:-translate-y-0.5"
              >
                Hire Me <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  // Fallback alert if resume PDF placeholder is clicked
                  alert("Resume downloading... You can replace /public/resume.pdf with your actual resume document!");
                }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-secondary hover:bg-secondary/80 text-foreground font-semibold text-sm border border-border/60 transition-all transform hover:-translate-y-0.5 shadow-sm"
              >
                Download Resume <Download className="w-4 h-4 text-indigo-500" />
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mr-2">
                Connect:
              </span>
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={`${social.name} ${social.stats ? `(${social.stats})` : ""}`}
                  className="p-3 rounded-xl bg-secondary/60 hover:bg-secondary text-muted-foreground hover:text-indigo-500 transition-all border border-border/40 hover:scale-110 shadow-sm"
                >
                  {getSocialIcon(social.iconName)}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Video Column */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <HeroVideo />
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
      >
        <span className="text-xs font-semibold tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-4 h-4 text-indigo-500" />
        </motion.div>
      </motion.a>
    </section>
  );
}
