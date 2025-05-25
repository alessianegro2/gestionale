"use client";

import { Loader2 } from "lucide-react";
import { useState, useEffect } from "react";


type AttivitaData = {
  _id: string;
  idA: string;
  nome: string;
  data_i: string;
  data_f: string;
  costo_settimana: number;
  n_settimane: number;
};

type Props = {
  onClose: () => void;
  defaultData?: AttivitaData;
};

// Convertitore da "dd-mm-yyyy" a "yyyy-mm-dd"
const formatToInputDate = (dateStr: string) => {
  if (!dateStr) return "";
  const [dd, mm, yyyy] = dateStr.split("/");
  return `${yyyy}-${mm}-${dd}`;
};

const AttivitaForm = ({ onClose, defaultData }: Props) => {
  const [form, setForm] = useState({
    idA: defaultData ? defaultData.idA : "",
    nome: "",
    data_i: "",
    data_f: "",
    costo_settimana: 0,
    n_settimane: 0,
  });
  const [attivita, setAttivita] = useState<AttivitaData[]>([]);

  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);


  const fetchAttivita = async () => {
    try {
      const res = await fetch(`/api/getAttivita`);
      const data = await res.json();
      setAttivita(data.attivita);
    } catch (err) {
      console.error("Errore nel recupero delle attività", err);
    }
    console.log("Attività recuperate:", attivita);
  };

  useEffect(() => {
    fetchAttivita();
  }, []);

  useEffect(() => {
    if (defaultData) {
      setForm({
        idA: defaultData.idA,
        nome: defaultData.nome,
        data_i: formatToInputDate(defaultData.data_i),
        data_f: formatToInputDate(defaultData.data_f),
        costo_settimana: defaultData.costo_settimana,
        n_settimane: defaultData.n_settimane 
      });
    }
  }, [defaultData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setError(false);
    setLoading(true);

    try {
      const endpoint = defaultData ? "/api/updateAttivita" : "/api/insertAttivita";

      // costruisco i dati da inviare alla fetch
      const formToSend = defaultData
        ? form
        : { ...form, idA: (parseInt(attivita[attivita.length -1].idA) + 1).toString()  };

      console.log(formToSend)
      
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formToSend),
      });

      const result = await res.json();
      setLoading(false);

      if (res.ok) {
        setMessage(result.message || "Attività salvata con successo!");
        setError(false);
        setTimeout(() => {
          onClose();
        }, 1000);
      } else {
        setMessage(result.message || "Errore nel salvataggio.");
        setError(true);
      }
    } catch (error) {
      setLoading(false);
      setMessage("Errore di rete o del server." + error);
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {[
        { label: "Nome", name: "nome", type: "text" },
        { label: "Data Inizio", name: "data_i", type: "date" },
        { label: "Data Fine", name: "data_f", type: "date" },
        { label: "Costo a Settimana (€)", name: "costo_settimana", type: "number" },
        { label: "Numero Settimane", name: "n_settimane", type: "number" },
      ].map((field) => (
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
            readOnly={field.name === "attivita" && !!defaultData}
          />
        </div>
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
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-xl text-sm"
        >
          Annulla
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-[#fdeb90] hover:bg-[#fdea87] text-black font-semibold rounded-xl text-sm"
        >
          Salva
        </button>
      </div>
    </form>
  );
};

export default AttivitaForm;
