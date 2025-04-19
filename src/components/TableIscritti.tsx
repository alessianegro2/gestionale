'use client';

import { useEffect, useState, useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronUp, ChevronDown } from 'lucide-react';

type SortOrder = 'asc' | 'desc';

const TableIscritti = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState('');
  const [sortKey, setSortKey] = useState<string>('cognome');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [fields, setFields] = useState<string[]>([]);

  const pageSize = 20;

  useEffect(() => { 
    const fetchUsers = async () => {
      try {
        const res = await fetch(`/api/getIscritti`); 
        const data = await res.json();
        setUsers(data.users);

        if (data.users.length > 0) {
          const allFields = Object.keys(data.users[0]).filter(
            (key) => key !== '_id' && key !== 'genitore' && key!== 'gruppo' && key !=='attivita' && key != "cap" && key != "data_iscrizione" //rimossi dalla table
          );
          setFields([...allFields]);
        }
      } catch (err) {
        console.error('Errore nel caricamento utenti:', err);
      }
    };

    fetchUsers(); //richiamo subito la funzione per caricare gli utenti
  }, []);

  const sortedAndFiltered = useMemo(() => {
    let data = [...users]; 

    if (search) {
      data = data.filter((u) =>
        u.cognome?.toLowerCase().includes(search.toLowerCase())
      );
    }

    data.sort((a, b) => {
      const aVal = a[sortKey] ?? '';
      const bVal = b[sortKey] ?? '';

      if (aVal < bVal) return sortOrder === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    setTotalPages(Math.ceil(data.length / pageSize));
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

  const renderSortIcon = (key: string) => {
    if (key !== sortKey) return null;
    return sortOrder === 'asc' ? (
      <ChevronUp className="inline w-4 h-4 ml-1" />
    ) : (
      <ChevronDown className="inline w-4 h-4 ml-1" />
    );
  };

  return (
    <Card className="p-4 shadow-xl rounded-2xl border border-gray-300 max-h-[800px]">
      <CardContent>
        <div className="flex items-center justify-between mb-4">
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
                    {field.charAt(0).toUpperCase() + field.slice(1)}{' '}
                    {renderSortIcon(field)}
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
                    <td key={field} className="px-4 py-2">
                      {String(user[field])}
                    </td>
                  ))}
                  <td className="px-4 py-2">
                    <Button onClick={() => alert(`Modifica ${user._id}`)} className='odd:bg-[#f7e690]'>
                      Modifica
                    </Button>
                  </td>
                  <td className="px-4 py-2">
                    <Button onClick={() => alert(`Visualizza ${user._id}`)} className='odd:bg-[#f7e690]'>
                      Visualizza
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default TableIscritti;
