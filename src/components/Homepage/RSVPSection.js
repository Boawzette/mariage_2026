/**
 * @file RSVPSection.js
 * @description Corrected version of RSVPSection component to fix React #31 error.



 */

import React, { useState, useEffect, useRef } from "react";
import images from "@/utils/imagesImport";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import sendEmail from "@/utils/send-email";
import { motion, useScroll, useTransform } from "framer-motion";
import translations from "@/utils/translations";
import Image from "next/image";

const RSVPSection = ({ language }) => {
  const {
    top_title,
    title,
    description_1,
    description_2,
    label,
    placeholder,
    no_found,
    multiple_guests_1,
    multiple_guests_2,
    single_guest_1,
    single_guest_2,
    answers,
    note_placeholder,
    rsvp_success,
    error_enter_name,
    error_submitting,
    button,
  } = translations[language].rsvp_section;

  const [searchTerm, setSearchTerm] = useState("");
  const [guestsList, setGuestsList] = useState([]);
  const [filteredGuests, setFilteredGuests] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [specialRequests, setSpecialRequests] = useState("");
  const [guestsToRsvp, setGuestsToRsvp] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [pageHeight, setPageHeight] = useState(0);
  const { width, height } = useWindowSize();

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { delay: 0.2, staggerChildren: 0.2 } },
  };
  const letterVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);

  useEffect(() => {
    const fetchGuests = async () => {
      try {
        const guestsCollectionRef = collection(db, "guests");
        const querySnapshot = await getDocs(guestsCollectionRef);
        const guestsArray = [];
        querySnapshot.forEach((doc) => { guestsArray.push({ id: doc.id, ...doc.data() }); });
        setGuestsList(guestsArray);
      } catch (error) { console.error("Error fetching guests:", error); }
    };
    fetchGuests();
  }, [submitted]);

  useEffect(() => {
    if (searchTerm) {
      const filtered = guestsList.filter((guest) => guest.name.toLowerCase().includes(searchTerm.toLowerCase()));
      setFilteredGuests(filtered);
    } else {
      setFilteredGuests([]);
    }
  }, [searchTerm, guestsList]);

  useEffect(() => {
    const updatePageHeight = () => {
      setPageHeight(Math.max(document.body.scrollHeight, document.documentElement.scrollHeight));
    };
    updatePageHeight();
    window.addEventListener("resize", updatePageHeight);
    return () => window.removeEventListener("resize", updatePageHeight);
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    if (selectedGuest) {
      setSelectedGuest(null);
      setGuestsToRsvp([]);
      setSubmitted(false);
      setErrorMessage("");
      setSpecialRequests("");
    }
  };

  const handleGuestSelect = (guest) => {
    setSelectedGuest(guest);
    setSearchTerm("");
    setSubmitted(false);
    setErrorMessage("");
    setSpecialRequests("");

    const relatedGuests = guestsList.filter((g) => guest.relationshipIds.includes(g.id));
    const guestsWithAttending = [guest, ...relatedGuests].map((g) => ({ ...g, attending: g.attending || "Unknown" }));
    setGuestsToRsvp(guestsWithAttending);
  };

  const hasAttendingGuests = () => {
    return (selectedGuest?.attending === "Yes" || guestsToRsvp.some((guest) => guest.attending === "Yes"));
  };

  const handleSubmit = async () => {
    if (!isAnyCheckboxSelected()) {
      setErrorMessage(error_enter_name);
      } else {
      setErrorMessage("");
      setIsLoading(true);
    try {
      for (let guest of guestsToRsvp) {
          const guestDocRef = doc(db, "guests", String(guest.id));
          // Add special request or set note if RSVP done for related guests
          let note = specialRequests || "";
          if (guestsToRsvp.length > 1) {note = `${note} ---> RSVP done by ${selectedGuest?.name}`.trim();
          }
          await updateDoc(guestDocRef, { attending: guest.attending, note: note,});
        }

      const shouldSendEmail = guestsToRsvp.some((guest) => guest.attending === "Yes" || guest.attending === "No");
      if (shouldSendEmail) {
        let emailContent = `${selectedGuest.name} submitted an RSVP from the website.\n\nRSVP Information:\n\nGuest who submitted the RSVP:\n- Name: ${selectedGuest.name}\n- Attending: ${guestsToRsvp[0]?.attending}\n- Notes: ${specialRequests || "None"}\n`;
        if (guestsToRsvp.length > 1) {
          emailContent += `\nRelated Guests:\n`;
          guestsToRsvp.slice(1).forEach((guest) => {
            emailContent += `- Name: ${guest.name}\n  - Attending: ${guest.attending}\n\n`;
          });
        }
        sendEmail({ subject: `New RSVP from ${selectedGuest?.name || "Guest"}`, message: emailContent|| "No content provided" })
            .then((result) => {console.log("Email sent successfully:", result.text);})
            .catch((error) => {console.error("Error sending email:", error); // Do not set error message for the user
            });
        
      }

      setIsLoading(false);
      setSubmitted(true);
      if (hasAttendingGuests()) setShowConfetti(true);
    } catch (error) {
      setErrorMessage(error_submitting);
      console.error("Error updating Firestore:", error);
      setIsLoading(false);
    }
  };

  const isAnyCheckboxSelected = () => {
    return ((selectedGuest?.attending !== null && selectedGuest?.attending !== undefined) || guestsToRsvp.some((guest) => guest.attending !== null && guest.attending !== undefined ))
  };

  const formatNames = (names) => {
    if (names.length === 0) return "";
    if (names.length === 1) return <>{multiple_guests_1.and} <span className="font-bold">{names[0]}</span></>;
    if (names.length === 2) return <><span className="font-bold">{names[0]}</span> {multiple_guests_1.and} <span className="font-bold">{names[1]}</span></>;
    return <><span className="font-bold">{names.slice(0, -1).join(", ")},</span> {multiple_guests_1.and} <span className="font-bold">{names[names.length - 1]}</span></>;
  };

  return (
    <section id="rsvp-section" className="relative flex flex-col w-full bg-cream">
{showConfetti && (
        <div className="confetti-wrapper">
          <Confetti
            width={width}
            height={pageHeight}
            colors={["#dcb46d"]}
            numberOfPieces={1250}
            recycle={false}
            gravity={0.1}
            onConfettiComplete={() => setShowConfetti(false)}
          />
        </div>
      )}

      {/* Top section */}
      <div
        className="max-md:hidden relative w-full h-[500px] brightness-95 bg-cover bg-center bg-no-repeat md:bg-fixed flex justify-center items-center overflow-hidden"
        style={{
          backgroundImage: `url(${images.collage.src})`,
        }}
      >
        <motion.h1
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.4 }}
          translate="no"
          className="absolute left-1/2 transform -translate-x-1/2 z-20 transition-transform text-9xl text-gold"
        >
          {top_title.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <div className="overlay z-0"></div>
      </div>

      {/* Top section - Mobile */}
      <div className="md:hidden relative w-full h-[500px] overflow-hidden">
        <motion.div
          ref={ref}
          className="absolute w-full h-full"
          style={{ scale }}
        >
          <Image
            src={images.collage}
            alt="Collage"
            width={500}
            height={700}
            quality={100}
            className="absolute top-0 left-0 w-full h-full object-cover transform "
          />
        </motion.div>

        <motion.h1
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.4 }}
          translate="no"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 transition-transform text-7xl text-gold"
        >
          {top_title.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <div className="overlay z-0"></div>
      </div>

      {/* main section */}
      <div className="w-full py-12 px-4 sm:px-6 xl:px-12 bg-cream flex flex-col lg:flex-row justify-center gap-4 lg:gap-12 xl:gap-44">
        {/* left part*/}
        <div className="w-full lg:w-1/2 flex justify-start lg:justify-end">
          <div className="flex flex-col items-start relative w-full max-w-full lg:max-w-lg text-left gap-0 lg:gap-6">
            <div className="flex flex-col items-start max-sm:w-full max-sm:items-center">
              <h3 translate="no" className=" font-bold z-20 ml-6 sm:ml-16">
                {title.main}
              </h3>
              <h3
                translate="no"
                className="text-gold text-6xl sm:text-8xl alex-brush z-10 transform font-light -mt-10"
              >
                {title.sub}
              </h3>
            </div>
      <p translate="no" className="text-left">
        {description_1.map((item, index) => typeof item === "string" ? item : (item?.text ? <span key={index} className="font-bold">{item.text}</span> : null))}
      </p>
      <p translate="no" className="text-left text-lg -mt-4">
        {rsvp_success.change_by.map((item, index) => typeof item === "string" ? item : (item?.text ? <span key={index} className="font-bold">{item.text}</span> : null))}
      </p>
    </section>
  );
};

export default RSVPSection;
