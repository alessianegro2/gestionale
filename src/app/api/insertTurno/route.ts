import clientPromise from "../../../../lib/mongodb";

export async function POST(req: Request) {
  try {
    const { idA, idT, data_i, data_f, n_turno } = await req.json();
    const client = await clientPromise;
    const db = client.db("gestionale");

    if(idT == null){
      return new Response(
        JSON.stringify({ message: "Inserire un codice del turno!" }),
        { status: 400 } // 400 bad Request
      );
  }

    // Controllo se esiste già 
    const existingT = await db.collection("turni").findOne({ idT });
    if (existingT) {
      return new Response(
        JSON.stringify({ message: "Codice turno già esistente" }),
        { status: 409 } // 409 conflitto
      );
    }

    // Funzione per convertire da yyyy-mm-dd a dd-mm-yyyy
    const convertDateFormat = (dateStr: string) => {
      const [yyyy, mm, dd] = dateStr.split("-");
      return `${dd}/${mm}/${yyyy}`;
    };

    const newT = {
      idA,
      idT,
      data_i: convertDateFormat(data_i),
      data_f: convertDateFormat(data_f),
      n_turno
    };

    await db.collection("turni").insertOne(newT);

    return new Response(
      JSON.stringify({ message: "Turno inserito con successo" }),
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
