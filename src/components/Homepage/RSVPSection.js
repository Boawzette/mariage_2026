/**
 * @file RSVPSection.js
 * @description RSVP section with guest search, selection, and submission
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
  const { width } = useWindowSize();

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);

  // Helper to render arrays with {text, bold}
  const renderTextArray = (arr) =>
    arr?.map((item, index) =>
      typeof item === "string" ? (
        item
      ) : (
        <span key={index} className={item.bold ? "font-bold" : ""}>
          {item.text}
        </span>
      )
    );

  // Fetch guests from Firestore
  useEffect(() => {
    const fetchGuests = async () => {
      try {
        const guestsCollectionRef = collection(db, "guests");
        const querySnapshot = await getDocs(guestsCollectionRef);
        const guestsArray = [];
        querySnapshot.forEach((doc) => {
          guestsArray.push({ id: doc.id, ...doc.data() });
        });
        setGuestsList(guestsArray);
      } catch (error) {
        console.error("Error fetching guests:", error);
      }
    };
    fetchGuests();
  }, [submitted]);

  // Filter guests by search term
  useEffect(() => {
    if (searchTerm) {
      const filtered = guestsList.filter((guest) =>
        guest.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredGuests(filtered);
    } else {
      setFilteredGuests([]);
    }
  }, [searchTerm, guestsList]);

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
    const relatedGuests = guestsList.filter((g) =>
      guest.relationshipIds.includes(g.id)
    );
    const guestsWithAttending = [guest, ...relatedGuests].map((g) => ({
      ...g,
      attending: g.attending || "Unknown",
    }));
    setGuestsToRsvp(guestsWithAttending);
  };

  const hasAttendingGuests = () =>
    selectedGuest?.attending === "Yes" ||
    guestsToRsvp.some((guest) => guest.attending === "Yes");

  const isAnyCheckboxSelected = () =>
    selectedGuest?.attending ||
    guestsToRsvp.some((guest) => guest.attending);

  const formatNames = (names) => {
    if (names.length === 0) return "";
    if (names.length === 1)
      return (
        <>
          {multiple_guests_1.and} <span className="font-bold">{names[0]}</span>
        </>
      );
    if (names.length === 2)
      return (
        <>
          <span className="font-bold">{names[0]}</span> {multiple_guests_1.and}{" "}
          <span className="font-bold">{names[1]}</span>
        </>
      );
    return (
      <>
        <span className="font-bold">{names.slice(0, -1).join(", ")},</span>{" "}
        {multiple_guests_1.and}{" "}
        <span className="font-bold">{names[names.length - 1]}</span>
      </>
    );
  };

  const handleSubmit = async () => {
    if (!isAnyCheckboxSelected()) {
      setErrorMessage(error_enter_name);
      return;
    }

    setErrorMessage("");
    setIsLoading(true);

    try {
      for (let guest of guestsToRsvp) {
        const guestDocRef = doc(db, "guests", String(guest.id));
        const note = guestsToRsvp.length > 1
          ? `${specialRequests} ---> RSVP done by ${selectedGuest?.name}`
          : specialRequests;

        await updateDoc(guestDocRef, {
          attending: guest.attending,
          note: note,
        });
      }

      // Email notification
      const shouldSendEmail = guestsToRsvp.some(
        (guest) => guest.attending === "Yes" || guest.attending === "No"
      );

      if (shouldSendEmail) {
        let emailContent = `${selectedGuest.name} submitted an RSVP.\n\nGuest info:\n- Name: ${selectedGuest.name}\n- Attending: ${guestsToRsvp[0]?.attending}\n- Notes: ${
          specialRequests || "None"
        }\n`;

        if (guestsToRsvp.length > 1) {
          emailContent += `\nRelated Guests:\n`;
          guestsToRsvp.slice(1).forEach((g) => {
            emailContent += `- Name: ${g.name}\n  - Attending: ${g.attending}\n\n`;
          });
        }

        const emailData = {
          subject: `New RSVP from ${selectedGuest?.name}`,
          message: emailContent || "No content provided",
        };

        sendEmail(emailData)
          .then((res) => console.log("Email sent:", res.text))
          .catch((err) => console.error("Error sending email:", err));
      }

      setIsLoading(false);
      setSubmitted(true);
      if (hasAttendingGuests()) setShowConfetti(true);
    } catch (error) {
      setErrorMessage(error_submitting);
      setIsLoading(false);
      console.error("Error updating Firestore:", error);
    }
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
        style={{ backgroundImage: `url(${images.collage.src})` }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { staggerChildren: 0.2 } }}
          translate="no"
          className="absolute left-1/2 transform -translate-x-1/2 z-20 transition-transform text-9xl text-gold"
        >
          {top_title.split("").map((char, index) => (
            <motion.span key={index}>{char}</motion.span>
          ))}
        </motion.h1>
        <div className="overlay z-0"></div>
      </div>

      {/* Main section */}
      <div className="w-full py-12 px-4 sm:px-6 xl:px-12 bg-cream flex flex-col lg:flex-row justify-center gap-4 lg:gap-12 xl:gap-44">
        {/* Left */}
        <div className="w-full lg:w-1/2 flex justify-start lg:justify-end">
          <div className="flex flex-col items-start relative w-full max-w-full lg:max-w-lg text-left gap-0 lg:gap-6">
            <h3 translate="no" className="font-bold z-20 ml-6 sm:ml-16">
              {title.main}
            </h3>
            <h3
              translate="no"
              className="text-gold text-6xl sm:text-8xl alex-brush z-10 transform font-light -mt-10"
            >
              {title.sub}
            </h3>
            <p translate="no" className="text-left">
              {renderTextArray(description_1)}
            </p>
            <p translate="no" className="text-left">{renderTextArray(description_2)}</p>
          </div>
        </div>

        {/* Right - Search & RSVP */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start items-start">
          <p translate="no">- {label}</p>
          <input
            type="text"
            placeholder={placeholder}
            className="border py-2 px-3 rounded w-full max-lg:max-w-[500px] mb-4 focus:outline-none"
            value={searchTerm}
            onChange={handleSearch}
            autoComplete="on"
            translate="no"
          />

          {searchTerm && filteredGuests.length > 0 && (
            <ul className="border p-2 w-full max-lg:max-w-[500px] rounded">
              {filteredGuests.map((guest) => (
                <li
                  key={guest.id}
                  translate="no"
                  className="cursor-pointer hover:bg-gray-200 p-2 flex justify-start items-center gap-4"
                  onClick={() => handleGuestSelect(guest)}
                >
                  {guest.name}
                </li>
              ))}
            </ul>
          )}

          {searchTerm && filteredGuests.length === 0 && (
            <p translate="no">{no_found}</p>
          )}

          {selectedGuest && (
            <div className="mt-4 w-full flex flex-col justify-start items-start">
              <p translate="no" className="text-xl mb-6 text-left">
                {selectedGuest.relationshipIds.length === 0
                  ? <>
                      {single_guest_1.hi} <span className="font-bold">{selectedGuest.name}!</span>{single_guest_1.are_invited}
                    </>
                  : <>
                      {multiple_guests_1.hi} <span className="font-bold">{selectedGuest.name}!</span>{multiple_guests_1.you}{formatNames(
                        guestsList.filter((g) => selectedGuest.relationshipIds.includes(g.id)).map((g) => g.name)
                      )}{multiple_guests_1.are_invited}
                    </>
                }
              </p>
              {/* ... ici on garde le reste du formulaire RSVP comme dans ton code original ... */}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;
