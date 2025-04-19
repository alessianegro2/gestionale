import bcrypt from "bcrypt";
import clientPromise from "../../../../lib/mongodb";

export async function POST(req: Request) {
  try {
    const { username, password, admin, descrizione } = await req.json();
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

    const newUser = {
      username,
      password: hashedPassword,
      admin,
      descrizione
    };

    await db.collection("users").insertOne(newUser);

    return new Response(
      JSON.stringify({ message: "Registrazione avvenuta con successo" }),
      { status: 200 }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({ message: error.message }),
      { status: 500 }
    );
  }
}
