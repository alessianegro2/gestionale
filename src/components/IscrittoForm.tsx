"use client";

import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

type Props = {
  onClose: () => void;
  defaultData?: any;
};

const formatToInputDate = (dateStr: string) => {
  if (!dateStr) return "";
  const [dd, mm, yyyy] = dateStr.split("/");
  return `${yyyy}-${mm}-${dd}`;
};

const IscrittoForm = ({ onClose, defaultData }: Props) => {
  const [form, setForm] = useState({
    _id: "",
    nome: "",
    cognome: "",
    sesso: "",
    data_n: "",
    luogo_n: "",
    indirizzo: "",
    citta: "",
    cap: "",
    nazionalita: "",
    data_iscrizione: "",
    autorizzato_uscita: "",
    note: "",
    genitore: "",
    gruppo: "",
    attivita: "",
  });

  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (defaultData) {
      setForm({
        _id: defaultData._id || "",
        nome: defaultData.nome || "",
        cognome: defaultData.cognome || "",
        sesso: defaultData.sesso || "",
        data_n: formatToInputDate(defaultData.data_n),
        luogo_n: defaultData.luogo_n || "",
        indirizzo: defaultData.indirizzo || "",
        citta: defaultData.citta || "",
        cap: defaultData.cap || "",
        nazionalita: defaultData.nazionalita || "",
        data_iscrizione: formatToInputDate(defaultData.data_iscrizione),
        autorizzato_uscita: defaultData.autorizzato_uscita || "",
        note: defaultData.note || "",
        genitore: defaultData.genitore || "",
        gruppo: defaultData.gruppo || "",
        attivita: defaultData.attivita || "",
      });
    }
  }, [defaultData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    setError(false);

    try {
      const endpoint = defaultData ? "/api/updateIscritto" : "/api/insertIscritto";
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await res.json();
      setLoading(false);

      if (res.ok) {
        setMessage(result.message || "Iscritto salvato con successo!");
        setTimeout(() => onClose(), 1000);
      } else {
        setMessage(result.message || "Errore nel salvataggio.");
        setError(true);
      }
    } catch (err) {
      setLoading(false);
      setMessage("Errore di rete o del server.");
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-[70%] mx-auto p-4 bg-white rounded-xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-4 relative">
        {defaultData && (
            <div>
            <label className="block text-sm font-medium mb-1">ID</label>
            <input
                type="text"
                name="_id"
                value={form._id}
                readOnly
                className="w-full px-4 py-2 border border-gray-300 rounded-xl bg-gray-100"
            />
            </div>
        )}

        <div>
            <label className="block text-sm font-medium mb-1">Nome</label>
            <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-xl"
            />
        </div>

        <div>
            <label className="block text-sm font-medium mb-1">Cognome</label>
            <input
            type="text"
            name="cognome"
            value={form.cognome}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-xl"
            />
        </div>

        <div>
            <label className="block text-sm font-medium mb-1">Sesso</label>
            <select
            name="sesso"
            value={form.sesso}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-xl"
            >
            <option value="">Seleziona</option>
            <option value="Maschio">Maschio</option>
            <option value="Femmina">Femmina</option>
            <option value="Altro">Altro</option>
            </select>
        </div>

        <div>
            <label className="block text-sm font-medium mb-1">Data di Nascita</label>
            <input
            type="date"
            name="data_n"
            value={form.data_n}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-xl"
            />
        </div>

        <div>
            <label className="block text-sm font-medium mb-1">Luogo di Nascita</label>
            <input
            type="text"
            name="luogo_n"
            value={form.luogo_n}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-xl"
            />
        </div>

        <div>
            <label className="block text-sm font-medium mb-1">Indirizzo</label>
            <input
            type="text"
            name="indirizzo"
            value={form.indirizzo}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-xl"
            />
        </div>

        <div>
            <label className="block text-sm font-medium mb-1">Città</label>
            <input
            type="text"
            name="citta"
            value={form.citta}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-xl"
            />
        </div>

        <div>
            <label className="block text-sm font-medium mb-1">CAP</label>
            <input
            type="text"
            name="cap"
            value={form.cap}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-xl"
            />
        </div>

        <div>
            <label className="block text-sm font-medium mb-1">Nazionalità</label>
            <input
            type="text"
            name="nazionalita"
            value={form.nazionalita}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-xl"
            />
        </div>

        <div>
            <label className="block text-sm font-medium mb-1">Data Iscrizione</label>
            <input
            type="date"
            name="data_iscrizione"
            value={form.data_iscrizione}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-xl bg-gray-100"
            />
        </div>

        <div>
            <label className="block text-sm font-medium mb-1">Autorizzato all'Uscita</label>
            <select
            name="autorizzato_uscita"
            value={form.autorizzato_uscita}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-xl"
            >
            <option value="">Seleziona</option>
            <option value="Sì">Sì</option>
            <option value="No">No</option>
            </select>
        </div>

        <div>
            <label className="block text-sm font-medium mb-1">Note</label>
            <input
            type="text"
            name="note"
            value={form.note}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl"
            />
        </div>

        <div>
            <label className="block text-sm font-medium mb-1">Genitore</label>
            <input
            type="number"
            name="genitore"
            value={form.genitore}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-xl"
            />
        </div>

        <div>
            <label className="block text-sm font-medium mb-1">Gruppo</label>
            <input
            type="number"
            name="gruppo"
            value={form.gruppo}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-xl"
            />
        </div>

        <div>
            <label className="block text-sm font-medium mb-1">Attività</label>
            <input
            type="number"
            name="attivita"
            value={form.attivita}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-xl"
            />
        </div>

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

        <div className="absolute bottom-4 left-4 flex justify-start w-full">
            <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-xl text-sm"
            >
            Annulla
            </button>
        </div>

        <div className="absolute bottom-4 right-4 flex justify-end w-full">
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

export default IscrittoForm;
