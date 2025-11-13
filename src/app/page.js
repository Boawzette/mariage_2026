"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Mot de passe incorrect");
        return;
      }

      // ✅ Login réussi → redirection
      router.push("/");
    } catch (err) {
      setError("Erreur serveur");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 bg-[url('/images/wedding-bg.jpg')] bg-cover bg-center"
    >
      <form
        onSubmit={handleSubmit}
        className="backdrop-blur-md bg-white/70 shadow-xl p-8 rounded-2xl max-w-sm w-full border border-white/40"
      >
        <h1 className="text-3xl font-light text-center mb-6 tracking-wide text-gray-700">
          💍 Accès Invités
        </h1>

        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">
            Mot de passe
          </label>

          <div className="relative">
            <input
              type={showPwd ? "text" : "password"}
              className="w-full border border-gray-300 p-3 rounded-xl bg-white/90 focus:ring-2 focus:ring-rose-300 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Entrez le mot de passe"
            />

            {/* 👁 Bouton Afficher / Cacher */}
            <button
              type="button"
              onClick={() => setShowPwd(!showPwd)}
              className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
            >
              {showPwd ? <EyeOff size={22} /> : <Eye size={22} />}
            </button>
          </div>
        </div>

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}

        <button
          type="submit"
          className="w-full bg-rose-500 text-white py-3 rounded-xl hover:bg-rose-600 transition shadow-md font-medium"
        >
          Valider 💖
        </button>
      </form>
    </div>
  );
}
