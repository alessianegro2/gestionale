import { NextResponse } from 'next/server';
import clientPromise from '../../../../lib/mongodb'; 

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  try {
    const client = await clientPromise;
    const db = client.db("gestionale"); 

    const data = await db.collection('attivita').find({}).toArray();
    console.log(data)
    return NextResponse.json( data );
  } catch (error) {
    console.error('Errore nella query MongoDB:', error);
    return NextResponse.json({ users: [], total: 0 }, { status: 500 });
  }
}
