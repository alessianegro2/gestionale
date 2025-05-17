import clientPromise from "../../../../lib/mongodb";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const client = await clientPromise;
    const db = client.db("gestionale");

    if (!data) {
      return new Response(
        JSON.stringify({ message: "Errore get iscritti per attività" }),
        { status: 400 }
      );
    }

    const result = await db.collection("iscritti").aggregate([
    {
        $lookup: {
        from: "turni",
        localField: "idT",
        foreignField: "idT",
        as: "turniInfo"
        }
    },
    {
        $unwind: "$turniInfo"
    },
    {
        $lookup: {
        from: "attivita",
        localField: "turniInfo.idA",
        foreignField: "idA",
        as: "attivitaInfo"
        }
    },
    {
        $unwind: "$attivitaInfo"
    },
    {
        $match: {
        "attivitaInfo.idA": data
        }
    }
    ]).toArray();
    console.log(result);
    return new Response(
      JSON.stringify({ message: "Iscritti ottenuti con successo", users: result }),
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
