import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function EmptyState() {
  return (
    <div className='p-5 py-24 flex flex-col items-center justify-center text-center border-2 border-dashed rounded-lg'>
        <h2 className="">
            You don't have any video created
        </h2>
        <Link href='/dashboard/create-new'>
        
            <Button className='mt-5'>
                Create New Short Video
            </Button>
        </Link>
    </div>
  )
}

export default EmptyState