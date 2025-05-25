import clientPromise from "../../../../lib/mongodb";
import { ObjectId } from "mongodb";

export async function POST(req: Request) {
  try {
    const { id, idA } = await req.json();
    console.log(id)
    if (!id ) {
      return new Response(
        JSON.stringify({ message: "ID mancante nella richiesta." }),
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("gestionale");

    // Elimina l'attività
    const result = await db.collection("attivita").deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return new Response(
        JSON.stringify({ message: "Attività non trovata." }),
        { status: 404 }
      );
    }

    // Elimina tutti i turni collegati a quell'attività
    await db.collection("turni").deleteMany({ idA: idA });

    return new Response(
      JSON.stringify({ message: "Attività e turni associati eliminati con successo." }),
      { status: 200 }
    );
  } catch (error: Error | unknown) {
    console.error("Errore nell'eliminazione:", error);
    return new Response(
      JSON.stringify({ message: "Errore del server." }),
      { status: 500 }
    );
  }
}
