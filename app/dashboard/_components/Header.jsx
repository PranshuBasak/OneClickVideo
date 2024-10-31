import { UserDetailContext } from "@/app/_context/UserDetailContext";
import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";


function Header() {

  const {userDetail, setUserDetail}  = useContext(UserDetailContext);  
  const pathname = usePathname();
  const isDashboard = pathname === "/dashboard";
  // console.log(isDashboard, pathname)
  return (
    <div className="w-full bg-white p-3 px-5 flex gap-4 items-center justify-between shadow-md">
        <div className="flex gap-3 items-center">
            <Image src={'/logo.svg'} width={30} height={30} alt="Logo"/>
            <h2 className="hidden md:flex px-1 sm:px-10 py-0.5  border-2 rounded-md border-black dark:border-white uppercase bg-white text-black  transform transition duration-200 hover:shadow-md text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] font-bold truncate">One Click Video</h2>
        </div>
        <div className="flex gap-3">
          <div className="flex items-center gap-2 mx-1">
            <Image src={'/coin.png'} width={20} height={20} alt="Logo"/>
            <h2 className="text-black">
              {userDetail?.credits || 0}
            </h2>
          </div>
            <Button className="px-4 py-2 rounded-md border border-neutral-300 transition duration-200 hover:shadow-md">
            <Link href={isDashboard ? "/dashboard/create-new" : "/dashboard"}>
              {isDashboard ? "Create New" : "Dashboard"}
            </Link>
            </Button>
            <UserButton />
        </div>
    </div>
  )
}

export default Header