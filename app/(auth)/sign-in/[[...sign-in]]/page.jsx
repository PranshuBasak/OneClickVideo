import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'

export default function Page() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 scrollbar-hide'>
      <div className='flex justify-center items-center h-screen'>
        <SignIn />
      </div>
      <div>
        <Image src={'/login2.jpeg'} alt="Login Image" width={500} height={500}
        className='h-full object-contain overflow-hidden'/>
      </div>
    </div>
  )
}