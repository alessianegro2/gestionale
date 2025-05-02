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
    redirect("/login");
  }

  try {
    verifyToken(token); 
  } catch (e) {
    console.log(e);
    redirect("/login");
  }

  return (
      <div className='h-screen flex'>
        {/*menù*/}
        <div className='w-[13%] md:w-[6%] lg:w-[13%] xl:w-[13%]'>
          <Menu></Menu>
        </div>

        {/*navbar*/}
        <div className='w-[87%] md:w-[94%] lg:w-[87%] xl:w-[87%]  bg-[#F7F8Fa] overflow-scroll'>
            <Navbar></Navbar>
        
          {/*varie pagine dashboard*/}
          <div className='w-full p-4'>
            {children} 
          </div>
        </div>
      </div>

  )
}
