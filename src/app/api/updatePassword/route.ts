import clientPromise from "../../../../lib/mongodb";
import bcrypt from "bcrypt";
import {ObjectId} from "mongodb";

export async function POST(req: Request) {
  try {
    const { id, password } = await req.json();

    if (!id || !password) {
      return new Response(JSON.stringify({ message: "ID utente e nuova password richiesti" }), {
        status: 400,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const client = await clientPromise;
    const db = client.db("gestionale");

    const result = await db.collection("users").updateOne(
      { _id: new ObjectId(id) },
      { $set: { password: hashedPassword } }
    );

    if (result.matchedCount === 0) {
      return new Response(JSON.stringify({ message: "Utente non trovato" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify({ message: "Password aggiornata con successo" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Errore updatePassword:", error);
    return new Response(JSON.stringify({ message: "Errore server" }), { status: 500 });
  }
}
