'use client';

import { useEffect, useState, useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronUp, ChevronDown } from 'lucide-react';
import IscrittoForm from './IscrittoForm';
import * as XLSX from 'xlsx';

type IscrittoData={
  _id: string,
    nome: string,
    cognome: string,
    sesso: string,
    data_n: string,
    luogo_n: string,
    indirizzo:string,
    citta: string,
    cap: string,
    nazionalita: string
    data_iscrizione: string
    autorizzato_uscita: string
    note:string,
    genitore: {
      cognome_g:string,
      nome_g: string,
      telefono_g: number,
      email_g:string
    },
    disabilita: boolean,
    privacy: boolean,
    trasporto: boolean,
    pranzo: string,
    da_pagare: number,
    pagato: number,
    tipo_pagamento: string,
    turni: string[]
}

type Props = {
  defaultData?: string ;
};

type SortOrder = 'asc' | 'desc';

const TableIscritti = () => {
  const [users, setUsers] = useState<IscrittoData[]>([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [sortKey, setSortKey] = useState<string>('cognome');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [fields, setFields] = useState<string[]>([]);
  const [selectedUser, setSelectedUser] = useState<IscrittoData | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [_insertIscr, setInsertIscr] = useState(false);
  const [idAtt, setIdAtt] = useState("all");
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


  const pageSize = 20;

  useEffect(() => {
    fetchAttivita();
    const fetchUsers = async () => {
      try {
        console.log("idAtt: " + idAtt);
        if (idAtt !== "all" && idAtt !== "") {
          const res = await fetch(`/api/getIscrittiAttivita`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ idAttivita: idAtt })
          });
          const data = await res.json();
          setUsers(data.iscritti);
          if (data.iscritti.length > 0) {
            const allFields = Object.keys(data.iscritti[0]).filter(
              (key) => key !== '_id' && key !== 'luogo_n' && key !== 'indirizzo' && key !== 'cap' && key !== 'genitore' && key !== 'genitore' && key!== 'gruppo'  && key != "cap" && key != "data_iscrizione" && key != "turni"
            );
            setFields([...allFields]);
          }
        } else {
          const res = await fetch(`/api/getIscritti`);
          const data = await res.json();
          setUsers(data.iscritti);
          if (data.iscritti.length > 0) {
            const allFields = Object.keys(data.iscritti[0]).filter(
              (key) => key !== '_id' && key !== 'luogo_n' && key !== 'indirizzo' && key !== 'cap' && key !== 'genitore' && key !== 'genitore' && key!== 'gruppo'  && key != "cap" && key != "data_iscrizione" && key != "turni"
            );
            setFields([...allFields]);
          }
        }
        
        
      } catch (err) {
        alert('Errore nel caricamento degli utenti: ' + err);
        console.error('Errore nel caricamento utenti:', err);
      }
    };

    fetchUsers();
  }, [idAtt]);

  

  const sortedAndFiltered = useMemo(() => {
    let data = [...users]; 

    if (search) {
      data = data.filter((u) =>
        u.cognome?.toLowerCase().includes(search.toLowerCase())
      );
    }

    data.sort((a, b) => {
      const aVal = a[sortKey as keyof IscrittoData] ?? '';
      const bVal = b[sortKey as keyof IscrittoData] ?? '';

      if (aVal < bVal) return sortOrder === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    return data;
  }, [users, search, sortKey, sortOrder]);

  const paginatedUsers = useMemo(() => {
    const start = (page - 1) * pageSize;
    return sortedAndFiltered.slice(start, start + pageSize);
  }, [sortedAndFiltered, page]);

  const handleSort = (key: string) => {
    if (key === sortKey) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const fetchAttivita= async()=>{
    try {
      const res = await fetch(`/api/getAttivita`);
      const data = await res.json();
      setAttivita(data.attivita);
      console.log("attivita: " + data.attivita);
    } catch (err) {
      console.error("Errore nel recupero delle attività", err);
    }
  }

  const handleExport = async () => {
    if (!Array.isArray(users)) {
      alert('Errore nel recupero dei dati.');
      return;
    }

// Mappatura nel formato richiesto
    const mappedData = users.map((item, index) => {
      const nascita = new Date(item.data_n);

      return {
        'NUMERO': index + 1,
        'COGNOME': item.cognome,
        'NOME': item.nome,
        'data nascita': item.data_n,
        'GG':  item.data_n.split('/')[0], 
        'MESE' : item.data_n.split('/')[1],
        'ANNO':  item.data_n.split('/')[2],
        'Luogo': item.luogo_n,
        'PAGATO IN cifre': item.pagato,
        'PAGATO IN lettere': "",
        'SQUADRA': ""
      };
    });

    // Crea Excel
    const worksheet = XLSX.utils.json_to_sheet(mappedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Iscritti');

    // Scarica il file
    XLSX.writeFile(workbook, 'iscritti.xlsx');
  }

  const deleteUser = async (_id: string)=>{
    try {
      const res = await fetch(`/api/deleteIscritto`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(_id),
      });
      const result = await res.json();
      setIdAtt("");
      alert(result.message);

    } catch (err) {
      console.error("Errore nell'eliminazione dell'iscritto:", err);
    }
  }

  const renderSortIcon = (key: string) => {
    if (key !== sortKey) return null;
    return sortOrder === 'asc' ? (
      <ChevronUp className="inline w-4 h-4 ml-1" />
    ) : (
      <ChevronDown className="inline w-4 h-4 ml-1" />
    );
  };

  return (
    <>
    {showForm ? (
        <>
          {selectedUser ? (
            <>
              <div className='w-container'>
                <IscrittoForm
                  defaultData={{
                    ...selectedUser,
                    turni: selectedUser.turni ?? [],
                    da_pagare: selectedUser.da_pagare ?? 0,
                    pagato: selectedUser.pagato ?? 0,
                    tipo_pagamento: selectedUser.tipo_pagamento ?? "",
                  }}
                  onClose={() => {
                    setShowForm(false);
                    setSelectedUser(null);
                    setIdAtt("");
                  }}
                />
              </div>
            </>
          ): (
            <>
              <div className='justify-center m-3' style={{width: "60%", margin: "0 auto"}}>
                <IscrittoForm onClose={() =>{ setShowForm(false);  setInsertIscr(false); setIdAtt("");}} />
              </div>
            </>
          )} 
        </>          
        ) : ( 
        <>
        <div className='w-container'>
          <div className='mt-10 mb-10' >
            <button
              onClick={() => {
                setSelectedUser(null);
                setShowForm(true);
                setInsertIscr(true);
              }}
              className="absolute top-6 right-6 bg-[#fdeb90] hover:bg-[#fdea87] text-black font-bold rounded-full w-12 h-12 text-2xl flex items-center justify-center shadow-md transition m-10"
              title="Aggiungi iscritto"
            >
              +
            </button>
          </div>
                 
          <Card className="p-4 shadow-xl rounded-2xl border border-gray-300 mt-10 ">
            <CardContent>
            <div className="flex items-center justify-between mb-4 ">
              <h1 className="text-xl font-bold text-black">ISCRITTI</h1>
              <Input
                type="text"
                placeholder="Cerca per cognome..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                className="max-w-sm"
              />
            </div>
            <div className='felx w-container m-2'>
              <select name="selectAtt" id="selectAtt" onChange={(e) => {
                setIdAtt(e.target.value);
              }}>
                <option key="all" value="all">Tutte le attività</option>
                {attivita.map((a) => (
                  <option key={a.idA} value={a.idA}>{a.nome}</option>
                ))}
              </select>
            </div>

            <div className='felx w-container m-2'>
              <button className='px-3 py-1 rounded-xl text-sm font-semibold cursor-pointer text-white' style={{backgroundColor: "#465c9783"}} onClick={handleExport}>Esporta tutti</button>
            </div>
  
            <div className="overflow-x-auto">
              <table className="min-w-full border-blue-900 border-rounded-lg">
                <thead className="bg-[#465c979a] border-rounded-lg">
                  <tr className='h-[70px]'>
                    {fields.map((field) => (
                      <th
                        key={field}
                        className="px-4 py-2 text-left cursor-pointer w-[140px]"
                        onClick={() => handleSort(field)}
                      >
                        {field.charAt(0).toUpperCase() + field.slice(1)} {renderSortIcon(field)}
                      </th>
                    ))}
                    <th className="px-4 py-2 text-left"></th>
                    <th className="px-4 py-2 text-left"></th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedUsers.map((user) => (
                    <tr key={user._id} className="border-t">
                      {fields.map((field) => (
                        user[field as keyof IscrittoData] !== undefined ? (
                          <td key={field} className="px-4 py-2">
                            {String(user[field as keyof IscrittoData])}
                          </td>
                        ) : null
                      ))}
                      <td className="px-4 py-2">
                        <button onClick={() => {setShowForm(true); setSelectedUser(user);}} className='px-3 py-1 rounded-xl font-semibold cursor-pointer  hover:bg-gray-200 text-sm'>
                          Modifica
                        </button>
                      </td>
                      <td className="px-4 py-2">
                        <button onClick={() => { deleteUser(user._id);}} className='px-3 py-1 rounded-xl text-sm font-semibold cursor-pointer bg-red-500 hover:bg-red-600 text-white'>
                          Elimina
                        </button>
                      </td>
                      {/* DA IMPLEMENTARE POI
                      <td className="px-4 py-2">
                        <Button onClick={() => alert(`Visualizza doc ${user._id}`)} className= 'bg-[#465c979a]'>
                          Documenti
                        </Button>
                      </td>*/}
                    </tr>))}
                    </tbody>
                  </table>
                </div>
          </CardContent>
          </Card> 
          </div>
        </>
  )} 
   </>
  );
};

export default TableIscritti;
