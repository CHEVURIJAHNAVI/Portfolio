"use client";

import React from "react";
import { Terminal, Heart, ArrowUpRight } from "lucide-react";
import { PROFILE_DATA } from "@/data/profile";
import { SOCIALS } from "@/constant/socials";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/50 backdrop-blur-sm py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-sm">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold tracking-tight text-base">{PROFILE_DATA.name}</span>
              <p className="text-xs text-muted-foreground">{PROFILE_DATA.title}</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            {SOCIALS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors inline-flex items-center gap-1 group"
              >
                {social.name}
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-border/30 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {PROFILE_DATA.name}. Built with Next.js 15, React 19 & Tailwind CSS.</p>
          <p className="flex items-center gap-1">
            Engineered with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> for Enterprise Scalability & AI Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
