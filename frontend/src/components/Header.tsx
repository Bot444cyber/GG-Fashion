'use client';

import React from 'react';
import { Search, Heart, User, ShoppingBag, Menu } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Header: React.FC = () => {
    const router = useRouter();

    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            router.push('/products');
        }
    };

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
            {/* Upper Header: Logo, Search, Icons */}
            <div className="container mx-auto px-4 py-4 md:py-5">
                <div className="flex items-center justify-between gap-4 md:gap-8">

                    {/* Logo Section */}
                    <Link href="/" className="flex-shrink-0 flex items-center gap-2 group">
                        <div className="border-2 border-gray-800 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center font-serif font-bold text-lg md:text-xl text-gray-800 group-hover:bg-gray-800 group-hover:text-white transition-colors">
                            GG
                        </div>
                        <div className="hidden md:block">
                            <h1 className="text-xl md:text-2xl font-bold font-sans tracking-tight leading-none text-gray-900">GG Fashion</h1>
                            <p className="text-[10px] text-gray-500 tracking-wide">!!Your Fashion, Our Passion!!</p>
                        </div>
                    </Link>

                    {/* Search Bar - Hidden on small mobile, visible on larger */}
                    <div className="hidden md:flex flex-1 max-w-xl relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            onKeyDown={handleSearch}
                            className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-full leading-5 bg-gray-100 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-1 focus:ring-brand-pink focus:border-brand-pink sm:text-sm transition-all duration-300"
                            placeholder="Search for products, brands and more"
                        />
                    </div>

                    {/* Icons Section */}
                    <div className="flex items-center gap-4 md:gap-6">
                        {/* Mobile Search Icon */}
                        <button onClick={() => router.push('/products')} className="md:hidden text-gray-700 hover:text-brand-pink">
                            <Search className="h-6 w-6" />
                        </button>

                        <button className="text-gray-700 hover:text-brand-pink transition-colors group flex flex-col items-center gap-1">
                            <Heart className="h-6 w-6 group-hover:fill-brand-pink/10" />
                        </button>

                        <button className="text-gray-700 hover:text-brand-pink transition-colors flex flex-col items-center gap-1">
                            <User className="h-6 w-6" />
                        </button>

                        <Link href="/cart" className="text-gray-700 hover:text-brand-pink transition-colors relative flex flex-col items-center gap-1">
                            <ShoppingBag className="h-6 w-6" />
                            <span className="absolute -top-1 -right-1 bg-brand-pink text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                                1
                            </span>
                        </Link>

                        <button className="md:hidden text-gray-700">
                            <Menu className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Navigation Links - Desktop */}
            <nav className="hidden md:block border-t border-gray-100">
                <div className="container mx-auto px-4">
                    <ul className="flex items-center justify-center gap-8 py-3 overflow-x-auto no-scrollbar">
                        {NAV_ITEMS.map((item, index) => (
                            <li key={index} className="flex-shrink-0">
                                <Link
                                    href={item.href}
                                    className={`text-sm font-medium tracking-wide uppercase hover:text-brand-pink transition-colors duration-200 ${item.isHighlight ? 'text-brand-pink font-bold' : 'text-gray-700'}`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
