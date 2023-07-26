import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hamburger from 'hamburger-react'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [isOpen, setOpen] = useState(false)

  return (
    <main>
    <header className={` relative bg-[#7E7E7E] text-white ${inter.className} fixed top-0 w-full`}>
    
    <div className=' md:hidden flex justify-end'>
    <Hamburger direction="right" toggled={isOpen} toggle={setOpen} />
    </div>
      <nav className={`flex justify-center`}>
        <ul className={` ${isOpen ? "absolute left-0 top-0 bg-[#7E7E7E] h-screen w-1/2 flex flex-col gap-7 pt-20 pl-6" :"hidden md:flex flex-row justify-between w-2/4"} py-3 `}>
          <li>Home</li>
          <li>Features</li>
          <li>Download</li>
          <li>Career</li>
          <li>Pricing</li>
        </ul>
      </nav>
      
    </header>
    </main>
  )
}
