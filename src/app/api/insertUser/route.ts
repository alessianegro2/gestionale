import bcrypt from "bcrypt";
import clientPromise from "../../../../lib/mongodb";
import { ObjectId } from "mongodb";

export async function POST(req: Request) {
  try {
    const { username, password, descrizione, admin } = await req.json();
    const client = await clientPromise;
    const db = client.db("gestionale");

    //controllo se esiste già 
    const existingUser = await db.collection("users").findOne({ username });
    if (existingUser) {
      return new Response(
        JSON.stringify({ message: "Username già esistente" }),
        { status: 409 } // 409 conflitto
      );
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    await db.collection("users").insertOne({_id: new ObjectId, username, hashedPassword, descrizione, admin});

    return new Response(
      JSON.stringify({ message: "Registrazione avvenuta con successo" }),
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
