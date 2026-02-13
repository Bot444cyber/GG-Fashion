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
        <header className="sticky-top bg-white border-bottom shadow-sm">
            {/* Upper Header: Logo, Search, Icons */}
            <div className="container py-3">
                <div className="d-flex align-items-center justify-content-between gap-3">

                    {/* Logo Section */}
                    <Link href="/" className="text-decoration-none text-dark d-flex align-items-center gap-2 group">
                        <div
                            className="border border-2 border-dark rounded-circle d-flex align-items-center justify-content-center fw-bold fs-5 text-dark"
                            style={{ width: '45px', height: '45px' }}
                        >
                            GG
                        </div>
                        <div className="d-none d-md-block">
                            <h1 className="h5 fw-bold mb-0 font-sans tracking-tight text-dark">GG Fashion</h1>
                            <p className="small text-muted mb-0" style={{ fontSize: '10px', letterSpacing: '1px' }}>!!Your Fashion, Our Passion!!</p>
                        </div>
                    </Link>

                    {/* Search Bar - Hidden on small mobile, visible on larger */}
                    <div className="d-none d-md-block flex-grow-1 position-relative mx-4" style={{ maxWidth: '600px' }}>
                        <div className="position-absolute top-50 start-0 translate-middle-y ps-3 pointer-events-none">
                            <Search className="text-muted" size={18} />
                        </div>
                        <input
                            type="text"
                            onKeyDown={handleSearch}
                            className="form-control rounded-pill bg-light border-secondary-subtle ps-5 py-2"
                            placeholder="Search for products, brands and more"
                            style={{ fontSize: '0.9rem' }}
                        />
                    </div>

                    {/* Icons Section */}
                    <div className="d-flex align-items-center gap-3 gap-md-4">
                        {/* Mobile Search Icon */}
                        <button onClick={() => router.push('/products')} className="btn btn-link text-dark p-0 d-md-none border-0">
                            <Search size={24} />
                        </button>

                        <button className="btn btn-link text-dark p-0 border-0 d-flex flex-col align-items-center">
                            <Heart size={24} />
                        </button>

                        <button className="btn btn-link text-dark p-0 border-0 d-flex flex-col align-items-center">
                            <User size={24} />
                        </button>

                        <Link href="/cart" className="btn btn-link text-dark p-0 border-0 position-relative d-flex flex-col align-items-center">
                            <ShoppingBag size={24} />
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-brand-pink text-white" style={{ fontSize: '10px', padding: '0.25em 0.4em' }}>
                                1
                            </span>
                        </Link>

                        <button className="btn btn-link text-dark p-0 d-md-none border-0">
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Navigation Links - Desktop */}
            <nav className="d-none d-md-block border-top">
                <div className="container">
                    <ul className="nav justify-content-center py-2 flex-nowrap overflow-auto no-scrollbar gap-4">
                        {NAV_ITEMS.map((item, index) => (
                            <li key={index} className="nav-item">
                                <Link
                                    href={item.href}
                                    className={`nav-link text-uppercase fw-medium px-0 ${item.isHighlight ? 'text-brand-pink fw-bold' : 'text-secondary'} hover-text-brand-pink`}
                                    style={{ fontSize: '0.9rem', letterSpacing: '0.5px' }}
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
