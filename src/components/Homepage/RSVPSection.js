/**
 * @file RSVPSection.js
 * @description Clean & fixed RSVPSection (React error #31 resolved)
 */

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import { motion, useScroll, useTransform } from "framer-motion";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";

import { db } from "@/firebase/config";
import images from "@/utils/imagesImport";
import translations from "@/utils/translations";
import sendEmail from "@/utils/send-email";

const renderTextArray = (arr) => {
  if (!Array.isArray(arr)) return null;

  return arr.map((item, index) => {
    if (typeof item === "string") return item;
    if (item?.text) {
      return (
        <span key={index} className={item.bold ? "font-bold" : ""}>
          {item.text}
        </span>
      );
    }
    return null;
  });
};

const RSVPSection = ({ language }) => {
  const {
    top_title,
    title,
    description_1,
    rsvp_success,
    error_enter_name,
    error_submitting,
    button,
  } = translations[language].rsvp_section;

  const [searchTerm, setSearchTerm] = useState("");
  const [guestsList, setGuestsList] = useState([]);
  const [filteredGuests, setFilteredGuests] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [guestsToRsvp, setGuestsToRsvp] = useState([]);
  const [specialRequests, setSpecialRequests] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [pageHeight, setPageHeight] = useState(0);

  const { width } = useWindowSize();

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.4, 1]);

  /* FETCH GUESTS */
  useEffect(() => {
    const fetchGuests = async () => {
      try {
        const snap = await getDocs(collection(db, "guests"));
        const arr = [];
        snap.forEach((d) => arr.push({ id: d.id, ...d.data() }));
        setGuestsList(arr);
      } catch (err) {
        console.error(err);
      }
    };
    fetchGuests();
  }, [submitted]);

  /* SEARCH */
  useEffect(() => {
    if (!searchTerm) {
      setFilteredGuests([]);
      return;
    }
    setFilteredGuests(
      guestsList.filter((g) =>
        g.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, guestsList]);

  /* PAGE HEIGHT */
  useEffect(() => {
    const update = () =>
      setPageHeight(
        Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight
        )
      );
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const handleGuestSelect = (guest) => {
    setSelectedGuest(guest);
    setGuestsToRsvp([{ ...guest, attending: guest.attending || null }]);
    setSearchTerm("");
    setSubmitted(false);
    setErrorMessage("");
    setSpecialRequests("");
  };

  const handleSubmit = async () => {
    if (!guestsToRsvp.some((g) => g.attending)) {
      setErrorMessage(error_enter_name);
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    try {
      for (const guest of guestsToRsvp) {
        await updateDoc(doc(db, "guests", guest.id), {
          attending: guest.attending,
          note: specialRequests || "",
        });
      }

      await sendEmail({
        subject: `New RSVP from ${selectedGuest.name}`,
        message: `${selectedGuest.name} submitted an RSVP.\n\nNotes:\n${
          specialRequests || "None"
        }`,
      });

      setSubmitted(true);
      setShowConfetti(guestsToRsvp.some((g) => g.attending === "Yes"));
    } catch (e) {
      console.error(e);
      setErrorMessage(error_submitting);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="rsvp-section" className="relative w-full bg-cream">
      {showConfetti && (
        <Confetti
          width={width}
          height={pageHeight}
          recycle={false}
          numberOfPieces={900}
        />
      )}

      {/* HERO */}
      <div
        className="hidden md:flex h-[500px] bg-cover bg-center items-center justify-center"
        style={{ backgroundImage: `url(${images.collage.src})` }}
      >
        <h1 className="text-gold text-9xl">{top_title}</h1>
      </div>

      {/* MOBILE */}
      <div className="md:hidden h-[500px] relative overflow-hidden">
        <motion.div ref={ref} style={{ scale }} className="absolute inset-0">
          <Image
            src={images.collage}
            alt="collage"
            fill
            className="object-cover"
          />
        </motion.div>
        <h1 className="absolute inset-0 flex items-center justify-center text-7xl text-gold">
          {top_title}
        </h1>
      </div>

      {/* CONTENT */}
      <div className="px-6 py-16 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold">{title.main}</h2>
        <p className="mt-6">{renderTextArray(description_1)}</p>

        {!submitted && (
          <>
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mt-8 w-full border px-4 py-2"
              placeholder="Your name"
            />

            {filteredGuests.map((g) => (
              <div
                key={g.id}
                className="cursor-pointer mt-2"
                onClick={() => handleGuestSelect(g)}
              >
                {g.name}
              </div>
            ))}

            {selectedGuest && (
              <>
                <textarea
                  className="mt-6 w-full border p-3"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="Message / allergies / notes"
                />

                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="mt-6 bg-gold text-white px-6 py-3"
                >
                  {button}
                </button>

                {errorMessage && (
                  <p className="text-red-500 mt-4">{errorMessage}</p>
                )}
              </>
            )}
          </>
        )}

        {submitted && (
          <p className="mt-8 text-lg font-semibold">
            {renderTextArray(rsvp_success.change_by)}
          </p>
        )}
      </div>
    </section>
  );
};

export default RSVPSection;
