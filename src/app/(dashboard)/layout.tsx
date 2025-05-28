import '../styles.css';
import Menu from '@/components/Menu';
import Navbar from '@/components/Navbar';
import { cookies } from "next/headers";
import { verifyToken } from "../../../lib/jwt"; 
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    console.log("token non esistente");
    redirect("/");
  }

  try {
    verifyToken(token); 
  } catch (e) {
    console.log(e);
    redirect("/");
  }

  return ( 
      <div className='w-full flex' >
        {/*menù*/}
        <div style={{width: '13%'}}>
          <Menu></Menu>
        </div>

        {/*navbar*/}
        <div className='bg-[#F7F8Fa] overflow-y-scroll' style={{width: '87%'}}>
            <Navbar></Navbar>
          {/*varie pagine dashboard*/}
          <div className='p-4'>
            {children} 
          </div>
        </div>
      </div>

  )
}
