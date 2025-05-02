import clientPromise from "../../../../lib/mongodb";
import { ObjectId } from "mongodb";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    console.log(data)
    if (!data) {
      return new Response(
        JSON.stringify({ message: "ID mancante nella richiesta." }),
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("gestionale");
    const result = await db.collection("iscritti").deleteOne({ _id: new ObjectId(data) });

    if (result.deletedCount === 0) {
      return new Response(
        JSON.stringify({ message: "Iscritto non trovato." }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({ message: "Iscritto eliminato con successo." }),
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
