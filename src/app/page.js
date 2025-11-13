"use client";

import React, { useState, useEffect } from "react";
import AuthGuard from "@/components/AuthGuard";

import {
  SplashScreen,
  Navbar,
  WelcomeSection,
  SaveTheDate,
  ScheduleSection,
  InfoSection,
  RSVPSection,
  RegistrySection,
  MusicSection,
} from "@/components";

import LanguageDetector from "@/components/LanguageDetector/LanguageDetector";

export default function Home() {
  const [language, setLanguage] = useState("en");

  // Always run — no conditions around it
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Detect language — always runs, not conditionally
  useEffect(() => {
    const browserLanguage = navigator.language || navigator.userLanguage;
    const supported = ["en", "it", "pt"];
    const detected = supported.includes(browserLanguage.slice(0, 2))
      ? browserLanguage.slice(0, 2)
      : "en";

    setLanguage(detected);
  }, []);

  return (
    <AuthGuard>
      <main className="relative w-full h-full">
        {/* Splash Screen */}
        <SplashScreen />

        {/* Detect Language */}
        <LanguageDetector />

        {/* Navbar */}
        <Navbar
          language={language}
          detectedLanguage={language}
          setLanguage={setLanguage}
        />

        {/* Sections */}
        <WelcomeSection language={language} />

        <div className="relative z-10">
          <SaveTheDate language={language} />
          <ScheduleSection language={language} />
          <InfoSection language={language} />
          <RSVPSection language={language} />
          <RegistrySection language={language} />
          <MusicSection language={language} />
        </div>
      </main>
    </AuthGuard>
  );
}
