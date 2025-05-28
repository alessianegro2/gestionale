"use client";

import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

type FormData={
  _id: string,
  nome: string,
  cognome: string,
  sesso: string,
  data_n: string,
  luogo_n: string,
  indirizzo:string,
  citta: string,
  cap: string,
  nazionalita: string,
  data_iscrizione: string,
  autorizzato_uscita: string,
  note:string,
  genitore: {
    cognome_g:string,
    nome_g: string,
    telefono_g: number | string,
    email_g:string
  },
  disabilita: boolean,
  privacy: boolean,
  trasporto: boolean,
  pranzo: string,
  da_pagare: number,
  pagato: number,
  tipo_pagamento: string,
  turni:string[]
}

type Props = {
  onClose: () => void;
  defaultData? : FormData;
};

const formatToInputDate = (dateStr: string) => {
  if (!dateStr) return "";
  const [dd, mm, yyyy] = dateStr.split("/");
  return `${yyyy}-${mm}-${dd}`;
};

const IscrittoForm = ({ onClose, defaultData }: Props) => {
  const [attivita, setAttivita] = useState<Array<{
    turni: any;
    _id: string;
    idA: string;
    nome: string;
    data_i: string;
    data_f: string;
    n_settimane: string;
    costo_settimana: string;
  }>>([]);
  const [turni, setTurni] = useState<Array<{
    _id: string;
    idT: string;
    idA: string;
    data_i: string;
    data_f: string;
    n_turno: number;
  }>>([]);
  const [form, setForm] = useState<FormData>({
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
      cognome_g: "",
      nome_g: "",
      telefono_g: "",
      email_g: ""
    },
    disabilita: false,
    privacy: false,
    trasporto: false,
    pranzo: "",
    da_pagare: 0,
    pagato: 0,
    tipo_pagamento: "",
    turni: []
  });

  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    console.log(defaultData)
    fetchAttivita();
    fetchTurniA();
    if (defaultData) {
      setForm(prev => ({
        ...prev,
        ...defaultData,
        data_n: formatToInputDate(defaultData.data_n),
        data_iscrizione: formatToInputDate(defaultData.data_iscrizione),
        genitore: {
          ...defaultData.genitore,
          telefono_g: defaultData.genitore.telefono_g,
        },
        turni: Array.isArray(defaultData.turni) ? defaultData.turni : [],
      }));
    }
  }, [defaultData]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setForm((prev) => {
      const newForm = { ...prev };

      if (name.includes("genitore.")) {
        const field = name.split(".")[1];
        newForm.genitore = {
          ...prev.genitore,
          [field]: value,
        };
      } else {
        (newForm as any)[name] = type === "checkbox" ? checked : value;
      }

      return newForm;
    });
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
    } catch (_err) {
      setLoading(false);
      setMessage("Errore di rete o del server.");
      setError(true);
    }
  };

  const fetchAttivita= async()=>{
    try {
      const res = await fetch(`/api/getAttivita`);
      const data = await res.json();
      setAttivita(data.attivita);
      console.log("attivita: " + data.attivita)
    } catch (err) {
      console.error("Errore nel recupero delle attività", err);
    }
  }

  const fetchTurniA= async()=>{
    try {
      const res = await fetch(`/api/getTurni`);
      const data = await res.json();
      setTurni(data.turni);
      console.log(turni);
    } catch (err) {
      console.error("Errore nel recupero dei turni:", err);
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

       <div>
        <label className="block text-sm font-medium mb-3">Pranzo</label>
        <select name="pranzo" value={form.pranzo} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-xl">
          <option value="sacco">Al sacco</option>
          <option value="mensa">In mensa</option>
          <option value="casa">A casa</option>
        </select>
      </div>
      {/*<div>
        <label className="block text-sm font-medium mb-1">Data Iscrizione</label>
        {defaultData ? (
          <input type="date" name="data_iscrizione" value={form.data_iscrizione} readOnly className="w-full px-4 py-2 border border-gray-300 rounded-xl bg-gray-100" />
        ):(
          <input type="date" name="data_iscrizione" value={form.data_iscrizione} className="w-full px-4 py-2 border border-gray-300 rounded-xl bg-gray-100" />
        )}
      </div>*/}

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
        <label className="block text-sm font-medium mb-1">Autorizzato all'Uscita</label>
        <select name="autorizzato_uscita" value={form.autorizzato_uscita} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-xl">
          <option value=" ">Seleziona</option>
          <option value="Si">Si</option>
          <option value="No">No</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-3">Note</label>
        <input type="text" name="note" value={form.note} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-xl" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 mt-3">Quota da pagare</label>
        <input type="number" min={0} name="da_pagare" value={form.da_pagare} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-xl" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Già pagato</label>
        <input type="number" min={0} name="pagato" value={form.pagato} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-xl" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-3">Tipo di pagamento</label>
        <select name="tipo_pagamento" value={form.tipo_pagamento} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-xl">
          <option value="bonifico">Bonifico</option>
          <option value="contanti">Contanti</option>
          <option value="satispay">Satispay</option>
        </select>
      </div>

      
        {/*GENITORE*/}
      <h3 className="font-bold text-xl text-center">Genitore</h3>

      <div>
        <label className="block text-sm font-medium mb-1">Cognome</label>
        <input type="text" name="genitore.cognome_g" value={form.genitore.cognome_g || ""} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-xl" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Nome</label>
        <input type="text" name="genitore.nome_g" value={form.genitore.nome_g || ""} onChange={handleChange}  className="w-full px-4 py-2 border border-gray-300 rounded-xl" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Telefono</label>
        <input type="tel" name="genitore.telefono_g" value={form.genitore.telefono_g || ""} onChange={handleChange}  className="w-full px-4 py-2 border border-gray-300 rounded-xl" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input type="email" name="genitore.email_g" value={form.genitore.email_g || ""} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-xl" />
      </div>

      {/*ATTIVITA'*/}
      <h3 className="font-bold text-xl text-center">Attività</h3>
       <div>
        {attivita.map((a) => (
          <div key={a.idA}>
            <h4>{a.nome}</h4>
            {turni
              .filter((tu) => tu.idA === a.idA)
              .map((t) => (
                <div key={t._id}>
                  <label>
                    <input
                      type="checkbox"
                      value={t.idT}
                      checked={form.turni.includes(t.idT)}
                      onChange={(e) => {
                        setForm((prev) => {
                          const newTurni = e.target.checked
                            ? [...new Set([...prev.turni, t.idT])]
                            : prev.turni.filter((id) => id !== t.idT);
                          return { ...prev, turni: newTurni };
                        });
                      }}
                    />
                    dal {t.data_i} al {t.data_f} - {t.n_turno}
                  </label>
                </div>
              ))}
          </div>
        ))}
      </div>

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
