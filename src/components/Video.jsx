import ReactPlayer from 'react-player/youtube'
import { useEffect, useState } from 'react'

export default function Video() {

    const [player, setPlayer] = useState(false)

    useEffect(() => {
        setPlayer(true)
    }, [])

    return (
        <section className='w-full flex justify-center md:p-4'>
            <div className='player-wrapper w-full  border-2'>
                {
                    player && <ReactPlayer className='react-player' url='https://www.youtube.com/watch?v=wS_qbDztgVY' width="100%" height="100%" muted playing loop controls />
                }

            </div>
        </section>
    )
}