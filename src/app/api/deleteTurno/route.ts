import clientPromise from "../../../../lib/mongodb";
import { ObjectId } from "mongodb";
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
