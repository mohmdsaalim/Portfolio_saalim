import React from 'react';
import { Linkedin, Instagram, Github } from 'lucide-react';

const Navbar = () => {
    const socialLinks = [
        { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/muhammed-saalim-k-m-5714a2367/' },
        { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/mohmd.saalim/' },
        { name: 'GitHub', icon: Github, url: 'https://github.com/mohmdsaalim' }
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 md:px-16 md:py-8 font-sans text-white mix-blend-difference">
            {/* Left Side - All Navigation Links */}
            <ul className="flex items-center space-x-8 md:space-x-12">
                {['HOME', 'ABOUT', 'PROJECTS', 'CONTACT'].map((item) => (
                    <li key={item}>
                        <a
                            href={`#${item.toLowerCase()}`}
                            className="text-sm md:text-lg font-thin tracking-widest hover:text-gray-300 transition-colors duration-200"
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Right Side - Social Media Icons */}
            <ul className="flex items-center space-x-6">
                {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                        <li key={social.name}>
                            <a
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block hover:text-gray-290 transition-colors duration-200"
                                aria-label={social.name}
                            >
                                <Icon
                                    className="w-5 h-5 md:w-6 md:h-6"
                                    strokeWidth={1.5}
                                />
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navbar;
