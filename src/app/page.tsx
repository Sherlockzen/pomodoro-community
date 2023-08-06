import Image from 'next/image'
import SignInButton from './components/SignInButton'
import { ProviderSession } from './components/ProviderSession'

export default function Home() {
  return (
    <ProviderSession>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className=' flex items-center md:max-w-5xl'>
          <div className=' grid gap-5'>
            <h1 className=' text-5xl font-extrabold '>How about a place to focus with your <span className=' text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600'>friends</span>?</h1>
            <p className=' text-gray-600'>This app provides to you a personal room with tools to going pomodoro technique in group</p>
            <SignInButton />
          </div>
          <Image src={'/pomodoro-technique-1.png'} alt='pomo image' width={520} height={520} />
        </div>
      </main>
    </ProviderSession>
  )
}
