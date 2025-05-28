import clientPromise from "../../../../lib/mongodb";

// converto data da yyyy-mm-dd a dd-mm-yyyy
const formatDate = (dateStr: string) => {
  const [yyyy, mm, dd] = dateStr.split("-");
  return `${dd}/${mm}/${yyyy}`;
};

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const client = await clientPromise;
    const db = client.db("gestionale");

    if (!data) {
      return new Response(
        JSON.stringify({ message: "Errore nell'inserimento dell'iscritto." }),
        { status: 400 }
      );
    }

    const newI = {
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
      genitore: {
        nome: data.genitore?.nome_g ?? "",
        cognome: data.genitore?.cognome_g ?? "",
        telefono: data.genitore?.telefono_g ?? "",
        email: data.genitore?.email_g ?? ""
      },
      disabilita: data.disabilita ?? false,
      privacy: data.privacy ?? false,
      trasporto: data.trasporto ?? false,
      pranzo: data.pranzo ?? "",
      da_pagare: data.da_pagare ?? 0,
      pagato: data.pagato ?? 0,
      tipo_pagamento: data.tipo_pagamento ?? "",
      turni: Array.isArray(data.turni)? data.turni : []
    };

    await db.collection("iscritti").insertOne(newI);

    return new Response(
      JSON.stringify({ message: "Iscritto inserito con successo" }),
      { status: 200 }
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    return new Response(
      JSON.stringify({ message: errorMessage }),
      { status: 500 }
    );
  }
}
