import React from "react";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Achievements } from "@/components/sections/Achievements";
import { Certifications } from "@/components/sections/Certifications";
import { CodingProfiles } from "@/components/sections/CodingProfiles";
import { Testimonials } from "@/components/sections/Testimonials";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";
import { SubtleBackground } from "@/components/three/SubtleBackground";

export default function HomePage() {
  return (
    <div className="relative">
      {/* React Three Fiber Subtle 3D Floating Geometry Background */}
      <SubtleBackground />

      {/* Main Sections */}
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <Achievements />
      <Certifications />
      <CodingProfiles />
      <Testimonials />
      <Blog />
      <Contact />
    </div>
  );
}
