import clientPromise from "../../../../lib/mongodb";

export async function POST(req: Request) {
  try {
    const { attivita, nome, data_i, data_f, n_settimane, costo_settimana } = await req.json();
    const client = await clientPromise;
    const db = client.db("gestionale");

    if(attivita == null){
        return new Response(
            JSON.stringify({ message: "Inserire un codice dell'attività!" }),
            { status: 400 } // 400 bad Request
        );
    }

    // Controllo se esiste già 
    const existingUser = await db.collection("attivita").findOne({ attivita });
    if (existingUser) {
      return new Response(
        JSON.stringify({ message: "Codice attività già esistente" }),
        { status: 409 } // 409 conflitto
      );
    }

    // Funzione per convertire da yyyy-mm-dd a dd-mm-yyyy
    const convertDateFormat = (dateStr: string) => {
      const [yyyy, mm, dd] = dateStr.split("-");
      return `${dd}/${mm}/${yyyy}`;
    };

    const newA = {
      attivita,
      nome,
      data_i: convertDateFormat(data_i),
      data_f: convertDateFormat(data_f),
      n_settimane,
      costo_settimana
    };

    await db.collection("attivita").insertOne(newA);

    return new Response(
      JSON.stringify({ message: "Attività inserita con successo" }),
      { status: 200 }
    );
  } catch (error: Error | unknown) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(
      JSON.stringify({ message: errorMessage }),
      { status: 500 }
    );
  }
}
