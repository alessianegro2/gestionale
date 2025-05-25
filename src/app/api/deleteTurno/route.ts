import clientPromise from "../../../../lib/mongodb";
import { ObjectId } from "mongodb";

export async function POST(req: Request) {
  try {
    const { id } = await req.json();
    console.log(id)
    if (!id) {
      return new Response(
        JSON.stringify({ message: "ID mancante nella richiesta." }),
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("gestionale");

    const result = await db.collection("turni").deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return new Response(
        JSON.stringify({ message: "Turno non trovato." }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({ message: "Turno eliminato con successo." }),
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
