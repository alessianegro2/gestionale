import clientPromise from "../../../../lib/mongodb";
import bcrypt from "bcrypt";
import {ObjectId } from "mongodb";

export async function POST(req: Request) {
  try {
    const { _id, username, password, descrizione, admin } = await req.json();
    const client = await clientPromise;
    const db = client.db("gestionale");
    console.log("ID:", _id);
    let hashedPassword ="";
    let updated;
    
    if(password.lenght>0){
       hashedPassword = await bcrypt.hash(password, 10);
        updated = await db.collection("users").updateOne(
          { _id: new ObjectId(_id) }, {
            $set: {
              username: username,
              password: hashedPassword,
              descrizione: descrizione,
              admin: admin,
            },
          }
        );
    }else{
      updated = await db.collection("users").updateOne(
        { _id: new ObjectId(_id) }, {
          $set: {
            username: username,
            password: hashedPassword,
            descrizione: descrizione,
            admin: admin,
          },
        }
      );
    }

    if (updated.modifiedCount === 0) {
      return new Response(
        JSON.stringify({ message: "Errore nella modifica dell'utente. Verifica che l'utente esista." }),
        { status: 404 }
      );
    }

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
