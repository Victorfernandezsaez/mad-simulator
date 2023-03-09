import React from 'react'

function Adaptable() {
    return (
        <div className="info flex flex-col  bg-gradient-to-b from-neutral-900 to-neutral-700  w-full">
            <div className="bar w-24 h-1 bg-mustard ml-12 md:ml-32 mt-12"></div>
            <div className="info_title grid content-center pl-12 md:pl-32 pt-10 ">
                <h2 className=' uppercase text-4xl font-bold text-white pb-10'>adaptable</h2>
                <p className=' w-3/4 text-center md:text-left'>The design ensures a strong and rigid cockpit while allowing maximum adjustability, allowing you to position the steering wheel and pedals to best suit your needs. The steering wheel mount is solid enough for professional direct-drive wheels, and the rigid pedal pad design guarantees you an authentic racing experience.</p>
            </div>
        </div>
    )
}

export default Adaptable