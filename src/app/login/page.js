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

      if (data.ok) {
        router.push("/"); // redirige vers homepage
      } else {
        setError(data.error || "Mot de passe incorrect");
      }
    } catch (err) {
      setError("Erreur serveur, réessaie");
      console.error(err);
    }
  };

  return (
    <main className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-80 flex flex-col gap-4"
      >
        <h1 className="text-xl font-bold text-center">Mot de passe</h1>
        <input
          type="password"
          placeholder="Entrez le mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Se connecter
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </main>
  );
}
