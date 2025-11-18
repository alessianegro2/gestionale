"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react"; // libreria icone Lucide 

type Squadra = {
  _id: string;
  idSq: string;
  nome: string;
  allenatori : [];
  dirigente: string;
};

const Squadre = () => {
  const [squadre, setSquadre] = useState<Squadra[]>([]);

  const fetchSquadre = async () => {
      try {
        const res = await fetch(`/api/getSquadre`);
        const data = await res.json();
        setSquadre(data.squadre);
        console.log("Squadre caricate:", data.squadre);
      } catch (err) {
        console.error("Errore nel recupero delle squadre", err);
      }
      
    };
  
    useEffect(() => {
      fetchSquadre();
    }, []);
    
    return(<>
        <div className="py-10 px-4 flex flex-col items-center relative w-100 " >
            <h1 className="text-3xl font-semibold text-center mb-8 w-full">Squadre</h1>

            <button
                className="absolute top-6 right-6 bg-[#fdeb90] hover:bg-[#fdea87] text-black font-bold rounded-full w-12 h-12 text-2xl flex items-center justify-center shadow-md transition"
                title="Aggiungi Squadra"
            >
                +
            </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-6xl">
          {squadre.map((s) => (
            <div key={s._id} className="bg-white shadow-xl rounded-2xl p-6 relative">
              <h2 className="text-xl font-bold mb-1">{s.nome}</h2>
              <p className="text-gray-700">
               {s.allenatori}
              </p>
              <div className="m-2">
                <button className="px-3 py-1 bg-blue-400 hover:bg-blue-500 rounded-xl text-sm font-semibold text-white cursor-pointer">
                    Giocatori
                </button>
              </div>

              <div className="grid grid-cols-2">
                <div className="flex justify-end gap-2 mt-4" >
                  <button
                    className="px-3 py-1 rounded-xl text-sm font-semibold hover:bg-gray-200 cursor-pointer"
                    >
                    Modifica
                  </button>
                  <button
                    className="px-3 py-1 bg-red-400 hover:bg-red-500 rounded-xl text-sm font-semibold text-white cursor-pointer"
                  >
                    Elimina
                  </button>
                </div>
              </div>
              

              
            </div>
          ))}
        </div>
          </>
    );
};

export default Squadre;