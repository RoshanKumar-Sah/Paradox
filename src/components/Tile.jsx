import Image from 'next/image'
import { Inter } from 'next/font/google'
import Tile1 from '@/assets/work culture.png'
import Tile3 from '@/assets/1542298796.jpg'
import Tile4 from '@/assets/earth.png'

const inter = Inter({ subsets: ['latin'] })

export default function Tile() {
  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 gap-16 px-3 sm:px-20 pt-10 pb-20'>
      <div className='flex justify-center w-full'><Image src={Tile1} className='w-full h-fit rounded-lg shadow-md' /></div>
      <div><h2 className={`text-6xl md:text-8xl text-justify ${inter.className} font-bold`}>Features<br /><span className=' text-[#EE8156]'>Ought</span> to<br />Partake</h2></div>
      <div className='flex justify-center w-full'><Image src={Tile3} className='w-full h-fit rounded-lg shadow-md' /></div>
      <div className='flex justify-center w-full'><Image src={Tile4} className='w-full h-fit rounded-lg shadow-md' /></div>
    </section>
  )
}