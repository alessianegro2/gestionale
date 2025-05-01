import { NextResponse } from 'next/server';
import clientPromise from '../../../../lib/mongodb'; 

export async function POST(req: Request) {
  try {
    const id = await req.json();
    const client = await clientPromise;
    const db = client.db("gestionale"); 

    const data = await db.collection('turni').find({idA: id}).toArray();
    
    return NextResponse.json( data );
  } catch (error) {
    console.error('Errore nella query MongoDB:', error);
    return NextResponse.json({ users: [], total: 0 }, { status: 500 });
  }
}
