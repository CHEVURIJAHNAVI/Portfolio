"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2, Layers, AlertTriangle, TrendingUp, Award } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { ProjectItem } from "@/types";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-card border border-border/60 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-border/40 bg-muted/30 sticky top-0 z-20 backdrop-blur-md">
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-indigo-500">Case Study Architecture</span>
              <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
            </div>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
            {/* Tagline & Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-transparent p-5 rounded-xl border border-indigo-500/20">
              <div>
                <h4 className="text-lg font-bold text-foreground">{project.tagline}</h4>
                <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl bg-secondary hover:bg-secondary/80 text-foreground transition-colors border border-border/50 shadow-sm"
                  >
                    <GithubIcon className="w-4 h-4" /> Code
                  </a>
                )}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white transition-opacity shadow-md"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                )}
              </div>
            </div>

            {/* Metrics Grid */}
            {project.caseStudy.metrics && project.caseStudy.metrics.length > 0 && (
              <div>
                <h5 className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-3 flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-emerald-500" /> Performance & Scale Metrics
                </h5>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {project.caseStudy.metrics.map((metric, idx) => (
                    <div key={idx} className="glass-panel p-4 rounded-xl text-center border border-border/40">
                      <div className="text-2xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                        {metric.value}
                      </div>
                      <div className="text-xs font-medium text-muted-foreground mt-1">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Overview */}
            <div>
              <h5 className="text-sm font-bold uppercase tracking-wider text-foreground mb-2">Technical Overview</h5>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{project.caseStudy.overview}</p>
            </div>

            {/* Key Features */}
            <div>
              <h5 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-500" /> Key Features & Capabilities
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.caseStudy.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-secondary/40 border border-border/30 text-sm">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* System Architecture */}
            <div className="p-5 rounded-xl bg-muted/40 border border-border/40">
              <h5 className="text-sm font-bold uppercase tracking-wider text-foreground mb-2 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-purple-500" /> System Architecture & Data Flow
              </h5>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.caseStudy.architecture}</p>
            </div>

            {/* Challenges & Engineering Solutions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-amber-500/5 border border-amber-500/20">
                <h5 className="text-sm font-bold uppercase tracking-wider text-amber-500 mb-3 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" /> Engineering Challenges
                </h5>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {project.caseStudy.challenges.map((challenge, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                <h5 className="text-sm font-bold uppercase tracking-wider text-emerald-500 mb-3 flex items-center gap-1.5">
                  <Award className="w-4 h-4" /> Impact & Results
                </h5>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {project.caseStudy.results.map((result, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
