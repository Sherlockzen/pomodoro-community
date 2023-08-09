'use client'
import { useSession } from 'next-auth/react'

const Page = () => {
  const { data: session } = useSession();
  return (
    <div className=' min-h-screen min-w-screen flex items-center place-content-center'>
      <div>You are logged in as {session?.user?.name}</div>
    </div>
  )
}
export default Page;