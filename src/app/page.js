/**
 * @file page.js
 * @description Homepage structure including various sections like welcome, save the date, RSVP, and more for the wedding website.
 * @author Emanuele Sgroi
 * @date 19 October 2024
 */

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

  // Scroll to top on mount — safe on client only
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []);

  // Detect browser language — safe check for SSR
  useEffect(() => {
    if (typeof navigator !== "undefined") {
      const browserLanguage = navigator.language || navigator.userLanguage;
      const supportedLanguages = ["en", "it", "pt"];
      const detectedLanguage = supportedLanguages.includes(
        browserLanguage.slice(0, 2)
      )
        ? browserLanguage.slice(0, 2)
        : "en";
      setLanguage(detectedLanguage);
    }
  }, []);

  return (
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

      {/* Welcome Section */}
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
  );
}
