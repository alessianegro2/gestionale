import Link from "next/link"
import Image from "next/image"

const UserCard = ({type}:{type:string}) => {
    return (
        <div className="rounded-2xl odd:bg-[#465b97] odd:text-white even:bg-[#f7e690] p-4 flex-1 min-w-[150px]">
            <div className="flex justify-between items-center">
                <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">2024/25</span>
                <Image src="/home.png" alt="img" width={20} height={20}></Image>
                
            </div>
            <h1 className="text-2xl font-semibold my-4">24/25</h1>
            <h2 className="capitalize text-sm  font-medium text-grey-500">{type}</h2>
        </div>
    )
}

export default UserCard