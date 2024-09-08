
"use client"
import { useSession } from "next-auth/react"
import Link from "next/link"

const Navbar = () => {

  const { data: session } = useSession();
  return (
    <>

      <div className="w-full h-24 flex justify-between items-center bg-[#cccccc] sticky top-0 z-10 border-b-2 border-[#a5a5a5] ">
        <img className="ml-1 md:ml-4 p-2 h-16 md:h-20 cursor-pointer" src="logo.png" alt="RoadRestro Logo" />
        <div className="flex rounded-full gap-5 border-[#a5a5a5] border-2 md:p-3 p-2 md:w-2/5 w-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <input type="text" className="border-none bg-transparent outline-none w-full" placeholder="search" />
        </div>

        <div>
          {session?.user ? (
            <img
              src={session.user.image || ''}
              alt="user"
              width={40}
              height={40}
              className="rounded-full mr-8"
            />
          ) : <div>
            <button className="mr-2 border-2 md:p-3 md:px-4 rounded-full md:m-10 border-solid border-[#a5a5a5] text-[#595959] font-extrabold md:block p-2 hover:bg-[#586f7c] hover:text-[#f2f2f2] hover:transition-all hover:duration-[0.3s] overflow-hidden"><span className="text-xs md:text-sm p-2">Register</span></button>
          </div>}
        </div>




      </div>
    </>
  )
}

export default Navbar