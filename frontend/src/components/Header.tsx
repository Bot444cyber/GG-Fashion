'use client';

import React, { useState } from 'react';
import { Search, Heart, User, ShoppingBag, Menu } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Navbar, Container, Nav, Offcanvas, Form, InputGroup } from 'react-bootstrap';

const Header: React.FC = () => {
    const router = useRouter();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            router.push('/products');
            handleClose();
        }
    };

    return (
        <header className="sticky-top bg-white border-bottom shadow-sm">
            <Navbar expand="md" className="py-3" bg="white">
                <Container>
                    {/* Logo Section */}
                    <Link href="/" className="navbar-brand d-flex align-items-center gap-2 group text-dark p-0">
                        <div
                            className="border border-2 border-dark rounded-circle d-flex align-items-center justify-content-center fw-bold fs-5 text-dark flex-shrink-0"
                            style={{ width: '45px', height: '45px' }}
                        >
                            GG
                        </div>
                        <div className="d-none d-sm-block">
                            <h1 className="h5 fw-bold mb-0 font-sans tracking-tight text-dark lh-1">GG Fashion</h1>
                            <p className="small text-muted mb-0" style={{ fontSize: '10px', letterSpacing: '1px' }}>!!Your Fashion, Our Passion!!</p>
                        </div>
                    </Link>

                    {/* Mobile Toggle & Icons */}
                    <div className="d-flex align-items-center gap-3 order-md-3">
                        {/* Mobile Search Icon */}
                        <button onClick={() => router.push('/products')} className="btn btn-link text-dark p-0 d-md-none border-0">
                            <Search size={24} />
                        </button>

                        <button className="btn btn-link text-dark p-0 border-0 d-none d-sm-block">
                            <Heart size={24} />
                        </button>

                        <button className="btn btn-link text-dark p-0 border-0 d-none d-sm-block">
                            <User size={24} />
                        </button>

                        <Link href="/cart" className="btn btn-link text-dark p-0 border-0 position-relative">
                            <ShoppingBag size={24} />
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-brand-pink text-white" style={{ fontSize: '10px', padding: '0.25em 0.4em' }}>
                                1
                            </span>
                        </Link>

                        <button className="btn btn-link text-dark p-0 d-md-none border-0" onClick={handleShow}>
                            <Menu size={24} />
                        </button>
                    </div>

                    {/* Search Bar - Desktop */}
                    <div className="d-none d-md-block flex-grow-1 mx-4 order-md-2" style={{ maxWidth: '600px' }}>
                        <div className="position-relative">
                            <Form.Control
                                type="text"
                                onKeyDown={handleSearch}
                                className="rounded-pill bg-light border-secondary-subtle ps-5 py-2"
                                placeholder="Search for products, brands and more"
                                style={{ fontSize: '0.9rem' }}
                            />
                            <div className="position-absolute top-50 start-0 translate-middle-y ps-3 pointer-events-none">
                                <Search className="text-muted" size={18} />
                            </div>
                        </div>
                    </div>
                </Container>
            </Navbar>

            {/* Desktop Navigation */}
            <div className="d-none d-md-block border-top bg-white">
                <Container>
                    <Nav className="justify-content-center py-2 flex-nowrap overflow-auto no-scrollbar gap-4">
                        {NAV_ITEMS.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className={`nav-link text-uppercase fw-medium px-0 ${item.isHighlight ? 'text-brand-pink fw-bold' : 'text-secondary'} hover-text-brand-pink transition-colors`}
                                style={{ fontSize: '0.9rem', letterSpacing: '0.5px' }}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </Nav>
                </Container>
            </div>

            {/* Mobile Offcanvas Menu */}
            <Offcanvas show={show} onHide={handleClose} placement="start" className="w-75">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="fw-bold font-serif">GG Fashion</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="mb-4">
                        <Form.Control
                            type="text"
                            onKeyDown={handleSearch}
                            className="bg-light"
                            placeholder="Search..."
                        />
                    </div>
                    <Nav className="flex-column gap-3">
                        {NAV_ITEMS.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                onClick={handleClose}
                                className={`nav-link text-uppercase fw-medium border-bottom pb-2 ${item.isHighlight ? 'text-brand-pink fw-bold' : 'text-dark'}`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </Nav>
                    <div className="mt-4 border-top pt-4 d-flex gap-4 justify-content-center">
                        <button className="btn btn-link text-dark p-0 border-0 d-flex flex-column align-items-center gap-1">
                            <Heart size={24} />
                            <span className="small">Wishlist</span>
                        </button>
                        <button className="btn btn-link text-dark p-0 border-0 d-flex flex-column align-items-center gap-1">
                            <User size={24} />
                            <span className="small">Profile</span>
                        </button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </header>
    );
};

export default Header;
