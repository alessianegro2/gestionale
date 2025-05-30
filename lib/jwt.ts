import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const secret = process.env.JWT_SECRET!;

export function signToken(payload: object) {
  return jwt.sign(payload, secret, { expiresIn: "1h" });
}

export function verifyToken(token: string) {
  return jwt.verify(token, secret);
}

export function refreshToken(token: string) {
  try {
    const decoded = jwt.verify(token, secret, { ignoreExpiration: true }) as jwt.JwtPayload;

    const { iat, exp, ...payload } = decoded;

    return signToken(payload); 
  } catch (error) {
    throw new Error("Token non valido o impossibile da rinnovare.");
  }
}

export async function destroyToken() {
  (await cookies()).delete("token");
}