import { NextResponse } from 'next/server';
import clientPromise from '../../../../lib/mongodb'; 
import { cookies } from "next/headers";
import { refreshToken, verifyToken } from "../../../../lib/jwt";

export async function GET(_request: Request) {
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

    const client = await clientPromise;
    const db = client.db("gestionale"); 

    const total = await db.collection('iscritti').countDocuments();
    const users = await db.collection('iscritti').find({}).toArray();
    //console.log(users);

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
      JSON.stringify({ message: "Iscritti ottenuti con successo", iscritti: users, total: total }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Errore nella query MongoDB:', error);
    return NextResponse.json({ users: [], total: 0 }, { status: 500 });
  }
}
