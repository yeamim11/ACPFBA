import React from 'react'
import { GiShoppingCart } from "react-icons/gi";


const Navber = () => {
    return (
        <nav className="z-10 flex justify-between items-center px-6 md:px-16 py-6 fixed w-full md:bg-[#121212]  bg-[#121212]  ">
            <h1 className=" text-white text-xl md:text-3xl font-bold">
                ACPFBA
            </h1>
            {/* ====================================================== */}
            <div className="flex justify-between items-center gap-4 md:gap-10">
                {/* <ul className="hidden md:flex justify-between items-center gap-10 text-white">
                <li className='text-lg font-semibold hover:underline-offset-4 hover:underline'><a href="#">Inicio</a></li>
                <li className='text-lg font-semibold'><a href="#"></a>Contacto</li>
                <li className='text-lg font-semibold'><a href="#"></a>Tienda</li>
                <button className='w-[99px] h-[31px] bg-[#fe7c45] text-lg font-semibold'>Login</button>
            </ul> */}



                <ul className="hidden md:flex justify-between items-center gap-10 text-white">
                    {['Inicio', 'Contacto', 'Tienda'].map((label) => (
                        <li key={label} className="text-lg font-semibold relative group cursor-pointer">
                            <a href="#" className="transition-colors duration-300 group-hover:text-[#FE7C45]">
                                {label}
                                <span className="block absolute left-0 -bottom-1 h-0.5 w-0 bg-[#FE7C45] transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                    ))}
                    <button className="w-[99px] h-[31px] bg-[#FE7C45] text-lg font-semibold rounded-md hover:opacity-90 transition">
                        Login
                    </button>
                </ul>





                <GiShoppingCart className='w-[45px] h-[45px] text-white ' />
            </div>
        </nav>
    )
}

export default Navber