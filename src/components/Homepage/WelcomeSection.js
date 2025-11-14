"use client";

import React, { useState, useEffect } from "react";
import translations from "@/utils/translations";
import images from "@/utils/imagesImport";
import Image from "next/image";
import { getCountdown } from "@/utils/countdownHelper";
import { Link as ScrollLink } from "react-scroll";
import Tilt from "react-parallax-tilt";

const WelcomeSection = ({ language }) => {
  const [countdown, setCountdown] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setCountdown(getCountdown());

    const intervalId = setInterval(() => {
      setCountdown(getCountdown());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const { her, him } = translations[language].couple;
  const {
    small_text,
    days,
    day,
    hours,
    hour,
    minutes,
    minute,
    seconds,
    second,
    button,
  } = translations[language].welcome_section;

  if (!isClient || countdown === null) return null;

  return (
    <section
      id="welcome-section"
      className="h-svh min-h-svh w-full relative overflow-hidden"
    >
      {/* TEXT + COUNTDOWN */}
      <div className="absolute w-full h-full min-h-svh flex flex-col justify-center items-center z-10 gap-0">
        {!countdown.message && (
          <p translate="no" className="font-semibold text-white tracking-widest mt-20">
            {small_text.toUpperCase()}
          </p>
        )}

        <Tilt glareEnable={false} tiltMaxAngleX={3} tiltMaxAngleY={3} perspective={1000}>
          <div className="flex flex-col md:flex-row w-[240px] md:w-full h-[240px] md:h-auto justify-center md:gap-4 max-md:border max-md:border-[#eec87e] rounded-full max-md:p-4 cursor-default">
            <h1 translate="no" className="sloop-script welcome-names">{her}</h1>
            <h1 translate="no" className="alex-brush welcome-names text-gold">
              <span className="max-md:hidden">&nbsp;</span>&
            </h1>
            <h1 className="sloop-script welcome-names ">{him}</h1>
          </div>
        </Tilt>

        {/* COUNTDOWN OR WEDDING DONE */}
        {countdown.message ? (
          <div className="absolute bottom-16">
            <Image
              src={
                language === "en"
                  ? images.curved_en
                  : language === "it"
                  ? images.curved_it
                  : language === "pl"
                  ? images.curved_pl
                  : images.curved_en
              }
              alt="we did it"
              width={200}
              height={200}
              className="relative w-[180px] md:w-[280px] h-[180px] md:h-[280px] animate-spin-slow z-[3]"
            />
            <div className="w-[55%] h-[55%] border-2 border-gold rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[2]"></div>
          </div>
        ) : (
          <div className="flex justify-center gap-4 md:gap-8 mt-4 text-[#fffdfc]">
            <div className="flex flex-col justify-center items-center">
              <h6 translate="no">{countdown.days}</h6>
              <p translate="no" className="text-sm">
                {countdown.days === 1 ? day.toUpperCase() : days.toUpperCase()}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h6 translate="no">{countdown.hours}</h6>
              <p translate="no" className="text-sm">
                {countdown.hours === 1 ? hour.toUpperCase() : hours.toUpperCase()}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h6 translate="no">{countdown.minutes}</h6>
              <p translate="no" className="text-sm">
                {countdown.minutes === 1 ? minute.toUpperCase() : minutes.toUpperCase()}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h6 translate="no">{countdown.seconds}</h6>
              <p translate="no" className="text-sm">
                {countdown.seconds === 1 ? second.toUpperCase() : seconds.toUpperCase()}
              </p>
            </div>
          </div>
        )}

        {!countdown.message && (
          <ScrollLink
            to="savethedate-section"
            smooth={true}
            duration={1000}
            offset={-70}
            className="mt-20 btn btn-gold"
            translate="no"
          >
            {button}
          </ScrollLink>
        )}
      </div>

      {/* FULL-SCREEN BACKGROUND IMAGE */}
      <div className="absolute h-full w-full flex min-h-svh justify-center items-center z-0">
        <div className="overlay"></div>

        <Image
          src={images.welcome_2}
          alt="welcome"
          fill
          priority
          quality={100}
          className="object-cover object-center"
        />
      </div>
    </section>
  );
};

export default WelcomeSection;
