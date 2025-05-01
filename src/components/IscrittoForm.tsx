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
  const [attivita, setAttivita] = useState<Array<{
    _id: string;
    nome: string;
    data_i: string;
    data_f: string;
    n_settimane: string;
    costo_settimana: string;
  }>>([]);
  const [turni, setTurni] = useState<Array<{
    _id: string;
    idA: string;
    data_i: string;
    data_f: string;
    costo: string;
  }>>([]);
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
    genitore: {
      cognome: "",
      nome:"",
      telefono:"",
      email:""
    },
    disabilita: false,
    privacy: false,
    trasporto: false,
    pranzo: "",
    turni: {
      idT:""
    }
  });

  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchAttivita()
    if (defaultData) {
      setForm({
        ...form,
        ...defaultData,
        data_n: formatToInputDate(defaultData.data_n),
        data_iscrizione: formatToInputDate(defaultData.data_iscrizione),
      });
    }
  }, [defaultData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async () => {
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

  const fetchAttivita= async()=>{
    try {
      const res = await fetch(`/api/getAttivita`);
      const data = await res.json();
      setAttivita(data);
      console.log("attivita: " + data)
    } catch (err) {
      console.error("Errore nel recupero delle attività", err);
    }
  }

  const fetchTurniA= async(_idA:any)=>{
    try {
      //console.log("fetch attività")
      const res = await fetch(`/api/getTurniA`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(_idA),
      });
      const result = await res.json();
      setTurni(result.data);

    } catch (err) {
      console.error("Errore nell'eliminazione dell'iscritto:", err);
    }
  }

  return (
    <form className="w-[70%] mx-auto p-4 bg-white rounded-xl shadow-md grid grid-cols-1 gap-4 relative">
      <h3 className="font-bold  text-xl text-center ">Iscritto</h3>
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
        <input type="text" name="nome" value={form.nome} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-xl" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Cognome</label>
        <input type="text" name="cognome" value={form.cognome} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-xl" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Sesso</label>
        <select name="sesso" value={form.sesso} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-xl">
          <option value="">Seleziona</option>
          <option value="Maschio">Maschio</option>
          <option value="Femmina">Femmina</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Data di Nascita</label>
        <input type="date" name="data_n" value={form.data_n} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-xl" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Luogo di Nascita</label>
        <input type="text" name="luogo_n" value={form.luogo_n} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-xl" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Indirizzo</label>
        <input type="text" name="indirizzo" value={form.indirizzo} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-xl" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Città</label>
        <input type="text" name="citta" value={form.citta} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-xl" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">CAP</label>
        <input type="text" name="cap" value={form.cap} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-xl" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Nazionalità</label>
        <input type="text" name="nazionalita" value={form.nazionalita} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-xl" />
      </div>

      {/*<div>
        <label className="block text-sm font-medium mb-1">Data Iscrizione</label>
        {defaultData ? (
          <input type="date" name="data_iscrizione" value={form.data_iscrizione} readOnly className="w-full px-4 py-2 border border-gray-300 rounded-xl bg-gray-100" />
        ):(
          <input type="date" name="data_iscrizione" value={form.data_iscrizione} className="w-full px-4 py-2 border border-gray-300 rounded-xl bg-gray-100" />
        )}
      </div>*/}

      <div>
        <label className="block text-sm font-medium mb-1">Autorizzato all'Uscita</label>
        <select name="autorizzato_uscita" value={form.autorizzato_uscita} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-xl">
          <option value="">Seleziona</option>
          <option value="Si">Si</option>
          <option value="No">No</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <input type="checkbox" name="disabilita" checked={form.disabilita} onChange={handleChange} />
        <label className="text-sm">Disabilità (L.104)</label>
      </div>

      <div className="flex items-center gap-2">
        <input type="checkbox" name="privacy" checked={form.privacy} onChange={handleChange} />
        <label className="text-sm">Autorizzazione Privacy</label>
      </div>

      <div className="flex items-center gap-2">
        <input type="checkbox" name="trasporto" checked={form.trasporto} onChange={handleChange} />
        <label className="text-sm">Autorizzazione Trasporto</label>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Pranzo</label>
        <div className="flex gap-4">
          <label><input type="radio" name="pranzo" value="sacco" checked={form.pranzo === "sacco"} onChange={handleChange} /> Al sacco</label>
          <label><input type="radio" name="pranzo" value="mensa" checked={form.pranzo === "mensa"} onChange={handleChange} /> Mensa</label>
          <label><input type="radio" name="pranzo" value="casa" checked={form.pranzo === "casa"} onChange={handleChange} /> A casa</label>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Note</label>
        <input type="text" name="note" value={form.note} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-xl" />
      </div>
        {/*GENITORE*/}
      <h3 className="font-bold text-xl text-center">Genitore</h3>

      <div>
        <label className="block text-sm font-medium mb-1">Cognome</label>
        <input type="text" name="genitore_cognome" value={form.genitore.cognome} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-xl" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Nome</label>
        <input type="text" name="genitore_nome" value={form.genitore.nome} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-xl" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Telefono</label>
        <input type="tel" name="genitore_telefono" value={form.genitore.telefono} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-xl" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input type="email" name="genitore_email" value={form.genitore.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-xl" />
      </div>

      {/*ATTIVITA'*/}
      <h3 className="font-bold text-xl text-center">Attività</h3>
      {attivita.map((a)=>{
        <h4>{a.nome}</h4>
        fetchTurniA(a._id);
        //console.log(a)
        /*{turni ? (
          {turni.map((t)=>{
            <input type="checkbox" value={t._id} checked={form.turni.idT === t._id} onChange={handleChange} />
          })}
        )}*/      
      })}


      <div className="text-center mt-2 min-h-[20px]">
        {loading ? (
          <div className="flex justify-center">
            <Loader2 className="animate-spin h-5 w-5" />
          </div>
        ) : message ? (
          <div className={`text-sm font-medium ${error ? "text-red-600" : "text-green-600"}`}>
            {message}
          </div>
        ) : null}
      </div>

      <div className="grid grid-cols-2">
        <div className=" flex justify-start w-full">
          <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-xl text-sm cursor-pointer">
            Annulla
          </button>
        </div>

        <div className=" flex justify-end w-full">
          <button type="button" onClick={handleSubmit} disabled={loading} className="px-4 py-2 bg-[#fdeb90] hover:bg-[#fdea87] text-black font-semibold rounded-xl text-sm cursor-pointer">
            Salva
          </button>
        </div>
      </div>
    </form>
  );
};

export default IscrittoForm;
