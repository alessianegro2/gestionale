import clientPromise from "../../../../lib/mongodb";
import {ObjectId } from "mongodb";
import { cookies } from "next/headers";
import { refreshToken, verifyToken } from "../../../../lib/jwt";

// converto data da yyyy-mm-dd a dd-mm-yyyy
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

    const data = await req.json();
    if (!data._id) {
      return new Response(
        JSON.stringify({ message: "ID mancante. Impossibile aggiornare l'iscritto." }),
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("gestionale");

    const updated = await db.collection("iscritti").updateOne(
      { "_id": new ObjectId(data._id) },
      {
        $set: {
          nome: data.nome,
          cognome: data.cognome,
          sesso: data.sesso,
          data_n: formatDate(data.data_n),
          luogo_n: data.luogo_n,
          indirizzo: data.indirizzo,
          citta: data.citta,
          cap: data.cap,
          nazionalita: data.nazionalita,
          autorizzato_uscita: data.autorizzato_uscita,
          note: data.note,
          genitore:{
            nome_g: data.genitore.nome_g ,
            cognome_g: data.genitore.cognome_g,
            telefono_g: data.genitore.telefono_g,
            email_g: data.genitore.email_g
          },
          disabilita: data.disabilita,
          privacy: data.privacy, 
          trasporto: data.trasporto, 
          pranzo: data.pranzo,
          da_pagare: data.da_pagare,
          pagato: data.pagato,
          tipo_pagamento: data.tipo_pagamento,
          turni: data.turni
        },
      }
    );

    if (updated.modifiedCount === 0) {
      return new Response(
        JSON.stringify({ message: "Nessuna modifica effettuata. Verifica che l'ID esista." }),
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
      JSON.stringify({ message: "Iscritto aggiornato con successo" }),
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
