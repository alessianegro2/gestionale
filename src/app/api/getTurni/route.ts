import { NextResponse } from 'next/server';
import clientPromise from '../../../../lib/mongodb'; 

export async function GET(req: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("gestionale"); 

    const data = await db.collection('turni').find({}).toArray();
    
    return new Response(
      JSON.stringify({ message: "Turni ottenuti con successo", turni: data }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Errore nella query MongoDB:', error);
    return NextResponse.json({ users: [], total: 0 }, { status: 500 });
  }
}
