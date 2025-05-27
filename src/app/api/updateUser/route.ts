import clientPromise from "../../../../lib/mongodb";
import bcrypt from "bcrypt";
import {ObjectId } from "mongodb";

export async function POST(req: Request) {
  try {
    const { _id, username, descrizione, admin, password } = await req.json();
    const client = await clientPromise;
    const db = client.db("gestionale");

    // Recupera l'utente esistente
    const user = await db.collection('users').findOne({ _id: new ObjectId(_id) });

    const updateData: any = {
      username,
      descrizione,
      admin,
    };

    // Se password presente e non vuota, aggiorna anche quella
    if (password && password.trim() !== "") {
      const hashedPassword = await bcrypt.hash(password, 10);
      updateData.password = hashedPassword;
    }

    // Esegui l'update
    await db.collection('users').updateOne(
      { _id: new ObjectId(_id) },
      { $set: updateData }
    );
    return new Response(
      JSON.stringify({ message: "Utente aggiornato con successo" }),
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
