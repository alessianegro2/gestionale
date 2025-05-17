"use client";

import { useState, useEffect } from "react";
import { Eye, EyeOff, UserCircle } from "lucide-react";
import Image from "next/image"

type Utente = {
  _id: string;
  username: string;
  password: string;
  admin: boolean;
  descrizione: string;
  immagine?: string;
};

const ProfiloUtente = () => {
  const [utente, setUtente] = useState<Utente | null>(null);
  const [editPassword, setEditPassword] = useState(false);
  const [nuovaPassword, setNuovaPassword] = useState("");
  const [confermaPassword, setConfermaPassword] = useState("");
  const [messaggio, setMessaggio] = useState<string | null>(null);
  const [mostraPassword, setMostraPassword] = useState(false);
  const [passwordCambiata, setPasswordCambiata] = useState(false);

  const fetchUtente = async () => {
    try {
      const res = await fetch("/api/getUtente");
      const data = await res.json();
      setUtente(data);
    } catch (error) {
      console.error("Errore nel caricamento utente:", error);
    }
  };

  const aggiornaPassword = async () => {
    if (nuovaPassword !== confermaPassword) {
      setMessaggio("Le password non coincidono.");
      return;
    }

    const res = await fetch("/api/updatePassword", {
      method: "POST",
      body: JSON.stringify({ id: utente?._id, password: nuovaPassword }),
    });

    const result = await res.json();

    if (res.ok) {
      setMessaggio("Password aggiornata con successo.");
      setPasswordCambiata(true);
      setTimeout(() => {
        setEditPassword(false);
        setNuovaPassword("");
        setConfermaPassword("");
        setPasswordCambiata(false);
      }, 1000); 
    } else {
      setMessaggio(result.message || "Errore nell'aggiornamento.");
    }
  };

  useEffect(() => {
    fetchUtente();
  }, []);

  return (
    <div className="min-h-screen py-14 px-6 flex flex-col items-center w-screen" >
      <h1 className="text-3xl font-semibold text-center mb-8 w-full">Profilo Utente</h1>

      {utente ? (
        <div className="w-full max-w-2xl bg-white p-10 shadow-2xl rounded-3xl flex flex-col items-center text-center text-lg">
          {utente.immagine ? (
            <Image
              src={`data:image/png;base64,${utente.immagine}`} 
              alt="Immagine profilo"
              className="w-32 h-32 rounded-full mb-6 object-cover shadow-md"
            />
          ) : (
            <UserCircle className="w-32 h-32 text-black mb-6" />
          )}
          <p className="text-2xl font-bold mb-2">{utente.username}</p>
          <p className="text-gray-700 mb-2 font-bold">{utente.admin ?" Amministratore" : " Utente standard"}</p>
          <p className="text-gray-600 italic mb-6">Note: {utente.descrizione}</p>

          <div className="w-full mb-4 text-left">
            <label className="block text-gray-700 font-semibold mb-1">Password:</label>
            <div className="relative">
              <input
                type={mostraPassword ? "text" : "password"}
                value={utente.password} //mostro la password in chiaro hashata
                readOnly
                className="w-full px-4 py-3 border rounded-xl bg-gray-100 text-gray-600 text-sm"
              />
              <button
                onClick={() => setMostraPassword(!mostraPassword)}
                className="absolute right-4 top-3 text-gray-500 hover:text-black"
              >
                {mostraPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
          </div>

          <button
            onClick={() => setEditPassword(true)}
            className="mt-4 px-5 py-3 text-lg rounded-xl  bg-red-500 hover:bg-red-600 font-bold"
          >
            Cambia Password
          </button>
        </div>
      ) : (
        <p className="text-xl text-gray-600">Caricamento profilo...</p>
      )}

      {/* Modale di conferma modifica password */}
      {editPassword && (
        <>
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 pointer-events-auto"></div>

          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm">
              <h2 className="text-lg mb-4 text-center">Modifica Password</h2>
              <div className="text-left">
                <input
                  type="password"
                  placeholder="Nuova password"
                  className="w-full px-4 py-3 mb-3 border rounded-xl text-base "
                  value={nuovaPassword}
                  onChange={(e) => setNuovaPassword(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Conferma password"
                  className="w-full px-4 py-3 mb-4 border rounded-xl text-base "
                  value={confermaPassword}
                  onChange={(e) => setConfermaPassword(e.target.value)}
                />
                {messaggio && (
                  <p className="text-center mt-3 text-gray-700">{messaggio}</p>
                )}
                {passwordCambiata && (
                  <p className="text-center mt-3 text-green-600 font-semibold">Password cambiata con successo!</p>
                )}
              </div>

              <div className="flex justify-between mt-4">
                <button
                  onClick={() => setEditPassword(false)}
                  className="px-4 py-2 rounded-xl bg-gray-300 hover:bg-gray-400 text-sm"
                >
                  Annulla
                </button>
                <button
                  onClick={aggiornaPassword}
                  className="px-4 py-2 rounded-xl bg-green-400 hover:bg-green-600 text-black text-sm font-semibold"
                >
                  Conferma
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfiloUtente;
