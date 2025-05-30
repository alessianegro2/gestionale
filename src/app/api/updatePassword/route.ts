import clientPromise from "../../../../lib/mongodb";
import bcrypt from "bcrypt";
import {ObjectId} from "mongodb";
import { cookies } from "next/headers";
import { refreshToken, verifyToken } from "../../../../lib/jwt";

export async function POST(req: Request) {
  try {
    //recupero token dal cookie
    const token = (await cookies()).get("token")?.value;

    if (!token) {
      return new Response(JSON.stringify({ message: "Token mancante" }), { status: 401 });
    }

    let refreshedToken: string | null = null;

    try {
      verifyToken(token);
    } catch (err: any) {
      if (err.name === "TokenExpiredError") {
        try {
          refreshedToken = refreshToken(token);
        } catch {
          return new Response(JSON.stringify({ message: "Token non rinnovabile" }), { status: 401 });
        }
      } else {
        return new Response(JSON.stringify({ message: "Token non valido" }), { status: 401 });
      }
    }

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

    //aggiorno cookie
        if (refreshedToken) {
          (await cookies()).set("token", refreshedToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60,
            path: "/",
          });
        }
    
        console.log("token aggiornato:", refreshedToken);

    return new Response(JSON.stringify({ message: "Password aggiornata con successo" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Errore updatePassword:", error);
    return new Response(JSON.stringify({ message: "Errore server" }), { status: 500 });
  }
}
