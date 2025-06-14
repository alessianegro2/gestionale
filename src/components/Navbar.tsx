import Image from 'next/image'
import { cookies } from "next/headers";
import { verifyToken } from "../../lib/jwt";
import { JwtPayload } from 'jsonwebtoken';
import Link from 'next/link';


export default async function Navbar() {
    const token = (await cookies()).get("token")?.value;

    if (!token) {
        console.log("token non esistente");
    }

    try {
        if (!token) {
            throw new Error("Token is undefined");
        }
        const user = verifyToken(token) as JwtPayload;
        console.log(user);

        return(
            <div className='flex items-center justify-between p-4 bg-gray-50 h-[60px] '>
                {/*icons and user*/}
                <div className='flex items-center gap-6 justify-end w-full cursor-pointer' >
                    <div className='flex flex-col'>
                        <span className='text-sm leading-3 font-medium'>{user.user}</span>
                        <span className='text-[10px] text-gray-500 text-right'>{ user.ruolo}</span>
                    </div>
                    <Link href="/profilo"><Image alt="" src="/profile.png" width={24} height={24}></Image></Link>
                </div>
            </div>
        )
    } catch (e) {
        return `<p>Token non valido. ${e}</p>`;
    }
}
