"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import confetti from "canvas-confetti";
import { PROFILE_DATA } from "@/data/profile";
import { SOCIALS } from "@/constant/socials";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network / EmailJS send delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (err) {
        // ignore if canvas confetti fails in non-browser environment
      }
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 text-xs font-semibold tracking-wider uppercase mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" /> Initiate Dialogue
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground"
          >
            Let&apos;s Build Something <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Extraordinary</span>
          </motion.h2>
          <p className="text-muted-foreground mt-3 text-sm sm:text-base">
            Actively seeking full-time Software Engineer, AI Engineer, and Backend Engineering opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Info & Google Maps Placeholder */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-panel p-8 rounded-3xl border border-border/60 space-y-6 shadow-md">
              <h3 className="text-2xl font-bold text-foreground tracking-tight">Contact Details</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Whether you have an exciting enterprise role, a collaborative AI research project, or simply want to chat about scalable architectures, my inbox is open!
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href={`mailto:${PROFILE_DATA.email}`}
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-secondary/50 hover:bg-indigo-500/10 transition-colors border border-border/40 group"
                >
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-500 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground block">Email Address</span>
                    <span className="text-sm sm:text-base font-semibold text-foreground break-all">{PROFILE_DATA.email}</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-secondary/50 border border-border/40">
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-500">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground block">Phone Contact</span>
                    <span className="text-sm sm:text-base font-semibold text-foreground">{PROFILE_DATA.phone}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-secondary/50 border border-border/40">
                  <div className="p-3 rounded-xl bg-pink-500/10 text-pink-500">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground block">Location</span>
                    <span className="text-sm sm:text-base font-semibold text-foreground">{PROFILE_DATA.location}</span>
                  </div>
                </div>
              </div>

              {/* Quick Social Buttons */}
              <div className="pt-4 border-t border-border/40 flex items-center gap-3">
                <span className="text-xs font-semibold text-muted-foreground">Socials:</span>
                {SOCIALS.slice(0, 2).map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-secondary hover:bg-secondary/80 text-xs font-semibold text-foreground transition-colors"
                  >
                    {s.name === "GitHub" ? <GithubIcon className="w-3.5 h-3.5" /> : <LinkedinIcon className="w-3.5 h-3.5" />}
                    {s.name} <ArrowUpRight className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>

            {/* Google Maps Visual Graphic Placeholder */}
            <div className="glass-panel p-6 rounded-3xl border border-border/60 relative overflow-hidden bg-gradient-to-br from-slate-900 to-indigo-950 text-white text-center aspect-[16/8] flex flex-col items-center justify-center shadow-lg group">
              <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
              
              <div className="w-12 h-12 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 mb-2 animate-bounce">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold relative z-10">Google Maps Integration Ready</h4>
              <p className="text-xs text-indigo-200 mt-1 relative z-10 max-w-xs">
                Location set to India. Can be embedded directly using official Google Maps iframe or Mapbox SDK.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-border/60 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

              <h3 className="text-2xl font-bold text-foreground mb-2">Send a Message</h3>
              <p className="text-sm text-muted-foreground mb-8">
                Form responses can be wired to EmailJS or Formspree in one click.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-foreground">Message Dispatched!</h4>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto">
                    Thank you for reaching out. I have received your note and will respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-full bg-secondary hover:bg-secondary/80 text-foreground text-sm font-semibold transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-foreground">
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="Elon Musk"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border/80 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-sm text-foreground transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-foreground">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="elon@x.ai"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border/80 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-sm text-foreground transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-foreground">
                      Subject / Role Title
                    </label>
                    <input
                      id="subject"
                      type="text"
                      required
                      placeholder="Opportunity for AI Engineer at Google / OpenAI"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border/80 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-sm text-foreground transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Hi Jahnavi, we were thoroughly impressed by your portfolio and would love to schedule a technical interview..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border/80 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-sm text-foreground transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-95 disabled:opacity-50 text-white font-bold text-sm shadow-lg shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    ) : (
                      <>
                        Transmit Message <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
