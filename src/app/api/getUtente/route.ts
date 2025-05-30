import clientPromise from "../../../../lib/mongodb";
import { verifyToken, refreshToken } from "../../../../lib/jwt";
import { cookies } from "next/headers";
import { ObjectId } from "mongodb";

export async function GET(_req: Request) {
  try {
    //recupero token dal cookie
    const token = (await cookies()).get("token")?.value;

    if (!token) {
      return new Response(JSON.stringify({ message: "Token mancante" }), { status: 401 });
    }

    let refreshedToken: string | null = null;
    let decoded: any;

    try {
      decoded = verifyToken(token);
    } catch (err: any) {
      if (err.name === "TokenExpiredError") {
        try {
          refreshedToken = refreshToken(token);
          decoded = verifyToken(refreshedToken);
        } catch {
          return new Response(JSON.stringify({ message: "Token non rinnovabile" }), { status: 401 });
        }
      } else {
        return new Response(JSON.stringify({ message: "Token non valido" }), { status: 401 });
      }
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

    return new Response(JSON.stringify(userData), { status: 200 });

  } catch (error) {
    console.error("Errore durante il recupero dell'utente:", error);
    return new Response(JSON.stringify({ message: "Errore nel recupero dell'utente" }), { status: 500 });
  }
}
