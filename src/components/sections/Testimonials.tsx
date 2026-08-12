"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Sparkles } from "lucide-react";
import { TESTIMONIALS_DATA } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 text-xs font-semibold tracking-wider uppercase mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" /> Peer & Mentor Endorsements
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground"
          >
            What Leaders Say <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">About Me</span>
          </motion.h2>
          <p className="text-muted-foreground mt-3 text-sm sm:text-base">
            Recommendations from engineering supervisors, AI research mentors, and hackathon teammates.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-border/60 flex flex-col justify-between relative shadow-sm hover:shadow-xl transition-all group"
            >
              <Quote className="w-10 h-10 text-indigo-500/20 absolute top-6 right-6 pointer-events-none group-hover:text-indigo-500/40 transition-colors" />

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed italic relative z-10 mb-8">
                &ldquo;{item.content}&rdquo;
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-border/40 relative z-10">
                <img
                  src={item.avatar}
                  alt={item.name}
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500/30"
                />
                <div>
                  <h4 className="text-base font-bold text-foreground">{item.name}</h4>
                  <p className="text-xs font-semibold text-indigo-400">{item.role}</p>
                  <p className="text-[11px] text-muted-foreground">{item.company} &bull; {item.relationship}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
