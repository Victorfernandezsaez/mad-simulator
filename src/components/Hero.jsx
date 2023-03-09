import React from 'react'
// import hero_img from '../assets/SetUp__mad-simulator.jpg'
function Hero() {

    return (
        <div className='hero flex w-full h-screen bg-gradient-to-b from-neutral-100 to-neutral-700 '>
            <div className='flex justify-center w-screen h-screen ' >
                <div className="hero h-screen bg-no-repeat bg-contain bg-center " style={{ backgroundImage: `url("src/assets/mad__simulator-set-up-back.jpg")` }}></div>
            </div>
        </div>


    )
}

export default Hero