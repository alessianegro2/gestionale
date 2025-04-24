import clientPromise from "../../../../lib/mongodb";

// converto data da yyyy-mm-dd a dd-mm-yyyy
const formatDate = (dateStr: string) => {
  const [yyyy, mm, dd] = dateStr.split("-");
  return `${dd}/${mm}/${yyyy}`;
};

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const {
      _id,
      nome,
      cognome,
      sesso,
      data_n,
      luogo_n,
      indirizzo,
      citta,
      cap,
      nazionalita,
      autorizzato_uscita,
      note,
      genitore,
      gruppo,
      attivita,
    } = data;

    if (!_id) {
      return new Response(
        JSON.stringify({ message: "ID mancante. Impossibile aggiornare l'iscritto." }),
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("gestionale");
    const {ObjectId} = require("mongodb");

    const updated = await db.collection("iscritti").updateOne(
      { "_id": new ObjectId(_id) },
      {
        $set: {
          nome,
          cognome,
          sesso,
          data_n: formatDate(data_n),
          luogo_n,
          indirizzo,
          citta,
          cap,
          nazionalita,
          autorizzato_uscita,
          note,
          genitore,
          gruppo,
          attivita,
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
