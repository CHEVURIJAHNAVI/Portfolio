"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Cloud, Trophy, Code2, Sparkles, CheckCircle, Target, Award } from "lucide-react";
import { PROFILE_DATA, EDUCATION_DATA } from "@/data/profile";

export function About() {
  const getHighlightIcon = (iconName: string) => {
    switch (iconName) {
      case "GraduationCap": return <GraduationCap className="w-6 h-6 text-indigo-500" />;
      case "Cloud": return <Cloud className="w-6 h-6 text-purple-500" />;
      case "Trophy": return <Trophy className="w-6 h-6 text-amber-500" />;
      case "Code2": return <Code2 className="w-6 h-6 text-emerald-500" />;
      default: return <Award className="w-6 h-6 text-pink-500" />;
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 text-xs font-semibold tracking-wider uppercase mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" /> Background & Vision
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground"
          >
            Architecting <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Intelligence</span> & Scale
          </motion.h2>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {PROFILE_DATA.highlights.map((highlight, idx) => (
            <motion.div
              key={highlight.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-2xl border border-border/50 hover:border-indigo-500/40 transition-all flex flex-col items-center text-center group shadow-sm hover:shadow-md"
            >
              <div className="p-3 rounded-xl bg-secondary group-hover:scale-110 transition-transform mb-3">
                {getHighlightIcon(highlight.icon)}
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold text-foreground">{highlight.value}</span>
              <span className="text-xs sm:text-sm font-medium text-muted-foreground mt-1">{highlight.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Professional Summary & Career Objective */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="glass-panel p-8 rounded-2xl border border-border/50 space-y-4">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                <span className="w-2.5 h-6 bg-indigo-500 rounded-full" /> Professional Summary
              </h3>
              <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                {PROFILE_DATA.about.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Career Objective */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/5 border border-indigo-500/20 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-indigo-500/20 text-indigo-500 shrink-0 mt-1">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-foreground">Career Objective</h4>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                  {PROFILE_DATA.currentGoal}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Education Timeline & Fun Facts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Education Timeline */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-border/50">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2 mb-6">
                <GraduationCap className="w-5 h-5 text-indigo-500" /> Academic Timeline
              </h3>
              
              <div className="relative border-l-2 border-indigo-500/30 ml-3 space-y-8 pb-2">
                {EDUCATION_DATA.map((edu, idx) => (
                  <div key={idx} className="relative pl-6">
                    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-indigo-500" />
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                      {edu.period}
                    </span>
                    <h4 className="text-base font-bold text-foreground mt-2">{edu.degree}</h4>
                    <p className="text-sm font-medium text-purple-400 mt-0.5">{edu.institution}</p>
                    <div className="mt-2 inline-block px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-500 font-bold text-xs border border-emerald-500/20">
                      {edu.score}
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Fun Facts */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-border/50">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-amber-500" /> Behind the Code
              </h3>
              <ul className="space-y-3">
                {PROFILE_DATA.funFacts.map((fact, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-indigo-500 shrink-0 mt-1" />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
