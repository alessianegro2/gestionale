import { destroyToken } from "../../../../lib/jwt";

export async function POST() {
  try {
    destroyToken();

    return new Response(
      JSON.stringify({ message: "Logout effettuato con successo" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Errore durante il logout" }),
      { status: 500 }
    );
  }
}
