"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Clock, Sparkles, ArrowUpRight } from "lucide-react";
import { BLOGS_DATA } from "@/data/blogs";

export function Blog() {
  return (
    <section id="blog" className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 text-xs font-semibold tracking-wider uppercase mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" /> Technical Writings
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground"
          >
            Engineering <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Blog</span>
          </motion.h2>
          <p className="text-muted-foreground mt-3 text-sm sm:text-base">
            Insights on distributed AI architectures, database concurrency control, and dynamic programming algorithms.
          </p>
        </div>

        {/* Coming Soon Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/30 text-center mb-12 backdrop-blur-md shadow-inner relative overflow-hidden"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-indigo-500 text-white text-xs font-bold tracking-widest uppercase mb-3 shadow-md animate-pulse">
            Coming Soon ✍️
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-foreground">
            Long-form technical articles currently in editorial review.
          </h3>
          <p className="text-sm text-muted-foreground mt-2 max-w-xl mx-auto">
            Subscribe or check back soon for deep technical deep-dives and architectural breakdown tutorials.
          </p>
        </motion.div>

        {/* Preview Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOGS_DATA.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-border/60 flex flex-col justify-between opacity-80 hover:opacity-100 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-muted-foreground mb-4">
                  <span className="flex items-center gap-1 text-indigo-400 font-semibold">
                    <BookOpen className="w-3.5 h-3.5" /> Preview
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-foreground group-hover:text-indigo-500 transition-colors leading-snug mb-3">
                  {post.title}
                </h3>

                <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-md bg-secondary text-muted-foreground text-[11px] font-medium">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-border/30 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-muted-foreground group-hover:text-indigo-500 transition-colors">
                  <span>{post.date}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
