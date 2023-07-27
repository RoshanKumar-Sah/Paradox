import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Banner2() {
    return (
        <section className={`px-3 sm:px-20 pb-20 ${inter.className} `}>

            <div className='bg-nature bg-cover bg-no-repeat flex justify-center rounded-md px-3 pb-56'>
                <div className={`sm:px-28 pt-10 pb-20  mt-20 mb-96 w-fit flex flex-col items-center ${inter.className} bg-white/50 rounded-lg `}>
                    <h2 className='text-2xl text-center font-bold'>Every inspiration from nature</h2>
                    <p className='text-center mt-8 font-semibold'>Get started using our services with a 30-day free trial</p>
                    <div className='mt-20 bg-black text-white px-8 py-2 rounded-md'>Try it now</div>
                </div>
            </div>
        </section>
    )
}