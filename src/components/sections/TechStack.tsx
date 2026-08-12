"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Terminal, Layers, Database, Cloud, Brain, Code2, Sparkles } from "lucide-react";
import { SKILLS_DATA } from "@/data/skills";

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...SKILLS_DATA.map((item) => item.category)];

  const getCategoryIcon = (cat: string) => {
    if (cat.includes("Programming")) return <Terminal className="w-5 h-5 text-indigo-500" />;
    if (cat.includes("AI")) return <Brain className="w-5 h-5 text-purple-500" />;
    if (cat.includes("Backend")) return <Layers className="w-5 h-5 text-emerald-500" />;
    if (cat.includes("Frontend")) return <Code2 className="w-5 h-5 text-pink-500" />;
    if (cat.includes("Cloud")) return <Cloud className="w-5 h-5 text-amber-500" />;
    if (cat.includes("Databases")) return <Database className="w-5 h-5 text-cyan-500" />;
    return <Cpu className="w-5 h-5 text-rose-500" />;
  };

  const filteredCategories = activeCategory === "All"
    ? SKILLS_DATA
    : SKILLS_DATA.filter((item) => item.category === activeCategory);

  return (
    <section id="tech" className="py-24 relative overflow-hidden bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 text-xs font-semibold tracking-wider uppercase mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" /> Technical Arsenal
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground"
          >
            Engineering <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Tech Stack</span>
          </motion.h2>
          <p className="text-muted-foreground mt-3 text-sm sm:text-base">
            Categorized overview of tools, languages, and frameworks leveraged to build production systems.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all border ${
                activeCategory === cat
                  ? "bg-foreground text-background border-foreground shadow-md scale-105"
                  : "bg-card text-muted-foreground border-border/60 hover:border-foreground/40 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Animated Categorized Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredCategories.map((catData) => (
              <motion.div
                layout
                key={catData.category}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glass-panel p-6 sm:p-8 rounded-2xl border border-border/60 hover:border-indigo-500/40 transition-all flex flex-col justify-between group shadow-sm hover:shadow-lg relative overflow-hidden"
              >
                {/* Subtle Background Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full blur-2xl -z-10 group-hover:scale-150 transition-transform" />

                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-secondary group-hover:scale-110 transition-transform shadow-inner">
                      {getCategoryIcon(catData.category)}
                    </div>
                    <h3 className="text-lg font-bold text-foreground tracking-tight">{catData.category}</h3>
                  </div>

                  {/* Skills Badges Grid */}
                  <div className="flex flex-wrap gap-2.5">
                    {catData.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="px-3.5 py-2 rounded-xl bg-secondary/80 hover:bg-indigo-500/10 border border-border/50 hover:border-indigo-500/30 transition-colors flex items-center justify-between gap-2 group/badge"
                      >
                        <span className="text-sm font-semibold text-foreground group-hover/badge:text-indigo-500 transition-colors">
                          {skill.name}
                        </span>
                        {skill.level && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-background/80 text-muted-foreground border border-border/40">
                            {skill.level}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
