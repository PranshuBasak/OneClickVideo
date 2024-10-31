"use client"

import { useEffect, useState } from "react";
import { VideoDataContext } from "../_context/VideoDataContext"
import Header from "./_components/Header"
import Sidebar from "./_components/Sidebar"
import { UserDetailContext } from "../_context/UserDetailContext";
import { useUser } from "@clerk/nextjs";
import { db } from "@/configs/db";
import { Users } from "@/configs/schema";
import { eq } from "drizzle-orm";


function DashboardLayout({children}) {
  const [VideoData, setVideoData] = useState([]);
  const [userDetail, setUserDetail] = useState([]);
  const {user} = useUser();
  const getUserDetail = async() =>{
    const result = await db.select().from(Users).where(eq(Users.email, user?.primaryEmailAddress?.emailAddress))
    setUserDetail(result[0]);
  }

  useEffect(() =>{
    user&&getUserDetail()
  },[user])
  return (
    <UserDetailContext.Provider value={{userDetail, setUserDetail}}>
      <VideoDataContext.Provider value={{VideoData, setVideoData}}>
        <div className="bg-white ">
            <div className="hidden md:block h-screen bg-white fixed mt-[65px] w-64">
                <Sidebar />
            </div>
            <div>
              <div className="fixed top-0 left-0 right-0 z-50 bg-white">
                <Header />
              </div>
              <div className="md:ml-64 px-5 md:px-10 py-20 h-full">
                  {children}
              </div>
            </div>
        </div>
      </VideoDataContext.Provider>
    </UserDetailContext.Provider>
  )
}

export default DashboardLayout