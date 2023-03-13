import React from 'react'
import cart from '../assets/cart.png'
import logo from '../assets/momo__mad-symulator - copia.jpg'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

function Navbar() {
    return (
        <div className="navbar py-8  bg-black h-28 w-full">
            <div className="navbar-start">
                <Link to='/' ><img width="112px" height="112px" src={logo} alt='logo' /></Link>
            </div>
            <div className=" hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-F1 font-bold text-white text-md lg:space-x-18 uppercase  ">
                    <li><Link>Products</Link></li>
                    <li><HashLink smooth to='/#features'>Features</HashLink></li>
                    <li><HashLink smooth to='/#info'>More-Info</HashLink></li>
                    <li><HashLink to='/#compatibility'>Compatibility</HashLink></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>

                </ul>
            </div>
            <div className="navbar-end px-8">
                <div className=" dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className=" indicator">
                            <img src={cart} alt='cart' />
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </label>
                    <div tabIndex={0} className="mt-3 card card-compact dropdown-content translate-x-24 md:translate-x-10 w-52 bg-base-100 shadow">
                        <div className="card-body">
                            <span className="font-bold text-lg text-white">8 Items</span>
                            <span className=" text-mustard">Subtotal: $999</span>
                            <div className="card-actions">
                                <Link to='/cart'>
                                    <button className="btn bg-yellow btn-block text-black font-bold hover:bg-mustard">
                                        View cart
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-2 p-2 shadow text-black bg-gray-300 font-semibold rounded-box w-30 ">
                    <li><Link>Products</Link></li>
                    <li><HashLink smooth to='/#features'>Features</HashLink></li>
                    <li><HashLink smooth to='/#info'>More-Info</HashLink></li>
                    <li><HashLink to='/#compatibility'>Compatibility</HashLink></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
        </div>)
}

export default Navbar