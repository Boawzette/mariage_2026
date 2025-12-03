/**
 * @file RSVPSection.js
 * @description This component manages the RSVP section of the wedding website. It allows guests to search their names, select attendance options, and submit special
 *              requests. The data is retrieved and updated in Firebase Firestore, and email notifications are sent upon submission. Multilingual!
 * @author Emanuele Sgroi
 * @date 19 October 2024
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

  const containerVariants = { hidden: { opacity: 1 }, visible: { opacity: 1, transition: { delay: 0.2, staggerChildren: 0.2 } } };
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
    } else { setFilteredGuests([]); }
  }, [searchTerm, guestsList]);

  useEffect(() => {
    const updatePageHeight = () => {
      const height = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      setPageHeight(height);
    };
    updatePageHeight();
    window.addEventListener("resize", updatePageHeight);
    return () => window.removeEventListener("resize", updatePageHeight);
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    if (selectedGuest) { setSelectedGuest(null); setGuestsToRsvp([]); setSubmitted(false); setErrorMessage(""); setSpecialRequests(""); }
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

  const hasAttendingGuests = () => selectedGuest?.attending === "Yes" || guestsToRsvp.some((guest) => guest.attending === "Yes");
  const isAnyCheckboxSelected = () => (selectedGuest?.attending != null) || guestsToRsvp.some((guest) => guest.attending != null);
  const formatNames = (names) => {
    if (names.length === 0) return "";
    if (names.length === 1) return <>{multiple_guests_1.and} <span className="font-bold">{names[0]}</span></>;
    if (names.length === 2) return <><span className="font-bold">{names[0]}</span> {multiple_guests_1.and}<span className="font-bold">{names[1]}</span></>;
    return <><span className="font-bold">{names.slice(0, -1).join(", ")},</span> {multiple_guests_1.and} <span className="font-bold">{names[names.length - 1]}</span></>;
  };

  const handleSubmit = async () => {
    if (!isAnyCheckboxSelected()) { setErrorMessage(error_enter_name); return; }
    setErrorMessage("");
    setIsLoading(true);
    try {
      for (let guest of guestsToRsvp) {
        const guestDocRef = doc(db, "guests", String(guest.id));
        let note = specialRequests || "";
        if (guestsToRsvp.length > 1) note = `${note} ---> RSVP done by ${selectedGuest?.name}`.trim();
        await updateDoc(guestDocRef, { attending: guest.attending, note });
      }

      const shouldSendEmail = guestsToRsvp.some((guest) => guest.attending === "Yes" || guest.attending === "No");
      if (shouldSendEmail) {
        let emailContent = `${selectedGuest.name} submitted an RSVP from the website.\n\nRSVP Information:\n\nGuest who submitted the RSVP:\n- Name: ${selectedGuest.name}\n- Attending: ${guestsToRsvp[0]?.attending}\n- Notes: ${specialRequests || "None"}\n`;
        if (guestsToRsvp.length > 1) {
          emailContent += `\nRelated Guests:\n`;
          guestsToRsvp.slice(1).forEach((guest) => { emailContent += `- Name: ${guest.name}\n  - Attending: ${guest.attending}\n\n`; });
        }
        await sendEmail({ subject: `New RSVP from ${selectedGuest?.name || "Guest"}`, message: emailContent });
      }

      setIsLoading(false);
      setSubmitted(true);
      if (hasAttendingGuests()) setShowConfetti(true);
    } catch (error) { setErrorMessage(error_submitting); console.error(error); setIsLoading(false); }
  };

  return (
    <section id="rsvp-section" className="relative flex flex-col w-full bg-cream">
      {showConfetti && <Confetti width={width} height={pageHeight} colors={["#dcb46d"]} numberOfPieces={1250} recycle={false} gravity={0.1} onConfettiComplete={() => setShowConfetti(false)} />}
      <div className="w-full py-12 px-4 sm:px-6 xl:px-12 bg-cream flex flex-col lg:flex-row justify-center gap-4 lg:gap-12 xl:gap-44">
        <div className="w-full lg:w-1/2 flex flex-col justify-start items-start">
          <p translate="no">- {label}</p>
          <input type="text" placeholder={placeholder} className="border py-2 px-3 rounded w-full max-lg:max-w-[500px] mb-4 focus:outline-none" value={searchTerm} onChange={handleSearch} autoComplete="on" translate="no" />
          {searchTerm && filteredGuests.length > 0 && <ul className="border p-2 w-full max-lg:max-w-[500px] rounded">{filteredGuests.map((guest) => <li key={guest.id} className="cursor-pointer hover:bg-gray-200 p-2" onClick={() => handleGuestSelect(guest)}>{guest.name}</li>)}</ul>}
          {searchTerm && filteredGuests.length === 0 && <p translate="no">{no_found}</p>}
          {selectedGuest && (
            <div className="mt-4 w-full flex flex-col justify-start items-start">
              <p translate="no" className="text-xl mb-6 text-left">
                {selectedGuest.relationshipIds.length === 0 ? single_guest_1.hi : multiple_guests_1.hi} <span className="font-bold">{selectedGuest.name}!</span>
              </p>
              <div className="w-full flex flex-col gap-4">
                <Select value={guestsToRsvp[0]?.attending || "Unknown"} onValueChange={(value) => setGuestsToRsvp((prev) => [{ ...prev[0], attending: value }, ...prev.slice(1)])}>
                  <SelectTrigger className="w-[215px] px-4 rounded-md bg-neutral-100"><SelectValue placeholder={answers.unknown} /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Yes">{answers.yes}</SelectItem>
                    <SelectItem value="No">{answers.no}</SelectItem>
                    <SelectItem value="Unknown">{answers.unknown}</SelectItem>
                  </SelectContent>
                </Select>
                {guestsToRsvp.slice(1).map((guest) => (
                  <div key={guest.id} className="flex justify-between items-center gap-4">
                    <span>{guest.name}</span>
                    <Select value={guest.attending || "Unknown"} onValueChange={(value) => setGuestsToRsvp((prev) => prev.map((g) => g.id === guest.id ? { ...g, attending: value } : g))}>
                      <SelectTrigger className="w-[215px] px-4 rounded-md bg-neutral-100"><SelectValue placeholder={answers.unknown} /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Yes">{answers.yes}</SelectItem>
                        <SelectItem value="No">{answers.no}</SelectItem>
                        <SelectItem value="Unknown">{answers.unknown}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                ))}
              </div>
              <textarea placeholder={note_placeholder} className="border p-2 rounded w-full max-lg:max-w-[500px] sm:my-4 focus:outline-none" value={specialRequests} onChange={(e) => setSpecialRequests(e.target.value)} />
              <button onClick={handleSubmit} disabled={isLoading} className="btn2 max-sm:mt-4">{isLoading ? button.loading : button.submit}</button>
              {errorMessage && <p className="text-red-500 mt-4 text-left text-lg">{errorMessage}</p>}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;
