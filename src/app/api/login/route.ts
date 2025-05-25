import { signToken } from "../../../../lib/jwt";
import clientPromise from "../../../../lib/mongodb";
import { cookies } from "next/headers";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  let { username, password } = await req.json();
  password = String(password).trim(); //rimuovo gli spazi vuoti
  const client = await clientPromise;
  const db = client.db("gestionale"); 
  const user = await db.collection("users").findOne({ "username": username });

  if (!user) {
    return new Response(JSON.stringify({ message: "Utente non esistente" }), { status: 401 });
  }
  else{
    const isValid = await bcrypt.compare(password, user.password);
    //console.log(isValid, user.password, password);
    if(!isValid) {
      return new Response(JSON.stringify({ message: "Password errata" }), { status: 401 });
    }
    else{
      const token = signToken({ id: user._id, user: user.username, admin: user.admin }); 

      (await cookies()).set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60, //scade dopo un'ora
        path: "/",
      });
  
      return new Response(JSON.stringify({ success: true }),{headers: { "Content-Type": "application/json" }});
    }
  }
  
}
