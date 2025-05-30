"use client";

import { Loader2 } from "lucide-react";
import { useState, useEffect } from "react";


type TurniData = {
    _id: string;
    idT: string;
    idA: string;
    data_i: string;
    data_f: string;
    n_turno: number;
};

type Attivita = {
  _id: string;
  nome: string;
  data_i: string;
  data_f: string;
  costo_settimana: number;
  n_settimane: number;
  idA: string;
};

type Props = {
  onClose: () => void;
  defaultData?: TurniData;
};

// Convertitore da "dd-mm-yyyy" a "yyyy-mm-dd"
const formatToInputDate = (dateStr: string) => {
  if (!dateStr) return "";
  const [dd, mm, yyyy] = dateStr.split("/");
  return `${yyyy}-${mm}-${dd}`;
};

const TurniForm = ({ onClose, defaultData }: Props) => {
  const [form, setForm] = useState({
    idA: "",
    idT: "",
    data_i: "",
    data_f: "",
    n_turno: 0,
  });
  const [turni, setTurni] = useState<TurniData[]>([]);  
  const [attivita, setAttivita] = useState<Attivita[]>([]);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchTurni();
  }, []);

  useEffect(() => {
    console.log("defaultData", defaultData);
    fetchAttivita();
    if (defaultData) {
      setForm({
        idA: defaultData.idA ,
        idT: defaultData.idT ,
        data_i: formatToInputDate(defaultData.data_i),
        data_f: formatToInputDate(defaultData.data_f),
        n_turno: defaultData.n_turno
      });
    }
    
  }, [defaultData]);

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

  const fetchAttivita = async () => {
    try {
      const res = await fetch(`/api/getAttivita`);
      const data = await res.json();
      setAttivita(data.attivita);
      console.log(attivita);
    } catch (err) {
      console.error("Errore nel recupero delle attività", err);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setError(false);
    setLoading(true);

    if( !form.idA || !form.data_i || !form.data_f || form.n_turno <= 0) {
      setLoading(false);
      setMessage("Compilare tutti i campi del form!");
      setError(true);
    }
    else {
      try {
        // costruisco i dati da inviare alla fetch
        const formToSend = defaultData
          ? form
          : { ...form, idT: (parseInt(turni[turni.length -1].idT) + 1 ).toString() };

        console.log(formToSend)

        console.log(formToSend);
        const endpoint = defaultData ? "/api/updateTurno" : "/api/insertTurno"; //da finire
        /*const dataT = {
          idA: form.idA,
          idT: form.idT,
          data_i: form.data_i,
          data_f: form.data_f,
          n_turno: form.n_turno,
        };*/

        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formToSend),
        });

        const result = await res.json();
        setLoading(false);
        console.log(result.message)

        if (res.ok) {
          setMessage(result.message || "Turno salvato con successo!");
          setError(false);
          setTimeout(() => {
            onClose();
          }, 1000);
        } else {
          setMessage(result.message || "Errore nel salvataggio del turno.");
          setError(true);
        }
      } catch (error) {
        setLoading(false);
        setMessage("Errore di rete o del server." + error);
        setError(true);
      }
    }    
  };

  return (
    <form className="space-y-4">            
    {[
        { label: "Attività", name: "idA" },
        //{ label: "Turno", name: "idT", type: "text" },
        { label: "Data Inizio", name: "data_i", type: "date" },
        { label: "Data Fine", name: "data_f", type: "date" },
        { label: "Numero Turno", name: "n_turno", type: "number" },
        ].map((field) => (
        field.name === "idA" ? (
            <select
              key={field.name}
              name={field.name}
              value={form[field.name as keyof typeof form] ?? ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f8ecad]"
            >
              {attivita.map((a) => ( 
                <option key={a.idA} value={a.idA}>{a.nome}</option>
              ))}
            </select>
          
          ) : (
          <div key={field.name}>
            <label className="block text-sm font-medium mb-1" htmlFor={field.name}>
                {field.label}
            </label>
            <input
                type={field.type}
                name={field.name}
                id={field.name}
                value={form[field.name as keyof typeof form] ?? ""}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f8ecad]"
                required
                readOnly={field.name === "idT" && !!defaultData}
            />
          </div>
          )
    ))}

    {/* spinner o messaggio */}
    <div className="text-center mt-2 min-h-[20px]">
        {loading ? (
        <div className="flex justify-center">
            <Loader2 className="animate-spin h-5 w-5" />
        </div>
        ) : message ? (
        <div
            className={`text-sm font-medium ${
            error ? "text-red-600" : "text-green-600"
            }`}
        >
            {message}
        </div>
        ) : null}
    </div>

    <div className="flex justify-between mt-6">
        <button
        type="button"
        onClick={onClose}
        className="px-3 py-1 rounded-xl font-semibold cursor-pointer bg-gray-300 hover:bg-gray-400 text-sm"
        >
        Annulla
        </button>
        <button
        type="submit"
        disabled={loading}
        onClick={handleSubmit}
        className="px-3 py-1 rounded-xl font-semibold cursor-pointer  hover:bg-gray-200 text-sm"
        >
        Salva
        </button>
    </div>
    </form>
  );
};

export default TurniForm;
