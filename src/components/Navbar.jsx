import React from 'react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 md:px-16 md:py-8 font-sans text-white mix-blend-difference">
            {/* Left Side Links */}
            <ul className="flex items-center space-x-12">
                {['HOME', 'ABOUT'].map((item) => (
                    <li key={item} className="relative group overflow-hidden cursor-pointer">
                        <a href={`#${item.toLowerCase()}`} className="block">
                            <span className="text-lg md:text-xl font-thin tracking-widest group-hover:-translate-y-full block transition-transform duration-300">
                                {item}
                            </span>
                            <span className="absolute top-0 left-0 text-lg md:text-xl font-thin tracking-widest translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-gray-400">
                                {item}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>

            {/* Right Side Links */}
            <ul className="flex items-center space-x-12">
                {['PROJECTS', 'CONTACT'].map((item) => (
                    <li key={item} className="relative group overflow-hidden cursor-pointer">
                        <a href={`#${item.toLowerCase()}`} className="block">
                            <span className="text-lg md:text-xl font-thin tracking-widest group-hover:-translate-y-full block transition-transform duration-300">
                                {item}
                            </span>
                            <span className="absolute top-0 left-0 text-lg md:text-xl font-thin tracking-widest translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-gray-400">
                                {item}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>

            {/* Mobile Menu Icon (Placeholder) - Only visible on small screens if logic added, but for now standardizing layout */}
            <div className="md:hidden absolute right-8 top-6">
                <button className="text-xl font-thin tracking-widest">MENU</button>
            </div>
        </nav>
    );
};

export default Navbar;
