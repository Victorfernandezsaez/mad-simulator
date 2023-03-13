import React from 'react'
import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
        <div className="bg-indigo-900 relative overflow-hidden h-screen">
            <img src="src/assets/error.jpg" className="absolute h-full w-full object-cover opacity-50	" />
            <div className="inset-0 bg-black opacity-25 absolute">
            </div>
            <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
                <div className="w-full font-mono flex flex-col items-center relative z-10">
                    <h1 className="font-extrabold text-5xl text-center text-white leading-tight mt-4">
                        Not so fast</h1>
                    <Link to='/'
                        className='btn btn-error font-extrabold text-3xl text-center text-white leading-tight '>Go Home</Link>
                    <p className="font-extrabold text-8xl my-44 text-white animate-bounce">
                        404
                    </p>
                </div>
            </div>
        </div>


    )
}
