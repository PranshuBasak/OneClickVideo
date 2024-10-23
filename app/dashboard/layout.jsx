"use client"

import { useState } from "react";
import { VideoDataContext } from "../_context/VideoDataContext"
import Header from "./_components/Header"
import Sidebar from "./_components/Sidebar"


function DashboardLayout({children}) {
  const [VideoData, setVideoData] = useState([]);
  return (
    <VideoDataContext.Provider value={{VideoData, setVideoData}}>
      <div>
          <div className="hidden md:block h-screen bg-white fixed mt-[65px] w-64">
              <Sidebar />
          </div>
          <div>
              <Header />
              <div className="md:ml-64 p-10">
                  {children}
              </div>
          </div>
      </div>
    </VideoDataContext.Provider>
  )
}

export default DashboardLayout