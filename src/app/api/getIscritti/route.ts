import { NextResponse } from 'next/server';
import clientPromise from '../../../../lib/mongodb'; 

export async function GET(_request: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("gestionale"); 

    const total = await db.collection('iscritti').countDocuments();
    const users = await db.collection('iscritti').find({}).toArray();
    //console.log(users);
    return NextResponse.json({ users, total });
  } catch (error) {
    console.error('Errore nella query MongoDB:', error);
    return NextResponse.json({ users: [], total: 0 }, { status: 500 });
  }
}
