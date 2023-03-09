import React from 'react'
import simulator_back from '../assets/mad__simulator-set-up-back.jpg'
const infos = [
    {
        id: 1,
        info: 'EASY DISASSEMBLY IN TO PIECES FOR A MORE CONVENIENT STORAGE'
    },
    {
        id: 2,
        info: 'EASY DISASSEMBLY IN TO PIECES FOR A MORE CONVENIENT STORAGE'
    }, {
        id: 3,
        info: 'EASY DISASSEMBLY IN TO PIECES FOR A MORE CONVENIENT STORAGE'
    }
]
function Info() {
    return (
        <div className='info flex flex-col  bg-neutral-900 w-screen' id='info'
            data-aos='slide-right'
            data-aos-delay='500'
            data-aos-offset='350'

        >
            <div className="w-24 h-1 bg-mustard ml-12 md:ml-32 mt-12"></div>
            <div className="info_title grid content-center pl-12 md:pl-32 py-10 ">
                <h2 className='uppercase font-F1 text-4xl font-bold text-white'>more infos</h2>
            </div>
            <div className="info_content flex-col md:flex md:flex-row">
                <div className="info_list flex-1 ">
                    {infos.map((infos) =>
                        <ul className='mb-12 pl-12 md:pl-32 lowercase text-white font-lg ' key={infos.id}>
                            <li>{infos.info}</li>
                        </ul>
                    )}
                </div>
                <div className="info_img  flex-1  md:-translate-y-24">
                    <img src={simulator_back} alt="simulator back" />
                </div>
            </div>
        </div>
    )
}

export default Info