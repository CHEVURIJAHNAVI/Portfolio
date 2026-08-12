"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, Maximize2, Minimize2 } from "lucide-react";

export default function HeroVideo() {
  const [isMuted, setIsMuted] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      videoRef.current.play().catch(() => {
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play().catch(() => {});
        }
      });
    }
  }, [isMuted]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  if (isFullScreen) {
    return (
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-auto">
        {/* Video Spreading Across Entire Hero Section - Crisp, Clear, No Dark Filters */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src="/videos/jahnavi-intro.mp4" type="video/mp4" />
        </video>

        {/* Soft gradient ONLY behind the left text area so typography is readable without hiding the video */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-3/5 bg-gradient-to-r from-background/90 via-background/50 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />

        {/* Prominent Audio & View Controls */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute top-28 right-6 sm:right-10 z-50 flex items-center gap-3 bg-slate-900/85 backdrop-blur-md px-5 py-3 rounded-full border-2 border-indigo-500/60 shadow-[0_0_30px_rgba(99,102,241,0.5)] cursor-pointer hover:bg-slate-900 transition-all transform hover:scale-105"
        >
          <button
            onClick={toggleMute}
            className="flex items-center gap-2.5 font-bold text-xs sm:text-sm tracking-wide"
          >
            {isMuted ? (
              <>
                <VolumeX className="w-5 h-5 text-rose-400 animate-bounce" />
                <span className="text-white">Click to Enable Audio 🔊</span>
              </>
            ) : (
              <>
                <Volume2 className="w-5 h-5 text-emerald-400 animate-pulse" />
                <span className="text-emerald-300">Audio Playing (Click to Mute)</span>
              </>
            )}
          </button>

          <div className="w-px h-5 bg-white/20" />

          <button
            onClick={toggleFullScreen}
            title="Switch to Circular View"
            className="text-white hover:text-indigo-400 transition-colors p-1"
          >
            <Minimize2 className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col items-center justify-center z-20">
      {/* Soft purple and pink glow behind the circle */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] bg-gradient-to-tr from-purple-600/40 via-pink-500/30 to-indigo-500/30 rounded-full blur-3xl -z-10 animate-pulse" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.03 }}
        onClick={toggleMute}
        className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden border-4 border-purple-500 shadow-[0_0_60px_rgba(168,85,247,0.6)] cursor-pointer group"
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/jahnavi-intro.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 pointer-events-none" />

        {/* Hover Audio Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/80 backdrop-blur-md border border-white/20 flex items-center gap-2 text-white text-xs font-semibold shadow-lg">
          {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
          <span>{isMuted ? "Unmute Sound" : "Mute Sound"}</span>
        </div>
      </motion.div>

      {/* Expand Button */}
      <button
        onClick={toggleFullScreen}
        className="mt-4 px-4 py-2 rounded-full bg-secondary/80 hover:bg-secondary text-xs font-semibold text-foreground border border-border/60 flex items-center gap-2 transition-all shadow-md transform hover:-translate-y-0.5"
      >
        <Maximize2 className="w-4 h-4 text-purple-500" /> Spread to Entire Hero Section
      </button>
    </div>
  );
}
