import React from 'react'
import logo from "../assets/logo.png"
import { navItems } from '../constants'

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 py-3 bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative lg:text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className='h-10 w-10 mr-2 rounded-full object-cover' src={logo} alt="" />
                        <span className='text-xl tracking-tight'> FastForwardCoders</span>
                    </div>
                    <ul className="flex ml-14 space-x-12">
                        {navItems.map((item, index) => (<li key={index}>
                            <a href={item.href}>{item.label}</a>

                        </li>
                        ))}
                    </ul>

                    <div className="flex justify-center space-x-12 items-center">
                        <a href="" className='bg-gradient-to-r from-orange-400 to-orange-800 py-2 px-3 border rounded-md'>Login</a>
                        <a href="" className="bg-gradient-to-r from-blue-400 to-blue-800 py-2 px-3 rounded-md">Login As Administrator</a>
                    </div>
                </div>
            </div>



        </nav>
    )
}

export default Navbar