/**
 * @file RSVPSection.js
 * @description Complete RSVP section for wedding website. Guests can search names, select attendance, leave notes, and submit. Data updates Firestore and sends emails.
 * @author Emanuele Sgroi
 * @date 3 December 2025
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

  // Fetch guests
  useEffect(() => {
    const fetchGuests = async () => {
      try {
        const guestsCollectionRef = collection(db, "guests");
        const querySnapshot = await getDocs(guestsCollectionRef);
        const guestsArray = [];
        querySnapshot.forEach(doc => guestsArray.push({ id: doc.id, ...doc.data() }));
        setGuestsList(guestsArray);
      } catch (error) {
        console.error("Error fetching guests:", error);
      }
    };
    fetchGuests();
  }, [submitted]);

  useEffect(() => {
    if (searchTerm) {
      const filtered = guestsList.filter(guest => guest.name.toLowerCase().includes(searchTerm.toLowerCase()));
      setFilteredGuests(filtered);
    } else {
      setFilteredGuests([]);
    }
  }, [searchTerm, guestsList]);

  useEffect(() => {
    const updatePageHeight = () => setPageHeight(Math.max(document.body.scrollHeight, document.documentElement.scrollHeight));
    updatePageHeight();
    window.addEventListener("resize", updatePageHeight);
    return () => window.removeEventListener("resize", updatePageHeight);
  }, []);

  const handleSearch = e => {
    setSearchTerm(e.target.value);
    setSelectedGuest(null);
    setGuestsToRsvp([]);
    setSubmitted(false);
    setErrorMessage("");
    setSpecialRequests("");
  };

  const handleGuestSelect = guest => {
    setSelectedGuest(guest);
    setSearchTerm("");
    setSubmitted(false);
    setErrorMessage("");
    setSpecialRequests("");

    const relatedGuests = guestsList.filter(g => guest.relationshipIds.includes(g.id));
    const guestsWithAttending = [guest, ...relatedGuests].map(g => ({ ...g, attending: g.attending || "Unknown" }));
    setGuestsToRsvp(guestsWithAttending);
  };

  const hasAttendingGuests = () => guestsToRsvp.some(g => g.attending === "Yes");

  const isAnyCheckboxSelected = () => guestsToRsvp.some(g => g.attending !== null && g.attending !== undefined);

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
        let note = specialRequests || "";
        if (guestsToRsvp.length > 1) note += ` ---> RSVP done by ${selectedGuest?.name}`;
        await updateDoc(guestDocRef, { attending: guest.attending, note });
      }

      const shouldSendEmail = guestsToRsvp.some(g => g.attending === "Yes" || g.attending === "No");
      if (shouldSendEmail) {
        let emailContent = `${selectedGuest.name} submitted an RSVP.\nGuest: ${selectedGuest.name}, Attending: ${guestsToRsvp[0]?.attending}, Notes: ${specialRequests || "None"}\n`;
        if (guestsToRsvp.length > 1) {
          emailContent += `Related Guests:\n`;
          guestsToRsvp.slice(1).forEach(g => emailContent += `- Name: ${g.name}, Attending: ${g.attending}\n`);
        }
        sendEmail({ subject: `New RSVP from ${selectedGuest.name}`, message: emailContent });
      }

      setIsLoading(false);
      setSubmitted(true);
      if (hasAttendingGuests()) setShowConfetti(true);
    } catch (error) {
      setErrorMessage(error_submitting);
      setIsLoading(false);
      console.error(error);
    }
  };

  const formatNames = names => {
    if (names.length === 0) return "";
    if (names.length === 1) return <>{multiple_guests_1.and} <span className="font-bold">{names[0]}</span></>;
    if (names.length === 2) return <><span className="font-bold">{names[0]}</span> {multiple_guests_1.and} <span className="font-bold">{names[1]}</span></>;
    return <><span className="font-bold">{names.slice(0,-1).join(", ")},</span> {multiple_guests_1.and} <span className="font-bold">{names[names.length-1]}</span></>;
  };

  return (
    <section id="rsvp-section" className="relative flex flex-col w-full bg-cream">
      {showConfetti && <Confetti width={width} height={pageHeight} colors={["#dcb46d"]} numberOfPieces={1250} recycle={false} gravity={0.1} onConfettiComplete={() => setShowConfetti(false)} />}
      {/* Top sections skipped for brevity, keep same as your original */}
      <div className="w-full py-12 px-4 sm:px-6 xl:px-12 flex flex-col lg:flex-row justify-center gap-4 lg:gap-12 xl:gap-44">
        <div className="w-full lg:w-1/2">
          {/* Left content: title/description */}
        </div>
        <div className="w-full lg:w-1/2">
          <p>- {label}</p>
          <input type="text" placeholder={placeholder} value={searchTerm} onChange={handleSearch} className="border py-2 px-3 rounded w-full mb-4" />
          {searchTerm && filteredGuests.length > 0 && <ul>{filteredGuests.map(g => <li key={g.id} onClick={() => handleGuestSelect(g)}>{g.name}</li>)}</ul>}
          {searchTerm && filteredGuests.length === 0 && <p>{no_found}</p>}
          {selectedGuest && <div>
            {guestsToRsvp.map((guest, i) => (
              <div key={guest.id} className="flex justify-between items-center gap-4">
                <h2>{guest.name}</h2>
                <Select onValueChange={v => setGuestsToRsvp(prev => prev.map(p => p.id === guest.id ? { ...p, attending: v } : p))}>
                  <SelectTrigger className="w-[215px]"><SelectValue placeholder={guest.attending}/></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Yes">{answers.yes}</SelectItem>
                    <SelectItem value="No">{answers.no}</SelectItem>
                    <SelectItem value="Unknown">{answers.unknown}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            ))}
            <textarea value={specialRequests} onChange={e => setSpecialRequests(e.target.value)} placeholder={note_placeholder} className="border p-2 rounded w-full my-4" />
            <button onClick={handleSubmit} disabled={isLoading}>{isLoading ? button.loading : button.submit}</button>
            {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
          </div>}
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;
