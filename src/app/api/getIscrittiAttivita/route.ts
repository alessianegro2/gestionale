import clientPromise from "../../../../lib/mongodb";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const client = await clientPromise;
    const db = client.db("gestionale");

    if (!data) {
      return new Response(
        JSON.stringify({ message: "Errore get iscritti per attività" }),
        { status: 400 }
      );
    }

    // 1. Prendo tutti i turni relativi a quell'attività
    const turni = await db.collection("turni").find({ idA: data.idAttivita }).toArray();
    const idsTurni = turni.map(turno => turno.idT);

    // 2. Prendo tutti gli iscritti che hanno uno di quei turni
    const iscritti = await db.collection("iscritti").find({ turni:{ $in: idsTurni } }).toArray();

    console.log(iscritti);

    return new Response(
      JSON.stringify({ message: "Iscritti ottenuti con successo", iscritti: iscritti }),
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
