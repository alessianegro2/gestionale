import clientPromise from "../../../../lib/mongodb";
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

    const data = await req.json();
    const client = await clientPromise;
    const db = client.db("gestionale");

    if (!data) {
      return new Response(
        JSON.stringify({ message: "Errore get iscritti per attività" }),
        { status: 400 }
      );
    }

    // prendo tutti i turni relativi a quell'attività
    const turni = await db.collection("turni").find({ idA: data.idAttivita }).toArray();
    const idsTurni = turni.map(turno => turno.idT);

    // prendo tutti gli iscritti che hanno uno di quei turni
    const iscritti = await db.collection("iscritti").find({ turni:{ $in: idsTurni } }).toArray();

    console.log(iscritti);

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
      JSON.stringify({ message: "Iscritti ottenuti con successo", iscritti: iscritti }),
      { status: 200 }
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    return new Response(
      JSON.stringify({ message: errorMessage }),
      { status: 500 }
    );
  }
}
