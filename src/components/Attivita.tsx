"use client";

import { useEffect, useState } from "react";
import AttivitaForm from "./AttivitaForm";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import IscrittoForm from "./IscrittoForm";
import IscrittiPage from "@/app/(dashboard)/iscritti/page";

type Attivita = {
  _id: string;
  nome: string;
  data_i: string;
  data_f: string;
  costo_settimana: number;
  n_settimane: number;
};

const Attivita = () => {
  
  const router = useRouter();
  const [attivita, setAttivita] = useState<Attivita[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedAttivita, setSelectedAttivita] = useState<Attivita | null>(null);
  const [attivitaDaEliminare, setAttivitaDaEliminare] = useState<Attivita | null>(null);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState<string | null>(null);

  const fetchAttivita = async () => {
    try {
      const res = await fetch(`/api/getAttivita`);
      const data = await res.json();
      setAttivita(data.attivita);
    } catch (err) {
      console.error("Errore nel recupero delle attività", err);
    }
  };

  useEffect(() => {
    fetchAttivita();
  }, []);

  const confermaEliminazione = async () => {
    if (!attivitaDaEliminare) return;

    setLoadingDelete(true);
    setDeleteMessage(null);

    try {
      const res = await fetch(`/api/deleteAttivita`, {
        method: "POST",
        body: JSON.stringify({ id: attivitaDaEliminare._id }),
      });

      const data = await res.json();

      if (res.ok) {
        setDeleteMessage("Attività eliminata con successo.");
        setTimeout(() => {
          setAttivitaDaEliminare(null);
          fetchAttivita();
        }, 1000);
      } else {
        setDeleteMessage(data.message || "Errore durante l'eliminazione.");
      }
    } catch (err) {
      setDeleteMessage("Errore imprevisto.");
      console.error("Errore:", err);
    } finally {
      setLoadingDelete(false);
    }
  };

  return (
    <div className="py-10 px-4 flex flex-col items-center relative w-100 " >
      <h1 className="text-3xl font-semibold text-center mb-8 w-full">Attività</h1>

      <button
        onClick={() => {
          setSelectedAttivita(null);
          setShowForm(true);
        }}
        className="absolute top-6 right-6 bg-[#fdeb90] hover:bg-[#fdea87] text-black font-bold rounded-full w-12 h-12 text-2xl flex items-center justify-center shadow-md transition"
        title="Aggiungi attività"
      >
        +
      </button>

      {showForm ? (
        <div className="w-full max-w-md mt-10 bg-white p-8 shadow-xl rounded-2xl">
          <h3 className="text-xl font-semibold mb-4 text-center">
            {selectedAttivita ? "Modifica Attività" : "Nuova Attività"}
          </h3>
          <AttivitaForm
            onClose={() => {
              setShowForm(false);
              fetchAttivita();
            }}
            defaultData={selectedAttivita || undefined}
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-6xl">
          {attivita.map((a) => (
            <div key={a._id} className="bg-white shadow-xl rounded-2xl p-6 relative">
              <h2 className="text-xl font-bold mb-1">{a.nome}</h2>
              <p className="text-gray-700">
                Dal <strong>{a.data_i}</strong> al <strong>{a.data_f}</strong>
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {a.n_settimane} settimane - {a.costo_settimana}€/settimana
              </p>

              <div className="grid grid-cols-2">
                <div className="flex justify-start gap-2 mt-4">
                  <button
                    onClick={() => {
                      router.push(`/iscritti`);
                    }}
                    className="px-3 py-1 rounded-xl text-sm font-semibold "
                    style={{backgroundColor: "#465c9783"}}
                  >
                    Iscritti
                  </button>
                  
                </div>
                <div className="flex justify-end gap-2 mt-4" >
                  <button
                    onClick={() => {
                      setSelectedAttivita(a);
                      setShowForm(true);
                    }}
                    className="px-3 py-1 bg-[#fdeb90a6] hover:bg-[#fdea87] rounded-xl text-sm font-semibold"
                    >
                    Modifica
                  </button>
                  <button
                    onClick={() => setAttivitaDaEliminare(a)}
                    className="px-3 py-1 bg-red-400 hover:bg-red-500 rounded-xl text-sm font-semibold text-white"
                  >
                    Elimina
                  </button>
                </div>
              </div>
              

              
            </div>
          ))}
        </div>
      )}

      {/* MODALE di conferma eliminazione */}
      {attivitaDaEliminare && (
        <>
          <style>{`body { overflow: hidden; }`}</style>

          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 pointer-events-auto"></div>

          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm">
              <h2 className="text-lg font-bold mb-4 text-center">Conferma Eliminazione</h2>
              <p className="text-center text-gray-700 mb-4">
                Sei sicuro di voler eliminare <strong>{attivitaDaEliminare.nome}</strong>?
              </p>

              {/* Spinner o messaggio */}
              {loadingDelete ? (
                <div className="flex justify-center">
                <Loader2 className="animate-spin h-5 w-5" />
              </div>
              ) : deleteMessage ? (
                <p className="text-center text-sm text-gray-700 mb-4">{deleteMessage}</p>
              ) : null}

              <div className="flex justify-between">
                <button
                  disabled={loadingDelete}
                  onClick={() => {
                    setAttivitaDaEliminare(null);
                    setDeleteMessage(null);
                    document.body.style.overflow = "auto";
                  }}
                  className="px-4 py-2 rounded-xl bg-gray-300 hover:bg-gray-400 text-sm"
                >
                  Annulla
                </button>
                <button
                  disabled={loadingDelete}
                  onClick={() => {
                    confermaEliminazione();
                    document.body.style.overflow = "auto";
                  }}
                  className="px-4 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white text-sm font-semibold"
                >
                  Elimina
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Attivita;
