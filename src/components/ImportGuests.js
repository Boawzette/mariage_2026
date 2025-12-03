import { useEffect } from "react";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { app } from "../firebase"; // ton fichier de config Firebase
import guestsList from "../utils/guestsList"; // ton fichier JSON des invités

const db = getFirestore(app);

export default function ImportGuests() {
  useEffect(() => {
    const importGuests = async () => {
      try {
        for (const guest of guestsList) {
          // Convertir "Yes"/"No"/"Unknown" en boolean ou null si besoin
          let attendingValue;
          if (guest.attending === "Yes") attendingValue = true;
          else if (guest.attending === "No") attendingValue = false;
          else attendingValue = null;

          await setDoc(doc(db, "guests", `${guest.id}`), {
            ...guest,
            attending: attendingValue,
          });
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
