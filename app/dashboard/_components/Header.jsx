import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs"
import Image from "next/image"


function Header() {
  return (
    <div className="p-3 px-5 flex gap-4 items-center justify-between shadow-md">
        <div className="flex gap-3 items-center">
            <Image src={'/logo.svg'} width={30} height={30} alt="Logo"/>
            <h2 className="px-1 sm:px-10 py-0.5  border-2 rounded-md border-black dark:border-white uppercase bg-white text-black  transform transition duration-200 hover:shadow-md text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] font-bold truncate">One Click Video</h2>
        </div>
        <div className="flex gap-3">
            <Button className="px-4 py-2 rounded-md border border-neutral-300 transition duration-200 hover:shadow-md">
                Dashboard
            </Button>
            <UserButton />
        </div>
    </div>
  )
}

export default Header