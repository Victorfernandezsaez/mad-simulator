import React from 'react'
import ReactPlayer from 'react-player/youtube'


function Video() {
    return (
        <div className='flex justify-center w-full py-20 bg-neutral-900 '>
            <ReactPlayer
                className='react-player'
                url="https://www.youtube.com/watch?v=OwXkXspDz30"
                controls={true}
                width={'83.3333%'}
                height={'480px'}
            />
        </div>
    )
}

export default Video