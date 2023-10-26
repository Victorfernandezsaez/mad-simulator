import React, { useContext, useState } from 'react'
import { ShopContext } from './context/ShopContext'
import speed from '../assets/speedometer.png'
import cart_black from '../assets/cart-black.png'

function Features() {
    const { addToCart, cartItems } = useContext(ShopContext)

    console.log(cartItems)

    const handleAddToCart = (itemId) => {
        // Pass a valid item ID to addToCart, for example, 1
        addToCart(itemId);
    };

    const features = [
        {
            id: 1,
            content: 'THE BEST DRIVING EXPERIENCE IN A COMPACT SIMULATOR'
        },
        {
            id: 2,
            content: 'THE BEST DRIVING EXPERIENCE IN A COMPACT SIMULATOR'
        },
        {
            id: 3,
            content: 'THE BEST DRIVING EXPERIENCE IN A COMPACT SIMULATOR'
        },
        {
            id: 4,
            content: 'THE BEST DRIVING EXPERIENCE IN A COMPACT SIMULATOR'
        }, {
            id: 5,
            content: 'THE BEST DRIVING EXPERIENCE IN A COMPACT SIMULATOR'
        }, {
            id: 6,
            content: 'THE BEST DRIVING EXPERIENCE IN A COMPACT SIMULATOR'
        }
    ]

    return (
        <div className='grid flex-col pt-8 pb-8 bg-gradient-to-b from-neutral-700 to-neutral-900 w-full justify-items-center' id='features'
            data-aos='fade-down'
            data-aos-delay='1000'
            data-aos-offset='350'
        >
            <div className="lg:flex w-full md:w-10/12 bg-features shadow-xl ">
                <div className='pl-12 py-12 md:py-24'>
                    <h2 className="text-5xl font-bold text-mustard">FEATURES</h2>
                </div>

                <div className="card-body md:py-24  text-center">
                    <div className=' flex-col grid lg:grid-cols-2  md:gap-y-32 gap-y-16 gap-x-12 justify-center'>
                        {features.map((features) =>
                            <ul className='flex ' key={features.id}>
                                <li className='flex lowercase font-lg text-white pl-10'>
                                    <img className='-translate-y-6 pr-4 md:pr-0' src={speed} alt="speed-logo" />
                                    {features.content}
                                </li>
                            </ul>
                        )}
                    </div>

                </div>
            </div>

            <div className="grid w-full justify-items-center ">
                <button type='button'
                    className='flex py-5 items-center  justify-center space-x-4 md:w-10/12 w-full bg-mustard hover:bg-mustard_hover'
                    onClick={() => handleAddToCart(product.id)}
                >


                    <span className=" flex text-black text-3xl md:text-4xl font-extrabold ">BUY NOW
                    </span>
                    <img src={cart_black} alt="cart" style={{ with: '40px', height: '40px' }} />

                </button>
            </div>

        </div>

    )
}

export default Features