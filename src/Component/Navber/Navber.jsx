import React, { useState } from 'react';
import { GiShoppingCart } from "react-icons/gi";
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom'; 

const Navber = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="flex justify-between items-center px-6 md:px-16 py-6 fixed w-full md:bg-[#121212]  bg-[#121212]">
            <h1 className="text-white text-xl md:text-3xl font-bold">
                ACPFBA
            </h1>

            <div className="flex justify-between items-center gap-4 md:gap-10">

                <ul className="hidden md:flex justify-between items-center gap-10 text-white">
                    <li className="text-lg font-semibold transition-all duration-200 hover:text-[#FE7C45] hover:underline hover:underline-offset-4">
                        <Link to="/inicio">Inicio</Link>
                    </li>
                    <li className="text-lg font-semibold transition-all duration-200 hover:text-[#FE7C45] hover:underline hover:underline-offset-4">
                        <Link to="/contacto">Contacto</Link>
                    </li>
                    <li className="text-lg font-semibold transition-all duration-200 hover:text-[#FE7C45] hover:underline hover:underline-offset-4">
                        <Link to="/tienda">Tienda</Link>
                    </li>
                    <button className="px-5 py-1 bg-[#fe7c45] text-white text-lg font-semibold hover:scale-105">
                        Login
                    </button>
                </ul>

                <button className="md:hidden text-white text-3xl" onClick={() => setMenuOpen(true)}>
                    <MdMenu />
                </button>
                <GiShoppingCart className='w-[45px] h-[45px] text-white' />
            </div>

            {/* ========== Mobile Menu ========== */}
            <div className={`fixed top-0 right-0 w-64 h-screen bg-[#FE7C45]/90 text-white flex flex-col items-start gap-6 p-6 transform ${menuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-500 md:hidden`}>
                <button className="absolute right-10 top-6 text-4xl mt-10" onClick={() => setMenuOpen(false)}>
                    <IoClose />
                </button>

                <ul className="mt-20 space-y-4">
                    <li><Link to="/inicio" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
                    <li><Link to="/contacto" onClick={() => setMenuOpen(false)}>Contacto</Link></li>
                    <li><Link to="/tienda" onClick={() => setMenuOpen(false)}>Tienda</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navber;