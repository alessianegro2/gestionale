"use client"
import TableIscritti from "@/components/TableIscritti"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
import { redirect } from "next/dist/server/api-utils"

const HomePage = () =>{
    const router = useRouter()
    return (
        <div className="w-full flex row">
            <div className="w-[50%] flex flex-col gap-4 p-4">
            //tabella di qualcosa o insert iscritti
            </div>
            <div className="w-[50%] flex flex-row gap-4 p-4">
                <Button onClick={()=> router.push('/impostazioni')} className='bg-[#f7e690] h-[100px] w-[150px] cursor-pointer'>
                    Nuovo utente
                </Button>
                <Button onClick={()=> router.push('/attivita')} className='bg-[#465c9798] h-[100px] w-[150px] cursor-pointer'>
                    Attività
                </Button>
                <Button onClick={()=> router.push('/iscritti')} className='bg-[#f7e690] h-[100px] w-[150px] cursor-pointer'>
                    Iscritti
                </Button>
            </div> 
        </div>
    )
}

export default HomePage