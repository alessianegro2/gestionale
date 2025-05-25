import { cookies } from "next/headers";
import { verifyToken } from "../../../../lib/jwt";
import { redirect } from "next/navigation";
import UserForm from "@/components/UserForm";

export default async function UserManagementPage() {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    redirect("/");
  }

  let user;
  try {
    user = verifyToken(token);
  } catch (err) {
    redirect("/");
  }

  // Puoi anche passare i dati utente come prop se ti servono
  return <UserForm user={user} />;
}
