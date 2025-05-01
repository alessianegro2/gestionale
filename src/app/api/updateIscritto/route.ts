import clientPromise from "../../../../lib/mongodb";

// converto data da yyyy-mm-dd a dd-mm-yyyy
const formatDate = (dateStr: string) => {
  const [yyyy, mm, dd] = dateStr.split("-");
  return `${dd}/${mm}/${yyyy}`;
};

export async function POST(req: Request) {
  try {
    const data = await req.json();
    if (!data._id) {
      return new Response(
        JSON.stringify({ message: "ID mancante. Impossibile aggiornare l'iscritto." }),
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("gestionale");
    const {ObjectId} = require("mongodb");

    const updated = await db.collection("iscritti").updateOne(
      { "_id": new ObjectId(data._id) },
      {
        $set: {
          nome: data.nome,
          cognome: data.cognome,
          sesso: data.sesso,
          data_n: formatDate(data.data_n),
          luogo_n: data.luogo_n,
          indirizzo: data.indirizzo,
          citta: data.citta,
          cap: data.cap,
          nazionalita: data.nazionalita,
          autorizzato_uscita: data.autorizzato_uscita,
          note: data.note,
          genitore:{
            nome: data.genitore.nome ,
            cognome: data.genitore.cognome,
            telefono: data.genitore.telefono,
            email: data.genitore.email
          },
          disabilita: data.disabilita,
          privacy: data.privacy, 
          trasporto: data.trasporto, 
          pranzo: data.pranzo
        },
      }
    );

    if (updated.modifiedCount === 0) {
      return new Response(
        JSON.stringify({ message: "Nessuna modifica effettuata. Verifica che l'ID esista." }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({ message: "Iscritto aggiornato con successo" }),
      { status: 200 }
    );
  } catch (error: Error | any) {
    return new Response(
      JSON.stringify({ message: error.message }),
      { status: 500 }
    );
  }
}
