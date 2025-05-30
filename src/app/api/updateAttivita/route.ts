import clientPromise from "../../../../lib/mongodb";
import { cookies } from "next/headers";
import { refreshToken, verifyToken } from "../../../../lib/jwt";

//converto data da yyyy-mm-dd a dd-mm-yyyy
const formatDate = (dateStr: string) => {
  const [yyyy, mm, dd] = dateStr.split("-");
  return `${dd}/${mm}/${yyyy}`;
};

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

    const { attivita, nome, data_i, data_f, n_settimane, costo_settimana } = await req.json();
    const client = await clientPromise;
    const db = client.db("gestionale");

    const updated = await db.collection("attivita").updateOne(
      { attivita }, {
        $set: {
          nome,
          data_i: formatDate(data_i),
          data_f: formatDate(data_f),
          n_settimane,
          costo_settimana,
        },
      }
    );

    if (updated.modifiedCount === 0) {
      return new Response(
        JSON.stringify({ message: "Errore nella modifica dell'attività. Verifica che il codice dell'attività esista" }),
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
      JSON.stringify({ message: "Attività aggiornata con successo" }),
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
