"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
import { redirect } from "next/dist/server/api-utils"
import Attivita from "@/components/Attivita";

const HomePage = () =>{
    const router = useRouter()
    return (
        <Attivita></Attivita>
    )
}

export default HomePage