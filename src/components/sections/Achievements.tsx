"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Award, Sparkles, ChevronRight } from "lucide-react";
import { ACHIEVEMENTS_DATA } from "@/data/achievements";

export function Achievements() {
  const [activeId, setActiveId] = useState<string>(ACHIEVEMENTS_DATA[0].id);

  const activeItem = ACHIEVEMENTS_DATA.find((item) => item.id === activeId) || ACHIEVEMENTS_DATA[0];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-semibold tracking-wider uppercase mb-3"
          >
            <Trophy className="w-3.5 h-3.5" /> Milestones & Honours
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground"
          >
            Key <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">Achievements</span>
          </motion.h2>
          <p className="text-muted-foreground mt-3 text-sm sm:text-base">
            National hackathon standings, academic excellence, and algorithmic competitiveness.
          </p>
        </div>

        {/* Interactive Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive Timeline List */}
          <div className="lg:col-span-5 space-y-3">
            {ACHIEVEMENTS_DATA.map((item) => {
              const isActive = item.id === activeId;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all border flex items-center justify-between group ${
                    isActive
                      ? "bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-transparent border-amber-500/40 shadow-md scale-[1.02]"
                      : "glass-panel border-border/50 hover:border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2.5 rounded-xl transition-colors ${isActive ? "bg-amber-500 text-white shadow-md" : "bg-secondary text-muted-foreground group-hover:text-amber-500"}`}>
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className={`text-sm sm:text-base font-bold line-clamp-1 ${isActive ? "text-foreground" : ""}`}>
                        {item.title}
                      </h4>
                      <span className="text-xs text-muted-foreground font-mono">{item.date}</span>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? "translate-x-1 text-amber-500" : "opacity-0 group-hover:opacity-100"}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Display Panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.3 }}
                className="glass-panel p-8 sm:p-10 rounded-3xl border border-amber-500/30 relative overflow-hidden shadow-xl"
              >
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-amber-500/10 via-orange-500/5 to-transparent rounded-full blur-3xl -z-10" />

                <div className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-500 text-xs font-bold font-mono mb-4 border border-amber-500/30">
                  {activeItem.badge}
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mb-2">
                  {activeItem.title}
                </h3>
                <h4 className="text-sm font-semibold text-muted-foreground mb-6">
                  {activeItem.organization} &bull; <span className="text-amber-400 font-mono">{activeItem.date}</span>
                </h4>

                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {activeItem.description}
                </p>

                <div className="mt-8 pt-6 border-t border-border/30 flex items-center justify-between text-xs text-muted-foreground">
                  <span>Verified National Standing</span>
                  <span className="flex items-center gap-1 text-amber-500 font-semibold">
                    <Sparkles className="w-3.5 h-3.5" /> High Impact
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
