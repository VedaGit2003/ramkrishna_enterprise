import React, { useState, useEffect } from 'react';
import logo from '../image/logo1.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeNav, setActiveNav] = useState(''); // Track active nav item

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY; // Current scroll position
            const servicesSection = document.getElementById('services'); // Target "Services" section
            const offset = servicesSection.offsetTop; // Top position of "Services"

            if (scrollPosition >= offset * 0.3) {
                setActiveNav('services');
            } else {
                setActiveNav('');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleBurgerClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    };

    const handleNavClick = (navItem) => {
        setActiveNav(navItem);

        // Smooth scroll to section
        const section = document.getElementById(navItem);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false); // Close menu on mobile
    };

    return (
        <div className='w-full px-4 flex flex-1 justify-center '>
            <nav className="fixed top-1 z-50 px-4 py-2 flex justify-between items-center bg-white shadow-md rounded-full">
                <a className="text-3xl font-bold leading-none" href="#">
                    <img src={logo} alt="Logo" height={70} width={70} />
                </a>
                <div className="lg:hidden">
                    <button
                        className="navbar-burger flex items-center text-blue-600 p-3"
                        onClick={handleBurgerClick}
                    >
                        <svg
                            className="block h-6 w-6 fill-current"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <ul
                    className={`${isMenuOpen ? 'block' : 'hidden'
                        } absolute top-16 left-0 w-full bg-white lg:static lg:flex lg:w-auto lg:space-x-6 lg:bg-transparent lg:items-center`}
                >
                    <li>
                        <a
                            className={`block px-4 py-2 text-sm ${activeNav === 'home' ? 'text-blue-600 font-bold' : 'text-gray-400 hover:text-gray-500'
                                } lg:inline-block`}
                            onClick={() => handleNavClick('home')}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            className={`block px-4 py-2 text-sm ${activeNav === 'about' ? 'text-blue-600 font-bold' : 'text-gray-400 hover:text-gray-500'
                                } lg:inline-block`}
                            onClick={() => handleNavClick('about')}
                        >
                            About Us
                        </a>
                    </li>
                    <li>
                        <a
                            className={`block px-4 py-2 text-sm ${activeNav === 'services' ? 'text-blue-600 font-bold' : 'text-gray-400 hover:text-gray-500'
                                } lg:inline-block`}
                            onClick={() => handleNavClick('services')}
                        >
                            Services
                        </a>
                    </li>
                    <li>
                        <a
                            className={`block px-4 py-2 text-sm ${activeNav === 'gallery' ? 'text-blue-600 font-bold' : 'text-gray-400 hover:text-gray-500'
                                } lg:inline-block`}
                            onClick={() => handleNavClick('gallery')}
                        >
                            Gallery
                        </a>
                    </li>
                    <li>
                        <a
                            className={`block px-4 py-2 text-sm ${activeNav === 'contact' ? 'text-blue-600 font-bold' : 'text-gray-400 hover:text-gray-500'
                                } lg:inline-block`}
                            onClick={() => handleNavClick('contact')}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
                <div className="hidden lg:flex lg:items-center">
                    <a
                        className="ml-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-xl transition duration-200"
                        href="#"
                    >
                        Sign In
                    </a>
                    <a
                        className="ml-3 py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
                        href="#"
                    >
                        Sign Up
                    </a>
                </div>
            </nav>

            {isMenuOpen && (
                <div className="navbar-menu fixed inset-0 z-50 flex flex-col bg-white">
                    <div
                        className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
                        onClick={handleCloseMenu}
                    />
                    <nav className="relative z-10 w-full h-full max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                        <div className="flex items-center justify-between mb-8">
                            <a className="text-3xl font-bold leading-none" href="#">
                                <img src={logo} alt="Logo" height={40} width={40} />
                            </a>
                            <button
                                className="text-gray-600 focus:outline-none"
                                onClick={handleCloseMenu}
                            >
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    className={`text-sm ${activeNav === 'home' ? 'text-blue-600 font-bold' : 'text-gray-400 hover:text-gray-500'
                                        }`}
                                    onClick={() => handleNavClick('home')}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    className={`text-sm ${activeNav === 'about' ? 'text-blue-600 font-bold' : 'text-gray-400 hover:text-gray-500'
                                        }`}
                                    onClick={() => handleNavClick('about')}
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    className={`text-sm ${activeNav === 'services' ? 'text-blue-600 font-bold' : 'text-gray-400 hover:text-gray-500'
                                        }`}
                                    onClick={() => handleNavClick('services')}
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    className={`text-sm ${activeNav === 'gallery' ? 'text-blue-600 font-bold' : 'text-gray-400 hover:text-gray-500'
                                        }`}
                                    onClick={() => handleNavClick('gallery')}
                                >
                                    Gallery
                                </a>
                            </li>
                            <li>
                                <a
                                    className={`text-sm ${activeNav === 'contact' ? 'text-blue-600 font-bold' : 'text-gray-400 hover:text-gray-500'
                                        }`}
                                    onClick={() => handleNavClick('contact')}
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </div>
    );
};

export default Navbar;
