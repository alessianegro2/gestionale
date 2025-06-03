import { CardContent, Card } from "./ui/card";
import { UserCircle } from "lucide-react";

type Props = {
  onClose: () => void;
  defaultData? : Iscritto | null;
};

type Iscritto={
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

const ProfiloIscritto = ({ onClose, defaultData }: Props) => {
    
    return(
        <>
            {defaultData ? (
                <>
                <div className="w-container ">
                    <Card style={{width:"40%", margin: "0 auto"}}>
                        <UserCircle className="w-16 h-16 text-gray-500 m-2 mb-4" style={{margin: "0 auto"}} />
                        <h1 className="text-2xl font-bold m-4 mb-2 text-center">Anagrafica</h1>
                        <CardContent className="bg-gray-100 ml-3 mr-3 rounded-xl text-center">
                            <div className="grid grid-cols-2 m-2 p-2 ">
                                <div><p><b>Nome: </b> {defaultData.nome}</p></div>
                                <div><p><b>Cognome: </b> {defaultData.cognome}</p></div>
                            </div>
                            <div className="grid grid-cols-2 m-2 p-2 ">
                                <div><p><b>Data di nascita: </b> {defaultData.data_n}</p></div>
                                <div><p><b>Luogo di nascita: </b> {defaultData.luogo_n}</p></div>
                            </div>
                            <div className="grid grid-cols-2 m-2 p-2 ">
                                <div><p><b>Sesso: </b> {defaultData.sesso}</p></div>
                                <div><p><b>Codice fiscale: </b> da mettere</p></div>
                            </div>
                            <div className="grid grid-cols-2 m-2 p-2">
                                <div><p><b>Indirizzo: </b> {defaultData.indirizzo}</p></div>
                                <div><p><b>Città: </b> {defaultData.citta}</p></div>
                            </div>
                            <div className="grid grid-cols-2 m-2 p-2">
                                <div><p><b>CAP: </b> {defaultData.cap}</p></div>
                                <div><p><b>Nazionalità: </b> {defaultData.nazionalita}</p></div>
                            </div>
                            <div className="m-2 p-2">
                                <p><b>Note: </b> {defaultData.note}</p>
                            </div>
                        </CardContent>
                        
                        <h2 className="text-2xl font-bold m-4 mb-2 text-center">Autorizzazioni</h2>
                        <CardContent className="bg-gray-100 ml-3 mr-3 rounded-xl text-center"> 
                            <div className="grid grid-cols-3 m-2 p-2 ">
                                <div><p><b>Privacy: </b> {defaultData.privacy == true? "SI" : "NO"}</p></div>
                                <div><p><b>Trasporto: </b> {defaultData.trasporto == true? "SI" : "NO"}</p></div>
                                <div><p><b>Uscita autonoma: </b> {defaultData.autorizzato_uscita}</p></div>
                            </div>                            
                        </CardContent>
                        
                        <h2 className="text-2xl font-bold m-4 mb-2 text-center">Contatti genitore</h2>
                        <CardContent className="bg-gray-100 ml-3 mr-3 rounded-xl text-center">
                            <div className="grid grid-cols-2 m-2 p-2 ">
                                <div><p><b>Nome: </b> {defaultData.genitore.nome_g}</p></div>
                                <div><p><b>Cognome: </b> {defaultData.genitore.cognome_g}</p></div>
                            </div>
                            <div className="grid grid-cols-2 m-2 p-2 ">
                                <div><p><b>Telefono: </b> {defaultData.genitore.telefono_g}</p></div>
                                <div><p><b>Email: </b> {defaultData.genitore.email_g}</p></div>
                            </div>
                        </CardContent>
                        
                    </Card>
                    <div className="flex text-center w-full m-3">
                        <button type="button" onClick={onClose} className="px-3 py-1 rounded-xl text-sm font-semibold cursor-pointer bg-gray-200 hover:bg-gray-400" style={{margin: "0 auto"}} >
                            Indietro
                        </button>
                    </div>
                </div>
                </>
            ):null}
        </>
    )
}
export default ProfiloIscritto;