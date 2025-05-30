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

    //attività
    const { idA, nome, data_i, data_f, n_settimane, costo_settimana } = await req.json();
    const client = await clientPromise;
    const db = client.db("gestionale");

    if (!idA) {
      return new Response(
        JSON.stringify({ message: "Inserire un codice dell'attività!" }),
        { status: 400 }
      );
    }

    const existingUser = await db.collection("attivita").findOne({ idA });
    if (existingUser) {
      return new Response(
        JSON.stringify({ message: "Codice attività già esistente" }),
        { status: 409 }
      );
    }

    const convertDateFormat = (dateStr: string) => {
      const [yyyy, mm, dd] = dateStr.split("-");
      return `${dd}/${mm}/${yyyy}`;
    };

    const newA = {
      idA,
      nome,
      data_i: convertDateFormat(data_i),
      data_f: convertDateFormat(data_f),
      n_settimane,
      costo_settimana
    };

    await db.collection("attivita").insertOne(newA);

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

    return new Response(JSON.stringify({ message: "Attività inserita con successo" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Errore sconosciuto";
    return new Response(
      JSON.stringify({ message: errorMessage }),
      { status: 500 }
    );
  }
}
