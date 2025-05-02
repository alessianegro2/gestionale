import clientPromise from "../../../../lib/mongodb";
import { verifyToken } from "../../../../lib/jwt";
import { cookies } from "next/headers";
import { ObjectId } from "mongodb";

export async function GET(_req: Request) {
  try {
    const cookieStore = cookies();
    const token = (await cookieStore).get("token");

    if (!token) {
      return new Response(JSON.stringify({ message: "Token mancante" }), { status: 401 });
    }

    const decoded = verifyToken(token.value);

    if (typeof decoded !== "object" || !decoded) {
      return new Response(JSON.stringify({ message: "Token non valido" }), { status: 401 });
    }

    const { id, user } = decoded as { id: string; user: string };
    const client = await clientPromise;
    const db = client.db("gestionale");

    const userDoc = await db.collection("users").findOne({ _id: new ObjectId(id), username: user });

    if (!userDoc) {
      return new Response(JSON.stringify({ message: "Utente non trovato" }), { status: 404 });
    }

    const userData = {
      _id: userDoc._id,
      username: userDoc.username,
      password: userDoc.password,
      admin: userDoc.admin,
      descrizione: userDoc.descrizione,
      immagine: userDoc.immagine,
    };

    return new Response(JSON.stringify(userData), { status: 200 });

  } catch (error) {
    console.error("Errore durante il recupero dell'utente:", error);
    return new Response(JSON.stringify({ message: "Errore nel recupero dell'utente" }), { status: 500 });
  }
}
