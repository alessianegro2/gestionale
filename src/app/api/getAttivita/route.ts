import { NextResponse } from 'next/server';
import clientPromise from '../../../../lib/mongodb'; 

export async function GET(_request: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("gestionale"); 

    const data = await db.collection('attivita').find({}).toArray();
    //console.log(data)
    return new Response(
      JSON.stringify({ message: "Attivita ottenute con successo", attivita: data }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Errore nella query MongoDB delle attività:', error);
    return NextResponse.json({ users: [], total: 0 }, { status: 500 });
  }
}
