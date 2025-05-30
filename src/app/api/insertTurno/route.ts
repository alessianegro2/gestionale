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

    const { idA, idT, data_i, data_f, n_turno } = await req.json();
    const client = await clientPromise;
    const db = client.db("gestionale");

    if(idT == null){
      return new Response(
        JSON.stringify({ message: "Inserire un codice del turno!" }),
        { status: 400 } // 400 bad Request
      );
  }

    // Controllo se esiste già 
    const existingT = await db.collection("turni").findOne({ idT });
    if (existingT) {
      return new Response(
        JSON.stringify({ message: "Codice turno già esistente" }),
        { status: 409 } // 409 conflitto
      );
    }

    // Funzione per convertire da yyyy-mm-dd a dd-mm-yyyy
    const convertDateFormat = (dateStr: string) => {
      const [yyyy, mm, dd] = dateStr.split("-");
      return `${dd}/${mm}/${yyyy}`;
    };

    const newT = {
      idA,
      idT,
      data_i: convertDateFormat(data_i),
      data_f: convertDateFormat(data_f),
      n_turno
    };

    await db.collection("turni").insertOne(newT);

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
      JSON.stringify({ message: "Turno inserito con successo" }),
      { status: 200 }
    );
  } catch (error: Error | unknown) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(
      JSON.stringify({ message: errorMessage }),
      { status: 500 }
    );
  }
}
