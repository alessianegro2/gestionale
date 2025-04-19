"use client";

import React, { useState } from "react";
import { Loader2 } from "lucide-react"; // libreria icone Lucide 

const UserForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [admin, setAdmin] = useState(false);
  const [descrizione, setDescrizione] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      username,
      password,
      admin,
      descrizione,
    };

    try {
      const res = await fetch("/api/insertUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setMessage("Utente creato con successo!");
        setUsername("");
        setPassword("");
        setAdmin(false);
        setDescrizione("");
      } else {
        const data = await res.json();
        setMessage(data.message || "Errore durante la creazione dell'utente.");
      }
    } catch (error: any) {
      setMessage(error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4"> {/* bg-[#465c975d]*/}
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Nuovo Utente
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f8ecad]"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f8ecad]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="admin"
              className="h-4 w-4 text-yellow-400 focus:ring-[#f8ecad] border-gray-300 rounded"
              checked={admin}
              onChange={(e) => setAdmin(e.target.checked)}
            />
            <label htmlFor="admin" className="text-sm font-medium text-gray-700">
              Admin
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="descrizione">
              Descrizione
            </label>
            <textarea
              id="descrizione"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f8ecad]"
              value={descrizione}
              onChange={(e) => setDescrizione(e.target.value)}
              rows={3}
            />
          </div>

          {message && (
            <p className="text-sm text-center text-red-500">{message}</p>
          )}

          <button
            type="submit"
            className="w-full bg-[#fdeb90] hover:bg-[#fdea87] text-black font-semibold py-2 px-4 rounded-xl transition duration-200"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin h-5 w-5" />
                Caricamento...
              </>
            ) : (
              "Inserisci nuovo utente"
            )}
          </button>
        </form>
      </div>
    </div>
  ); 
};

export default UserForm;
