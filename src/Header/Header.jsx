import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { FiUser, FiSettings } from 'react-icons/fi'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleNavigation = (path) => {
        navigate(path)
        setIsMenuOpen(false)
        window.scrollTo(0, 0)
    }

    const isActive = (path) => {
        if (path === "/guides") {
            return location.pathname.startsWith("/guides")
        }
        return location.pathname === path
    }

    return (
        <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto px-4 py-2">
                <div className="flex justify-between items-center">
                    <div onClick={() => handleNavigation("/")} className="flex items-center cursor-pointer">
                        <img src="/Images/EasyToGuide-Logo.jpeg" alt="EasyToGuide" className="w-20 h-20 rounded-full mr-2" />
                        <span className="text-xl font-bold text-[#d44b1d]">EasyToGuide</span>
                    </div>

                    <nav className="hidden md:flex space-x-6">
                        <div onClick={() => handleNavigation("/")} className={isActive("/") ? "text-[#d44b1d] border-b-2 cursor-pointer" : "text-gray-600 hover:text-[#d44b1d] hover:border-b-2 hover:border-[#ffac90ea] cursor-pointer"}>Home</div>
                        <div onClick={() => handleNavigation("/guides")} className={isActive("/guides") ? "text-[#d44b1d] border-b-2 cursor-pointer" : "text-gray-600 hover:text-[#d44b1d] hover:border-b-2 hover:border-[#ffac90ea] cursor-pointer"}>Guides</div>
                        <div onClick={() => handleNavigation("/about")} className={isActive("/about") ? "text-[#d44b1d] border-b-2 cursor-pointer" : "text-gray-600 hover:text-[#d44b1d] hover:border-b-2 hover:border-[#ffac90ea] cursor-pointer"}>About</div>
                        <div onClick={() => handleNavigation("/contact")} className={isActive("/contact") ? "text-[#d44b1d] border-b-2 cursor-pointer" : "text-gray-600 hover:text-[#d44b1d] hover:border-b-2 hover:border-[#ffac90ea] cursor-pointer"}>Contact</div>
                    </nav>

                    <div className="hidden md:flex items-center space-x-4">
                        <div title="Profile" onClick={() => handleNavigation("/profile")} className={isActive("/profile") ? "text-[#d44b1d] cursor-pointer border-2 rounded-full p-1" : "text-gray-600 hover:text-[#d44b1d] hover:bg-[#ffece6ea] cursor-pointer border-1 rounded-full p-1"}>
                            <FiUser size={20} />
                        </div>
                        <div title="Settings" onClick={() => handleNavigation("/settings")} className={isActive("/settings") ? "text-[#d44b1d] cursor-pointer border-2 rounded-full p-1" : "text-gray-600 hover:text-[#d44b1d] hover:bg-[#ffece6ea] cursor-pointer border-1 rounded-full p-1"}>
                            <FiSettings size={20} />
                        </div>
                    </div>

                    <button 
                        className="md:hidden text-gray-600 focus:outline-none cursor-pointer"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        )}
                        </svg>
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4">
                        <nav className="flex flex-col space-y-3">
                            <div onClick={() => handleNavigation("/")} className={isActive("/") ? "text-[#d44b1d] border-b-2 cursor-pointer py-2" : "text-gray-600 hover:text-[#d44b1d] hover:border-b-2 hover:border-[#ffac90ea] cursor-pointer py-2"}>Home</div>
                            <div onClick={() => handleNavigation("/guides")} className={isActive("/guides") ? "text-[#d44b1d] border-b-2 cursor-pointer py-2" : "text-gray-600 hover:text-[#d44b1d] hover:border-b-2 hover:border-[#ffac90ea] cursor-pointer py-2"}>Guides</div>
                            <div onClick={() => handleNavigation("/about")} className={isActive("/about") ? "text-[#d44b1d] border-b-2 cursor-pointer py-2" : "text-gray-600 hover:text-[#d44b1d] hover:border-b-2 hover:border-[#ffac90ea] cursor-pointer py-2"}>About</div>
                            <div onClick={() => handleNavigation("/contact")} className={isActive("/contact") ? "text-[#d44b1d] border-b-2 cursor-pointer py-2" : "text-gray-600 hover:text-[#d44b1d] hover:border-b-2 hover:border-[#ffac90ea] cursor-pointer py-2"}>Contact</div>
                            <div onClick={() => handleNavigation("/profile")} className={isActive("/profile") ? "text-[#d44b1d] border-b-2 cursor-pointer py-2" : "text-gray-600 hover:text-[#d44b1d] hover:border-b-2 hover:border-[#ffac90ea] cursor-pointer py-2"}>
                                Profile
                            </div>
                            <div onClick={() => handleNavigation("/settings")} className={isActive("/settings") ? "text-[#d44b1d] border-b-2 cursor-pointer py-2" : "text-gray-600 hover:text-[#d44b1d] hover:border-b-2 hover:border-[#ffac90ea] cursor-pointer py-2"}>
                                Settings
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header
