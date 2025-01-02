import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='text-2xl text-white font-bold flex w-screen h-screen items-center flex-col justify-center'>
      <div className='bg-red-500 p-10'><h2>Not Found Customized</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
      </div>
    </div>
  )
}