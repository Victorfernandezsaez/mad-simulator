import React from 'react'
import gitHub from '../assets/github.png'
import youtube from '../assets/youtube.png'
import facebook from '../assets/facebook.png'

function Footer() {
    return (
        <div className='flex  flex-col justify-center py-20 bg-gradient-to-b from-neutral-700 to-neutral-300 w-full'>
            <div className="flex w-3/4 h-px bg-mustard ml-12 md:ml-32"></div>
            <div className=' grid grid-cols-6 md:flex md:flex-col '>
                <div className='grid col-start-2 col-end-3 md:flex md:flex-row  md:justify-center md:space-x-24 text-black md:text-mustard font-bold mt-6 md:my-12'>
                    <div className='uppercase'>contact us</div>
                    <div className='uppercase'>customer support</div>
                    <div className='uppercase'>faq</div>
                    <div className='uppercase'>instruction videos</div>
                </div>
                <div className='md:flex grid col-start-4 col-end-6 md:flex-row justify-items-end md:justify-center md:space-x-24 text-black font-bold mt-6 md:my-12'>
                    <div className='uppercase text-xs md:text-lg text-end'>mad-simulator © 2023   </div>
                    <div className='capitalize text-xs md:text-lg'>Privacy Policy</div>
                    <div className=''> <img src={gitHub} alt="gitHub" /> </div>
                    <div className=''> <img src={facebook} alt="facebook" /> </div>
                    <div className=''> <img src={youtube} alt="youtube" /> </div>
                </div>
            </div>
        </div>
    )
}

export default Footer