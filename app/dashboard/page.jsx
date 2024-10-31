"use client"
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import EmptyState from './_components/EmptyState';
import Link from 'next/link';
import VideoList from './_components/VideoList';
import { useUser } from '@clerk/nextjs';
import { db } from '@/configs/db';
import { VideoDataMain } from '@/configs/schema';
import { eq } from 'drizzle-orm';

function Dashboard() {

  const [videoList, setvideoList] = useState([]);
  const {user} = useUser();
  const getUserVideoList = async () => {
    const result = await db.select().from(VideoDataMain).where(eq(VideoDataMain.createdBy,user?.primaryEmailAddress?.emailAddress))

    console.log(result);
    setvideoList(result);
  }

  useEffect(() => {
    user&&getUserVideoList()
  }, [user])
  

  return (
    <div className='bg-white '>
      <div className='flex justify-between items-center mb-4 flex-wrap'>
        <h2 className="font-bold text-2xl text-primary ">Dashboard</h2>
        <Link href='/dashboard/create-new'>
          <Button> Create Video</Button>
        </Link>
      </div>

      {/* {Empty State} */}

      {videoList?.length == 0 &&
        <div>
          <EmptyState />
        </div>
      }

      {/* Video List */}
      
      <div>
        <VideoList videoList={videoList} />
      </div>
    </div>
  )
}

export default Dashboard