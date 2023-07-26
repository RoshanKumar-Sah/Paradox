import Image from 'next/image'
import { Inter } from 'next/font/google'


import Video from '@/components/Video'
import Banner1 from '@/components/Banner1'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {







  return (
    <main>
      <Video />
      <Banner1 />


    </main>
  )
}
