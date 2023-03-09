import React from 'react'
import f1_2020 from '../assets/mad-simulator__F1-2020.webp'
import f1_racing from '../assets/mad-simulator__f1-racing-simulation.webp'
import G_prix from '../assets/mad-simulator___grand-prix-3.webp'
import forza from '../assets/mad-simulator__forza-horizon-4.webp'



function Compatibility() {
    return (
        <div className='bg-neutral-900 w-full' id='compatibility'>
            <div className="bar_end flex justify-end h-1 w-screen ">
                <div className="bar flex  w-24 h-1 bg-mustard mr-12 md:mr-32 mt-12 md:mt-0"></div>
            </div>
            <div className=' flex justify-end'>
                <div className="compatibility uppercase flex mr-12 md:mr-32 mt-20 md:mt-12  mb-20 text-4xl font-bold text-white ">
                    compatibility
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-20 justify-items-center'>
                <div
                    data-aos='slide-right'
                    data-aos-delay='1000'
                    data-aos-offset='350'                >
                    <img src={f1_2020} alt="F1-Racing Simulator" className='w-72 h-96 pb-6' />
                    <span className='font-semibold text-white '>F1 - Racing Simulation</span>
                </div>
                <div
                    data-aos='slide-left'
                    data-aos-delay='1000'
                    data-aos-duration='1000'
                    data-aos-offset='350'                >
                    <img src={f1_racing} alt="F1-2020" className='w-72 h-96 pb-6' />
                    <span className='font-semibold text-white '>F1 - 2020</span>
                </div>
                <div id='trigger-1'
                    data-aos='slide-right'
                    data-aos-delay='1200'
                    data-aos-duration='1000'
                    data-aos-offset='350'                >
                    <img src={G_prix} alt="Grand Prix 3" className='w-72 h-96 pb-6' />
                    <span className='font-semibold text-white '>Grand Prix 3</span>
                </div>
                <div id='trigger-2'
                    data-aos='slide-left'
                    data-aos-delay='1200'
                    data-aos-duration='1000'
                    data-aos-offset='350'                >
                    <img src={forza} alt="Forza Horizon 4" className='w-72 h-96 pb-6' />
                    <span className='font-semibold text-white '>Forza  Horizon 4</span>
                </div>
            </div>
        </div>

    )
}

export default Compatibility