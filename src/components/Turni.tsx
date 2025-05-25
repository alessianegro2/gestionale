"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import TurniForm from "./TurniForm";

type Attivita = {
  _id: string;
  nome: string;
  data_i: string;
  data_f: string;
  costo_settimana: number;
  n_settimane: number;
  idA: string;
};

type Turno={
    _id: string;
    idT: string;
    idA: string;
    data_i: string;
    data_f: string;
    n_turno: number;
}

const Turni = () => {
  const router = useRouter();
  const [showForm, setShowForm] = useState(false);
  const [selectedTurno, setSelectedTurno] = useState<Turno | null>(null);
  const [attivita, setAttivita] = useState<Attivita[]>([]);
  const [turni, setTurni] = useState<Turno[]>([]);
  const [selectedT, setSelectedT] = useState<Turno | null>(null);
  const [turnoDaEliminare, setTurnoDaEliminare] = useState<Turno | null>(null);
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

  const fetchTurni = async () => {
    try {
      const res = await fetch(`/api/getTurni`);
      const data = await res.json();
      setTurni(data.turni);
      console.log(turni);
    } catch (err) {
      console.error("Errore nel recupero dei turni", err);
    }
  };

  useEffect(() => {
    fetchAttivita();
    fetchTurni();
  }, []);

  const confermaEliminazione = async () =>{
    if (!turnoDaEliminare) return;

    setLoadingDelete(true);
    setDeleteMessage(null);

    try {
      const res = await fetch(`/api/deleteTurno`, {
        method: "POST",
        body: JSON.stringify({ id: turnoDaEliminare._id }),
      });

      const data = await res.json();

      if (res.ok) {
        setDeleteMessage("Turno eliminato con successo.");
        setTimeout(() => {
          setTurnoDaEliminare(null);
          fetchTurni();
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
  }

  return (
    <div className="py-10 px-4 flex flex-col items-center relative w-100 " >
      <h1 className="text-3xl font-semibold text-center mb-8 w-full">Turni</h1>

      <button
        onClick={() => {
          setSelectedTurno(null);
          setShowForm(true);
        }}
        className="absolute top-6 right-6 bg-[#fdeb90] hover:bg-[#fdea87] text-black font-bold rounded-full w-12 h-12 text-2xl flex items-center justify-center shadow-md transition"
        title="Aggiungi Turno"
      >
        +
      </button>

      {showForm ? (
        <div className="w-full max-w-md mt-10 bg-white p-8 shadow-xl rounded-2xl">
          <h3 className="text-xl font-bold mb-4 text-center">
            {selectedTurno ? "Modifica Turno" : "Nuovo Turno"}
          </h3>
          <TurniForm
            onClose={() => {
              setShowForm(false);
              fetchAttivita();
              fetchTurni();
            }}
            defaultData={selectedT || undefined}
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-6xl" >
          {attivita.map((a) => (
            <div key={a._id} className="m-5 shadow-xl rounded-2xl p-5 relative" >
              <h2 className="text-xl font-bold mb-1 text-center">{a.nome}</h2>
              <table className="min-w-full border-rounded-lg">
                <thead className="h-[70px] border-rounded-lg" style={{height: "70px"}}>
                    <tr className="px-4 py-2 text-left" >
                        <th style={{width: "140px"}}>N° Turno</th>
                        <th style={{width: "140px"}}>Data Inizio</th>
                        <th style={{width: "140px"}}>Data Fine</th>
                        {/*<th style={{width: "140px"}}>Costo Settimana</th>*/}
                        <th style={{width: "140px"}}></th>
                        <th style={{width: "140px"}}></th>
                    </tr>
                </thead>
                <tbody>
                  {turni.map((t) => (
                        t.idA === a.idA ? (
                            <tr key={t.idT}>
                                <td>{t.n_turno}</td>
                                <td>{t.data_i}</td>
                                <td>{t.data_f}</td>
                                {/*<td>{a.costo_settimana} €</td>*/}
                                <td><Button onClick={() => {setShowForm(true); setSelectedT(t);}}  className='cursor-pointer'>Modifica</Button></td>
                                <td><Button onClick={() => { setTurnoDaEliminare(t);}}  className='bg-red-700 cursor-pointer text-white'>Elimina</Button></td>
                            </tr>
                        ) : null
                      ))}
                </tbody>
              </table>
            </div>

              
          ))}
        </div>
      )} 

      {/*MODALE di conferma eliminazione */}
      {turnoDaEliminare && (
        <>
          <style>{`body { overflow: hidden; }`}</style>

          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 pointer-events-auto"></div>

          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm">
              <h2 className="text-lg font-bold mb-4 text-center">Conferma Eliminazione</h2>
              <p className="text-center text-gray-700 mb-4">
                Sei sicuro di voler eliminare questo turno?
              </p>

              
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
                    setTurnoDaEliminare(null);
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

export default Turni;
