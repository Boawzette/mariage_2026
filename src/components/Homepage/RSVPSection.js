/**
 * @file RSVPSection.js
 * @description RSVP section component for wedding website. Guests can search, select attendance, leave notes, and data is saved in Firebase Firestore.
 */

import React, { useState, useEffect, useRef } from "react";
import images from "@/utils/imagesImport";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import sendEmail from "@/utils/send-email";
import { motion, useScroll, useTransform } from "framer-motion";
import translations from "@/utils/translations";
import Image from "next/image";

const RSVPSection = ({ language }) => {
  const {
    top_title, title, description_1, description_2, label, placeholder, no_found,
    multiple_guests_1, multiple_guests_2, single_guest_1, single_guest_2,
    answers, note_placeholder, rsvp_success, error_enter_name, error_submitting, button
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
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);

  useEffect(() => {
    const fetchGuests = async () => {
      try {
        const guestsCollectionRef = collection(db, "guests");
        const querySnapshot = await getDocs(guestsCollectionRef);
        const guestsArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setGuestsList(guestsArray);
      } catch (error) {
        console.error("Error fetching guests:", error);
      }
    };
    fetchGuests();
  }, [submitted]);

  useEffect(() => {
    if (searchTerm) {
      setFilteredGuests(guestsList.filter(g => g.name.toLowerCase().includes(searchTerm.toLowerCase())));
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
    setSelectedGuest(null);
    setGuestsToRsvp([]);
    setSubmitted(false);
    setErrorMessage("");
    setSpecialRequests("");
  };

  const handleGuestSelect = (guest) => {
    setSelectedGuest(guest);
    setSearchTerm("");
    setSubmitted(false);
    setErrorMessage("");
    setSpecialRequests(guest.note || "");

    const relatedGuests = guestsList.filter(g => guest.relationshipIds.includes(g.id));
    const guestsWithAttending = [guest, ...relatedGuests].map(g => ({ ...g, attending: g.attending || "Unknown" }));
    setGuestsToRsvp(guestsWithAttending);
  };

  const isAnyCheckboxSelected = () => guestsToRsvp.some(g => g.attending !== null && g.attending !== undefined);
  const hasAttendingGuests = () => guestsToRsvp.some(g => g.attending === "Yes");

  const handleSubmit = async () => {
    if (!isAnyCheckboxSelected()) {
      setErrorMessage(error_enter_name);
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    try {
      for (let guest of guestsToRsvp) {
        const guestDocRef = doc(db, "guests", String(guest.id));
        let note = specialRequests || "";
        if (guestsToRsvp.length > 1) note += ` ---> RSVP done by ${selectedGuest?.name}`;
        await updateDoc(guestDocRef, { attending: guest.attending, note });
      }

      const shouldSendEmail = guestsToRsvp.some(g => g.attending === "Yes" || g.attending === "No");
      if (shouldSendEmail) {
        let emailContent = `${selectedGuest.name} submitted an RSVP from the website.\n\n`;
        guestsToRsvp.forEach(g => {
          emailContent += `- Name: ${g.name}\n  - Attending: ${g.attending}\n  - Note: ${g.note || specialRequests || 'None'}\n\n`;
        });
        sendEmail({ subject: `New RSVP from ${selectedGuest.name}`, message: emailContent });
      }

      setIsLoading(false);
      setSubmitted(true);
      if (hasAttendingGuests()) setShowConfetti(true);

    } catch (error) {
      console.error(error);
      setErrorMessage(error_submitting);
      setIsLoading(false);
    }
  };

  const formatNames = (names) => {
    if (names.length === 0) return "";
    if (names.length === 1) return <>{multiple_guests_1.and} <span className="font-bold">{names[0]}</span></>;
    if (names.length === 2) return <><span className="font-bold">{names[0]}</span> {multiple_guests_1.and} <span className="font-bold">{names[1]}</span></>;
    return <><span className="font-bold">{names.slice(0,-1).join(", ")},</span> {multiple_guests_1.and} <span className="font-bold">{names[names.length-1]}</span></>;
  };

  return (
    <section id="rsvp-section" className="relative flex flex-col w-full bg-cream">
      {showConfetti && <Confetti width={width} height={pageHeight} colors={["#dcb46d"]} numberOfPieces={1250} recycle={false} gravity={0.1} onConfettiComplete={() => setShowConfetti(false)} />}
      <div className="w-full py-12 px-4 sm:px-6 xl:px-12 flex flex-col lg:flex-row gap-4 lg:gap-12 xl:gap-44">
        {/* Left content */}
        <div className="w-full lg:w-1/2">
          <h3>{title.main}</h3>
          <h3>{title.sub}</h3>
          <p>{description_1.map(i => typeof i === 'string' ? i : <span className="font-bold">{i.text}</span>)}</p>
          <p>{description_2}</p>
        </div>
        {/* Right content */}
        <div className="w-full lg:w-1/2">
          <input type="text" placeholder={placeholder} value={searchTerm} onChange={handleSearch} className="border py-2 px-3 rounded w-full mb-4" />
          {searchTerm && filteredGuests.length > 0 && <ul className="border p-2 rounded">{filteredGuests.map(g => <li key={g.id} onClick={() => handleGuestSelect(g)}>{g.name}</li>)}</ul>}
          {searchTerm && filteredGuests.length === 0 && <p>{no_found}</p>}

          {selectedGuest && (
            <div className="mt-4">
              <p>{selectedGuest.name} {selectedGuest.relationshipIds.length === 0 ? single_guest_1.are_invited : multiple_guests_1.are_invited}</p>
              {guestsToRsvp.map((g, idx) => (
                <div key={g.id} className="flex gap-2 items-center">
                  <h2>{g.name}</h2>
                  <Select onValueChange={value => setGuestsToRsvp(prev => prev.map(p => p.id === g.id ? {...p, attending: value} : p))}>
                    <SelectTrigger className="w-[215px] px-4 rounded-md bg-neutral-100">
                      <SelectValue placeholder={g.attending === "Unknown" ? answers.unknown : g.attending === "Yes" ? answers.yes : answers.no} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Yes">{answers.yes}</SelectItem>
                      <SelectItem value="No">{answers.no}</SelectItem>
                      <SelectItem value="Unknown">{answers.unknown}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              ))}
              <textarea placeholder={note_placeholder} value={specialRequests} onChange={e => setSpecialRequests(e.target.value)} className="border p-2 rounded w-full my-4" />
              <button onClick={handleSubmit} disabled={isLoading}>{isLoading ? button.loading : button.submit}</button>
              {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
              {submitted && !errorMessage && <p>{rsvp_success.thanks} {rsvp_success.submitted}</p>}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;
