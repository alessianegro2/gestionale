"use client";

import React, { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";

type User = {
  _id: string;
  username: string;
  password: string;
  descrizione: string;
  admin: boolean;
};

const UserManagement = () => { 
  const [utenti, setUtenti] = useState<User[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchUtenti = async () => {
    setMessage(null);
    try {
      const res = await fetch("/api/getUtenti");
      const data = await res.json();
      console.log(data);
      if (res.ok) 
        setUtenti(Array.isArray(data.users) ? data.users : []);
    } catch (err) {
      console.error("Errore nel recupero degli utenti", err);
      setUtenti([]); //array vuoto in caso di errore
    }
  };

  useEffect(() => {
    setMessage(null);
    fetchUtenti();
  }, []);

  const handleDelete = async (id:any) => {
    setMessage(null);
    try {
      const res = await fetch("/api/deleteUser", {
        method: "POST",
        body: JSON.stringify({ id }),
      });
      if (res.ok) fetchUtenti();
      else setMessage("Errore durante l'eliminazione.");
    } catch (err) {
      console.error("Errore durante l'eliminazione", err);
    }
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setLoading(true);

    const payload = selectedUser ? {...selectedUser } : { username: "", password: "", admin: false, descrizione: "" };

    try {
      if(selectedUser){
        const res = await fetch('/api/updateUser', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const result = await res.json();
        if (res.ok) {
          setMessage("Operazione completata!");
        } else {
          setMessage(result.message || "Errore durante l'operazione.");
        }
        setShowForm(false);
        fetchUtenti();
      }else{
        const res = await fetch('/api/insertUser', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (res.ok) {
          setMessage("Operazione completata!");
        } else {
          setMessage("Errore durante l'operazione.");
        }
        setShowForm(false);
        fetchUtenti();
      }
      
    } catch (error) {
      setMessage("Errore imprevisto.");
    } finally {
      setLoading(false);
    }
  };
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    const newValue =
      type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : value;

    setSelectedUser((prev) => ({
      ...prev!,
      [name]: newValue,
    }));
  };



  return (
    <div className="py-10 px-4 flex flex-col items-center relative w-full">
      <h1 className="text-3xl font-semibold text-center mb-8">Gestione Utenti</h1>

      <button onClick={() => { setSelectedUser(null); setShowForm(true); }} className="absolute top-6 right-6 bg-[#fdeb90] hover:bg-[#fdea87] text-black font-bold rounded-full w-12 h-12 text-2xl flex items-center justify-center shadow-md transition">+</button>

      {showForm ? (
        <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
          <form className="space-y-5">
            <input type="text" name="username" placeholder="Username" value={selectedUser?.username || ""} onChange={handleChange } required className="w-full p-2 border rounded" />
            <input type="password" name="password" placeholder="Password" value={""} onChange={handleChange}  className="w-full p-2 border rounded" />
            <textarea placeholder="Descrizione" name="descrizione" value={selectedUser?.descrizione || ""} onChange={handleChange} className="w-full p-2 border rounded"></textarea>
            <label>
              <input type="checkbox" name="admin" checked={selectedUser?.admin || false} onChange={handleChange} /> Admin
            </label>
            <div className="grid grid-cols-2">
              <div className=" flex justify-start w-full">
                <Button onClick={() => setShowForm(false)} className=" bg-gray-400 hover:bg-gray-500 py-2 text-black font-semibold rounded-xl text-sm cursor-pointer ">Annulla</Button>
              </div>

              <div className=" flex justify-end w-full">
                <Button onClick={handleSubmit} className="bg-[#fdeb90] py-2 text-black font-semibold rounded-xl text-sm cursor-pointer hover:bg-gray-200">{loading ? <Loader2 className="animate-spin h-5 w-5" /> : "Salva"}</Button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <table className=" bg-white shadow-md rounded-xl" style={{ width: "50%" }}>
          <thead className="bg-[#fdeb90]">
            <tr className="text-left">
              <th className="p-3">Username</th>
              <th className="p-3">Admin</th>
              <th className="p-3">Descrizione</th>
            </tr>
          </thead>
          <tbody>
            {utenti.map((utente) => (
              <tr key={utente._id} className="border-t">
                <td className="p-3">{utente.username}</td>
                <td className="p-3">{utente.admin ? "Sì" : "No"}</td>
                <td className="p-3">{utente.descrizione}</td>
                <td className="p-3 flex">
                  <Button onClick={() => {setSelectedUser({ ...utente }); setShowForm(true);}} className="text-black m-1 font-semibold rounded-xl text-sm cursor-pointer">Modifica</Button>

                  <Button onClick={() => handleDelete(utente._id)} className="bg-red-400 hover:bg-red-600 font-semibold rounded-xl text-sm cursor-pointer">Elimina</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {message && <p className="text-sm text-center text-black mt-4">{message}</p>}
    </div>
  );
};

export default UserManagement;
