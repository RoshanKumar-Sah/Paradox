import Image from 'next/image'
import { Inter } from 'next/font/google'
import Original from "@/assets/original.jpg"

const inter = Inter({ subsets: ['latin'] })

export default function Banner1(){
    return(
        <section className='relative mt-8 h-64' >
        <Image src={Original} alt='original' className='w-full h-full object-cover opacity-40' />
        <h2 className={`absolute top-0 text-4xl text-center w-full font-bold mt-10 ${inter.className}`}>Building the future</h2>
      </section>
    )
}