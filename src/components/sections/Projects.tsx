"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Sparkles, BookOpen, Trophy, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { PROJECTS_DATA } from "@/data/projects";
import { ProjectItem } from "@/types";
import { ProjectModal } from "./ProjectModal";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 text-xs font-semibold tracking-wider uppercase mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" /> Featured Architecture
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground"
          >
            Production <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <p className="text-muted-foreground mt-3 text-sm sm:text-base">
            Deep-dive case studies into AI teaching assistants, maritime early warning platforms, and enterprise service booking engines.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="glass-panel rounded-2xl border border-border/60 hover:border-indigo-500/50 transition-all flex flex-col justify-between overflow-hidden group shadow-md hover:shadow-2xl"
            >
              {/* Thumbnail Header */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                {/* Image Placeholder / Unsplash */}
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Achievements Badge if present */}
                {project.achievements && project.achievements.map((ach) => (
                  <div key={ach} className="absolute top-3 right-3 px-3 py-1 rounded-full bg-amber-500/90 backdrop-blur-md text-white text-[11px] font-bold flex items-center gap-1 shadow-lg">
                    <Trophy className="w-3 h-3" /> {ach}
                  </div>
                ))}

                {/* Title Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{project.title}</h3>
                  <p className="text-xs text-indigo-200 font-medium line-clamp-1">{project.tagline}</p>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-secondary/80 text-foreground border border-border/40 text-[11px] font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions Footer */}
                <div className="pt-4 border-t border-border/40 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-500 hover:text-indigo-400 transition-colors group/btn"
                  >
                    <BookOpen className="w-4 h-4" /> Case Study
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Repository"
                        className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground transition-colors border border-border/40"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live Demo"
                        className="p-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white transition-opacity shadow-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground font-mono">
            💡 Admin Friendly: Adding new projects only requires creating one object inside <code className="text-indigo-500 bg-indigo-500/10 px-1.5 py-0.5 rounded">/src/data/projects.ts</code>.
          </p>
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
