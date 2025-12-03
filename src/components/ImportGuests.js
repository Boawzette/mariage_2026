import { useEffect } from "react";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { app } from "../firebase"; // ton config Firebase
import guestsList from "../utils/guestsList";

const db = getFirestore(app);

export default function ImportGuests() {
  useEffect(() => {
    const importGuests = async () => {
      try {
        for (const guest of guestsList) {
          let attendingValue = guest.attending === "Yes" ? true : guest.attending === "No" ? false : null;
          await setDoc(doc(db, "guests", `${guest.id}`), { ...guest, attending: attendingValue });
        }
        alert("Import terminé !");
      } catch (error) {
        console.error("Erreur lors de l'import :", error);
        alert("Erreur lors de l'import. Vérifie la console.");
      }
    };
    importGuests();
  }, []);

  return <div>Import des invités en cours...</div>;
}
