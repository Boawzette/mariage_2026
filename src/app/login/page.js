"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
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

      router.push("/");
    } catch (err) {
      setError("Erreur serveur");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg p-8 rounded-lg max-w-sm w-full"
      >
        <h1 className="text-xl font-semibold mb-4 text-center">Accès sécurisé</h1>

        <label className="block mb-2 font-medium">Mot de passe</label>
        <input
          type="password"
          className="w-full border p-2 rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Entrez le mot de passe"
        />

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-900 transition"
        >
          Valider
        </button>
      </form>
    </div>
  );
}
