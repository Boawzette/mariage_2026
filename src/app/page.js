"use client";

import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    if (typeof window !== "undefined") window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      const browserLanguage = navigator.language || navigator.userLanguage;
      const supportedLanguages = ["en", "it", "pt"];
      const detectedLanguage = supportedLanguages.includes(browserLanguage.slice(0, 2))
        ? browserLanguage.slice(0, 2)
        : "en";
      setLanguage(detectedLanguage);
    }
  }, []);

  return (
    <main className="relative w-full h-full">
      {/* SplashScreen et toutes les sections ne sont accessibles que si middleware autorise */}
      <SplashScreen />
      <LanguageDetector />
      <Navbar language={language} detectedLanguage={language} setLanguage={setLanguage} />
      <div className="relative z-10">
        <SaveTheDate language={language} />
        <ScheduleSection language={language} />
        <InfoSection language={language} />
        <RSVPSection language={language} />
        <RegistrySection language={language} />
        <MusicSection language={language} />
      </div>
    </main>
  );
}
