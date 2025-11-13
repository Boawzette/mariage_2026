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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const checkAuth = async () => {
      const res = await fetch("/api/auth/check-password");
      setIsAuthenticated(res.ok);
      setLoading(false);

      if (!res.ok) window.location.href = "/login";
    };
    checkAuth();
  }, []);

  if (loading || !isAuthenticated) return null;

  useEffect(() => {
    if (typeof window !== "undefined") window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative w-full h-full">
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
