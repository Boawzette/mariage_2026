/**
 * @file WelcomeSection.js
 * @description This component renders the Welcome section. Multilingual!
 * @author Modified
 */

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

  if (!isClient || countdown === null) return null;

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

  return (
    <section
      id="welcome-section"
      className="h-svh min-h-svh w-full relative overflow-hidden"
    >
      {/* TOP TEXT + COUNTDOWN */}
      <div className="absolute w-full h-full min-h-svh flex flex-col justify-center items-center z-10 gap-0">

        {!countdown.message && (
          <p translate="no" className="font-semibold text-white tracking-widest mt-20">
            {small_text.toUpperCase()}
          </p>
        )}

        <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} perspective={1000}>
          <div className="flex flex-col md:flex-row w-[240px] md:w-full h-[240px] md:h-auto justify-center md:gap-4 max-md:border max-md:border-[#eec87e] rounded-full max-md:p-4 cursor-default">
            <h1 translate="no" className="sloop-script welcome-names">{her}</h1>
            <h1 translate="no" className="alex-brush welcome-names text-gold">
              <span className="max-md:hidden">&nbsp;</span>&
            </h1>
            <h1 className="sloop-script welcome-names ">{him}</h1>
          </div>
        </Tilt>

        {/* COUNTDOWN */}
        {!countdown.message ? (
          <div className="flex justify-center gap-4 md:gap-8 mt-4 text-[#fffdfc]">
            <div className="flex flex-col items-center">
              <h6>{countdown.days}</h6>
              <p className="text-sm">{countdown.days === 1 ? day.toUpperCase() : days.toUpperCase()}</p>
            </div>

            <div className="flex flex-col items-center">
              <h6>{countdown.hours}</h6>
              <p className="text-sm">{countdown.hours === 1 ? hour.toUpperCase() : hours.toUpperCase()}</p>
            </div>

            <div className="flex flex-col items-center">
              <h6>{countdown.minutes}</h6>
              <p className="text-sm">{countdown.minutes === 1 ? minute.toUpperCase() : minutes.toUpperCase()}</p>
            </div>

            <div className="flex flex-col items-center">
              <h6>{countdown.seconds}</h6>
              <p className="text-sm">{countdown.seconds === 1 ? second.toUpperCase() : seconds.toUpperCase()}</p>
            </div>
          </div>
        ) : null}

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

      {/* BACKGROUND – ONLY welcome_2 */}
      <div className="absolute md:fixed h-full w-full flex min-h-svh justify-center items-center z-0">
        <div className="overlay"></div>

        <div className="h-full w-full z-0">
          <Image
            src={images.welcome_2}
            alt="welcome_2"
            width={1000}
            height={1600}
            quality={100}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
