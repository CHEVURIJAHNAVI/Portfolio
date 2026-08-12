"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, Sparkles, CheckCircle2 } from "lucide-react";
import { EXPERIENCE_DATA } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 text-xs font-semibold tracking-wider uppercase mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" /> Work History
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground"
          >
            Professional <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Experience</span>
          </motion.h2>
          <p className="text-muted-foreground mt-3 text-sm sm:text-base">
            Track record of architecting AI systems and optimizing enterprise web frontends.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-indigo-500/30 ml-4 sm:ml-32 space-y-12 pb-4">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="relative pl-6 sm:pl-10 group"
            >
              {/* Timeline Node Dot */}
              <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-background border-4 border-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.6)] group-hover:scale-125 transition-transform" />

              {/* Period indicator for desktop positioned to left of timeline */}
              <div className="hidden sm:block absolute -left-36 top-1 w-28 text-right font-mono text-xs font-bold text-indigo-400">
                {exp.period}
              </div>

              {/* Card Panel */}
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-border/60 hover:border-indigo-500/40 transition-all shadow-sm hover:shadow-lg relative overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="sm:hidden text-xs font-mono font-bold text-indigo-400 block mb-1">
                      {exp.period}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight flex items-center gap-2">
                      {exp.role}
                    </h3>
                    <div className="text-base font-bold text-purple-400 mt-0.5 flex items-center gap-2">
                      <Briefcase className="w-4 h-4" /> {exp.company}
                      <span className="text-xs px-2 py-0.5 rounded-md bg-secondary text-muted-foreground font-normal">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground shrink-0 sm:self-start mt-1 sm:mt-0">
                    <MapPin className="w-3.5 h-3.5 text-pink-500" /> {exp.location}
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-2.5 my-6">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-1" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies Badges */}
                <div className="border-t border-border/30 pt-4 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
