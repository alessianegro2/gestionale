import clientPromise from "../../../../lib/mongodb";

//converto data da yyyy-mm-dd a dd-mm-yyyy
const formatDate = (dateStr: string) => {
  const [yyyy, mm, dd] = dateStr.split("-");
  return `${dd}/${mm}/${yyyy}`;
};

export async function POST(req: Request) {
  try {
    const { idA, idT, data_i, data_f, n_turno } = await req.json();
    const client = await clientPromise;
    const db = client.db("gestionale");

    const updated = await db.collection("turni").updateOne(
      { idT }, {
        $set: {
          idA,
          data_i: formatDate(data_i),
          data_f: formatDate(data_f),
          n_turno
        },
      }
    );

    if (updated.modifiedCount === 0) {
      return new Response(
        JSON.stringify({ message: "Errore nella modifica del turno. Verifica che il codice del turno esista." }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({ message: "Turno aggiornato con successo" }),
      { status: 200 }
    );
  } catch (error: Error | unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    return new Response(
      JSON.stringify({ message: errorMessage }),
      { status: 500 }
    );
  }
}
