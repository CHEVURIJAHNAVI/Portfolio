"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code2, Terminal, Cpu, Award, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { CODING_PROFILES_DATA } from "@/data/coding-profiles";

export function CodingProfiles() {
  const getProfileIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2": return <Code2 className="w-6 h-6 text-amber-500" />;
      case "Github": return <GithubIcon className="w-6 h-6 text-purple-500" />;
      case "Terminal": return <Terminal className="w-6 h-6 text-yellow-500" />;
      case "Cpu": return <Cpu className="w-6 h-6 text-emerald-500" />;
      case "Award": return <Award className="w-6 h-6 text-cyan-500" />;
      default: return <Sparkles className="w-6 h-6 text-indigo-500" />;
    }
  };

  return (
    <section id="coding-profiles" className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 text-xs font-semibold tracking-wider uppercase mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" /> Competitive Programming
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground"
          >
            Coding <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Profiles & Stats</span>
          </motion.h2>
          <p className="text-muted-foreground mt-3 text-sm sm:text-base">
            Active daily problem-solving streaks across top developer platforms.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CODING_PROFILES_DATA.map((profile, idx) => (
            <motion.div
              key={profile.platform}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-border/60 hover:border-indigo-500/40 transition-all flex flex-col justify-between group shadow-sm hover:shadow-xl relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-secondary group-hover:scale-110 transition-transform shadow-inner">
                    {getProfileIcon(profile.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground tracking-tight">{profile.platform}</h3>
                    <span className="text-xs font-mono text-muted-foreground">@{profile.username}</span>
                  </div>
                </div>
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${profile.platform}`}
                  className="p-2 rounded-lg bg-secondary/80 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 my-4">
                {profile.stats.map((stat, sIdx) => (
                  <div key={sIdx} className="p-3 rounded-xl bg-secondary/50 border border-border/30 text-center">
                    <div className="text-base sm:text-lg font-extrabold text-foreground tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Bottom bar */}
              <div className="mt-4 pt-3 border-t border-border/30 flex items-center justify-between text-xs text-muted-foreground font-mono">
                <span>Verified Standing</span>
                <span className="text-indigo-400 font-semibold">Active Streak 🔥</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
